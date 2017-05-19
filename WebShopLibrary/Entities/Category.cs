using System;
using System.Collections.Generic;
using System.Text;

namespace WebShopLibrary.Entities
{
    public class Category
    {
        public int ID { get; set; }
        public int SubCategoryOf { get; set; }
        public string Name { get; set; }
        public string Text { get; set; }
    }
}
