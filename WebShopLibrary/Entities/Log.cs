using System;
using System.Collections.Generic;
using System.Text;

namespace WebShopLibrary.Entities
{
    public class Log
    {
        public int Id { get; set; }
        public string User { get; set; }
        public int Product { get; set; }
        public string Action { get; set; }
        public DateTime Date { get; set; }
    }
}
