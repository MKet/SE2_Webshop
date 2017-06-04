using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using WebShopLibrary.Services;
using Webshop_Test.TestRepositories;

namespace Webshop_Test
{
    [TestClass]
    public class CatalogTest
    {
        [TestMethod]
        [ExpectedException(typeof(ArgumentException))]
        public void PageArgumentTest()
        {
            CatalogService TestObject = new CatalogService(new TestProductRepository(), new TestCategoryRepository());

            TestObject.GetPage(0);
        }

        [TestMethod]
        public void FirstPageTest()
        {
            CatalogService TestObject = new CatalogService(new TestProductRepository(), new TestCategoryRepository(), 2);

            var list = TestObject.GetPage(1);

            Assert.AreEqual(list.Count, 2);
        }

        [TestMethod]
        public void BigPageTest()
        {
            CatalogService TestObject = new CatalogService(new TestProductRepository(), new TestCategoryRepository(), 100);

            var list = TestObject.GetPage(1);

            Assert.AreEqual(list.Count, 3);
        }

        [TestMethod]
        public void SinglePageCountTest()
        {
            CatalogService TestObject = new CatalogService(new TestProductRepository(), new TestCategoryRepository(), 100);

            Assert.AreEqual(TestObject.GetPageAmount(), 1);
        }

        [TestMethod]
        public void PageCountTest()
        {
            CatalogService TestObject = new CatalogService(new TestProductRepository(), new TestCategoryRepository(), 2);

            Assert.AreEqual(TestObject.GetPageAmount(), 2);
        }

        [TestMethod]
        public void ExactPageCountTest()
        {
            CatalogService TestObject = new CatalogService(new TestProductRepository(), new TestCategoryRepository(), 3);

            Assert.AreEqual(TestObject.GetPageAmount(), 1);
        }
    }
}
