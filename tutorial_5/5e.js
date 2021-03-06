//Task D with classes

class Student {
    constructor(firstname,lastname, id, gradesarray) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.id = id;
    this.gradesarray = gradesarray;
    courselist = ["AM", "PPJ", "TAK"];
    }

    get averageGrade() {
        let num = 0;
        let sum = 0;
        for(x in this.gradesarray) {
            sum = sum+x;
            num++;
        }
        return sum/num; 
    }

    get fullName() {
        return this.firstname + " " + this.lastname;
    }

    set fullName(name) {
        var words = name.toString.split(" ");
        this.firstname = words[0] || '';
        this.lastname = words[1] || '';
    }
}

function createStudent(firstname, lastname, id) {
    var student = Object.create(Student);
    student.firstname = firstname;
    student.lastname = lastname;
    student.id = id;
    return student;
}

console.log(createStudent("Magdalena", "Zembrzuska", "s20983"));