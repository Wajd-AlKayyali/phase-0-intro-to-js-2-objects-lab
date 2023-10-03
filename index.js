// Write your solution in this file!

let employee = {
    name: "Ahmed Al-Mansoori",
    streetAddress: "456 Souk Al-Jadida Street",
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
  // Create a new object by spreading the properties of the original employee object
  const updatedEmployee = {
      ...employee,
      [key]: value, // Update the specified key with the new value
  };
  return updatedEmployee; // should add this line since the question is asking to return the value.
}

const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "123 New Street");
console.log(updatedEmployee);
// ________________

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  // Mutate the original employee object by updating the specified key with the new value
  employee[key] = value;
  return employee // should add this line since the question is asking to return the value.
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "123456789 New Street");
console.log(employee);
 // ________________


 function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = {
      ...employee};
  delete newEmployee[key]
  return newEmployee
}
const newEmployee = deleteFromEmployeeByKey(employee, "streetAddress");

console.log(newEmployee);



function destructivelyDeleteFromEmployeeByKey(employee, key)
{
  delete employee[key]
return employee
}
 deleteFromEmployeeByKey(employee,streetAddress)