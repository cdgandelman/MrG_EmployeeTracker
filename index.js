const inquirer = require("inquirer");
const db = require("./db/connection");
const cTable = require('console.table');

function menu(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What would you like to do?',
            choices: ["View Dept", "View Role", "View Employee", "Add Dept","Add Role", "Add Employee", "Update Role", "Exit"]
        }
    ]).then(res=>{
        if (res.choice==="View Dept") {
            viewDept()
            
        } else if(res.choice==="View Role") {
            viewRole()
        }else if(res.choice==="View Employee") {
            viewEmployee()
        }else if(res.choice==="Add Dept") {
            addDept()
        }else if(res.choice==="Add Role") {
            addRole()
        }else if(res.choice==="Add Employee") {
            addEmployee()
        }else if(res.choice==="Update Role") {
            updateRole()
        }else if(res.choice==="Exit") {
            console.log("See Ya")
            process.exit()
        }
    })}
//view department table
function viewDept(){
    db.query("select * from department", (err,data)=>{console.table(data)
    //loops back to menu
    menu()
    })
}
//view role table
function viewRole(){
    db.query("select * from role", (err,data)=>{console.table(data)
    menu()
    })
}
//view employee table
function viewEmployee(){
    db.query("select * from employee", (err,data)=>{console.table(data)
    menu()
    })
}
//add department
function addDept(){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the Department name?"
        }
    ]).then((res)=>{ 
        db.query("insert into department (name) values (?)", [res.name], (err,data)=>{console.log("Added!")
        menu()
        })
    })
}
//add role
function addRole(){
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the new role title?"
        },
        {
            type: "input",
            name: "salary",
            message: "What is the new role's salary?"
        },
        {
            type: "input",
            name: "department_id",
            message: "What is the Department ID?"
        }
    ]).then((res)=>{ 
        db.query("insert into department (title,salary,department_id) values (?,?,?)", [res.title,res.salary,res.department_id], (err,data)=>{console.log("Added!")
        menu()
        })
    })
}
//add employee
function addEmployee(){
    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name??"
        },
        {
            type: "input",
            name: "role_id",
            message: "What is the new employee's role?"
        },
        {
            type: "input",
            name: "manager_id",
            message: "Who is the new employee's manager?"
        }
    ]).then((res)=>{ 
        db.query("insert into department (first_name,last_name,role_id,manager_id) values (?,?,?,?)", [res.first_name,res.last_name,res.role_id,res.manager_id], (err,data)=>{console.log("Added!")
        menu()
        })
    })
}
function updateRole() {
    db.query("select * from role")
        inquirer.prompt([
            {
                type: "input",
                name: "title",
                message: "What is the new role title?"
            },
            {
                type: "input",
                name: "salary",
                message: "What is the new role's salary?"
            },
            {
                type: "input",
                name: "department_id",
                message: "What is the Department ID?"
            },
    ])    
    .then((answers) => {
        const query = "UPDATE role SET title = ?, salary = ?, department_id = ? WHERE id = ?";
        const values = [answers.title, answers.salary, answers.department_id, answers.role_id];
  
        db.query(query, values, (err, result) => {
          if (err) throw err;
          console.log(`${result.affectedRows} role updated!\n`);
          menu();
        });
      });
  }
  menu();