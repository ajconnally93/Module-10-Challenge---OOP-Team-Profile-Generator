const Employee = require("../lib/Employee");

test("Can you create a new employee?", () => {
    const employeeInst = new Employee();
    expect(typeof(employeeInst)).toBe("object");
})


// will test the name, id, email separately

test("Testing name", () => {
    const name = "Andrew";
    const employeeInst = new Employee(name);
    expect(employeeInst.name).toBe(name);
})

test("Testing ID", () => {
    const id = 2;
    const employeeInst = new Employee("Andrew", id);
    expect(employeeInst.id).toBe(id);
})

test("Testing Email", () => {
    const email = "ajconnally93@gmail.com";
    const employeeInst = new Employee("Andrew", 2, email);
    expect(employeeInst.email).toBe(email);
})



// Tests all functions

// THESE 3 ARE FAILING
test("Gets name through name() function", () => {
    const testName = "Andrew";
    const employeeInst = new Employee(testName);
    expect(employeeInst.getName()).toBe(testName);
})

test("Tests ID through id() function", () => {
    const testID = 2;
    const employeeInst = new Employee("Andrew", testID);
    expect(employeeInst.getId()).toBe(testID);
})

test("Tests Email through email() function", () => {
    const testEmail = "ajconnally93@gmail.com";
    const employeeInst = new Employee("Andrew", 2, testEmail);
    expect(employeeInst.getEmail()).toBe(testEmail);
})






// tests employee role by invoking the role() function
test("Testing Employee's role", () => {
    const returnVal = "Employee";
    const employeeInst = new Employee("Andrew", 2, "ajconnally93@gmail.com");
    expect(employeeInst.role()).toBe(returnVal);
})