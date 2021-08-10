// Write your solution in this file!
const employee = {
    name: "name",
    streetAddress: "123"
}

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    return Object.assign({}, employee, {[key]: value});
}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    return Object.assign(employee, {[key]: value});
}

const deleteFromEmployeeByKey = (employee, key) => {
    let z = {...employee};
    delete z[key];
    return z;
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
}