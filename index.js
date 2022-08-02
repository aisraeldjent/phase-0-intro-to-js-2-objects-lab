var employee = { 'name': 'Sam'};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employee2 = Object.assign({}, employee);
    employee2.key = value;
    return employee2;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {

}

function deleteFromEmployeeByKey(employee, key) {

}

function destructivelyDeleteFromEmployeeByKey(employee, key) {

}