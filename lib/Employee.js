// we defined the class giving name 
// the constructor give us acces to 
// have an arguments to inicialize the object 
class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee'

    }

};

module.exports = Employee;


