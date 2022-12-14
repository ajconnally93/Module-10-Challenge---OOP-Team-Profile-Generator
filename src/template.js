// Need to create template first to be able to generate HTML within index.js later, and then using answers from an inquirer prompt to help generate the team with callback functions


// This will create the team. Cards will easily be able to match the cards in original team.html file thanks to BootStrap, so the page will look smooth and have continuity as the User adds more employees when prompted
const getTeam = team => {

    // Engineer HTML Template
    const getEngineer = engineer => {

        // engineer.getName(), .getRole(), .getId(), .getEmail(), .getGithub() are all functions from the lib folder for each separate type of employee constructor in modularized files, all built & extended from the original Employee.js employee constructor
        return `
<div class="card employee-card">

    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.role()}</h3>
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
    const getManager = manager => {

        // manager.get functions all follow same logic as engineer's as per above comment
        return `
<div class="card employee-card">

    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.role()}</h3>
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

    // Intern HTML Template
    const getIntern = intern => {

        // intern.get functions all follow same logic as engineer's as per above comment
        return `
<div class="card employee-card">

    <div class="card-header bg-primary text-white">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.role()}</h3>
    </div>

    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
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

    <!-- got a lot of help with this, borrowed some code, just wanted to make it look like the mockup. Would be a lot more customizable with regular CSS rather than Bootstrap, but Bootstrap + borrowed code gets the basic mockup functionality done so I can move onto the logic parts of my code -->

    <!-- Played with sizes of names and emails to test how dynamic content would respond -->
    
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
                <div class="col-12 jumbotron mb-5 team-heading bg-danger">
                    <h1 class="text-center text-white">My Team</h1>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="row team-area col-12 d-flex justify-content-center">
                    
    
    
    
    <!-- IMPORTANT NOTE: NONE OF THESE EMAILS OR GITHUB LINKS ARE REAL, THEY ARE SIMPLY EXAMPLES FOR THE PROJECT -->
    
    <div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">Nick Saban</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>Manager</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: 1</li>
                <li class="list-group-item">Email: <a href="mailto:nicksaban@fakeemail.com">nicksaban@fakeemail.com</a></li>
                <li class="list-group-item">Office number: 1</li>
            </ul>
        </div>
    </div>
            
    <div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">Bryce Young</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: 2</li>
                <li class="list-group-item">Email: <a href="mailto:bryceyoung@gmail.com">bryceyoung@fakeemail.com</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/bryceyoung" target="_blank" rel="noopener noreferrer">BryceYoung</a></li>
            </ul>
        </div>
    </div>
    <div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">Tua Tagovailoa</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: 3</li>
                <li class="list-group-item">Email: <a href="mailto:tuatagovailoa@fakeemail.com">tuatagovailoa@fakeemail.com</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/tuatagovailoa" target="_blank" rel="noopener noreferrer">TuaTagovailoa</a></li>
            </ul>
        </div>
    </div>
            
    <div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">Derrick Henry</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>Engineer</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: 4</li>
                <li class="list-group-item">Email: <a href="mailto:derrickhenry@fakeemail.com">derrickhenry@fakeemail.com</a></li>
                <li class="list-group-item">GitHub: <a href="https://github.com/derrickhenry" target="_blank" rel="noopener noreferrer">DerrickHenry</a></li>
            </ul>
        </div>
    </div>
            
    <div class="card employee-card">
        <div class="card-header bg-primary text-white">
            <h2 class="card-title">Jalen Hurts</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>Intern</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: 5</li>
                <li class="list-group-item">Email: <a href="mailto:jalenhurts@fakeemail.com">jalenhurts@fakeemail.com</a></li>
                <li class="list-group-item">School: University of Alabama</li>
            </ul>
        </div>
    </div>
            
                </div>
            </div>
        </div>





        

    <div class="container">
        <div class="row">
            <div class="row team-area col-12 d-flex justify-content-center">${getTeam(team)}</div>
        </div>
    </div>
    </body>
    </html>
`;

};