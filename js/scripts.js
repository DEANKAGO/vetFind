import { Veterinarian } from "./vet.js";

// Fetching Records on Homepage
$(document).ready(function () {
  // Fetch user inputs and return vet records
  $("#searchTopVets").submit(function (e) {
    e.preventDefault();

    var animalCategory = $("#animalCategory").val();
    var countyLocation = $("#countyLocation").val();

    console.log(animalCategory + " " + countyLocation);

    // Read from data store
    $(".vetSearchResults").toggle(2000);

    let vetsByCountyAndAnimal = Veterinarian.getVetsByCountyAndAnimal(
      animalCategory,
      countyLocation
    );
    console.log(vetsByCountyAndAnimal);

    // Return vets based on county and animal
    if (vetsByCountyAndAnimal.length > 0) {
      vetsByCountyAndAnimal.forEach(function (vet) {
        $("#registeredVetsResults").append(
          `<tr class='resultRow'><td>${vet.profile._fullName}</td><td>${
            vet.profile.serviceArea.location
          }</td><td>${vet.profile.specialization.animals.join()}</td><td>${
            vet.phoneNumber
          }</td></tr>`
        );
      });
    } else {
      $("#topSearchResults").hide();
      $("button#moreResults").hide();
      $(".vetSearchResults").append(
        `<div class='col-12 col-md-8 mx-auto alert alert-warning' role='alert'>No vets found</div>`
      );
    }
  });
});


