const Schema = require("./employees_pb")
const fs = require("fs")

const joe = new Schema.Employee();
joe.setName("Joe");
joe.setSalary(1000);
joe.setId(1001);

const junior = new Schema.Employee();
junior.setName("Junior");
junior.setSalary(3000);
junior.setId(1002);

const bill = new Schema.Employee();
bill.setName("Bill");
bill.setSalary(2000);
bill.setId(1003);

const employees = new Schema.Employees;
employees.addEmployees(joe);
employees.addEmployees(junior);
employees.addEmployees(bill);

// will seralize
const bytes = employees.serializeBinary(); 
console.log("binary " + bytes)

// will be comparable to json version, just smaller, and not human readable
fs.writeFileSync("employeesbinary", bytes)

// can deserialize
employees2 = Schema.Employees.deserialize(bytes);
console.log(employees2)