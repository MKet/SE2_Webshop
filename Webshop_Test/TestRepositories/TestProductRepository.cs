using System;
using System.Collections.Generic;
using System.Text;
using WebShopLibrary.Entities;
using WebShopLibrary.Repositories;
using System.Linq;

namespace Webshop_Test.TestRepositories
{
    class TestProductRepository : IProductRepository
    {
        private List<Product> list = new List<Product>()
        {
            new Product()
            {
                Id = 1,
                Name = "test",
                Image = "testurl.png",
                Location = "testUrl",
                Author = "Test1",
                Text = "Test1",
                Price = 0.0,
                Category = 1,
                Isvisible = true,
                Discount = null
            },
            new Product()
            {
                Id = 1,
                Name = "test",
                Image = "testurl.png",
                Location = "testUrl",
                Author = "Test1",
                Text = "Test1",
                Price = 30.0,
                Category = null,
                Isvisible = false,
                Discount = null
            },
            new Product()
            {
                Id = 2,
                Name = "test",
                Image = "testurl.png",
                Location = "testUrl",
                Author = "Test1",
                Text = "Test2xrdctfvgybhjnkmljnhbgvfcvhbjnkmlmjnhbgvcfvhbjnkmljnhbgvgbjnkmljhyguyfcgv bnjkuihygutfcgvb nkjertdfszfrytdytfdytfgtuyfcgttgfcgtgfcgyufgcyufgctfgdgtfcgtgfgfgfghftytdrfchgvjhbsauiydftkgqw",
                Price = 40.5,
                Category = 3,
                Isvisible = false,
                Discount = null
            }
        };

        public int CountProducts() => list.Count;

        public int CountProductsInCategory(int category) => list.Where(p => p.Category == category).Count();

        public bool Exists(Review review)
        {
            throw new NotImplementedException();
        }

        public Product GetProduct(int ID) => list.Find(p => p.Id == ID);

        public IReadOnlyCollection<Product> GetProducts(int Skip, int Amount)
            => list.Skip(Skip)
                   .Take(Amount)
                   .ToList()
                   .AsReadOnly();

        public IReadOnlyCollection<Product> GetProducts(int Category, int Skip, int Amount)
            => list.Where(p => p.Category == Category)
                   .Skip(Skip)
                   .Take(Amount)
                   .ToList()
                   .AsReadOnly();

        public Review GetReview(int user, int product)
        {
            throw new NotImplementedException();
        }

        public IReadOnlyCollection<Review> GetReviews(int product)
        {
            throw new NotImplementedException();
        }

        public void Insert(Product product) => list.Add(product);

        public void Insert(Review review)
        {
            throw new NotImplementedException();
        }

        public void Insert(Review review, int user)
        {
            throw new NotImplementedException();
        }

        public void Update(Review review)
        {
            throw new NotImplementedException();
        }

        public void Update(Review review, int user)
        {
            throw new NotImplementedException();
        }
    }
}
