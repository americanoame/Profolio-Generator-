// Import Employee class with require
const Employee = require("./Employee");

// we defined the class giving name and extended Employee
// the constructor give us acces to have an arguments,
// to inicialize the object when when we instantiate the class instance
// then we create a instance varible called (internSchool) 
class Intern extends Employee {
    constructor(name, id, email, internSchool) {
        super(name, id, email);
        this.internSchool = internSchool;
    }
    // then we assingned to (internSchool) which is a array of string
    getInternSchool() {
        return this.internSchool
    }
    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;