using System;
using System.Collections.Generic;
using System.Data.SqlClient;
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

        public IReadOnlyCollection<Product> GetProducts(string search, int Skip, int Amount)
        {
            var products = new List<Product>();
            using (var connection = new SqlConnection(ConnectionString))
            using (var command = new SqlCommand())
            {
                command.Connection = connection;
                command.CommandText = @"SELECT *
                                    FROM products 
                                    where Name like '%' + @search + '%'
                                    ORDER BY ID desc
                                    OFFSET (@skip) ROWS FETCH NEXT (@take) ROWS ONLY";
                connection.Open();

                command.Parameters.AddWithValue("@skip", Skip);
                command.Parameters.AddWithValue("@take", Amount);
                command.Parameters.AddWithValue("@search", search);

                using (SqlDataReader reader = command.ExecuteReader())
                    while (reader.Read())
                        products.Add(Convert(reader));
            }
            return products.AsReadOnly();
        }

        public int CountProducts(string search)
        {
            using (var connection = new SqlConnection(ConnectionString))
            using (var command = new SqlCommand())
            {
                command.Connection = connection;
                command.CommandText = @"SELECT count(id) as count
                                    FROM products
                                    where Name like '%' + @search + '%'";

                command.Parameters.AddWithValue("@search", search);
                connection.Open();

                using (SqlDataReader reader = command.ExecuteReader())
                {
                    reader.Read();
                    return (int)reader["count"];
                }
            }
        }

        public IReadOnlyCollection<Product> GetProductsByOrder(int Order)
        {
            var products = new List<Product>();
            using (var connection = new SqlConnection(ConnectionString))
            using (var command = new SqlCommand())
            {
                command.Connection = connection;
                command.CommandText = @"SELECT p.*
                                    FROM products p
                                    join orderline ol
                                    on p.id = ol.product
                                    join orders o
                                    on ol.[order] = o.id 
                                    WHERE o.Id = @order 
                                    ORDER BY DateOrdered desc";
                connection.Open();
                
                command.Parameters.AddWithValue("@order", Order);

                using (SqlDataReader reader = command.ExecuteReader())
                    while (reader.Read())
                        products.Add(Convert(reader));
            }
            return products.AsReadOnly();
        }

        public IReadOnlyCollection<Review> GetReviews(int product)
        {
            var reviews = new List<Review>();
            using (var connection = new SqlConnection(ConnectionString))
            using (var command = new SqlCommand())
            {
                command.Connection = connection;
                command.CommandText = @"SELECT *, u.username
                                    FROM reviews r
                                    join users u
                                    on r.[User] = u.id
                                    where product = @product";
                connection.Open();
                command.Parameters.AddWithValue("@product", product);

                using (SqlDataReader reader = command.ExecuteReader())
                    while (reader.Read())
                        reviews.Add(ConvertToReview(reader));
            }
            return reviews.AsReadOnly();
        }

        public bool Exists(Review review, int userId)
        {
            using (var connection = new SqlConnection(ConnectionString))
            using (var command = new SqlCommand())
            {
                command.Connection = connection;
                command.CommandText = @"SELECT *
                                    FROM reviews
                                    where product = @product and [User] = @user";
                connection.Open();
                command.Parameters.AddWithValue("@product", review.Product);
                command.Parameters.AddWithValue("@user", userId);

                using (SqlDataReader reader = command.ExecuteReader())
                    return reader.HasRows;
            }
        }

        public void Insert(Product product)
        {
            throw new NotImplementedException();
        }

        public void Insert(Review review, int userId)
        {
            using (var connection = new SqlConnection(ConnectionString))
            using (var command = new SqlCommand())
            {
                command.Connection = connection;
                command.CommandText = @"insert into reviews ([User], Product, Rating, Text)
                                        values(@User, @Product, @Rating, @Text)";
                connection.Open();
                command.Parameters.AddWithValue("@User", userId);
                command.Parameters.AddWithValue("@Product", review.Product);
                command.Parameters.AddWithValue("@Rating", review.Rating);
                command.Parameters.AddWithValue("@Text", review.Text);

                command.ExecuteNonQuery();
            }
        }

        public void Update(Review review, int userId)
        {
            using (var connection = new SqlConnection(ConnectionString))
            using (var command = new SqlCommand())
            {
                command.Connection = connection;
                command.CommandText = @"update reviews set Rating=@Rating, Text=@Text
                                        where [User] = @User and product = @Product";

                connection.Open();
                command.Parameters.AddWithValue("@User", userId);
                command.Parameters.AddWithValue("@Product", review.Product);
                command.Parameters.AddWithValue("@Rating", review.Rating);
                command.Parameters.AddWithValue("@Text", review.Text);

                command.ExecuteNonQuery();
            }
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

        private Review ConvertToReview(SqlDataReader reader)
        {
            return new Review()
            {
                User = reader["username"].ToString(),
                Product = (int)reader["Product"],
                Rating = (int)reader["Rating"],
                Text = reader["Text"].ToString(),
            };
        }

        public Review GetReview(int user, int product)
        {
            using (var connection = new SqlConnection(ConnectionString))
            using (var command = new SqlCommand())
            {
                command.Connection = connection;
                command.CommandText = @"SELECT *
                                    FROM reviews r
                                    where product = @product and User = @user";
                connection.Open();
                command.Parameters.AddWithValue("@product", product);
                command.Parameters.AddWithValue("@user", user);

                using (SqlDataReader reader = command.ExecuteReader())
                    while (reader.Read())
                        return ConvertToReview(reader);
            }

            return null;
        }

        public void Insert(Review review, string username)
        {
            throw new NotImplementedException();
        }

        public void Update(Review review, string username)
        {
            throw new NotImplementedException();
        }

        public IReadOnlyCollection<Product> GetOrderedProducts(int User)
        {
            var products = new List<Product>();
            using (var connection = new SqlConnection(ConnectionString))
            using (var command = new SqlCommand())
            {
                command.Connection = connection;
                command.CommandText = @"SELECT p.*
                                    FROM products p
                                    join orderline ol
                                    on p.id = ol.product
                                    join orders o
                                    on ol.[order] = o.id 
                                    WHERE o.[user] = @user 
                                    ORDER BY DateOrdered desc";
                connection.Open();
                command.Parameters.AddWithValue("@user", User);

                using (SqlDataReader reader = command.ExecuteReader())
                    while (reader.Read())
                        products.Add(Convert(reader));
            }
            return products.AsReadOnly();
        }
        
    }
}
