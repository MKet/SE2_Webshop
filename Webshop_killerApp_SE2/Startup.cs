using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using WebShopLibrary.Factories;
using System.IO;
using Swashbuckle.AspNetCore.Swagger;

namespace Webshop_killerApp_SE2
{
  public class Startup
  {
    private readonly IServiceFactory serviceFactory;

    public Startup(IHostingEnvironment env)
    {
      var builder = new ConfigurationBuilder()
          .SetBasePath(env.ContentRootPath)
          .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
          .AddJsonFile($"appsettings.{env.EnvironmentName}.json", optional: true)
          .AddEnvironmentVariables();
      Configuration = builder.Build();
      serviceFactory = new MSSQLServiceFactory(Configuration.GetConnectionString("WebshopDatabase"));
    }

    public IConfigurationRoot Configuration { get; }

    // This method gets called by the runtime. Use this method to add services to the container.
    public void ConfigureServices(IServiceCollection services)
    {
      services.AddTransient(x => serviceFactory.CreateCatalogService());
      services.AddTransient(x => serviceFactory.CreateAuthService());
      // Add framework services.
      services.AddMvc();
      services.AddSwaggerGen(options =>
      {
        options.SwaggerDoc("v1",
          new Info
          {
            Title = "Todo API",
            Version = "v1",
            Description = "Todo Api description",
            TermsOfService = "None"
          }
        );
      });
    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory loggerFactory)
    {
      loggerFactory.AddConsole(Configuration.GetSection("Logging"));
      loggerFactory.AddDebug();

      TokenValidationParameters tokenValidationParameters =
        new TokenValidationParameters()
        {
          ValidAudience = "theAudience",
          ValidIssuer = "theIssuer",
          ValidateLifetime = true,
          ValidateIssuer = true,
          IssuerSigningKey = new SymmetricSecurityKey(new byte[32])
        };

      app.UseJwtBearerAuthentication(new JwtBearerOptions()
      {
        Audience = "theAudience",
        AutomaticAuthenticate = true,
        TokenValidationParameters = tokenValidationParameters
      });

      // Route all unknown requests to app root
      app.Use(async (context, next) =>
      {
        await next();

              // If there's no available file and the request doesn't contain an extension, we're probably trying to access a page.
              // Rewrite request to use app root
              if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
        {
          context.Request.Path = "/index.html";
          context.Response.StatusCode = 200; // Make sure we update the status code, otherwise it returns 404
                await next();
        }
      });
      app.UseDefaultFiles();
      app.UseStaticFiles();
      app.UseMvc();
      app.UseSwagger(c =>
      {
        c.PreSerializeFilters.Add((swagger, httpReq) => swagger.Host = httpReq.Host.Value);
      });

      app.UseSwaggerUI(c =>
      {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "V1 Docs");
      });
    }
  }
}
