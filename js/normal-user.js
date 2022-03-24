import {User} from './user.js';

class NormalUser extends User {
  constructor(email, password, username, role, profile){
    super(email, password, username, role, profile);
  }

  /**
   * Function to return a normal user's data
   * @returns A normal user's data
   */
  getNormalUserData(){
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
   * Function to sign up a normal user
   * @param {*} email A normal user's email
   * @param {*} password A normal user's password
   * @param {*} username A normal user's username
   * @returns Whether sign up was successful
   */
  static signUp(email, password, username){
    const NORMAL_USER_ROLE = 2;
    let normalUser = new NormalUser(email, password, username, NORMAL_USER_ROLE, {});
    return super.signUp(normalUser.email, normalUser.password, normalUser.username, normalUser.role, normalUser.profile);
  }

  /**
   * Function to authenticate a normal user
   * @param {*} email 
   * @param {*} password 
   * @returns Whether authentication was successful
   */
  static login(email, password){
    const NORMAL_USER_ROLE = 2;
    return super.login(email, password, NORMAL_USER_ROLE);
  }

    /**
   * Function to reset password
   * @param {*} email Normal user's email
   * @param {*} password Normal user's password
   * @returns Whether reset password was successful or not
   */
  static resetPassword(email, password){
    const NORMAL_USER_ROLE = 2;
    return super.resetPassword(email, password, NORMAL_USER_ROLE);
  }
}

export {NormalUser};