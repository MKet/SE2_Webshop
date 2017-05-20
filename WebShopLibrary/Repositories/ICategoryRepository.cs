using System;
using System.Collections.Generic;
using System.Text;
using WebShopLibrary.Entities;

namespace WebShopLibrary.Repositories
{
    public interface ICategoryRepository
    {
        void Insert(Category category);
        IReadOnlyCollection<Category> GetCategories(int Skip, int Amount);
        IReadOnlyCollection<Category> GetSubCategoriesOf(int Category, int Skip, int Amount);
    }
}
