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

        public IReadOnlyCollection<Product> GetPage(int page) =>
            productRepository.GetProducts(page * pageSize, pageSize);
    }
}
