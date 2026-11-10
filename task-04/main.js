import {
    applyExperienceRaise,
    calculateAverageSalary,
    createFinalReport,
    employees,
    filterByDepartment,
    getExperiencedEmployees,
    groupByDepartment,
} from "./employees.js";

const itEmployees = filterByDepartment(employees, "IT");
console.log("Angajați din departamentul IT:");
itEmployees.forEach(({ name, salary }) => {
    console.log(`- ${name}: ${salary.toFixed(2)} lei`);
});

const employeesByDepartment = groupByDepartment(employees);
console.log("\nGrupare pe departamente:");
Object.entries(employeesByDepartment).forEach(([department, members]) => {
    console.log(`- ${department}: ${members.map(({ name }) => name).join(", ")}`);
});

console.log(
    `\nSalariul mediu înainte de mărire: ${calculateAverageSalary(employees).toFixed(2)} lei`,
);

const experiencedEmployees = getExperiencedEmployees(employees);
console.log("\nAngajați cu mai mult de 3 ani experiență:");
experiencedEmployees.forEach(({ name, experience }) => {
    console.log(`- ${name}: ${experience} ani`);
});

const employeesAfterRaise = applyExperienceRaise(employees);
console.log("\nSalarii după aplicarea măririi de 10%:");
employeesAfterRaise.forEach(({ name, salary }) => {
    console.log(`- ${name}: ${salary.toFixed(2)} lei`);
});

console.log(`\n${createFinalReport(employees, employeesAfterRaise)}`);
