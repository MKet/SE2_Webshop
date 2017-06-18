using System;
using System.Collections.Generic;
using System.Text;
using WebShopLibrary.Repositories;
using WebShopLibrary.Services;

namespace WebShopLibrary.Factories
{
    public class MSSQLServiceFactory : IServiceFactory
    {
        private string ConnectionString;

        public MSSQLServiceFactory(string connectionString)
        {
            ConnectionString = connectionString;
        }

        public CatalogService CreateCatalogService()
        {
            return new CatalogService(new MSSQLProductRepository(ConnectionString), new MSSQLCategoryRepository(ConnectionString), new MSSQLUserRepository(ConnectionString));
        }

        public OrderService CreateOrderService()
        {
            return new OrderService(new MSSQLOrderRepository(ConnectionString));
        }

        public AuthService CreateAuthService()
        {
            return new AuthService(new MSSQLUserRepository(ConnectionString));
        }
    }
}
