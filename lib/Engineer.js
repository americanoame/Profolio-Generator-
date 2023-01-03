// Import Employee class with require
const Employee = require("./Employee");

// we defined the class giving name and extended Employee
// the constructor give us acces to have an arguments,
// to inicialize the object when when we instantiate the class instance
// then we create a instance varible called (engineerGitHub) 
class Engineer extends Employee {
  constructor(name, id, email, engineerGitHub) {
    super(name, id, email);
    this.engineerGitHub = engineerGitHub;
  }

  // then we assingned to (engineerGitHub) which is a array of string
  getEngineerGitHub() {
    return this.engineerGitHub
  }
  getRole() {
    return 'Engineer'
  }
}
module.exports = Engineer;