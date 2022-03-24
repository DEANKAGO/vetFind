import {Veterinarian} from './vet.js';
import {database} from './database.js';
import {NormalUser} from './normal-user.js';

// Login a vet and update their profile
if(Veterinarian.login("user1@gmail.com","12345678").auth){
  console.log("You are logged in");
} else {
  console.log("These credentials do not exist in the DB");
}

// Login a vet and update their profile
if(Veterinarian.login("user2@gmail.com","12345678").auth){
  console.log("You are logged in");
} else {
  console.log("These credentials do not exist in the DB");
}

// Login a normal user and update their profile
if(NormalUser.login("user10@gmail.com", "12345678").auth){
  console.log("You are logged in");
} else {
  console.log("These credentials do not exist in the DB");
}

// Log database data
console.log(database.getDatabase());

// Log vets based on a county
console.log(Veterinarian.getVetsByCounty("Nairobi"));
// Log vets based on the animal
console.log(Veterinarian.getVetsByAnimal("Livestock"));
// Log vets based on a county and animal
console.log(Veterinarian.getVetsByCountyAndAnimal("Horses", "Nairobi"));