using System;
using System.Collections.Generic;
using System.Text;

namespace WebShopLibrary.Entities
{
    public class Review
    {
        public string User { get; set; }
        public int Product { get; set; }
        public string Text { get; set; }
        public int Rating { get; set; }
    }
}
