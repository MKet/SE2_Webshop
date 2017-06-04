using System;
using System.Collections.Generic;
using System.Text;
using WebShopLibrary.Entities;

namespace WebShopLibrary.Repositories
{
    interface IUserRepositoy
    {
        void Insert(User user, string password);
        bool Authenthicate(User user, string password);
    }
}
