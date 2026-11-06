import { initialStudents } from "./students.js";
import { calculateAverage, calculateSum } from "./utils.js";

let students = [...initialStudents];

const showStudents = (studentList, title) => {
  console.log(`\n${title}`);
  studentList.forEach(({ id, name, grade }) => {
    console.log(`ID: ${id} | Elev: ${name} | Nota: ${grade}`);
  });
};

const findStudentById = (studentList, id) => {
  const student = studentList.find((currentStudent) => currentStudent.id === id);

  if (!student) {
    throw new Error(`Elevul cu ID-ul ${id} nu a fost găsit.`);
  }

  return student;
};

const addStudent = (student) => {
  students = [...students, student];
  console.log(`\nElev adăugat: ${student.name} (nota ${student.grade})`);
};

showStudents(students, "Lista inițială de elevi:");

const goodStudents = students.filter(({ grade }) => grade >= 8);
showStudents(goodStudents, "Elevi cu nota mai mare sau egală cu 8:");

const grades = students.map(({ grade }) => grade);
console.log(`\nSuma notelor: ${calculateSum(grades)}`);
console.log(`Media clasei: ${calculateAverage(grades).toFixed(2)}`);

try {
  const foundStudent = findStudentById(students, 3);
  console.log(`\nElev găsit: ${foundStudent.name} are nota ${foundStudent.grade}.`);

  findStudentById(students, 99);
} catch (error) {
  console.log(`Eroare: ${error.message}`);
}

addStudent({ id: 6, name: "Daniel", grade: 9 });
showStudents(students, "Lista după adăugarea unui elev:");
