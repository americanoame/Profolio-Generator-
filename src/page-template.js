// Array html will hold all the chosen html card
const html = [];

// team will  will hold the car for which employee
const create_team_function = team => {

    // function to return template literal replacing with the new manager car
    const create_manager_html_function = manager => {
        return `
        <div class="container">      
        <div class="card-form">
            <h2 class="title">${manager.getName()}</h2>
            <h3>Manager</h3>
            <p>ID: ${manager.getId()}</p>
            <a href="#">Email: ${manager.getEmail()}</a>
            <p>Office Number: ${manager.getOfficeNumber()}</p>
        </div>
    </div>
        `;
    };

    // function to return template literal replacing with the new engineer car
    const create_engineer_html_function = engineer => {
        return `
        <div class="container">
                <div class="card-form">
                    <h2 class="title">${engineer.getName()}</h2>
                    <h3>Engineer</h3>
                    <p>ID: ${engineer.getId()}</p>
                    <a href="#">Email: ${engineer.getEmail()}</a>
                    <p>Github: ${engineer.getEngineerGitHub()}</p>
                </div>
            </div> 
        `;
    };

    // function to return template literal replacing with the new engineer car
    const create_intern_html_function = intern => {
        return `
        <div class="container">
                <div class="card-form">
                    <h2 class="title">${intern.getName()}</h2>
                    <h3>Intern</h3>
                    <p>ID: ${intern.getId()}</p>
                    <a href="#">Email: ${intern.getEmail()}</a>
                    <p>School: ${intern.getInternSchool()}</p>
                </div>
            </div>
        `;
    };
    // Below, we have a function 
    // team.filter(employee => employee.getRole() === "Manager").map(manager => create_manager_html_function(manager))
    // we go into the team array and looks for any employee that has the role of Manager, if the employee is a manager then it will 
    // run the create_manager_html_function to create the html card for the manager
    html.push(team.filter(employee => employee.getRole() === "Manager").map(manager => create_manager_html_function(manager)))
    html.push(team.filter(employee => employee.getRole() === "Engineer").map(engineer => create_engineer_html_function(engineer)))
    html.push(team.filter(employee => employee.getRole() === "Intern").map(intern => create_intern_html_function(intern)))
    // D above line for engineer, intern

    return html.join('');
    // converts our html array into string
}

// export function to generate the entire page with team array passed in as input parameter from index.js
module.exports = team => {

    return `
    <!DOCTYPE html>
    <html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
<script src="https://kit.fontawesome.com/c193fe932c.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="./style.css">
<title>Title</title>
</head>

<body>
<main>
<div class="header">
<div class="header-title">
    <h1>My Team</h1>
</div>
</div>
<section>
${create_team_function(team)}
</section>
</main>
</body>
</html>`
};



