const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, engineerGitHub) {
    super(name, id, email);
    this.engineerGitHub = engineerGitHub;

  }

  // instant mathed
  getEngineerGitHub() {
    return this.engineerGitHub
  }
  getRole() {
    return 'Engineer'
  }
}
module.exports = Engineer;