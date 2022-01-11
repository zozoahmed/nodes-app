const fs = require('fs');
const addStudents = (id, username, gread) => {
    const students = loadStudents();
    console.log(gread);
  
    // duplicateId
    const duplicateId = students.find((student) => {
        return student.id === id;
    });
    console.log(duplicateId);
    if (!duplicateId) {
    
        students.push({
            id,
            username,
            gread,
            sum
        });
        saveStudents(students);
        console.log('student is saved successfuly');
    } else {
        console.log('Error duplicate id plz entr other id');
    }
};

// delete 
const deleteStudents = (id) => {
    const students = loadStudents();
    const studentsToKeep = students.filter((student) => {

        return student.id !== id;
    });
    console.log(students.length);
    console.log(studentsToKeep.length);

    if (students.length !== studentsToKeep.length) {
        saveStudents(studentsToKeep);
        console.log('student is removed');
    } else {
        console.log('No student is found');
    }

};
const readStudents = (id) => {
    const students = loadStudents();
    const student = students.find((student) => {
        return student.id === id;
    });
    console.log(student);
    if (student) {
        console.log(student.username);
    } else {

        console.log('No student is found');
    }
};

const listStudents = () => {
    const students = loadStudents();
    students.forEach((student) => {
        console.log(student.id, student.username, student.gread);
    });
};


const loadStudents = () => {
    try {
        const dataBuffer = fs.readFileSync('students.json').toString();
        return JSON.parse(dataBuffer);
    } catch (e) {
        return [];
    }

};

const saveStudents = (student) => {
    const saveData = JSON.stringify(student);
    fs.writeFileSync('students.json', saveData);
};

module.exports = {
    addStudents,
    deleteStudents,
    readStudents,
    listStudents
};