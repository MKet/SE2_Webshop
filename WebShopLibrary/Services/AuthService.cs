using System;
using System.Collections.Generic;
using System.Text;
using WebShopLibrary.Entities;
using WebShopLibrary.Repositories;


namespace WebShopLibrary.Services
{
    public class AuthService
    {
        private IUserRepositoy userRepository;

        public AuthService(IUserRepositoy userRepository)
        {
            this.userRepository = userRepository;
        }

        public User Login(string username, string password) =>
            userRepository.Authenthicate(username, password);
    }
}
