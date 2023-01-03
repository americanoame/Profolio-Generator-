// Import Intern class with require
const Intern = require('../lib/Intern');

// Instantiate the Intern class, passing name, id, email and internSchool as 
// auguments, to create an object and assign it to an new variable

test('can return Intern Properties', () => {
    const intern = new Intern('peter', 2, 'peter@gmail.com', 'internSchool')
    expect(intern.getName()).toBe('peter')
});

test('getSchool() returns internSchool', () => {
    const intern = new Intern('peter', 2, 'peter@gmail.com', 'internSchool')
    expect(intern.getInternSchool()).toBe('internSchool')

});

test('getId() returns intern id', () => {
    const intern = new Intern('peter', 2, 'peter@gmail.com', 'internSchool')
    expect(intern.getId()).toBe(2)
});

test('getRole() returns intern id', () => {
    const intern = new Intern('peter', 2, 'peter@gmail.com', 'internSchool')
    expect(intern.getRole()).toBe('Intern')
});
