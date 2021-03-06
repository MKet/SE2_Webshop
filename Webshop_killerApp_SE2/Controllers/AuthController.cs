﻿using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net.Http;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Protocols;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;
using Microsoft.IdentityModel.Tokens;
using Newtonsoft.Json.Linq;
using WebShopLibrary.Services;
using WebShopLibrary.Entities;

namespace Webshop_killerApp_SE2.Controllers
{

  public class AccessToken
  {
    public string Access_token { get; set; }
  }

  public class UserCredentials
  {
    public string Username { get; set; }
    public string Password { get; set; }
  }

  public class OpenIdToken
  {
    public int ClientId { get; set; }
    public string ClientName { get; set; }
    public string RedirectUri { get; set; }
    public string State { get; set; }
    public string Code { get; set; }
    public string Authuser { get; set; }
    public string Session_state { get; set; }
    public string Prompt { get; set; }
    public string Consent { get; set; }
  }

  [Route("api/[controller]/[action]")]
  public class AuthController : Controller
  {
    private AuthService authService;

    public AuthController(AuthService authService)
    {
      this.authService = authService;
    }

    [HttpPost]
    public IActionResult Login([FromBody] UserCredentials credentials)
    {
      string username = credentials.Username;
      string password = credentials.Password;

      User user = authService.Login(username, password);

      if (user != null) {
        return Ok(CreateAccessToken(user.Id, user.isAdmin, user.username));
      }

      return Unauthorized();
    }
    
    [HttpPost]
    public Tuple<string> Register([FromBody]Tuple<User, string> accountInfo)
    {
       return new Tuple<string>(authService.Register(accountInfo.Item1, accountInfo.Item2));
    }


    private static Claim GetIdClaim(ClaimsPrincipal claims)
    {
      var idClaim = claims.Claims.Single(c => c.Type == ClaimTypes.NameIdentifier || c.Type == "uid");
      return idClaim;
    }

    private static async Task<ClaimsPrincipal> GetOpenIdClaims(OpenIdToken token, OpenIdConnectConfiguration openIdConfig, string clientSecret)
    {
      using (var client = new HttpClient())
      {
        var content = new FormUrlEncodedContent(new[]
        {
          new KeyValuePair<string, string>("code", token.Code),
          new KeyValuePair<string, string>("client_id", token.ClientId.ToString()),
          new KeyValuePair<string, string>("client_secret", clientSecret),
          new KeyValuePair<string, string>("redirect_uri", token.RedirectUri),
          new KeyValuePair<string, string>("grant_type", "authorization_code"),
        });

        var result = await client.PostAsync(openIdConfig.TokenEndpoint, content);
        var resultContent = await result.Content.ReadAsStringAsync();

        var authenticationToken = GetAuthenticationToken(resultContent);

        var jwtSigKey = CreateJwtSigKey(clientSecret);

        var keys = new List<SecurityKey>(openIdConfig.SigningKeys) { jwtSigKey };

        return TryGetClaims(keys, authenticationToken);
      }
    }



    private static ClaimsPrincipal TryGetClaims(IEnumerable<SecurityKey> keys, string authenticationToken)
    {
      ClaimsPrincipal claims;
      TokenValidationParameters validationParameters =
        new TokenValidationParameters
        {
          IssuerSigningKeys = keys,
          ValidateAudience = false,
          ValidateIssuer = false,
        };
      
      JwtSecurityTokenHandler handler = new JwtSecurityTokenHandler();
      try
      {
        claims = handler.ValidateToken(authenticationToken, validationParameters, out SecurityToken validatedToken);
      }
      catch (Exception)
      {
        return null;
      }
      return claims;
    }
    private static string GetAuthenticationToken(string resultContent)
    {
      JObject jo = JObject.Parse(resultContent);
      if (!(
        jo.TryGetValue("authentication_token", out JToken jt) ||
        jo.TryGetValue("id_token", out jt)))
      {
        throw new Exception();
      }
      string result2 = (string)jt;
      return result2;
    }

    private static SymmetricSecurityKey CreateJwtSigKey(string clientSecret)
    {
      byte[] byteKey = Encoding.UTF8.GetBytes(clientSecret + "JWTSig");
      var sha256 = SHA256.Create();
      var hashedkey = sha256.ComputeHash(byteKey);
      return new SymmetricSecurityKey(hashedkey);
    }

    private static async Task<OpenIdConnectConfiguration> OpenIdConnectConfiguration(string address)
    {
      IConfigurationManager<OpenIdConnectConfiguration> configurationManager =
        new ConfigurationManager<OpenIdConnectConfiguration>(
          address + "/.well-known/openid-configuration", new OpenIdConnectConfigurationRetriever());
      OpenIdConnectConfiguration openIdConfig =
        await configurationManager.GetConfigurationAsync(CancellationToken.None);
      return openIdConfig;
    }

    private static AccessToken CreateAccessToken(int userId, bool isAdmin, string name)
    {
      var claims = new List<Claim>();

      if (isAdmin)
        claims.Add(new Claim("roles", "admin"));

      claims.Add(new Claim("roles", "user"));
      claims.Add(new Claim("userid", userId.ToString()));
      claims.Add(new Claim("name", name));

      var signing = new SigningCredentials(new SymmetricSecurityKey(new byte[32]), SecurityAlgorithms.HmacSha256);

      var jwt = new JwtSecurityToken(
        issuer: "theIssuer",
        audience: "theAudience",
        claims: claims,
        notBefore: DateTime.UtcNow,
        expires: DateTime.UtcNow + TimeSpan.FromHours(24),
        signingCredentials: signing);


      string encodedJwt = new JwtSecurityTokenHandler().WriteToken(jwt);
      return new AccessToken { Access_token = encodedJwt };
    }
  }
}
