USE employee_db;

INSERT INTO department(name) values("Electronics");
INSERT INTO department(name) values("Photolab");

INSERT INTO role(title,salary,department_id) values("Manager", 40000.00, 1);
INSERT INTO role(title,salary,department_id) values("cASHIER", 30000.00, 2);

INSERT INTO employee(first_name,last_name, role_id,manager_id) values("Chuck","Barry", 1, NULL);
INSERT INTO employee(first_name,last_name, role_id,manager_id) values("Mike","Lowery", 2, 1);