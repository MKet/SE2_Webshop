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
        IReadOnlyCollection<Product> GetProducts(string search, int Skip, int Amount);
        IReadOnlyCollection<Product> GetProductsByOrder(int Order);
        int CountProducts();
        int CountProductsInCategory(int category);
        IReadOnlyCollection<Review> GetReviews(int product);
        void Insert(Review review, int user);
        void Update(Review review, int user);
        bool Exists(Review review, int user);
        Review GetReview(int user, int product);
        IReadOnlyCollection<Product> GetOrderedProducts(int User);
        
    }
}
