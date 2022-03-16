const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
    
    // TODO: YOUR CODE HERE
    // completed 3/15
  }

  getRole() {
    // TODO: YOUR CODE HERE
    // completed 3/15
    return "Intern";
  }

  getSchool() {
    // TODO: YOUR CODE HERE
    // completed 3/15
    return this.school;
  }

}

module.exports = Intern;
