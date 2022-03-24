import {Veterinarian} from './vet.js';
import { NormalUser } from './normal-user.js';
import {NormalUserProfile} from './normal-user-profile.js';
import {VetProfile} from './vet-profile.js';

// Sign up vets
Veterinarian.signUp("user1@gmail.com", "12345678", "0119882726", "user1");
Veterinarian.signUp("user2@gmail.com", "12345678", "0119882729", "user2");
Veterinarian.signUp("user5@gmail.com", "12345678", "0119882726", "user5");
Veterinarian.signUp("user6@gmail.com", "12345678", "0119892726", "user6");
Veterinarian.signUp("user7@gmail.com", "12345678", "0119812728", "user7");
Veterinarian.signUp("user8@gmail.com", "12345678", "0109212728", "user8");
Veterinarian.signUp("user9@gmail.com", "12345678", "0119812928", "user9");
Veterinarian.signUp("user13@gmail.com", "12345678", "0119882726", "user13");
Veterinarian.signUp("user14@gmail.com", "12345678", "0119862727", "user14");
Veterinarian.signUp("user15@gmail.com", "12345678", "0119852726", "user15");
Veterinarian.signUp("user16@gmail.com", "12345678", "0119482726", "user16");
Veterinarian.signUp("user17@gmail.com", "12345678", "0119472726", "user17");
Veterinarian.signUp("user18@gmail.com", "12345678", "0149482726", "user18");

// Sign up Normal users
NormalUser.signUp("user10@gmail.com", "12345678", "", "user10");
NormalUser.signUp("user11@gmail.com", "12345678", "", "user11");
NormalUser.signUp("user12@gmail.com", "12345678", "","user12");

// Add profile data for vets

Veterinarian.login("user1@gmail.com","12345678").current.addProfileData(
  new VetProfile("Jack", "Doe", {
      animals: ["Dog", "Horses", "Livestock", "Cat"],
      services: ["Microchipping", "Equine services", "Farm veterinarian", "Puppy exam", "Grooming and Boarding"]
    }, "2000.00 Ksh", {
      location: "Embakasi",
      county: "Nairobi",
      vetHospital: "Noble Veterinary Services"
    }, 5)
);

Veterinarian.login("user2@gmail.com","12345678").current.addProfileData(
  new VetProfile("Jenny", "Doe", {
      animals: ["Dog", "Horses", "Livestock", "Cat", "Fish", "Birds", "Reptiles"],
      services: ["Microchipping", "Equine services", "Pet surgery", "Exotic Animals", "Puppy Exam", "Grooming and Boarding"]
    }, "1800.00 Ksh", {
      location: "Ruiru",
      county: "Thika",
      vetHospital: "HD Veterinary Services"
    }, 3)
);

Veterinarian.login("user5@gmail.com", "12345678").current.addProfileData(
  new VetProfile("Lucy", "Doe", {
      animals: ["Dog", "Horses", "Livestock", "Cat"],
      services: ["Microchipping", "Equine services", "Farm veterinarian", "Vaccination"]
    }, "1200.00 Ksh", {
      location: "Ngara",
      county: "Nairobi",
      vetHospital: "Unique Veterinary Services"
    }, 4)
);

Veterinarian.login("user6@gmail.com", "12345678").current.addProfileData(
  new VetProfile("Hunter", "Doe", {
      animals: ["Dog", "Cat", "Poultry"],
      services: ["Microchipping", "Pet surgery", "Puppy exam", "Routine Exam", "Grooming and Boarding"]
    }, "1500.00 Ksh", {
      location: "Gilgil",
      county: "Nakuru",
      vetHospital: "HD Veterinary Services"
    }, 3)
);

Veterinarian.login("user7@gmail.com", "12345678").current.addProfileData(
  new VetProfile("Nelson", "Doe", {
      animals: ["Dog", "Horses", "Cat", "Fish", "Birds", "Reptiles"],
      services: ["Microchipping", "Equine services", "Puppy Exam", "Exotic Animals", "Grooming and Boarding"]
    }, "1100.00 Ksh", {
      location: "Watamu",
      county: "Mombasa",
      vetHospital: "Noble Veterinary Services"
    }, 4)
);

Veterinarian.login("user8@gmail.com", "12345678").current.addProfileData(
  new VetProfile("Riley", "Doe", {
      animals: ["Dog", "Horses", "Cat"],
      services: ["Microchipping", "Equine services", "Vaccination", "Grooming and Boarding"]
    }, "1600.00 Ksh", {
      location: "Westlands",
      county: "Nairobi",
      vetHospital: "Unique Veterinary Services"
    }, 4)
);

Veterinarian.login("user9@gmail.com", "12345678").current.addProfileData(
  new VetProfile("Lola", "Doe", {
      animals: ["Dog", "Livestock", "Poultry"],
      services: ["Microchipping", "Farm veterinary", "Grooming and Boarding"]
    }, "1900.00 Ksh", {
      location: "Kasarani",
      county: "Nairobi",
      vetHospital: "Noble Veterinary Services"
    }, 5)
);

Veterinarian.login("user13@gmail.com", "12345678").current.addProfileData(
  new VetProfile("Larry", "Doe", {
      animals: ["Livestock"],
      services: ["Farm veterinarian", "Grooming and Boarding"]
    }, "2200.00 Ksh", {
      location: "Kisumu Central",
      county: "Kisumu",
      vetHospital: "Noble Veterinary Services"
    }, 3)
);

Veterinarian.login("user14@gmail.com", "12345678").current.addProfileData(
  new VetProfile("June", "Doe", {
      animals: ["Horses", "Fish"],
      services: ["Equine services", "Grooming and Boarding", "Exotic animals"]
    }, "2200.00 Ksh", {
      location: "Embakasi",
      county: "Nairobi",
      vetHospital: "Noble Veterinary Services"
    }, 4)
);

Veterinarian.login("user15@gmail.com", "12345678").current.addProfileData(
  new VetProfile("Cindy", "Doe", {
      animals: ["Dogs", "Cats"],
      services: ["Puppy exam", "Grooming and Boarding", "Pet surgery", "Health certification", "Routine exam"]
    }, "2200.00 Ksh", {
      location: "Nyando",
      county: "Kisumu",
      vetHospital: "Noble Veterinary Services"
    }, 3)
);

Veterinarian.login("user16@gmail.com", "12345678").current.addProfileData(
  new VetProfile("Logan", "Doe", {
      animals: ["Livestock", "Horses", "Reptiles", "Poultry"],
      services: ["Farm veterinarian", "Grooming and Boarding", "Exotic animals", "Routine Exam", "Pet surgery"]
    }, "2000.00 Ksh", {
      location: "Likoni",
      county: "Mombasa",
      vetHospital: "United Veterinary Services"
    }, 4)
);

Veterinarian.login("user17@gmail.com", "12345678").current.addProfileData(
  new VetProfile("Logan", "Doe", {
      animals: ["Livestock", "Poultry"],
      services: ["Farm veterinarian", "Grooming and Boarding", "Routine Exam"]
    }, "1500.00 Ksh", {
      location: "Gatanga",
      county: "Thika",
      vetHospital: "Noble Veterinary Services"
    }, 5)
);

Veterinarian.login("user18@gmail.com", "12345678").current.addProfileData(
  new VetProfile("Logan", "Doe", {
      animals: ["Livestock"],
      services: ["Farm veterinarian", "Grooming and Boarding", "Routine Exam"]
    }, "1200.00 Ksh", {
      location: "Molo",
      county: "Nakuru",
      vetHospital: "Hardy Veterinary Services"
    }, 3)
);

// Add profile data for normal users
NormalUser.login("user10@gmail.com", "12345678").current.addProfileData(
  new NormalUserProfile("Ian", "Doe", "")
);

NormalUser.login("user11@gmail.com", "12345678").current.addProfileData(
  new NormalUserProfile("Laura", "Doe", "")
);

NormalUser.login("user12@gmail.com", "12345678").current.addProfileData(
  new NormalUserProfile("Bob", "Doe", "")
);
