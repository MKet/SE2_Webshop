using System;
using System.Collections.Generic;
using System.Text;
using WebShopLibrary.Entities;

namespace WebShopLibrary.Repositories
{
    public interface IProductRepository
    {
        void Insert(Product product);
        IReadOnlyCollection<Product> GetProducts(int Skip, int Amount);
        Product GetProduct(int ID);
        IReadOnlyCollection<Product> GetProducts(int Category, int Skip, int Amount);
        int CountProducts();
        int CountProductsInCategory(int category);
        IReadOnlyCollection<Review> GetReviews(int product);
        void Insert(Review review);
        void Update(Review review);
        bool Exists(Review review);
        Review GetReview(int user, int product);


    }
}
