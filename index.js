const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

// 1) Import the lib folders
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const Manager = require('./lib/manager');

// specified path segments into one path
const pageTemplate = require('./src/page-template');
const dist_directory = path.resolve(__dirname, 'dist');
const dirPath = path.join(__dirname, 'index.html');

// memberEmployee array will store the createTeam property values
// we use an array because after we run the prompts we want to save the user input
const memberEployee = [];

// Employee array will store the employee IDs.
const employeeId = [];

// Function init will start the whole page process
function init() {
    createManager();  // why we have to pass only manager instead create a team
}

// CreateManager function will let the users to create a manager from the comand line 
// and then add it into the createTeam
function createManager() {

    inquirer.prompt([
        {
            type: 'input',
            message: "What is the team manager's name?",
            name: 'managerName',
        },
        {
            type: 'input',
            message: "What is the team manager's id?",
            name: 'managerId',
        },
        {
            type: 'input',
            message: "What is the team manager's email?",
            name: 'managerEmail',
        },
        {
            type: 'input',
            message: "What is the team manager's office number?",
            name: 'managerOfficeNumber',
        },
    ])
        .then((response) => {
            const manager = new Manager(response.managerName, response.managerId, response.managerEmail, response.managerOfficeNumber);
            memberEployee.push(manager);

            createTeam();
        })

}

// CreateTeam function is created to enable the user to add additional employees to the team
// if the user chose 'Enginieer' then Egineer prompt and then engineer will be added to the memberEmployee array and we're doing the same exacly process
// for 'Intern'. and if no employee to be choose generate the HTML

function createTeam() {

    inquirer.prompt([
        {
            type: 'list',
            message: 'What type of team would you like to create?',
            name: 'choice',
            choices: ['Creat Enginner', 'Create Intern', 'generate HTML'],
        }
    ])
        .then((response) => {

            if (response.choice === 'Creat Enginner') {
                addEginner();
            }
            else if (response.choice === 'Create Intern') {
                addIntern();
            } else {
                buildTeam(memberEployee);
            }
        });

}

// addEginner function will let the users to create a Eginner from the comand line 
// and then add it into the createTeam

function addEginner() {

    inquirer.prompt([

        {
            type: 'input',
            message: "What is the engineer's name?",
            name: 'engineerName',
        },
        {
            type: 'input',
            message: "What is the engineer's id?",
            name: 'engineerId',
        },
        {
            type: 'input',
            message: "What is the engineer's email?",
            name: 'engineerEmail',
        },
        {
            type: 'input',
            message: "What is the engineer's github?",
            name: 'engineerGithub',
        },
    ])
        .then((response) => {
            const engineer = new Engineer(response.engineerName, response.engineerId, response.engineerEmail, response.engineerGithub);
            memberEployee.push(engineer);

            createTeam();
        })

}

// addIntern function will let the users to create a Intern from the comand line 
// and then add it into the createTeam

function addIntern() {

    inquirer.prompt([

        {
            type: 'input',
            message: "What is the intern's name?",
            name: 'internName',
        },
        {
            type: 'input',
            message: "What is the intern's id?",
            name: 'internId',
        },
        {
            type: 'input',
            message: "What is the intern's email?",
            name: 'internEmail',
        },
        {
            type: 'input',
            message: "What is the intern's school?",
            name: 'internSchool',
        },
    ])                 
    
    // new Intern creates a new instance of our Intern class. This means that we are 
    // creating an object that followed the parameters for the Intern Class
        .then((response) => {  
            const intern = new Intern(response.internName, response.internId, response.internEmail, response.internSchool);
            
            memberEployee.push(intern);

            createTeam();
        })

}
// write a better comment
function buildTeam(memberEmployee) {
    fs.writeFile('./dist/index.html', pageTemplate(memberEmployee), (err) => {
        (err) ? console.log(err) : console.log('HTML pageTemple has been generated successfully');
    });

};
init();



