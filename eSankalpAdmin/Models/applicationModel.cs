using eSankalpAdmin.Data;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace eSankalpAdmin.Models
{
    public class applicationModel
    {
        public int Applications_Id { get; set; }
        public Nullable<int> Registration_Id { get; set; }
        public string Name_Of_Trainee { get; set; }
        public string Qualification { get; set; }
        public string Mobile { get; set; }
        public string EmailId { get; set; }
        public Nullable<System.DateTime> Date_Of_Birth { get; set; }
        public string Address { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public string Pincode { get; set; }
        public string Select_Trainee { get; set; }
        public Nullable<decimal> Totalfees { get; set; }
        public string Discount { get; set; }
        public Nullable<System.DateTime> Joining_Date { get; set; }
        public Nullable<decimal> Advance_Paid { get; set; }
        public Nullable<System.DateTime> On_Dated { get; set; }
        public Nullable<decimal> Remaining_Amount { get; set; }
        public Nullable<System.DateTime> Created_Date { get; set; }
        public Nullable<int> Created_By { get; set; }
        public Nullable<System.DateTime> Update_Date { get; set; }
        public Nullable<int> Updated_By { get; set; }
        public Nullable<bool> Active { get; set; }
        public string image { get; set; }
        public string Saveapplication(HttpPostedFileBase fb, applicationModel model)
        {

            string msg = "Save";
            EsankalpadminEntities Db = new EsankalpadminEntities();
            string filepath = "";
            string fileName = "";
            string sysFileName = "";
            if (fb != null && fb.ContentLength > 0)
            {
                filepath = HttpContext.Current.Server.MapPath("../Content/Img/");
                DirectoryInfo di = new DirectoryInfo(filepath);
                if (!di.Exists)
                {
                    di.Create();

                }
                fileName = fb.FileName;
                sysFileName = DateTime.Now.ToFileTime().ToString() + Path.GetExtension(fb.FileName);
                fb.SaveAs(filepath + "//" + sysFileName);
                if (!string.IsNullOrWhiteSpace(fb.FileName))
                {
                    string afileName = HttpContext.Current.Server.MapPath("../Content/Img/") + "/" + sysFileName;
                }
            }
            if (model.Applications_Id == 0)
            {
                var applicationData = new tblapplication()
                {
                    Applications_Id = model.Applications_Id,
                    Registration_Id = model.Registration_Id,
                    Name_Of_Trainee = model.Name_Of_Trainee,
                    Qualification = model.Qualification,
                    Mobile = model.Mobile,
                    EmailId = model.EmailId,
                    Date_Of_Birth = model.Date_Of_Birth,
                    Address = model.Address,
                    State = model.State,
                    City = model.City,
                    Pincode = model.Pincode,
                    Select_Trainee = model.Select_Trainee,
                    Totalfees = model.Totalfees,
                    Discount = model.Discount,
                    Joining_Date = model.Joining_Date,
                    Advance_Paid = model.Advance_Paid,
                    On_Dated = model.On_Dated,
                    Remaining_Amount = model.Remaining_Amount,
                    Created_Date = model.Created_Date,
                    Created_By = model.Created_By,
                    Update_Date = model.Update_Date,
                    Updated_By = model.Updated_By,
                    Active = model.Active,
                    image = sysFileName

                };
                Db.tblapplications.Add(applicationData);
                Db.SaveChanges();
                msg = "Data Saved";
            }
            else
            {
                var applicationData = Db.tblapplications.Where(p => p.Applications_Id == model.Applications_Id).FirstOrDefault();
                if (applicationData != null)
                {
                    applicationData.Applications_Id = model.Applications_Id;
                    applicationData.Registration_Id = model.Registration_Id;
                    applicationData.Name_Of_Trainee = model.Name_Of_Trainee;
                    applicationData.Qualification = model.Qualification;
                    applicationData.Mobile = model.Mobile;
                    applicationData.EmailId = model.EmailId;
                    applicationData.Date_Of_Birth = model.Date_Of_Birth;
                    applicationData.Address = model.Address;
                    applicationData.State = model.State;
                    applicationData.City = model.City;
                    applicationData.Pincode = model.Pincode;
                    applicationData.Select_Trainee = model.Select_Trainee;
                    applicationData.Totalfees = model.Totalfees;
                    applicationData.Discount = model.Discount;
                    applicationData.Joining_Date = model.Joining_Date;
                    applicationData.Advance_Paid = model.Advance_Paid;
                    applicationData.On_Dated = model.On_Dated;
                    applicationData.Remaining_Amount = model.Remaining_Amount;
                    applicationData.Created_Date = model.Created_Date;
                    applicationData.Created_By = model.Created_By;
                    applicationData.Update_Date = model.Update_Date;
                    applicationData.Updated_By = model.Updated_By;
                    applicationData.Active = model.Active;
                    applicationData.image = sysFileName;
                };
                Db.SaveChanges();
                msg = "Updated Successfully";

            }
            return msg;



        }


        public List<applicationModel> GeapplicationList()
        {
            EsankalpadminEntities db = new EsankalpadminEntities();
            List<applicationModel> lstapplication = new List<applicationModel>();
            var applicationData = db.tblapplications.ToList();
            if (applicationData != null)
            {
                foreach (var apply in applicationData)
                {
                    lstapplication.Add(new applicationModel()
                    {
                        Applications_Id = apply.Applications_Id,
                        Registration_Id = apply.Registration_Id,
                        Name_Of_Trainee = apply.Name_Of_Trainee,
                        Qualification = apply.Qualification,
                        Mobile = apply.Mobile,
                        EmailId = apply.EmailId,
                        Date_Of_Birth = apply.Date_Of_Birth,
                        Address = apply.Address,
                        State = apply.State,
                        City = apply.City,
                        Pincode = apply.Pincode,
                        Select_Trainee = apply.Select_Trainee,
                        Totalfees = apply.Totalfees,
                        Discount = apply.Discount,
                        Joining_Date = apply.Joining_Date,
                        Advance_Paid = apply.Advance_Paid,
                        On_Dated = apply.On_Dated,
                        Remaining_Amount = apply.Remaining_Amount,
                        Created_Date = apply.Created_Date,
                        Created_By = apply.Created_By,
                        Update_Date = apply.Update_Date,
                        Updated_By = apply.Updated_By,
                        Active = apply.Active,
                        image = apply.image
                    });
                }
            }
            return lstapplication;
        }
        public applicationModel Editapplication(int Applications_Id)
        {
            
            applicationModel model = new applicationModel();
            EsankalpadminEntities db = new EsankalpadminEntities();
            var applicationData = db.tblapplications.Where(p => p.Applications_Id == Applications_Id).FirstOrDefault();
            if (applicationData != null)
            {
                model.Applications_Id = applicationData.Applications_Id;
                model.Registration_Id = applicationData.Registration_Id;
                model.Name_Of_Trainee = applicationData.Name_Of_Trainee;
                model.Qualification = applicationData.Qualification;
                model.Mobile = applicationData.Mobile;
                model.EmailId = applicationData.EmailId;
                model.Date_Of_Birth = applicationData.Date_Of_Birth;
                model.Address = applicationData.Address;
                model.State = applicationData.State;
                model.City = applicationData.City;
                model.Pincode = applicationData.Pincode;
                model.Select_Trainee = applicationData.Select_Trainee;
                model.Totalfees = applicationData.Totalfees;
                model.Discount = applicationData.Discount;
                model.Joining_Date = applicationData.Joining_Date;
                model.Advance_Paid = applicationData.Advance_Paid;
                model.On_Dated = applicationData.On_Dated;
                model.Remaining_Amount = applicationData.Remaining_Amount;
                model.Created_Date = applicationData.Created_Date;
                model.Created_By = applicationData.Created_By;
                model.Update_Date = applicationData.Update_Date;
                model.Updated_By = applicationData.Updated_By;
                model.Active = applicationData.Active;
                model.image = applicationData.image;



            };
            return model;
        }
        public string deleteapplication(int Applications_Id)
        {
            string msg = "";
            EsankalpadminEntities db = new EsankalpadminEntities();
            var applicationData = db.tblapplications.Where(p => p.Applications_Id == Applications_Id).FirstOrDefault();
            if (applicationData != null)
            {
                db.tblapplications.Remove(applicationData);
            };
            db.SaveChanges();
            msg = "Record delete";
            return msg;
        }




    }
}

    
