using System;
using System.Collections.Generic;
using System.Text;
using WebShopLibrary.Entities;

namespace WebShopLibrary.Repositories
{
    interface IOrderRepository
    {
        void Insert(Order order);
        IReadOnlyCollection<Order> GetOrders(int Product, int Skip, int Amount);

        IReadOnlyCollection<Order> GetOrders(string User, int Skip, int Amount);
    }
}
