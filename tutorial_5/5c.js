//Create a prototype of a student object using initializer. The object should contain an array with list of courses each student should take. Write a function creating new objects based on this prototype, setting their first and last name and id properties.

var Student = {}

Student.prototype.courselist = ["AM", "PPJ", "TAK"];

function createStudent(firstname, lastname, id) {
    var student = Object.create(Student);
    student.firstname = firstname;
    student.lastname = lastname;
    student.id = id;
    return student;
}

console.log(createStudent("Magdalena", "Zembrzuska", "s20983"));