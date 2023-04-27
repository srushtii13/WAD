$(document).ready(function(){
    $("#btnAddPatient").click(function () {
        //collect patient data from patient form
        function getPatientData() {
          let date = new Date($("#dob").val());
          day = date.getDate();
          month = date.getMonth() + 1; //jan - 0, feb-1, ...dec-11
          year = date.getFullYear();
          let dob = [day, month, year].join("/"); //28/01/2022
    
          let selectedDate = new Date($("#registrationDate").val());
          day = selectedDate.getDate();
          month = date.getMonth() + 1;
          year = date.getFullYear();
          let registrationDate = [day, month, year].join("/");
    
          let patient = {
            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            dob: dob,
            gender: $("input[name='gender']:checked").val(),
            age: $("#age").val(),
            contactNo: $("#contactNo").val(),
            disease: $("#sub").find(":selected").text(),
            Pid: $("#Pid").val(),
            registrationDate: registrationDate,
            typeofDoctor: $("#typeofDoctor").val(),
          };
          $("#patientForm")[0].reset();
          return patient;
        }
    })
})

        
         //store patient data to localStorage AJAX
    function storeDataToLocalStorage() {
        if (!localStorage.getItem("patient")) {
          localStorage.setItem("patient", JSON.stringify(getPatientData()));
        } else {
          localStorage.removeItem("patient");
          localStorage.setItem("patient", JSON.stringify(getPatientData()));
        }
    }
