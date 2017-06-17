using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebShopLibrary.Entities;
using WebShopLibrary.Services;

namespace Webshop_killerApp_SE2.Controllers
{

    [Route("api/order/")]
    public class OrderController
    {
      private OrderService orderService;

      public OrderController(OrderService orderService)
      {
        this.orderService = orderService;
      }

      [HttpPost("add")]
      private void AddOrder([FromBody] Tuple<int, string, List<Product>> parameters) =>
        orderService.AddOrder(parameters.Item1, parameters.Item2, parameters.Item3);
  }
}
