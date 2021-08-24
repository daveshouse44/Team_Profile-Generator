const Employee = require ('./employee.js');

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        // this.name = name;
        // this.id = id;
        // this.email = email
        this.githubUsername = github;

    }

    getGithub () {
        return this.github;

    }

    getRole () {
        return 'Engineer';
    }
}


module.exports = Engineer;