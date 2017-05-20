﻿using System;
using System.Collections.Generic;
using System.Text;
using WebShopLibrary.Entities;

namespace WebShopLibrary.Repositories
{
    interface IProductRepository
    {
        void insert(Product product);
        IReadOnlyCollection<Product> GetProducts(int Skip, int Amount);
        Product GetProduct(int ID);
        IReadOnlyCollection<Product> GetProductsByCategory(int Category, int Skip, int Amount);
    }
}
