// Inquirer is main package required, will pass answers through in callback functions
var inquirer = require('inquirer');

var path = require('path');
var OUTPUT_DIR = path.resolve(__dirname, 'output');
var outputPath = path.join(OUTPUT_DIR, 'team.html');

var fs = require('fs');
var Engineer = require('./lib/Engineer.js');
var Intern = require('./lib/Intern.js');
var Manager = require('./lib/Manager.js');
var getTeam = require('./src/template.js');

teamMembers = [];


// start() function will actually be what runs the program. addManager, addEngineer, addIntern, buildHtml will be defined later with the first 3 being inquirer prompts as well
function start() {
    function createTeam () {

        inquirer.prompt([{
          type: "list",
          message: "Which employee would you like to add?",
          name: "addPrompt",
          choices: ["Manager", "Engineer", "Intern", "None"]

        }]).then(function (userInput) {
          switch(userInput.addPrompt) {

            case "Manager":
              addManager();
              break;

            case "Engineer":
              addEngineer();
              break;

            case "Intern":
              addIntern();
              break;
    
            default:
              buildHtml();
          }
        })
      }
}