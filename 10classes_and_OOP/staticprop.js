class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username: ${this.username}`);
  }

  static staticID() {
    return `123`;
  }
}

const hitesh = new User("hitesh");

// hitesh.logMe();

// console.log(hitesh.staticID());

class Teacher extends User {
  constructor(username, email) {
    super(username)
    this.email = email;
  }
}


const iPhone = new Teacher("iphone" , "iphone@gmail.com")

iPhone.logMe()

console.log(iPhone.staticID());