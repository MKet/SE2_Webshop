using System;
using System.Collections.Generic;
using System.Text;

namespace WebShopLibrary.Entities
{
    public class User
    {
        public int Id { get; set; }
        public string username { get; set; }
        public string email { get; set; }
        public bool isAdmin { get; set; }
    }
}
