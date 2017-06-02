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

        public CatalogService(IProductRepository productRepository, ICategoryRepository categoryRepository, int pageSize = 30)
        {
            this.pageSize = pageSize;
            this.productRepository = productRepository;
            this.categoryRepository = categoryRepository;
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

        public IReadOnlyCollection<Category> GetSubCategories(int ParentId) => categoryRepository.GetSubCategoriesOf(ParentId);
    }
}
