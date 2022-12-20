// original Employee Constructor - all other class constructors will be extended off of this one

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    // name of function cannot be the same as the returned 'this.name'
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    role() {
        return "Employee"
    }
}

module.exports = Employee;