const Engineer = require('../lib/Engineer');

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