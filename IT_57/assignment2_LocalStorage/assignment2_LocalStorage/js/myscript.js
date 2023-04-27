$(document).ready(function () {
  // getData();

  
  $("#btnAddPatient").click(function () {
    //collect student data from student form
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

      let student = {
        firstName: $("#firstName").val(),
        lastName: $("#lastName").val(),
        dob: dob,
        gender: $("input[name='gender']:checked").val(),
        age: $("#age").val(),
        contactNo: $("#contactNo").val(),
        disease: $("#sub").find(":selected").text(),
        Pid: $("#Pid").val(),
        registrationDate: registrationDate,
        address: $("#address").val(),
        typeofDoctoro: $("#typeofDoctor").val(),
      };
      $("#patientForm")[0].reset();
      return patient;
    }

    //store patient data to localStorage
    function storeDataToLocalStorage() {
      if (!localStorage.getItem("patient")) {
        localStorage.setItem("patient", JSON.stringify(getPatientData()));
      } else {
        localStorage.removeItem("patient");
        localStorage.setItem("patient", JSON.stringify(getPatientData()));
      }
    }

    //send data to server with AJAX request
    function sendData() {
      let xhr = new XMLHttpRequest();
      let data = JSON.stringify(getPatientData());
      xhr.open("POST", "http://localhost:4000/storedata",true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(data); 
    }

    //call storeDataToLocalStorage and sendData functions
    storeDataToLocalStorage();
    // sendData();
      window.location.href="display-data.html"
  });
});

// function getData() {
  // let localStorageData = localStorage.getItem("patient");
  // let patientObj = JSON.parse(localStorageData);
  // console.log(patientObj);
  // $("#Pid").text(patientObj.Pid);
  // $("#firstName").text(patientObj.firstName);
  // $("#lastName").text(patientObj.lastName);
  // $("#dob").text(patientObj.dob);
  // $("#gender").text(patientObj.gender);
  // $("#age").text(patientObj.age);
  // $("#contactNo").text(patientObj.contactNo);
  // $("#disease").text(patientObj.disease);
  // $("#registrationDate").text(patientObj.registrationDate);
  // $("#address").text(patientObj.address);
  // $("#parentContactNo").text(patientObj.parentMobileNo);
// }