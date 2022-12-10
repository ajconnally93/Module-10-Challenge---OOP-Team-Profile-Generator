// original Employee Constructor - all other class constructors will be extended off of this one

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    name() {
        return this.name;
    }
    id() {
        return this.id;
    }
    email() {
        return this.email;
    }
    role() {
        return "Employee"
    }
}

module.exports = Employee;