using System;
using System.Collections.Generic;
using System.Text;
using WebShopLibrary.Services;

namespace WebShopLibrary.Factories
{
    public interface IServiceFactory
    {
        AuthService CreateAuthService();
        OrderService CreateOrderService();
        CatalogService CreateCatalogService();
    }
}
