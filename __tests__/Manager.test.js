// Import Employee class with require
const Manager = require('../lib/Manager');

// Instantiate the manager class, passing name, id, and email as 
// auguments, to create an object and assign it to an new variable

test('can return Manager Properties', () => {
    const manager = new Manager('peter', 1, 'peter@gmail.com', 'email')
    expect(manager.getName()).toBe('peter')
});

test('getEmail() returns manager name', () => {
    const manager = new Manager('peter', 1, 'peter@gmail.com', '100')
    expect(manager.getEmail()).toBe('peter@gmail.com')
});

test('getId() returns manager id', () => {
    const manager = new Manager('peter', 1, 'peter@gmail.com', '100')
    expect(manager.getId()).toBe(1)
});

test('getOfficeNumber() returns manager office number', () => {
    const manager = new Manager('peter', 1, 'peter@gmail.com', '100')
    expect(manager.getOfficeNumber()).toBe('100')
});

test('getRole() returns manager name', () => {
    const manager = new Manager('peter', 1, 'peter@gmail.com', '100')
    expect(manager.getRole()).toBe('Manager')
});

