//  const employee = {name: "Ben", address: "old"}


// function updateEmployeeWithKeyAndValue(employee, key, value) {
//     const updatedEmployee = {...employee}
//     updatedEmployee[key] = value
//     return updatedEmployee
// }

// function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
//     employee[key] = value
//     return employee
// }

// function  deleteFromEmployeeByKey(employee, key) {
//     const updatedEmployee = {...employee}
//     delete updatedEmployee[key]
//     return updatedEmployee
// }

// function destructivelyDeleteFromEmployeeByKey(employee, key) {
//     delete employee[key]
//     return employee
// }

let employee = {name: "Ben", streetAddress: "2005 castle view"}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, [key]: value}

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
let newemployees = {...employee}
delete newemployees[key]
return newemployees
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
delete employee[key]
return employee
}


