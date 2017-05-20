using System;
using System.Collections.Generic;
using System.Text;
using WebShopLibrary.Services;

namespace WebShopLibrary.Factories
{
    interface IServiceFactory
    {
        UserService CreateUserService();
        OrderService CreateOrderService();
        CatalogService CreateCatalogService();
    }
}
