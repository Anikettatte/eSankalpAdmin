$(document).ready(function () {
    GetapplicationList();
});

var AddApplication = function () {
    $("#AddapplicationModal").modal('show');

    window.onload = function () {
        document.getElementById("txtName").focus();
    }
}


var Saveapplication = function () {
    debugger
    $formData = new FormData();
    var Image = document.getElementById('file1');
    if (Image.files.length > 0) {
        for (var i = 0; i < Image.files.length; i++) {
            $formData.append('file1-' + i, Image.files[i]);
        }
    }
    var applications_id = $("#hdnid").val();
    var registration_id = $("#txtRegistrationId").val();
    var name_of_trainee = $("#txtName").val();
    var qualification = $("#ddlQualification").val();
    var mobile = $("#txtMobile").val();
    var emailid = $("#txtEmailId").val();
    var date_of_birth = $("#txtDate").val();
    var address = $("#txtAddress").val();
    var state = $("#txtState").val();
    var city = $("#txtCity").val();
    var pincode = $("#txtPincode").val();
    var select_trainee = $("#ddlselect_training").val();
    var totalfees = $("#txtTotal").val();
    var discount = $("#txtDiscount").val();
    var joining_date = $("#txtJoining").val();
    var advance_paid = $("#txtAdvance").val();
    var on_dated = $("#txtOnDated").val();
    var remaining_amount = $("#txtRemaining").val();
    var created_date = $("#txtCreatedDate").val();
    var created_by = $("#txtCreatedBy").val();
    var update_date = $("#txtUpdateDate").val();
    var updated_by = $("#txtUpdateBy").val();    
    if ($("#txtActive").is(":checked")) {
        checkbox = true;
    }
    else {
        checkbox = false;
    }
    var active = checkbox;
    var image = $("#file1").val();

    $formData.append('Applications_Id', applications_id);
    $formData.append('Registration_Id', registration_id);
    $formData.append('Name_Of_Trainee', name_of_trainee);
    $formData.append('Qualification', qualification);
    $formData.append('Mobile', mobile);
    $formData.append('EmailId', emailid);
    $formData.append('Date_Of_Birth', date_of_birth);
    $formData.append('Address', address);
    $formData.append('State', state);
    $formData.append('City', city);
    $formData.append('Pincode', pincode);
    $formData.append('Select_Trainee', select_trainee);
    $formData.append('Totalfees', totalfees);
    $formData.append('Discount', discount);
    $formData.append('Joining_date', joining_date);
    $formData.append('Advance_Paid', advance_paid);
    $formData.append('On_Dated', on_dated);
    $formData.append('Remaining_Amount', remaining_amount);
    $formData.append('Created_Date', created_date);
    $formData.append('Created_By', created_by);
    $formData.append('Update_Date', update_date);
    $formData.append('Updated_By', updated_by);
    $formData.append('Active', active);
    $formData.append('image', image);
   
    $.ajax({
        url: "/application/Saveapplication",
        method: "post",
        data: $formData,
        contentType: "application/json;charset=utf-8",
        contentType: false,
        processData: false,
        async: false,
        success: function (response) {
            location.reload();
            alert(response.Message);
        }
    });
}
var GetapplicationList = function () {
    $.ajax({
        url: "/application/GetapplicationList",
        method: "post",
        contentType: "appliaction/json;charset=utf-8",
        datatype: "json",
        async: false,
        success: function (response) {
            var html = "";
            $("#tblapplication tbody").empty();
            $.each(response.model, function (index, elementValue) {
                html += "<tr><td>" + elementValue.Applications_Id +
                    "</td><td>" + elementValue.Registration_Id +
                    "</td><td>" + elementValue.Name_Of_Trainee +
                    "</td><td>" + elementValue.Qualification +
                    "</td><td>" + elementValue.Mobile +
                    "</td><td>" + elementValue.EmailId +
                    "</td><td>" + elementValue.Date_Of_Birth +
                    "</td><td>" + elementValue.Address +
                    "</td><td>" + elementValue.State +
                    "</td><td>" + elementValue.City +
                    "</td><td>" + elementValue.Pincode +
                    "</td><td>" + elementValue.Select_Trainee +
                    "</td><td>" + elementValue.Totalfees +
                    "</td><td>" + elementValue.Discount +
                    "</td><td>" + elementValue.Joining_Date +
                    "</td><td>" + elementValue.Advance_Paid +
                    "</td><td>" + elementValue.On_Dated +
                    "</td><td>" + elementValue.Remaining_Amount +
                    "</td><td>" + elementValue.Created_Date +
                    "</td><td>" + elementValue.Created_By +
                    "</td><td>" + elementValue.Update_Date +
                    "</td><td>" + elementValue.Updated_By +
                    "</td><td>" + elementValue.Active +
                    "</td><td><img src='../Content/Img/" + elementValue.image + "' style='max-width:100px;max-height:80px;' />" +
                    "</td><td><button type='button' class='btn btn-success' value='Edit' onclick='Editapplication(" + elementValue.Applications_Id + ")'><i class='bi bi-pencil-square'></i></button></td><td><button type='button' class='btn btn-danger' value='delete' onclick='deleteapplication(" + elementValue.Applications_Id + ")'><i class='bi bi-trash-fill'></i></button></td><td><button type='button' class='btn btn-warning' value='Detail' onclick='applicationDetail(" + elementValue.Applications_Id + ")'><i class='bi bi-eye-fill'></i></button><button type='button' class='btn btn-danger btn-sm' onclick='InvoiceDetails(" + elementValue.Applications_Id + ")'><i class='bi bi-printer' aria-hidden='true'></i></button></td></tr>";
            })
            $("#tblapplication tbody").append(html);
        }
    });
}
var Editapplication = function (Applications_Id) {
    var model = { Applications_Id: Applications_Id };
    $.ajax({

        url: "/application/Editapplication",
        method: "post",
        data: JSON.stringify(model),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (response) {
            $("#AddapplicationModal").modal('show');

            $("#hdnid").val(response.model.Applications_Id);
            $("#txtRegistrationId").val(response.model.Registration_Id);
            $("#txtName").val(response.model.Name_Of_Trainee);
            $("#ddlQualification").val(response.model.Qualification);
            $("#txtMobile").val(response.model.Mobile);
            $("#txtEmailId").val(response.model.EmailId);
            $("#txtDate").val(response.model.Date_Of_Birth);
            $("#txtAddress").val(response.model.Address);
            $("#txtState").val(response.model.State);
            $("#txtCity").val(response.model.City);
            $("#txtPincode").val(response.model.Pincode);
            $("#ddlselect_training").val(response.model.Select_Trainee);
            $("#txtTotal").val(response.model.Totalfees);
            $("#txtDiscount").val(response.model.Discount);
            $("#txtJoining").val(response.model.Joining_Date);
            $("#txtAdvance").val(response.model.Advance_Paid);
            $("#txtOnDated").val(response.model.On_Dated);
            $("#txtRemaining").val(response.model.Remaining_Amount);
            $("#txtCreatedDate").val(response.model.Created_Date);
            $("#txtCreatedBy").val(response.model.Created_By);
            $("#txtUpdateDate").val(response.model.Update_Date);
            $("#txtUpdateBy").val(response.model.Updated_By);
            $("#txtActive").val(response.model.Active);
            $("#file1").val(response.model.image);           


        }
    });
}
var deleteapplication = function (Applications_Id) {
    var model = { Applications_Id: Applications_Id };
    $.ajax({
        url: "/application/deleteapplication",
        method: "post",
        data: JSON.stringify(model),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (response) {
            alert("Record Deleted Successfully");
        }
    });
}

var application = function (Applications_Id) {
    window.location.href = "/application/Index?Applications_Id=" + Applications_Id + "&isPrint=false";
}
var applicationPrint = function (Applications_Id) {
    window.location.href = "/application/Index?Applications_Id=" + Applications_Id + "&isPrint=true";
}

var applicationDetail = function (Applications_Id) {
    debugger;
    var model = { Applications_Id: Applications_Id }
    $.ajax({
        url: "/application/Detailapplication",
        method: "post",
        data: JSON.stringify(model),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (response) {
            $("#applicationModal").modal('show');

            $("#Detailapplication").empty();

            var html = "";
            html += "<div class='row'>";
            html += "<div class='col-sm-6'>";
            html += "<b>Applications_Id:</b>&nbsp&nbsp&nbsp<span>" + response.model.Applications_Id + "</span>";
            html += "</br>";
            html += "<b>Registration_Id:</b>&nbsp&nbsp&nbsp<span>" + response.model.Registration_Id + "</span>";
            html += "</br>";
            html += "<b>Name_Of_Trainee:</b>&nbsp&nbsp&nbsp<span>" + response.model.Name_Of_Trainee + "</span>";
            html += "</br>";
            html += "<b>Qualification:</b>&nbsp&nbsp&nbsp<span>" + response.model.Qualification + "</span>";
            html += "</br>";
            html += "<b>Mobile:</b>&nbsp&nbsp&nbsp<span>" + response.model.Mobile + "</span>";
            html += "</br>";
            html += "<b>EmailId:</b>&nbsp&nbsp&nbsp<span>" + response.model.EmailId + "</span>";
            html += "</br>";
            html += "<b>Date_Of_Birth:</b>&nbsp&nbsp&nbsp<span>" + response.model.Date_Of_Birth + "</span>";
            html += "</br>";
            html += "<b>Address:</b>&nbsp&nbsp&nbsp<span>" + response.model.Address + "</span>";
            html += "</br>";
            html += "<b>State:</b>&nbsp&nbsp&nbsp<span>" + response.model.State + "</span>";
            html += "</br>";
            html += "<b>City:</b>&nbsp&nbsp&nbsp<span>" + response.model.City + "</span>";
            html += "</br>";
            html += "<b>Pincode:</b>&nbsp&nbsp&nbsp<span>" + response.model.Pincode + "</span>";
            html += "</br>";
            html += "<b>Select_Trainee:</b>&nbsp&nbsp&nbsp<span>" + response.model.Select_Trainee + "</span>";
            html += "</br>";
            html += "<b>Totalfees:</b>&nbsp&nbsp&nbsp<span>" + response.model.Totalfees + "</span>";
            html += "</br>";
            html += "<b>Discount:</b>&nbsp&nbsp&nbsp<span>" + response.model.Discount + "</span>";
            html += "</br>";
            html += "<b>Joining_Date:</b>&nbsp&nbsp&nbsp<span>" + response.model.Joining_Date + "</span>";
            html += "</br>";
            html += "<b>Advance_Paid:</b>&nbsp&nbsp&nbsp<span>" + response.model.Advance_Paid + "</span>";
            html += "</br>";
            html += "<b>On_Dated:</b>&nbsp&nbsp&nbsp<span>" + response.model.On_Dated + "</span>";
            html += "</br>";
            html += "<b>Remaining_Amount:</b>&nbsp&nbsp&nbsp<span>" + response.model.Remaining_Amount + "</span>";
            html += "</br>";
            html += "<b>Created_Date:</b>&nbsp&nbsp&nbsp<span>" + response.model.Created_Date + "</span>";
            html += "</br>";
            html += "<b>Created_By:</b>&nbsp&nbsp&nbsp<span>" + response.model.Created_By + "</span>";
            html += "</br>";
            html += "<b>Update_Date:</b>&nbsp&nbsp&nbsp<span>" + response.model.Update_Date + "</span>";
            html += "</br>";
            html += "<b>Updated_By:</b>&nbsp&nbsp&nbsp<span>" + response.model.Updated_By + "</span>";
            html += "</div>";
            html += "<div class='col-sm-6'>";
            html += "<b>Active:</b>&nbsp&nbsp&nbsp<span>" + response.model.Active + "</span>";
            html += "</br>";
            html += "<b>image:</b>&nbsp&nbsp&nbsp<span><img src='../Content/Img/" + response.model.image + "'style='width:150px;height:180px;'/> </span > ";
            html += "</br>";
            html += "</div>";
            html += "</div>";

            $("#Detailapplication").append(html);
        }
    });
};
var InvoiceDetails = function (Applications_Id) {
    debugger
    var Applications_Id = $("#hdnid").val();
    var model = {
        Applications_Id: Applications_Id
    };
    $.ajax({
        url: "/application/applicationDetails",
        method: "post",
        data: JSON.stringify(model),
        contentType: "application/json;charset=utf-8",
        dataType: "json",
        async: false,
        success: function (response) {
            $("#hdnid").text(response.Message.Applications_Id);
            $("#txtRegistrationId").text(response.Message.Registration_Id);
            $("#txtName").text(response.Message.Name_Of_Trainee);
            $("#ddlQualification").text(response.Message.Qualification);
            $("#txtMobile").text(response.Message.Mobile);
            $("#txtEmailId").text(response.Message.EmailId);
            $("#txtDate").text(response.Message.Date_Of_Birth);
            $("#txtAddress").text(response.Message.Address);
            $("#txtState").text(response.Message.State);
            $("#txtCity").text(response.Message.City);
            $("#txtPincode").text(response.Message.Pincode);
            $("#ddlselect_training").text(response.Message.Select_Trainee);
            $("#txtTotal").text(response.Message.Totalfees);
            $("#txtDiscount").text(response.Message.Discount);
            $("#txtJoining").text(response.Message.Joining_Date);
            $("#txtAdvance").text(response.Message.Advance_Paid);
            $("#txtOnDated").text(response.Message.On_Dated);
            $("#txtRemaining").text(response.Message.Remaining_Amount);
            $("#txtCreatedDate").text(response.Message.Created_Date);
            $("#txtCreatedBy").text(response.Message.Created_By);
            $("#txtUpdateDate").text(response.Message.Update_Date);
            $("#txtUpdateBy").text(response.Message.Updated_By);
            $("#txtActive").text(response.Message.Active);
            $("#file1").text(response.Message.image)
        }
    });
   
}

function printDiv(Applications_Id) {
    var printContents = document.getElementById(Applications_Id).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.focus();
    window.print();
    document.body.innerHTML = originalContents;
    window.location.href = "/application/Index?=";
}


