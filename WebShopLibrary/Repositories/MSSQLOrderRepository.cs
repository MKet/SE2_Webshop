using Microsoft.SqlServer.Server;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using WebShopLibrary.Entities;

namespace WebShopLibrary.Repositories
{
    class MSSQLOrderRepository : IOrderRepository
    {
        private string ConnectionString;

        public MSSQLOrderRepository(string connectionString)
        {
            ConnectionString = connectionString;
        }

        public IReadOnlyCollection<Order> GetOrders(int Product, int Skip, int Amount)
        {
            var orders = new List<Order>();
            using (var connection = new SqlConnection(ConnectionString))
            using (var command = new SqlCommand())
            {
                command.Connection = connection;
                command.CommandText = @"SELECT [ID]
                                          ,[User]
                                          ,[Discount]
                                          ,[Price]
                                          ,[DateOrdered]
                                        FROM [dbo].[Orders]
                                        WHERE ID in 
                                                (select order 
                                                 from orderline
                                                 where product = @product)
                                        ORDER BY ID asc
                                        OFFSET (@skip) ROWS FETCH NEXT (@take) ROWS ONLY";
                connection.Open();

                command.Parameters.AddWithValue("@skip", Skip);
                command.Parameters.AddWithValue("@take", Amount);
                command.Parameters.AddWithValue("@product", Product);

                using (SqlDataReader reader = command.ExecuteReader())
                    while (reader.Read())
                        orders.Add(Convert(reader));
            }
            return orders.AsReadOnly();
        }

        public IReadOnlyCollection<Order> GetOrders(int User)
        {
            var orders = new List<Order>();
            using (var connection = new SqlConnection(ConnectionString))
            using (var command = new SqlCommand())
            {
                command.Connection = connection;
                command.CommandText = @"SELECT [ID]
                                          ,[User]
                                          ,[Discount]
                                          ,[Price]
                                          ,[DateOrdered]
                                        FROM [dbo].[Orders]
                                        WHERE [user] = @user
                                        ORDER BY DateOrdered desc";
                command.Parameters.AddWithValue("@user", User);

                connection.Open();


                using (SqlDataReader reader = command.ExecuteReader())
                    while (reader.Read())
                        orders.Add(Convert(reader));
            }
            return orders.AsReadOnly();
        }

        public void Insert(int user, string discount, IEnumerable<int> products)
        {
            using (var connection = new SqlConnection(ConnectionString))
            using (var command = new SqlCommand())
            {
                command.Connection = connection;
                command.CommandText = "[dbo].[AddOrder]";
                command.CommandType = CommandType.StoredProcedure;

                command.Parameters.AddWithValue("@UserID", user);
                command.Parameters.AddWithValue("@Discount", (object)discount ?? DBNull.Value);
                var parameter = command.Parameters.AddWithValue("@List", CreateSQLProductList(products));
                parameter.SqlDbType = SqlDbType.Structured;
                parameter.TypeName = "[dbo].[ProductList]";

                connection.Open();

                command.ExecuteNonQuery();
            }
        }

        private IEnumerable<SqlDataRecord> CreateSQLProductList(IEnumerable<int> products)
        {
            foreach (int I in products)
            {
                var record = new SqlDataRecord(new SqlMetaData("productID", SqlDbType.Int));
                record.SetInt32(0, I);
                yield return record;
            }
        }

    private Order Convert(SqlDataReader reader)
        {
            return new Order()
            {
                Id = (int)reader["ID"],
                User = (int)reader["User"],
                DiscountCode = reader["Discount"].ToString(),
                Price = (double)reader["Price"],
                DateOrdered = (DateTime)reader["DateOrdered"]
            };
        }
    }
}
