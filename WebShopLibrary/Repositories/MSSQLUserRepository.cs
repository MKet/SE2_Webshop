﻿using System;
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
                        if (user.username == username && password == reader["password"].ToString())
                            return user;
                    }
            }
            return null;
        }

        public void Insert(User user, string password)
        {
            throw new NotImplementedException();
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