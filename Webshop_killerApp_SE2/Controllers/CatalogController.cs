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
    public IReadOnlyCollection<Product> GetPage([FromBody]Tuple<int> parameters) => service.GetPage(parameters.Item1);

    [HttpPost("products")]
    public IReadOnlyCollection<Product> GetPage([FromBody]Tuple<int, int> parameters) => service.GetPage(parameters.Item1, parameters.Item2);

    [HttpPost("categories")]
    public IReadOnlyCollection<Category> GetCategories() => service.GetTopLevelCategories();

    [HttpPost("Subcategories")]
    public IReadOnlyCollection<Category> GetCategories([FromBody]Tuple<int> parameters) => service.GetSubCategories(parameters.Item1);
  }
}
