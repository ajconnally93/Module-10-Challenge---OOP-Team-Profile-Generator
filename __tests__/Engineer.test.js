const Engineer = require("../lib/Engineer");

test("Tests if we can create a github to pass through", () => {
    const testGithub = "ajconnally93";
    const employeeInst = new Engineer("Andrew", 2, "ajconnally93@gmail.com", testGithub);
    expect(employeeInst.github).toBe(testGithub);
});



// Testing github() and role() functions

// JUST THIS ONE IS FAILING
test("Testing github() function which will return the Engineer's github", () => {
    const testGithub = "ajconnally93";
    const employeeInst = new Engineer("Andrew", 2, "ajconnally93@gmail.com", testGithub);
    expect(employeeInst.getGithub()).toBe(testGithub);
});






test("Testing role() function which will return the Engineer's role", () => {
    const returnVal = "Engineer";
    const employeeInst = new Engineer("Andrew", 2, "ajconnally93@gmail.com", "ajconnally93");
    expect(employeeInst.role()).toBe(returnVal);
});