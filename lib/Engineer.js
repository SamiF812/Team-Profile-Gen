const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    // super allows to inherit from the parent without using this. multiple times
    super(name, id, email);
    this.github = github;
    
    // TODO: YOUR CODE HERE
    // completed 3/15
  }

  getRole() {
    // TODO: YOUR CODE HERE
    // completed 3/15
    return "Engineer";
  }

  getGithub() {
    // TODO: YOUR CODE HERE
    // completed 3/15
    return this.github;
  }

}

module.exports = Engineer;
