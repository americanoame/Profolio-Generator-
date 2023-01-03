// Import Employee class with require
const Employee = require("./Employee");

// we defined the class giving name and extended Employee
// the constructor give us acces to have an arguments,
// to inicialize the object when when we instantiate the class instance
// then we create a instance varible called (officeNumber) 
class Manager extends Employee {                 
    constructor(name, id, email, officeNumber) { 
        super(name, id, email);                  
        this.officeNumber = officeNumber;        
        
    }  // then we assingned to (officeNumber) which is a array of string
    getOfficeNumber() {                           
        return this.officeNumber;
    }

    getRole() {
        return 'Manager'
    }


}

module.exports = Manager;
