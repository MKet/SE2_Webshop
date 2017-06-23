using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;
using WebShopLibrary.Entities;

namespace WebShopLibrary.Repositories
{
    class MSSQLUserRepository : IUserRepositoy
    {
        private string ConnectionString;

        public MSSQLUserRepository(string connectionString)
        {
            ConnectionString = connectionString;
        }

        public User Authenthicate(string username, string password)
        {
            using (var connection = new SqlConnection(ConnectionString))
            using (var command = new SqlCommand())
            {
                command.Connection = connection;
                command.CommandText = @"Select *  
                                        FROM users 
                                        where username = @user and password = @password";

                command.Parameters.AddWithValue("@user", username);
                command.Parameters.AddWithValue("@password", password);

                connection.Open();
                using (SqlDataReader reader = command.ExecuteReader())
                    if (reader.Read())
                    {
                        User user = Convert(reader);
                        // check credential for case sensitivity
                        if (user.username == username && password == reader["password"].ToString().Trim())
                            return user;
                    }
            }
            return null;
        }

        public User GetByName(string username)
        {
            using (var connection = new SqlConnection(ConnectionString))
            using (var command = new SqlCommand())
            {
                command.Connection = connection;
                command.CommandText = @"Select *  
                                        FROM users 
                                        where username = @user";

                command.Parameters.AddWithValue("@user", username);

                connection.Open();
                using (SqlDataReader reader = command.ExecuteReader())
                    if (reader.Read())
                    {
                        return Convert(reader);
                    }
            }
            return null;
        }

        public User GetByMail(string mail)
        {
            using (var connection = new SqlConnection(ConnectionString))
            using (var command = new SqlCommand())
            {
                command.Connection = connection;
                command.CommandText = @"Select *  
                                        FROM users 
                                        where email = @mail";

                command.Parameters.AddWithValue("@mail", mail);

                connection.Open();
                using (SqlDataReader reader = command.ExecuteReader())
                    if (reader.Read())
                    {
                        return Convert(reader);
                    }
            }
            return null;
        }

        public int Insert(User user, string password)
        {
            using (var connection = new SqlConnection(ConnectionString))
            using (var command = new SqlCommand())
            {
                command.Connection = connection;
                command.CommandText = @"INSERT INTO [dbo].[Users]
                                       ([Username]
                                       ,[email]
                                       ,[password]
                                       ,[isAdmin])
                                 VALUES
                                       (@username
                                       ,@email
                                       ,@password
                                       ,@admin)";

                command.Parameters.AddWithValue("@username", user.username);
                command.Parameters.AddWithValue("@email", user.email);
                command.Parameters.AddWithValue("@password", password);
                command.Parameters.AddWithValue("@admin", user.isAdmin);

                connection.Open();
                return command.ExecuteNonQuery();
            }
        }

        private User Convert(SqlDataReader reader)
        {
            return new User()
            {
                Id = (int)reader["id"],
                username = reader["Username"].ToString(),
                email = reader["email"].ToString(),
                isAdmin = (bool)reader["isAdmin"]
            };
        }
    }
}
