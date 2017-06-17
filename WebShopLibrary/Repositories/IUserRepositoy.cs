using System;
using System.Collections.Generic;
using System.Text;
using WebShopLibrary.Entities;

namespace WebShopLibrary.Repositories
{
    public interface IUserRepositoy
    {
        int Insert(User user, string password);
        User Authenthicate(string user, string password);

        User GetByName(string username);
    }
}
