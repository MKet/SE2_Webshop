using System;
using System.Collections.Generic;
using System.Text;
using WebShopLibrary.Entities;

namespace WebShopLibrary.Repositories
{
    interface IReviewRepository
    {
        void Insert(Review review);
        IReadOnlyCollection<Review> GetReviewsOf(int product);
    }
}
