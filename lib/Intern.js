// builds an Intern class through extension of Employee constructor

const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email);
        this.school = school;        
    }
    getSchool() {
        return this.school;
    }
    role() {
        return "Intern"
    }
}

module.exports = Intern;