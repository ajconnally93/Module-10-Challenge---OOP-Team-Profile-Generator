const Engineer = require("../lib/Engineer");

test("Tests Engineer's github to be accurate", () => {
    const testGithub = "ajconnally93";
    const employeeInst = new Engineer("Andrew", 2, "ajconnally93@gmail.com", testGithub);
    expect(employeeInst.github).toBe(testGithub);
});



// Testing github() and role() functions

test("Testing github() function which will return the Engineer's github", () => {
    const testGithub = "ajconnally93";
    const employeeInst = new Engineer("Andrew", 2, "ajconnally93@gmail.com", testGithub);
    expect(employeeInst.github()).toBe(testGithub);
});

test("Testing role() function which will return the Engineer's role", () => {
    const returnVal = "Engineer";
    const employeeInst = new Engineer("Andrew", 2, "ajconnally93@gmail.com", "ajconnally93");
    expect(employeeInst.role()).toBe(returnVal);
});