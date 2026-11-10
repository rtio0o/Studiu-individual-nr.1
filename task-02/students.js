export const initialStudents = [
    { id: 1, name: "Ana", grade: 9 },
    { id: 2, name: "Mihai", grade: 7 },
    { id: 3, name: "Elena", grade: 10 },
    { id: 4, name: "Victor", grade: 8 },
    { id: 5, name: "Irina", grade: 6 },
];

export const showStudents = (studentList, title) => {
    console.log(`\n${title}`);
    studentList.forEach(({ id, name, grade }) => {
        console.log(`ID: ${id} | Elev: ${name} | Nota: ${grade}`);
    });
};

export const findStudentById = (studentList, id) => {
    const student = studentList.find((currentStudent) => currentStudent.id === id);

    if (!student) {
        throw new Error(`Elevul cu ID-ul ${id} nu a fost găsit.`);
    }

    return student;
};

export const addStudent = (studentList, student) => [...studentList, student];
