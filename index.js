// package requirements
const inquirer = require('inquirer');
const fs = require('fs');
const chalk = require('chalk');

const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

const generateHtml = require('./src/generatehtml.js');

// Other references needed
const teamList = [];

// Valdiation functions
const validateName = answer => {
    const pass = answer.match(/^[a-zA-Z]+$/);
    if (pass) {
      return true;
    }
    return (chalk.redBright("Enter valid name"));
  };

  const validateNum = answer => {
    const pass = answer.match('^[0-9]+$');
    if (pass) {
      return true;
    }
    return (chalk.redBright("Must be a number"));
  };

  const validateEmail = answer => {
    const pass = answer.match(/\S+@\S+\.\S+/);
    if (pass) {
      return true;
    }
    return (chalk.redBright("Enter valid email address."));
  };

// initiate program questions
const init = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: (chalk.red('What is the manager name?')),
            validate: validateName,
        },
        {
            type: 'input',
            name: 'id',
            message: (chalk.red('What is the manager ID number?')),
            validate: validateNum,
        },
        {
            type: 'input',
            name: 'email',
            message: (chalk.red('What is the manager email?')),
            validate: validateEmail,
        },
        {
            type: 'input',
            name: 'officeNum',
            message: (chalk.red('What is the manager office number?')),
            validate: validateNum,
        },
    ])
    .then((data) => {
        let manager = new Manager(data.name, data.id, data.email, data.officeNum);
        teamList.push(manager);
        addNewTeamMember();
    });
}

// Question loop to add more TeamMembers
const addNewTeamMember = () => {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'teamMember',
            message: (chalk.yellow('Select an option below next')),
            choices: [(chalk.blue('Engineer')), (chalk.green('Intern')), (chalk.yellow('Done adding team members'))],
        },
    ])
    .then((data) => {
        if (data.teamMember === (chalk.blue('Engineer'))) {
            addEngineer ();
        }
        else if (data.teamMember === (chalk.green('Intern'))) {
            addIntern ();
        }
        else {
            console.log(chalk.blueBright.bold('Your team profile has been generated!'));
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
        message: (chalk.blue(`What is the engineer name?`)),
        validate: validateName,
    },
    {
        type: 'input',
        name: 'id',
        message: (chalk.blue(`What is the engineer ID number?`)),
        validate: validateNum,
    },
    {
        type: 'input',
        name: 'email',
        message: (chalk.blue(`What is the engineer email?`)),
        validate: validateEmail,
    },
    {
        type: 'input',
        name: 'github',
        message: (chalk.blue(`What is your engineer GitHub username?`))
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
        message: (chalk.green(`What is the intern name?`)),
        validate: validateName,
    },
    {
        type: 'input',
        name: 'id',
        message:(chalk.green( `What is the intern ID number?`)),
        validate: validateNum,
    },
    {
        type: 'input',
        name: 'email',
        message: (chalk.green(`What is the intern email?`)),
        validate: validateEmail,
    },
    {
        type: 'input',
        name: 'school',
        message: (chalk.green(`What is the intern's school?`))
        },
    ]).then ((data) => {
        let intern = new Intern (data.name, data.id, data.email, data.school);
        teamList.push(intern);
        addNewTeamMember();
    })
};

// Function to write new index.html file with response data
function buildTeam () {
    fs.writeFile('./dist/index.html', generateHtml(teamList), (err) => {
        err ? console.log(chalk.redBright(err)) : console.log(chalk.cyan("Your HTML file of team members had been generated!"));
    })
}

// Function to initialize app
init();

