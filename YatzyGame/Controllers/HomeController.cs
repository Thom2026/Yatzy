using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace YatzyGame.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Login()
        {
            return View();
        }

        public ActionResult Game()
        {
            ViewBag.Message = "Game page";

            return View();
        }

        public ActionResult Score()
        {
            ViewBag.Message = "Score page";

            return View();
        }
        public ActionResult MainPage()
        {
            return View();
        }
    }
}