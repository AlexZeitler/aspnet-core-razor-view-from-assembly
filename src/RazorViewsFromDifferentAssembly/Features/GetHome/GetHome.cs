using Microsoft.AspNetCore.Mvc;

namespace RazorViewsFromDifferentAssembly.Features.GetHome;

public class GetHomeController(ILogger<GetHomeController> logger) : Controller
{
  private readonly ILogger<GetHomeController> _logger = logger;

  public IActionResult GetHome() => View();
  
  [HttpGet("/home/get-test-form")]
  public IActionResult GetTestForm() => PartialView("GetTestForm");
}
