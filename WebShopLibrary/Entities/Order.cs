using System;
using System.Collections.Generic;
using System.Text;

namespace WebShopLibrary.Entities
{
    public class Order
    {
        public int Id { get; set; }
        public string User { get; set; }
        public string DiscountCode { get; set; }
        public double Price { get; set; }
        public DateTime DateOrdered { get; set; }
    }
}
