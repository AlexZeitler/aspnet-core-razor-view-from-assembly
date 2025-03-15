using Microsoft.AspNetCore.Mvc;

namespace RazorLibrary.Features.AddNewCustomer;

public class AddNewCustomerController : Controller
{
  [HttpGet("/customers")]
  public IActionResult AddNewCustomer() => View();
  
  [HttpGet("/customers/get-test-form")]
  public IActionResult GetTestForm() => PartialView("GetTestForm");
}
