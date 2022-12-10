// builds an Engineer class through extension of Employee constructor

const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }
    github() {
        return this.github;
    }
    role() {
        return "Engineer";
    }
}

module.exports = Engineer;