import {User} from './user.js';
import {database} from './database.js';
import { VetProfile } from './vet-profile.js';

class Veterinarian extends User {
  constructor(email, password, username, role){
    super(email, password, username, role, new VetProfile());
  }

  /**
   * Return a vet's data
   * @returns A vet's data
   */
  getVetData(){
    return {
      id: super.id,
      email: this.email,
      password: this.password,
      username: this.username,
      role: this.role,
      profile: this.profile
    }
  }

  /**
   * Function to sign up a vet
   * @param {*} email Vet's  email
   * @param {*} password Vet's password
   * @param {*} username Vet's username
   * @returns Whether sign up was successful
   */
  static signUp(email, password, username){
    const VET_ROLE = 1;
    let vet = new Veterinarian(email, password, username, VET_ROLE, {});
    return super.signUp(vet.email, vet.password, vet.username, vet.role, vet.profile);
  }

  /**
   * Function to authenticate a vet
   * @param {*} email Vet's email
   * @param {*} password Vet's password
   * @returns Whether authentication was successful
   */
  static login(email, password){
    const VET_ROLE = 1;
    return super.login(email, password, VET_ROLE);
  }

  /**
   * Function to reset password
   * @param {*} email Vet's email
   * @param {*} password Vet's password
   * @returns Whether reset password was successful or not
   */
  static resetPassword(email, password){
    const VET_ROLE = 1;
    return super.resetPassword(email, password, VET_ROLE);
  }

  /**
   * Function to get vets' data based on a county
   * @param {*} county A county in Kenya
   * @returns Vets' data based on county provided 
   */
  static getVetsByCounty(county){
    let userData = database.getDatabase();
    // Retrieve vets' data
    let vets = userData.tables[0].data;
    // Filter vets' data based on county
    let vetsByCounty = vets.filter(vet => vet.profile.serviceArea.county === county)
    .sort((vet1, vet2) => vet2.profile.rating - vet1.profile.rating);

    // Return a filtered list of vets if any
    if(vetsByCounty.length > 0){
      return vetsByCounty;
    } else {
      console.log("No vets found");
    }
  }

  /**
   * Function to get vets' data based on an animal
   * @param {*} animal A farm animal/Pet
   * @returns Vets' data based on an animal/pet provided
   */
  static getVetsByAnimal(animal){
    let userData = database.getDatabase();
    // Retrieve vets' data
    let vets = userData.tables[0].data;
    // Filter vets' data based on pet
    let vetsByAnimal = vets.filter(vet => vet.profile.specialization.animals.includes(animal))
    .sort((vet1, vet2) => vet2.profile.rating - vet1.profile.rating);

    // Return a filtered list of vets if any
    if(vetsByAnimal.length > 0){
      return vetsByAnimal;
    } else {
      console.log("No vets found");
    }
  }

  /**
   * Function to get vets' data based on an animal and county
   * @param {*} animal A farm animal/Pet
   * @param {*} county A county in Kenya
   * @returns Vets' data based on a county and animal provided
   */
  static getVetsByCountyAndAnimal(animal, county){
    let userData = database.getDatabase();
    // Retrieve vets' data
    let vets = userData.tables[0].data;
    // Filter vets' data based on animal and county
    let vetsByCountyAndAnimal = vets.filter(vet => vet.profile.serviceArea.county === county && vet.profile.specialization.animals.includes(animal))
    .sort((vet1, vet2) => vet2.profile.rating - vet1.profile.rating);

    // Return a filtered list of vets if any
    if(vetsByCountyAndAnimal.length > 0){
      return vetsByCountyAndAnimal;
    } else {
      console.log("No vets found");
    }
  }

}

export {Veterinarian};