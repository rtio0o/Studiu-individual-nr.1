export const employees = [
  { id: 1, name: "Andrei Popa", department: "IT", salary: 18000, yearsOfExperience: 5 },
  { id: 2, name: "Maria Rusu", department: "HR", salary: 12000, yearsOfExperience: 2 },
  { id: 3, name: "Ion Ceban", department: "Finance", salary: 15500, yearsOfExperience: 7 },
  { id: 4, name: "Sofia Munteanu", department: "IT", salary: 21000, yearsOfExperience: 4 },
  { id: 5, name: "Victor Balan", department: "Marketing", salary: 13500, yearsOfExperience: 3 },
  { id: 6, name: "Elena Cojocaru", department: "Finance", salary: 17000, yearsOfExperience: 6 },
  { id: 7, name: "Diana Rotaru", department: "HR", salary: 12500, yearsOfExperience: 4 },
];

export const filterByDepartment = (employeeList, department) =>
  employeeList.filter((employee) => employee.department === department);

export const groupByDepartment = (employeeList) =>
  employeeList.reduce((groups, employee) => {
    const { department } = employee;
    const employeesInDepartment = groups[department] ?? [];

    return { ...groups, [department]: [...employeesInDepartment, employee] };
  }, {});

export const calculateAverageSalary = (employeeList) => {
  if (employeeList.length === 0) {
    return 0;
  }

  const totalSalary = employeeList.reduce(
    (total, { salary }) => total + salary,
    0,
  );

  return totalSalary / employeeList.length;
};

export const getExperiencedEmployees = (employeeList) =>
  employeeList.filter(({ yearsOfExperience }) => yearsOfExperience > 3);

export const applyExperienceRaise = (employeeList) =>
  employeeList.map((employee) => {
    const { yearsOfExperience, salary } = employee;

    return yearsOfExperience > 3
      ? { ...employee, salary: salary * 1.1 }
      : { ...employee };
  });

export const createFinalReport = (employeeList, raisedEmployees) => {
  const departments = groupByDepartment(employeeList);
  const departmentSummary = Object.entries(departments)
    .map(([department, members]) => `- ${department}: ${members.length} angajați`)
    .join("\n");
  const raisedNames = getExperiencedEmployees(employeeList)
    .map(({ name }) => name)
    .join(", ");

  return `
RAPORT FINAL ANGAJAȚI
======================
Număr total de angajați: ${employeeList.length}
Salariu mediu inițial: ${calculateAverageSalary(employeeList).toFixed(2)} lei
Salariu mediu după măriri: ${calculateAverageSalary(raisedEmployees).toFixed(2)} lei

Angajați pe departamente:
${departmentSummary}

Mărire de 10% pentru experiență mai mare de 3 ani:
${raisedNames}
`.trim();
};
