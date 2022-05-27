const inquirer = require('inquirer');
const cTable = require('console.table');
const db = require('./config/connection');


// All Question Arrays
const startMenuQuestion = [
  {
    type: 'list',
    name: 'startMenuQuestion',
    message: 'What would you like to do?',
    choices: [
      "Show all Roles",
      "Add a Role",
      "Show all Departments",
      "Add a Department",
      "Show all Employees",
      "Add an Employee",
      "Update an Employee's role"
    ]
  }
]

const addRoleQuestions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of the new role?'
  },
  {
    type: 'input',
    name: 'salary',
    message: 'What is the salary of the new role? (numbers only please, i.e. "100000")'
  },
  {
    type: 'input',
    name: 'department',
    message: 'What department is the new role in? Please type the number only of the department shown above! (i.e. "4")'
  }
]

const addDepartmentQuestion = [
  {
    type: 'input',
    name: 'name',
    message: 'What department would you like to add?'
  }
]


const addEmployeeQuestions = [
  {
    type: 'input',
    name: 'first_name',
    message: 'What is the first name of the new employee?'
  },
  {
    type: 'input',
    name: 'last_name',
    message: 'What is the last name of the new employee?'
  },
  {
    type: 'input',
    name: 'role_id',
    message: 'What role is the new employee in? Please type the number only of the "id" section shown above! (i.e. "4")',
  },
  {
    type: 'input',
    name: 'manager_id',
    message: 'Who is the manager for the new employee? Please type the number only of the "id" section shown above! (i.e. "4")'
  }
]

const chooseEmployeeQuestion = [
  {
    type: 'input',
    name: 'employee_id',
    message: 'Which employee would you like to update? Please only type the number of the "id" of the employee! (i.e. "4")'
  },
]

const updateEmployeeRoleQuestion = [
  {
    type: 'input',
    name: 'role_id',
    message: 'What new role would you like for your employee? Please only type the number of the "id" of the role! (i.e. "4")'
  },
]



