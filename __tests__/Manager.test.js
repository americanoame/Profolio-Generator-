const Manager = require('../lib/Manager');

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

// make test for getRole()

test('getRole() returns manager name', () => {
    const manager = new Manager('peter', 1, 'peter@gmail.com', '100')
    expect(manager.getRole()).toBe('Manager')

});

