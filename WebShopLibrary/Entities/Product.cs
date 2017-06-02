using System;
using System.Collections.Generic;
using System.Text;

namespace WebShopLibrary.Entities
{
    public class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Image { get; set; }
        public string Location { get; set; }
        
        public double Price { get; set; }
        public int? Category { get; set; }
        public bool Isvisible { get; set; }
        public string Author { get; set; }
        public string Discount { get; set; }
        public string Text { get; set; }
    }
}
