//Create class Person with first and last name, as well as getter and setter for full name. Rewrite Student class from task E to extend class Person

class Person {
    constructor(firstname,lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
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


class Student extends Person{

    constructor(firstname,lastname, id, gradesarray) {
    super(firstname, lastname);
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
}

console.log(createStudent("Magdalena", "Zembrzuska", "s20983"));