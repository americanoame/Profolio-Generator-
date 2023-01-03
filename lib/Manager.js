const Employee = require("./Employee");

class Manager extends Employee {                 // when class (Manager) is instantiated to create a object
    constructor(name, id, email, officeNumber) { // then we wanna also inicialize the parent class (Employee)
        super(name, id, email);                  // with the keyword (super) is used to access properties on an object
        this.officeNumber = officeNumber;        // then we create a instance varible called (officeNumber) 
              
    }
    getOfficeNumber() {                           // then we assingn to (officeNumber) which is a array of string
        return this.officeNumber;
    }

    getRole() {
        return 'Manager'
    }


}

module.exports = Manager;
