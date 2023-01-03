const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, internSchool) {
        super(name, id, email);
        this.internSchool = internSchool;
    }

    getInternSchool() {
       return this.internSchool
    }
    getRole() {
       return 'Intern'
    }
}

// const intern = new Intern('Test', 1, 'test@test.com', 'College');

module.exports = Intern;