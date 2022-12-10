// Need to create template first to be able to generate HTML within index.js later, and then using answers from an inquirer prompt to help generate the team with callback functions


// This will create the team. Cards will easily be able to match the cards in original team.html file thanks to BootStrap, so the page will look smooth and have continuity as the User adds more employees when prompted
const getTeam = team => {

    // Engineer HTML Template
    const getEngineer = engineer => {

        // engineer.getName(), .getRole(), .getId(), .getEmail(), .getGithub() are all functions from the lib folder for each separate type of employee constructor in modularized files, all built & extended from the original Employee.js employee constructor
        return `
<div class="card employee-card">

    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${engineer.name()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.role()}</h3>
    </div>

    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.id()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.email()}">${engineer.email()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github()}" target="_blank">${engineer.github()}</a></li>
        </ul>
    </div>

</div>`;
};

    // Manager HTML Template
    const getManager = manager => {

        // manager.get functions all follow same logic as engineer's as per above comment
        return `
<div class="card employee-card">

    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${manager.name()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.role()}</h3>
    </div>

    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.id()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email()}">${manager.email()}</a></li>
            <li class="list-group-item">Office number: ${manager.officeNumber()}</li>
        </ul>
    </div>

</div>`;
};

    // Intern HTML Template
    const getIntern = intern => {

        // intern.get functions all follow same logic as engineer's as per above comment
        return `
<div class="card employee-card">

    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${intern.name()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.role()}</h3>
    </div>

    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.id()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email()}">${intern.email()}</a></li>
            <li class="list-group-item">School: ${intern.school()}</li>
        </ul>
    </div>

</div>`;
};

    // will use this empty array to push all generated employees into
    const pushHtml = [];

    pushHtml.push(team
        // .filter grabs only the Managers for use in next code block
        .filter(employee => employee.role() === "Manager")
        // .map adds all HTML generating Manager employee cards and pushes into a new array which is pushed into HTML
        .map(manager => getManager(manager))
    );

    pushHtml.push(team
        // same logic as above but with Engineers
        .filter(employee => employee.role() === "Engineer")

        .map(engineer => getEngineer(engineer))
        .join('')
    );

    pushHtml.push(team
        // same logic as above but with Interns
        .filter(employee => employee.role() === "Intern")

        .map(intern => getIntern(intern))
        .join('')
    );

    return pushHtml.join('');
}



// exports function to generate the entire HTML page with getTeam, specifically the pushHtml array being populated
module.exports = team => {
    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>

<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                <h1 class="text-center text-white">My Team</h1>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">${getTeam(team)}</div>
        </div>
    </div>
</body>
</html>`;

};