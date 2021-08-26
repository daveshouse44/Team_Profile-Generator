const Employee = require("../lib/employee");
const Engineer = require("../lib/engineer");

// Build the script framework for html page
function generatePage(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
  <link rel="stylesheet" href="./assets/css/style.css">
        <title>Team Profile</title>
    </head>
    <body>
        <header class="jumbotron jumbotron-fluid bg-dark text-light">
            <h1 class="text-center">Team Profile</h1>
        </header>
        <main>
            <div class="container-fluid">
                <div class="align-items-center">
                    <section class="row justify-content-around">
                        ${data}
                      </section>
                </div>    
            </div> 
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossorigin="anonymous"></script>
    </body>
    </html>
    `
};

function generateHtml(data){
  console.log(data);

  // Arrays of each team member data
  const teamCardData = [];

  let mgrData = data.filter(Employee => Employee.getRole() === 'Manager');

  mgrData.forEach(Manager => {
    const card = `
    <div class="col-12 col-sm-6 col-lg-4 mb-3">
    <div class="card">
      <h3 class="card-header bg-danger">
        ${Manager.name} : Manager
      </h3>
      <div class="card-body">
        <ul class="card-text">
          <li>ID: ${Manager.id}</li>
          <li>Email: <a href="mailto:${Manager.email}">${Manager.email}</a></li>
          <li>Office Number: ${Manager.officeNum}</li>
        </ul>
      </div>
    </div>
  </div>`;
  teamCardData.push(card);
  });

  let internData = data.filter(Employee => Employee.getRole() === 'Intern');

  internData.forEach(Intern => {
    const card = `
    <div class="col-12 col-sm-6 col-lg-4 mb-3">
    <div class="card">
      <h3 class="card-header bg-warning">
        ${Intern.name} : Intern
      </h3>
      <div class="card-body">
        <ul class="card-text">
          <li>ID: ${Intern.id}</li>
          <li>Email: <a href="mailto:${Intern.email}">${Intern.email}</a></li>
          <li>School: ${Intern.school}</li>
        </ul>
      </div>
    </div>
  </div>`;
  teamCardData.push(card);
  });

  let engineerData = data.filter(Employee => Employee.getRole() === 'Engineer');
  
  engineerData.forEach(Engineer => {
    const card = `
    <div class="col-12 col-sm-6 col-lg-4 mb-3">
    <div class="card">
      <h3 class="card-header bg-info">
        ${Engineer.name} : Engineer
      </h3>
      <div class="card-body">
        <ul class="card-text">
          <li>ID: ${Engineer.id}</li>
          <li>Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></li>
          <li>GitHub Page: <a href="https://github.com/${Engineer.github}" target="_blank">https://github.com/${Engineer.github}</a></li>
        </ul>
      </div>
    </div>
  </div>`;
  teamCardData.push(card);
  });

  const joinedTeamCards = teamCardData.join("");

  return generatePage(joinedTeamCards);

}

module.exports = generateHtml;