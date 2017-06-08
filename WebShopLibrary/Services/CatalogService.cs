using System;
using System.Collections.Generic;
using System.Text;
using WebShopLibrary.Entities;
using WebShopLibrary.Repositories;

namespace WebShopLibrary.Services
{
    public class CatalogService
    {
        private int pageSize;
        private IProductRepository productRepository;
        private ICategoryRepository categoryRepository;
        private IUserRepositoy userRepository;

        public CatalogService(IProductRepository productRepository, ICategoryRepository categoryRepository, IUserRepositoy userRepository, int pageSize = 30)
        {
            this.pageSize = pageSize;
            this.productRepository = productRepository;
            this.categoryRepository = categoryRepository;
            this.userRepository = userRepository;
        }

        public int GetPageAmount()
        {
            double productAmount = productRepository.CountProducts();
            return (int)Math.Ceiling(productAmount / pageSize);
        }

        public int GetPageAmount(int category)
        {
            double productAmount = productRepository.CountProductsInCategory(category);
            return (int)Math.Ceiling(productAmount / pageSize);
        }

        public IReadOnlyCollection<Category> GetTopLevelCategories() => categoryRepository.GetCategories();

        public IReadOnlyCollection<Product> GetPage(int page, int category)
        {
            if (page < 1)
                throw new ArgumentException("Value has to be positive", nameof(page));
            return productRepository.GetProducts(category, (page - 1) * pageSize, pageSize);
        }

        public IReadOnlyCollection<Product> GetPage(int page)
        {
            if (page < 1)
                throw new ArgumentException("Value has to be positive", nameof(page));
            return productRepository.GetProducts((page - 1) * pageSize, pageSize);
        }

        public Product GetProduct(int Id) => 
            productRepository.GetProduct(Id);

        public IReadOnlyCollection<Category> GetSubCategories(int ParentId) => categoryRepository.GetSubCategoriesOf(ParentId);

        public IReadOnlyCollection<Review> GetReviews(int product) => productRepository.GetReviews(product);

        public void Post(Review review)
        {
            int userId = userRepository.GetByName(review.User).Id;
            if (productRepository.Exists(review, userId))
                productRepository.Update(review, userId);
            else
                productRepository.Insert(review, userId);
        }
    }
}
