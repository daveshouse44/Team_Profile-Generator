// package requirements
const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');

const Employee = require('./lib/employee.js');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

const generateHtml = require('./dist/generateHtml');

// Other references needed
const teamList = [];

// Valdiation functions
const validateName = answer => {
    const pass = answer.match(
      /^[a-zA-Z]+$/
    );
    if (pass) {
      return true;
    }
    return "Enter valid name";
  };

  const validateNum = answer => {
    const pass = answer.match(
      '^[0-9]+$'
    );
    if (pass) {
      return true;
    }
    return "Must be a number";
  };

  const validateEmail = answer => {
    const pass = answer.match(
      /\S+@\S+\.\S+/
    );
    if (pass) {
      return true;
    }
    return "Enter valid email address.";
  };

// initiate program
const init = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: 'What is the manager name?',
            validate: validateName,
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the manager ID number?',
            validate: validateNum,
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the manager email?',
            validate: validateEmail,
        },
        {
            type: 'input',
            name: 'officeNum',
            message: 'What is the manager office number?',
            validate: validateNum,
        },
    ])
    .then((data) => {
        let manager = new Manager(data.name, data.id, data.email, data.officeNum);
        teamList.push(manager);
        addNewTeamMember();
    });
}

const addNewTeamMember = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'teamMember',
            message: 'Select an option below next',
            choices: ['Engineer', 'Intern', 'Done adding team members'],
        },
    ])
    .then((data) => {
        if (data.teamMember === 'Engineer') {
            addEngineer ();
        }
        else if (data.teamMember === 'Intern') {
            addIntern ();
        }
        else {
            buildTeam();
        }
    });
};


// Creating Engineer profiles
const addEngineer = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
        message: `What is the engineer name?`,
        validate: validateName,
    },
    {
        type: 'input',
        name: 'id',
        message: `What is the engineer ID number?`,
        validate: validateNum,
    },
    {
        type: 'input',
        name: 'email',
        message: `What is the engineer email?`,
        validate: validateEmail,
    },
    {
        type: 'input',
        name: 'github',
        message: `What is your engineer GitHub username?`
        },
    ]).then ((data) => {
        let engineer = new Engineer (data.name, data.id, data.email, data.github);
        teamList.push(engineer);
        addNewTeamMember();
    })
};

// Create Intern profiles
const addIntern = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
        message: `What is the intern name?`,
        validate: validateName,
    },
    {
        type: 'input',
        name: 'id',
        message: `What is the intern ID number?`,
        validate: validateNum,
    },
    {
        type: 'input',
        name: 'email',
        message: `What is the intern email?`,
        validate: validateEmail,
    },
    {
        type: 'input',
        name: 'school',
        message: `What is the intern's school?`
        },
    ]).then ((data) => {
        let intern = new Intern (data.name, data.id, data.email, data.school);
        teamList.push(intern);
        addNewTeamMember();
    })
};

function buildTeam () {
    fs.writeFile('team.html', generateHtml(teamList), (err) => {
        err ? console.log(chalk.redBright(err)) : console.log(chalk.cyan("Your HTML file of team members had been generated!"));
    })
}

// Function to initialize app
init();