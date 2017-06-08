using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using WebShopLibrary.Entities;
using WebShopLibrary.Repositories;

namespace Webshop_Test.TestRepositories
{
    class TestUserRepository : IUserRepositoy
    {
        private List<UserWithPass> list = new List<UserWithPass>()
        {
            new UserWithPass(new User() {Id = 1, email="test@mail.net", isAdmin=true, username="test"}, "Password1"),
            new UserWithPass(new User() {Id = 2, email="test2@mail.net", isAdmin=false, username="test2"}, "Password2"),
            new UserWithPass(new User() {Id = 3, email="test3@mail.net", isAdmin=true, username="test3"}, "Password3"),
            new UserWithPass(new User() {Id = 4, email="test4@mail.net", isAdmin=false, username="test4"}, "Password4"),
            new UserWithPass(new User() {Id = 5, email="test5@mail.net", isAdmin=true, username="test5"}, "Password5"),
            new UserWithPass(new User() {Id = 6, email="test6@mail.net", isAdmin=false, username="test6"}, "Password6"),
            new UserWithPass(new User() {Id = 7, email="test7@mail.net", isAdmin=true, username="test7"}, "Password7"),
            new UserWithPass(new User() {Id = 8, email="test8@mail.net", isAdmin=false, username="test8"}, "Password8"),
        };

        public User Authenthicate(string user, string password) => 
            list.Where(U => U.User.username == user && U.Password == password).FirstOrDefault()?.User;

        public void Insert(User user, string password) =>
            list.Add(new UserWithPass(user, password));

        private class UserWithPass
        {
            public UserWithPass(User user, string password)
            {
                User = user;
                Password = password;
            }

            public User User { get; set; }
            public string Password { get; set; }
        }
    }
}
