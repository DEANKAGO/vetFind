let fullName = 'fullName';

class VetProfile {
  constructor(firstName = "", lastName = "", specialization = {animals: [], services: []}, workingRate = "", serviceArea = {location: "",county: "",vetHospital:""}, rating = 0){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = this.fullName;
    this.specialization = specialization
    this.workingRate = workingRate;
    this.serviceArea = serviceArea;
    this.rating = rating;
  }

  /**
   * Getter to retrive a vet's fullname based on firstname and lastname
   * @returns A vet's fullName
   */
  get [fullName]() {
    return `${this.firstName} ${this.lastName}`;
  }

  /**
   * Setter a user's fullname
   * @returns A vet's fullname
   */
  set [fullName](fullName) {
    this._fullName = fullName;
  }

  /**
   * Function to return a vet's profile data
   * @returns A vet's profile data
   */
  getVetProfileData(){
    return {
      name: this.fullName,
      specialization: this.specialization,
      workingRate: this.workingRate,
      serviceArea: this.serviceArea,
      rating: this.rating
    }
  }
}

export {VetProfile};
