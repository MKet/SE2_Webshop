using System;
using System.Collections.Generic;
using System.Text;
using WebShopLibrary.Entities;
using WebShopLibrary.Repositories;
using System.Linq;
namespace Webshop_Test.TestRepositories
{
    class TestCategoryRepository : ICategoryRepository
    {
        private static List<Category> list = new List<Category>()
        {
            new Category() {Id = 1, Name = "Test1", SubCategoryOf = null, Text = "this is a test class"},
            new Category() {Id = 2, Name = "Test2", SubCategoryOf = null, Text = "this is a test class"},
            new Category() {Id = 3, Name = "Test3", SubCategoryOf = 1, Text = "this is a test class"},
            new Category() {Id = 4, Name = "Test4", SubCategoryOf = 1, Text = "this is a test class"},
            new Category() {Id = 5, Name = "Test5", SubCategoryOf = 2, Text = "this is a test classasadsaasdxzcassadasczxsdafassdaswedassddasdsfasdfasasdasdasdafasdawdsadefadsdfwdffewdasfedwasffqwadsfewfasdfewfqwdascdsvwfedsacsdwfedsacsfrwedsxacsffwedscdsfvfewdsacsfwedascsfdrewdsacvfdrfwedsacdsfe"},
            new Category() {Id = 6, Name = "Test6", SubCategoryOf = null, Text = "this is a test class"}
        };

        public IReadOnlyCollection<Category> GetCategories(int Skip, int Amount) 
            => list.Skip(Skip)
                   .Take(Amount)
                   .ToList()
                   .AsReadOnly();

        public IReadOnlyCollection<Category> GetCategories() => list.AsReadOnly();

        public IReadOnlyCollection<Category> GetSubCategoriesOf(int Category, int Skip, int Amount)
          => list.Where(c => c.SubCategoryOf == Category)
                 .Skip(Skip)
                 .Take(Amount)
                 .ToList()
                 .AsReadOnly();

        public IReadOnlyCollection<Category> GetSubCategoriesOf(int parentId)
          => list.Where(c => c.SubCategoryOf == parentId)
                 .ToList()
                 .AsReadOnly();

        public void Insert(Category category)
            => list.Add(category);
    }
}
