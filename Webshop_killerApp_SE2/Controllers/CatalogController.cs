using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebShopLibrary.Services;
using WebShopLibrary.Entities;

namespace Webshop_killerApp_SE2.Controllers
{
  [Route("api/catalog/[controller]")]
  public class CatalogController : Controller
  {
    readonly CatalogService service;

    public CatalogController(CatalogService service)
    {
      this.service = service;
    }

    [HttpPost("/{number}")]
    public IReadOnlyCollection<Product> GetPage(int number) => service.GetPage(number);

    [HttpPost]
    public void Post([FromBody]string value)
    {
    }


  }
}
