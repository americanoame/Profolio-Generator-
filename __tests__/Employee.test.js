// Import Employee class with require
const Employee = require('../lib/Employee');

// Test instantiate Employee instance
test("Test instantiate Employee instance", () => {
    const employee = new Employee('peter', 2, 'peter@gmail.com')
    expect(employee.getName()).toBe('peter')
});

// Test setting name of an employee
test("Test setting name of an employee", () => {
    const employee = new Employee('employee');
    expect(employee.getName()).toBe('employee')
});

// Test setting id of an employee
test("Test setting id of an employee", () => {
    const employee = new Employee('employee', 1)
    expect(employee.getId()).toBe(1)
});

// Test setting email of an employee
test("Test setting email of an employee", () => {
    const employee = new Employee('employee', 1, 'employee@test.com')
    expect(employee.getEmail()).toBe('employee@test.com')
});

// Test get name method
test("Test get name method", () => {
    const peter = new Employee('peter', 2, 'peter@gmail.com')
    expect(peter.getName()).toBe('peter')
});

// Test get id method
test("Test get id method", () => {
    const id = new Employee('employee', 2, 'peter@gmail.com')
    expect(id.getId()).toBe(2);
});

// Test get email method
test("Test get email method", () => {
    const email = new Employee('peter', 2, 'peter@gmail.com')
    expect(email.getEmail()).toBe('peter@gmail.com')
});

// Test get role method
test("Test get role method", () => {
    const employe = new Employee('peter', 2, 'peter@gmail.com')
    expect(employe.getRole()).toBe('Employee')
});








