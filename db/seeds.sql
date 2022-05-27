INSERT INTO department(department_name)
VALUES("Engineering"), ("Operations"), ("Finance"), ("Sales"), ("Legal");

INSERT INTO roles(title, salary, department_id)
VALUES("Engineer", 90000, 1), ("Senior Engineer", 125000, 1), ("CFO", 350000, 3), ("General Counsel", 300000, 5);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Bob', 'Smith', 1, 2), ('James', 'Smith', 1, null), ('Peyton', 'Manning', 1, 2), ('Jimmy', 'Jones', 2, 2), ('Larry', 'Legal', 4, null);

