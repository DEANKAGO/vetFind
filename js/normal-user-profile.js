let fullName = 'fullName';

class NormalUserProfile{
  constructor(firstName, lastName, avatar){
    this.firstName = firstName;
    this.lastName = lastName;
    this.fullName = this.fullName;
    this.avatar = avatar;
  }

  /**
   * Getter to retrieve a normal user's fullname
   * @returns A normal user's fullname
   */
  get [fullName](){
    return `${this.firstName} ${this.lastName}`;
  }

  /**
   * Setter to set a normal user's fullname
   */
  set [fullName](fullName){
    this._fullName = fullName;
  }
}

export {NormalUserProfile};