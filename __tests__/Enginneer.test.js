// Import Engineer class with require
const Engineer = require('../lib/Engineer');

// Instantiate the Engineer class, passing name, id, email and github as 
// auguments, to create an object and assign it to an new variable

test('getName()', () => {
    const engineer = new Engineer('peter', 2, 'peter@gmail.com', 'email', 'github')
    expect(engineer.getName()).toBe('peter')
});

test('getRole() Test get role method', () => {
    const engineer = new Engineer('peter', 2, 'peter@gmail.com', '100')
    expect(engineer.getRole()).toBe('Engineer')
   
});

test('getGithub() Test get github method', () => {
    const engineer = new Engineer('peter', 2, 'peter@gmail.com', 'petergithub')
    expect(engineer.getEngineerGitHub()).toBe('petergithub')
});