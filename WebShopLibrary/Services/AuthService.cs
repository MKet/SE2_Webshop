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

        public string Register(User user, string password)
        {
            user.isAdmin = false;

            if (userRepository.GetByName(user.username) != null)
                return "Deze gebruiker bestaat al";
            else if (userRepository.GetByMail(user.email) != null)
                return "Deze mail is al in gebruik";

            userRepository.Insert(user, password);
            return "Gebruiker toegevoegd";
        }
    }
}
