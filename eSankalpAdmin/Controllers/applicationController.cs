using eSankalpAdmin.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace eSankalpAdmin.Controllers
{
    public class applicationController : Controller
    {
        // GET: application
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult applicationdetailsindex()
        {
            return View();
        }
        public ActionResult applicationlist()
        {
            return View();
        }
        public ActionResult Saveapplication(applicationModel model)
        {

            try
            {
                HttpPostedFileBase fb = null;
                for (int i = 0; i < Request.Files.Count; i++)
                {
                    fb = Request.Files[i];
                }
                return Json(new { message = new applicationModel().Saveapplication(fb, model) }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { model = ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult GetapplicationList()
        {
            try
            {
                return Json(new { model = (new applicationModel().GeapplicationList()) }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult Editapplication(int Applications_Id)
        {
            try
            {
                return Json(new { model = (new applicationModel().Editapplication(Applications_Id)) },
               JsonRequestBehavior.AllowGet);
            }
            catch (Exception Ex)
            {
                return Json(new { Ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult deleteapplication(int Applications_Id)
        {
            try
            {
                return Json(new { model = (new applicationModel().deleteapplication(Applications_Id)) },
               JsonRequestBehavior.AllowGet);
            }
            catch (Exception Ex)
            {
                return Json(new { Ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult Detailapplication(int Applications_Id)
        {
            try
            {
                return Json(new { model = new applicationModel().Editapplication(Applications_Id) }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }
        public ActionResult applicationDetails(int Applications_Id)
        {
            try
            {
                return Json(new { model = new applicationModel().Editapplication(Applications_Id) }, JsonRequestBehavior.AllowGet);
            }
            catch (Exception ex)
            {
                return Json(new { ex.Message }, JsonRequestBehavior.AllowGet);
            }
        }






    }
}