// write the file to json data
// the size of the file is big
// we pass that data around different applications and can get big
// JSON doesn't have a structure of schema, it's pretty friendly
const employees = []
const fs = require("fs")

employees.push({
    "name": Joe,
    "salary": 1000,
    "id": 1001
})


const junior = {
    "name": Junior,
    "salary": 3000,
    "id": 1002
}

employees.push(junior)

employees.push({
    "name": Bill,
    "salary": 2000,
    "id": 1003
})

fs.writeFileSync("jsondata.json", JSON.stringify(employees))
