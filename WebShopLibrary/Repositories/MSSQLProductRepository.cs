using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Text;
using WebShopLibrary.Entities;
using WebShopLibrary.Exceptions;

namespace WebShopLibrary.Repositories
{
    class MSSQLProductRepository : IProductRepository
    {
        private string ConnectionString;

        public MSSQLProductRepository(string connectionString)
        {
            ConnectionString = connectionString;
        }

        public int CountProducts()
        {
            var products = new List<Product>();
            using (var connection = new SqlConnection(ConnectionString))
            using (var command = new SqlCommand())
            {
                command.Connection = connection;
                command.CommandText = @"SELECT count(id) as count
                                    FROM products";

                connection.Open();

                using (SqlDataReader reader = command.ExecuteReader())
                {
                    reader.Read();
                    return (int)reader["count"];
                }
            }
        }

        public int CountProductsInCategory(int category)
        {
            var products = new List<Product>();
            using (var connection = new SqlConnection(ConnectionString))
            using (var command = new SqlCommand())
            {
                command.Connection = connection;
                command.CommandText = @"SELECT count(id) as count
                                    FROM products 
                                    WHERE Category = @category 
                                    ORDER BY ID desc";

                command.Parameters.AddWithValue("@category", category);
                connection.Open();

                using (SqlDataReader reader = command.ExecuteReader())
                {
                    reader.Read();
                    return (int)reader["count"];
                }
            }
        }

        public Product GetProduct(int Id)
        {
            using (var connection = new SqlConnection(ConnectionString))
            using (var command = new SqlCommand())
            {
                command.Connection = connection;
                command.CommandText = @"Select *  
                                        FROM products 
                                        where ID = @ID";

                command.Parameters.AddWithValue("@ID", Id);
                connection.Open();
                using (SqlDataReader reader = command.ExecuteReader())
                    while (reader.Read())
                        return Convert(reader);
            }
            throw new ItemNotFoundException();
        }

        public IReadOnlyCollection<Product> GetProducts(int Skip, int Amount)
        {
            var products = new List<Product>();
            using (var connection = new SqlConnection(ConnectionString))
            using (var command = new SqlCommand())
            {
                command.Connection = connection;
                command.CommandText = @"SELECT *
                                    FROM products 
                                    ORDER BY ID desc
                                    OFFSET (@skip) ROWS FETCH NEXT (@take) ROWS ONLY";
                command.Parameters.AddWithValue("@skip", Skip);
                command.Parameters.AddWithValue("@take", Amount);

                connection.Open();

                using (SqlDataReader reader = command.ExecuteReader())
                    while (reader.Read())
                        products.Add(Convert(reader));
            }
            return products.AsReadOnly();
        }

        public IReadOnlyCollection<Product> GetProducts(int Category, int Skip, int Amount)
        {
            var products = new List<Product>();
            using (var connection = new SqlConnection(ConnectionString))
            using (var command = new SqlCommand())
            {
                command.Connection = connection;
                command.CommandText = @"SELECT *
                                    FROM products 
                                    WHERE Category = @category 
                                    ORDER BY ID desc
                                    OFFSET (@skip) ROWS FETCH NEXT (@take) ROWS ONLY";
                connection.Open();

                command.Parameters.AddWithValue("@skip", Skip);
                command.Parameters.AddWithValue("@take", Amount);
                command.Parameters.AddWithValue("@category", Category);

                using (SqlDataReader reader = command.ExecuteReader())
                    while (reader.Read())
                        products.Add(Convert(reader));
            }
            return products.AsReadOnly();
        }

        public void insert(Product product)
        {
            throw new NotImplementedException();
        }

        private Product Convert(SqlDataReader reader)
        {
            return new Product()
            {
                Id = (int)reader["ID"],
                Name = reader["Name"].ToString(),
                Image = reader["Image"].ToString(),
                Location = reader["Location"].ToString(),
                Author = reader["Author"].ToString(),
                Text = reader["Text"].ToString(),
                Price = (double)reader["Price"],
                Category = (int)reader["Category"],
                Isvisible = (bool)reader["Visible"],
                Discount = reader["code"].ToString()
            };
        }
    }
}
