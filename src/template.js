// Need to create template first to be able to generate HTML within index.js later, and then using answers from an inquirer prompt to help generate the team with callback functions


// This will create the team. Cards will easily be able to match the cards in original team.html file thanks to BootStrap, so the page will look smooth and have continuity as the User adds more employees when prompted
const generateTeam = team => {

    // Engineer HTML Template
    const generateEngineer = engineer => {

        // engineer.getName(), .getRole(), .getId(), .getEmail(), .getGithub() are all functions from the lib folder for each separate type of employee constructor in modularized files, all built & extended from the original Employee.js employee constructor
        return `
<div class="card employee-card">

    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</h3>
    </div>

    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}" target="_blank">${engineer.getGithub()}</a></li>
        </ul>
    </div>

</div>`;
    };

    // Manager HTML Template
    const generateManager = manager => {

        // manager.get functions all follow same logic as engineer's as per above comment
        return `
<div class="card employee-card">

    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</h3>
    </div>

    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">Office number: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>

</div>`;
    };



}