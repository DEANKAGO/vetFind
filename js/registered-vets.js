import { Veterinarian } from "./vet.js";

$(document).ready(function () {
  $("#selectCountyOfVets").on("change",function () {
    let countyLocation = $(this).val();
    console.log(countyLocation);

    
    // alert("Here are the vets in " + countyLocation);

    let vetsByCounty = Veterinarian.getVetsByCounty(countyLocation);
    console.log(vetsByCounty);

    if(vetsByCounty.length > 0){
      vetsByCounty.forEach(function(vet){
        $("#registeredVetsResults").append(
          `<tr><td>${vet.profile._fullName}</td><td>${
            vet.profile.serviceArea.location
          }</td><td>${vet.profile.specialization.animals.join()}</td>
          <td>${
            vet.phoneNumber
          }</td></tr>`
        );
      });
    } else {
      $("table#topSearchResults").hide();
      $(".registeredVets").append(
        `<div class='col-12 col-md-8 mx-auto alert alert-warning' role='alert'>No vets found</div>`
      );
    }
  });
});