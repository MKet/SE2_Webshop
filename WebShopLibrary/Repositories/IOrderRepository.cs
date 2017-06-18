using System;
using System.Collections.Generic;
using System.Text;
using WebShopLibrary.Entities;

namespace WebShopLibrary.Repositories
{
    public interface IOrderRepository
    {
        void Insert(int user, string discount, IEnumerable<int> products);
        IReadOnlyCollection<Order> GetOrders(int Product, int Skip, int Amount);
        IReadOnlyCollection<Order> GetOrders(string User, int Skip, int Amount);

    }
}
