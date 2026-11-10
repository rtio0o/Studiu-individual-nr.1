import { addStudent, findStudentById, initialStudents, showStudents } from "./students.js";
import { calculateAverage, calculateSum } from "./utils.js";

let students = [...initialStudents];

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

const newStudent = { id: 6, name: "Daniel", grade: 9 };
students = addStudent(students, newStudent);
console.log(`\nElev adăugat: ${newStudent.name} (nota ${newStudent.grade})`);
showStudents(students, "Lista după adăugarea unui elev:");
