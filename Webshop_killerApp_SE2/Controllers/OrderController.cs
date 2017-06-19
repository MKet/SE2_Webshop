using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using WebShopLibrary.Services;
using WebShopLibrary.Entities;

namespace Webshop_killerApp_SE2.Controllers
{
  [Route("api/order/")]
  public class OrderController : Controller
  {
    private readonly OrderService orderService;

    public OrderController(OrderService orderService)
    {
      this.orderService = orderService;
    }

    [HttpPost("add")]
    public void AddOrder([FromBody] Tuple<int, string, List<Product>> parameters) =>
      orderService.AddOrder(parameters.Item1, parameters.Item2, parameters.Item3);


    [HttpPost("products")]
    public IReadOnlyCollection<Product> GetOrderedProducts([FromBody] Tuple<int> parameters) =>
      orderService.GetOrderedProduct(parameters.Item1);

    [HttpPost("products/order")]
    public IReadOnlyCollection<Product> GetProductsByOrder([FromBody] Tuple<int> parameters) =>
      orderService.GetProductByOrder(parameters.Item1);

    [HttpPost("orders")]
    public IReadOnlyCollection<Order> GetUserOrders([FromBody] Tuple<int> parameters) =>
      orderService.GetOrders(parameters.Item1);
  }
}
