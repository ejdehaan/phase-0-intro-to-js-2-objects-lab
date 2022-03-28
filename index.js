// Write your solution in this file!
const employee = {
    name : "Emily Joy",
    streetAddress : "6497 65th ST N"
}

//console.log(employee)

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...employee,
        name : "Sam",
        streetAddress : "11 Broadway"
}}


function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    employee.name = "Sam",
    employee.streetAddress = "12 Broadway"
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
     let newEmployee = { 
        ...employee,}
    delete newEmployee.name
    return newEmployee
                 
}


function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee
}