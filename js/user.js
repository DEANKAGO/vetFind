import {database, userTable, vetTable} from './database.js';

class User {
  // No of users
  static count = 1;

  constructor(email, password, username, role, profile){
    this.id = this.constructor.count++;
    this.email = email;
    this.password = password;
    this.username = username;
    this.role = role;
    this.profile = profile;
  }

  valueOf(){
    return {
      id: this.id, 
      email: this.email, 
      password: this.password, 
      username: this.username
    };
  }

  /**
   * Function to authenticate a user
   * @param {*} email User's email
   * @param {*} password User's password
   * @param {*} role User's role
   * @returns 
   */
  static login(email, password, role){
    const VET_ROLE = 1;
    const USER_ROLE = 2;
    // Get database data
    const userData = database.getDatabase();
    let isAuthenticated;
    let user;

    // Search user data in database and authenticate based on their role
    switch(role) {
      case VET_ROLE:
        let vetData = userData.tables[0].data;
        user = vetData.find(vet => vet.email === email && vet.password === password);
        isAuthenticated = user ? true : false;
        break;

      case USER_ROLE:
        let normalUserData = userData.tables[1].data;
        user = normalUserData.find(normalUser => normalUser.email === email && normalUser.password === password)
        isAuthenticated = user ? true : false;
        break; 

      default:
        isAuthenticated = false;
        console.log("Role does not exist");
    }

    return {current: user, auth: isAuthenticated};
  }

  /**
   * Function to sign up a user
   * @param {*} email User's email
   * @param {*} password User's password
   * @param {*} username User's username
   * @param {*} role User's role 
   * @returns Whether sign up was successful
   */
  static signUp(email, password, username, role, profile){
    // Create user
    let user = new User(email, password, username, role, profile);
    const VET_ROLE = 1;
    const USER_ROLE = 2; 
    let isSignedUp = false;
    // Get database data
    const userData = database.getDatabase();

    // Add user data to the database depending on their role
    switch(role) {
      case VET_ROLE: 
        let vets = userData.tables[0].data;
        if(!vets.find(vet => vet.email === email)){
          vetTable.addData(user);
          isSignedUp = true;
        }
        break;

      case USER_ROLE:
        let normalUsers = userData.tables[1].data;
        if(!normalUsers.find(normalUser => normalUser.email === email)){
          userTable.addData(user);
          isSignedUp = true;
        }
        break;

      default:
        console.log("Role does not exist"); 
    }
    return isSignedUp;
  }

  /**
   * Add user profile information
   * @param {*} profile Profile data
   */
  addProfileData(profile){
    this.profile = profile;
  }

  /**
   * Change the password of a user
   * @param {*} email User's email
   * @param {*} password User's password
   * @param {*} role User's role
   * @returns Whether reset has occurred
   */
  static resetPassword(email, password, role){
    // Get database data
    const userData = database.getDatabase();
    let isReset = false;
    const VET_ROLE = 1;
    const USER_ROLE = 2; 

    switch(role){
      case VET_ROLE:
        let vets = userData.tables[0].data;
        let vet = vets.find(vet => vet.email === email)
        if(vet){
          vet.password = password;
          isReset = true;
        }
        break;

      case USER_ROLE: 
        let normalUsers = userData.tables[1].data;
        let normalUser = normalUsers.find(normalUser => normalUser.email === email);
        if(normalUser){
          normalUser.password = password;
          isReset = true;
        }
        break;

      default:
        console.log("Role does not exist");
    }

    return isReset;
  }
}

export {User};