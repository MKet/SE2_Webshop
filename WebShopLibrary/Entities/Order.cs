using System;
using System.Collections.Generic;
using System.Text;

namespace WebShopLibrary.Entities
{
    public class Order
    {
        public int ID { get; set; }
        public string User { get; set; }
        public string DiscountCode { get; set; }
        public int Price { get; set; }
    }
}
