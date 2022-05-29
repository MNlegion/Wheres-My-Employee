<h1 align='center'>Where's My Employee?</h1>

  ![license](https://img.shields.io/badge/license-MIT-informational)

## Table of Contents
- [Description](#description)
- [User-Story](#user-story)
- [Acceptance-Criteria](#acceptance-criteria)
- [Installation](#install)
- [Utility](#utility)
- [License](#license)
- [Contributers](#contributers)
- [Tests](#tests)
- [Questions](#questions)

## Description
A content management system where using Inquire and mysql2 to create, read, update, and delete user input records involving employee data, role specific data, and department data. 

## Video Link to Application
[![Watch the video](./src/Screenshot%202022-05-29%20141209.png)](https://drive.google.com/file/d/1MzGoz-DMwCTNzoEU0K3O6eGHKrG5CLMD/view)

## User Story
- AS A business owner
- I WANT to be able to view and manage the departments, roles, and employees in my company
- SO THAT I can organize and plan my business

## Acceptance Criteria
- GIVEN a command-line application that accepts user input
- WHEN I start the application
- THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
- WHEN I choose to view all departments
- THEN I am presented with a formatted table showing department names and department ids
- WHEN I choose to view all roles
- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
- WHEN I choose to view all employees
- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
- WHEN I choose to add a department
- THEN I am prompted to enter the name of the department and that department is added to the database
- WHEN I choose to add a role
- THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
- WHEN I choose to add an employee
- THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
- WHEN I choose to update an employee role
- THEN I am prompted to select an employee to update and their new role and this information is updated in the database


## Installation
My project utilizes node.js along with the inquire, console.table and dotenv packages. Mysql2 is utilized for the database creation and manipulation. 

## License
![license](https://img.shields.io/badge/license-MIT-informational)
<br />
Covered under the MIT license.

## Contributers
MNlegion

## Tests
There are currently no tests associated to my project. 

## Questions
Please reach out to the below contacts should you have any questions or concerns:

View my GitHub Profile: [MNlegion](https://github.com/MNlegion)

Contact me: rkreuser30@gmail.com