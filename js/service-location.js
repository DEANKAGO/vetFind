import { Veterinarian } from "./vet.js";

$(document).ready(function () {
  $(".county-location").click(function () {
    let countyLocation = $(this).attr("id");
    $("#selectedLocation").text(countyLocation);
    console.log(countyLocation);
    // alert("Here are the vets in " + countyLocation);

    let vetsByCounty = Veterinarian.getVetsByCounty(countyLocation);
    console.log(vetsByCounty);

    if(vetsByCounty.length > 0){
      vetsByCounty.forEach(function(vet){
        $("#results-by-county").append(
          `<tr class='resultRow'><td>${vet.profile._fullName}</td><td>${
            vet.profile.serviceArea.location
          }</td><td>${vet.profile.specialization.animals.join()}</td>
          <td>${
            vet.phoneNumber
          }</td></tr>`
        );
      });
    } else {
      $("table").hide();
      $(".registered-vets").append(
        `<div class='col-12 col-md-8 mx-auto alert alert-warning' role='alert'>No vets found</div>`
      );
    }
  });
});