// follows same general structure as Engineer test, easy to replicate

const Manager = require("../lib/Manager");

test("Tests if we can create an office number", () => {
    const testOfficeNumber = 2;
    const employeeInst = new Manager("Andrew", 2, "ajconnally93@gmail.com", testOfficeNumber);
    expect(employeeInst.officeNumber).toBe(testOfficeNumber);
});



// tests officeNumber() and role() functions

// JUST THIS ONE IS FAILING
test("Testing officeNumber() function", () => {
    const testOfficeNumber = 2;
    const employeeInst = new Manager("Andrew", 2, "ajconnally93@gmail.com", testOfficeNumber);
    expect(employeeInst.getOfficeNumber()).toBe(testOfficeNumber);
});






test("Testing role() function", () => {
    const returnVal = "Manager";
    const employeeInst = new Manager("Andrew", 2, "ajconnally93@gmail.com", 2);
    expect(employeeInst.role()).toBe(returnVal);
});