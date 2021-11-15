//Extend task B with getter for average grade property and getter and setter for student’s full name

var Student = {
    firstname,
    lastname,
    id,
    gradesarray,
    courselist,
    get averageGrade() {
        let sum = 0;
        for(let i =0; i<gradesarray.length; i++) {
        sum = sum+parseInt(gradesarray[i]);
    }
        return sum/gradesarray.length; 
    },
    get fullName() {
        return this.firstname + " " + this.lastname;
    },
    set fullName(name) {
        var words = name.toString.split(" ");
        this.firstname = words[0] || '';
        this.lastname = words[1] || '';
    }
}

Student.prototype.courselist = ["AM", "PPJ", "TAK"];

function createStudent(firstname, lastname, id) {
    var student = Object.create(Student);
    student.firstname = firstname;
    student.lastname = lastname;
    student.id = id;
    return student;
}

console.log(createStudent("Magdalena", "Zembrzuska", "s20983"));