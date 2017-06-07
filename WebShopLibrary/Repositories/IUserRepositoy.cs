using System;
using System.Collections.Generic;
using System.Text;
using WebShopLibrary.Entities;

namespace WebShopLibrary.Repositories
{
    public interface IUserRepositoy
    {
        void Insert(User user, string password);
        User Authenthicate(string user, string password);
    }
}
