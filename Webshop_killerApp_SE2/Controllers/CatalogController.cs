using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebShopLibrary.Services;
using WebShopLibrary.Entities;

namespace Webshop_killerApp_SE2.Controllers
{
  [Route("api/catalog/")]
  public class CatalogController : Controller
  {
    readonly CatalogService service;

    public CatalogController(CatalogService service)
    {
      this.service = service;
    }

    [HttpPost("products")]
    public (IReadOnlyCollection<Product> products, int pages) GetPage([FromBody]Tuple<int> parameters) 
      => (service.GetPage(parameters.Item1), service.GetPageAmount());

    [HttpPost("category/products")]
    public (IReadOnlyCollection<Product> products, int pages) GetPage([FromBody]Tuple<int, int> parameters) => 
      (service.GetPage(parameters.Item1, parameters.Item2), service.GetPageAmount(parameters.Item2));
    
    [HttpPost("products/search")]
    public (IReadOnlyCollection<Product> products, int pages) GetPage([FromBody]Tuple<int, string> parameters) =>
      (service.GetPage(parameters.Item1, parameters.Item2), service.GetPageAmount(parameters.Item2));

    [HttpPost("categories")]
    public IReadOnlyCollection<Category> GetCategories() => service.GetTopLevelCategories();

    [HttpPost("product")]
    public Product GetProduct([FromBody]Tuple<int> parameters) => service.GetProduct(parameters.Item1);

    [HttpPost("reviews")]
    public IReadOnlyCollection<Review> GetReviews([FromBody]Tuple<int> parameters) => service.GetReviews(parameters.Item1);

    [HttpPost("reviews/post")]
    public void PostReview([FromBody]Review review) => service.Post(review);

    [HttpPost("Subcategories")]
    public IReadOnlyCollection<Category> GetCategories([FromBody]Tuple<int> parameters) => service.GetSubCategories(parameters.Item1);
  }
}
