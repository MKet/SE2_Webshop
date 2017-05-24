using System;
using System.Collections.Generic;
using System.Text;
using WebShopLibrary.Repositories;
using WebShopLibrary.Services;

namespace WebShopLibrary.Factories
{
    public class MSSQLServiceFactory : IServiceFactory
    {
        private string ConnectionString = @"Integrated Security=true; Database=EbookStore; Data Source=MARCO-LAPTOP"; 
        public CatalogService CreateCatalogService()
        {
            return new CatalogService(new MSSQLProductRepository(ConnectionString), new MSSQLCategoryRepository(ConnectionString));
        }

        public OrderService CreateOrderService()
        {
            throw new NotImplementedException();
        }

        public UserService CreateUserService()
        {
            throw new NotImplementedException();
        }
    }
}
