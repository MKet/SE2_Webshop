using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;
using WebShopLibrary.Entities;

namespace WebShopLibrary.Repositories
{
    class MSSQLCategoryRepository : ICategoryRepository
    {
        private string ConnectionString;

        public MSSQLCategoryRepository(string connectionString)
        {
            ConnectionString = connectionString;
        }

        public IReadOnlyCollection<Category> GetCategories(int Skip, int Amount)
        {
            var categories = new List<Category>();
            using (var connection = new SqlConnection(ConnectionString))
            using (var command = new SqlCommand())
            {
                command.Connection = connection;
                command.CommandText = @"SELECT *
                                    FROM categories 
                                    ORDER BY ID desc
                                    OFFSET (@skip) ROWS FETCH NEXT (@take) ROWS ONLY";
                command.Parameters.AddWithValue("@skip", Skip);
                command.Parameters.AddWithValue("@take", Amount);

                connection.Open();

                using (SqlDataReader reader = command.ExecuteReader())
                    while (reader.Read())
                        categories.Add(Convert(reader));
            }
            return categories.AsReadOnly();
        }

        public IReadOnlyCollection<Category> GetSubCategoriesOf(int Category, int Skip, int Amount)
        {
            var categories = new List<Category>();
            using (var connection = new SqlConnection(ConnectionString))
            using (var command = new SqlCommand())
            {
                command.Connection = connection;
                command.CommandText = @"SELECT *
                                    FROM products 
                                    ORDER BY ID desc
                                    WHERE SubCategoryOf = @Category
                                    OFFSET (@skip) ROWS FETCH NEXT (@take) ROWS ONLY";
                command.Parameters.AddWithValue("@skip", Skip);
                command.Parameters.AddWithValue("@take", Amount);
                command.Parameters.AddWithValue("@Category", Category);
                connection.Open();

                using (SqlDataReader reader = command.ExecuteReader())
                    while (reader.Read())
                        categories.Add(Convert(reader));
            }
            return categories.AsReadOnly();
        }

        public void Insert(Category category)
        {
            throw new NotImplementedException();
        }

        private Category Convert(SqlDataReader reader)
        {
            return new Category()
            {
                Id = (int)reader["ID"],
                SubCategoryOf = (int)reader["SubCategoryOf"],
                Name = reader["Name"].ToString(),
                Text = reader["Text"].ToString(),
            };
        }
    }
}
