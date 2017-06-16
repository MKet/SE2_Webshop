using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebShopLibrary.Entities;
using WebShopLibrary.Repositories;

namespace WebShopLibrary.Services
{
    public class OrderService
    {
        IOrderRepository orderRepo;

        public OrderService(IOrderRepository orderRepo)
        {
            this.orderRepo = orderRepo;
        }

        public void AddOrder(int UserId, string discount, List<Product> products)
        {
            orderRepo.Insert(UserId, discount, from p in products
                                               select p.Id);
        }
    }
}
