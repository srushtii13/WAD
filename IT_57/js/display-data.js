$(document).ready(function () {
  getData();
});

function getData() {
  let localStorageData = localStorage.getItem("patient");
  let patientObj = JSON.parse(localStorageData);
  console.log(patientObj);
  $("#Pid").text(patientObj.Pid);
  $("#firstName").text(patientObj.firstName);
  $("#lastName").text(patientObj.lastName);
  $("#dob").text(patientObj.dob);
  $("#gender").text(patientObj.gender);
  $("#age").text(patientObj.age);
  $("#contactNo").text(patientObj.contactNo);
  $("#disease").text(patientObj.disease);
  $("#registrationDate").text(patientObj.registrationDate);
  $("#address").text(patientObj.address);
  $("#typeofDoctor").text(patientObj.typeofDoctor);
}
