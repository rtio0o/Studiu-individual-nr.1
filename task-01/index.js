const grades = [7, 9, 5, 10, 8, 6];

const passingGrades = grades.filter((grade) => grade >= 8);
const totalGrades = grades.reduce((total, grade) => total + grade, 0);
const averageGrade = totalGrades / grades.length;
const increasedGrades = grades.map((grade) => Math.min(grade + 1, 10));

console.log(`Toate notele: ${grades.join(", ")}`);
console.log(`Note mai mari sau egale cu 8: ${passingGrades.join(", ")}`);
console.log(`Media notelor: ${averageGrade.toFixed(2)}`);
console.log(`Note mărite cu 1 punct: ${increasedGrades.join(", ")}`);
