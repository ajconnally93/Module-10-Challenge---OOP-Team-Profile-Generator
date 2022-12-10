// builds a Manager class through extension of Employee constructor

const Employee = require("./Employee");

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }
    officeNumber() {
        return this.officeNumber;
    }
    role() {
        return "Manager";
    }
}

module.exports = Manager;