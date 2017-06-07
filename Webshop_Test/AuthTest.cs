using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Text;
using Webshop_Test.TestRepositories;
using WebShopLibrary.Entities;
using WebShopLibrary.Services;

namespace Webshop_Test
{
    [TestClass]
    public class AuthTest
    {
        [TestMethod]
        public void LoginSuccesTest()
        {
            AuthService auth = new AuthService(new TestUserRepository());

            User user = auth.Login("test", "Password1");

            Assert.AreEqual(user.Id, 1);
        }

        [TestMethod]
        public void LoginFailedTest()
        {
            AuthService auth = new AuthService(new TestUserRepository());

            User user = auth.Login("test", "password1324");

            Assert.IsNull(user);
        }
    }
}
