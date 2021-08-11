// Write your solution in this file!
const employee = {
    name : 'Billy', 
    address : 'Wherever'
}

function updateEmployeeWithKeyAndValue( obj, key, value) {
    const newEmployee = {...obj};
    newEmployee[key] = value;

    return newEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj
}

function deleteFromEmployeeByKey(obj, key) {
    const deleteEmployee = {...obj};

    delete deleteEmployee[key];

    return deleteEmployee;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key]

    return obj
}