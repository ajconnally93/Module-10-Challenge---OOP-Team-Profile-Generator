// follows same general structure as Engineer test, easy to replicate


const Intern = require("../lib/Intern");

test("Tests if we can create a school to pass through", () => {
    const testSchool = "Alabama";
    const employeeInst = new Intern("Andrew", 2, "ajconnally93@gmail.com", testSchool);
    expect(employeeInst.school).toBe(testSchool);
});




// tests school() and role() functions

test("Testing school() function", () => {
    const testSchool = "Alabama";
    const employeeInst = new Intern("Andrew", 2, "ajconnally93@gmail.com", testSchool);
    expect(employeeInst.school()).toBe(testSchool);
});

test("Testing role() function", () => {
    const returnVal = "Intern";
    const employeeInst = new Intern("Andrew", 2, "ajconnally93@gmail.com", "Alabama");
    expect(employeeInst.role()).toBe(returnVal);
});