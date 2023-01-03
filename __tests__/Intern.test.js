// intern.getSchool()
// intern.school returns the school  u put in the parameter when you create new instance
// intern.getRole()

const Intern = require('../lib/Intern');


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
