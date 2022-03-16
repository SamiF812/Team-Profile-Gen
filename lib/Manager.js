const Employee = require("./Employee");

class Manager extends Employee {

  constructor(name, id, email, officeNumber) {
    // YOUR CODE HERE
    // completed 3/15
    super(name, id, email);
    this.officeNumber = officeNumber;

  }

  getRole() {
    // YOUR CODE HERE
    // completed 3/15
    return "Manager"
  }

  getOfficeNumber() {
    // YOUR CODE HERE
    // completed 3/15
    return this.officeNumber;
  }

}

module.exports = Manager;
