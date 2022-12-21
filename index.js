// Inquirer is main package required, will pass answers through in callback functions
const inquirer = require('inquirer');

const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');

const fs = require('fs');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const getTeam = require('./src/template.js');
const { Console } = require('console');

teamMembers = [];


// STILL GETTING ERROR MESSAGE WHEN INQUIRER PROMPT IS IN GLOBAL SCOPE: TypeError: inquirer.prompt is not a function
// inquirer.prompt([{
//     type: "list",
//     message: "Which employee would you like to add?",
//     name: "addPrompt",
//     choices: ["Manager", "Engineer", "Intern", "None"]

//   //each case will run the function to add the specific employee type
//   }])



// NOTE: MAYBE NEED TO MAKE INQUIRER PROMPT ASYNC WITH ```AWAIT``` ?

// FIXED BY CHANGING INQUIRER PACKAGE DEPENDENCY TO 8.2.4 IN PACKAGE.JSON



// start() function will actually be what runs the program. addManager, addEngineer, addIntern, buildHtml will be defined later with the first 3 being inquirer prompts as well
// Can store the createEmployee functions inside the start() function and scope will remain intact
function start() {

    // Maybe could make this an async function, in order to properly define the createEmployee functions
    function createTeam () {

        inquirer.prompt([{
          type: "list",
          message: "Which employee would you like to add?",
          name: "addPrompt",
          choices: ["Manager", "Engineer", "Intern", "None"]

        //each case will run the function to add the specific employee type
        }])
        
        .then(function (userInput) {
          switch(userInput.addPrompt) {

            case "Manager":
              createManager();
              break;

            case "Engineer":
              createEngineer();
              break;

            case "Intern":
              createIntern();
              break;

            case "None":
                console.log("Program ended.")
                buildHtml();
                break;
    
            default:
              buildHtml();
          }})}

// console.log("TESTING TEST 1");

    function createEngineer() {
        inquirer.prompt([
        {
            type: "input",
            name: "engineerName",
            message: "What is the Engineer's name?"
        },

        {
            type: "input",
            name: "engineerId",
            message: "What is the Engineer's employee ID" 
        },

        {
            type: "input",
            name: "engineerEmail",
            message: "What is the Engineer's Email?"
        },

        {
            type: "input",
            name: "engineerGithub",
            message: "What is the Engineer's GitHub?"
        }

        ])
        
        .then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);

        teamMembers.push(engineer);
        console.log("Engineer created!")
        //   will rerun the program to add another employee type, no matter which one was previously added
        createTeam();
        });
    }

    // console.log("TESTING TEST 2")

    function createIntern() {
        inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the Intern's name?"
        },

        {
            type: "input",
            name: "internId",
            message: "What is the Intern's employee ID?" 
        },

        {
            type: "input",
            name: "internEmail",
            message: "What is the Intern's Email?"
        },

        {
            type: "input",
            name: "internSchool",
            message: "What school is the Intern attending?"
        }

        ])
        
        .then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);

        teamMembers.push(intern);
        console.log("Intern added!");

        createTeam();
        });
    }

    // console.log("TESTING 3")

    function createManager() {
        inquirer.prompt ([
        
        {
            type: "input",
            name: "managerName",
            message: "What is the Manager's name?"
        },
    
        {
            type: "input",
            name: "managerId",
            message: "What is the Manager's employee ID?"
        },
    
        {
            type: "input",
            name: "managerEmail",
            message: "What is the Manager's Email?"
        },
    
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the Manager's office #?"
        }
    
        ])
        
        .then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);

        teamMembers.push(manager);
        console.log("Manager created!")

        createTeam();
        });
    }

    // console.log("TESTING TESTING TESTING 4 TEST 4");

    function buildHtml () {
        console.log("Team created")

        fs.writeFileSync(outputPath, getTeam(teamMembers), "UTF-8")
    }

    createTeam();
}

start();