//Implement a constructor function, creating objects representing students – they should include first and last name, id, array with grades (without subject names, just grades) , a method printing first and last name and grade average of a student

function Student(firstname, lastname, id, gradesarray) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.id = id;
    this.gradesarray = gradesarray;
}

function printStudent(){
    let sum = 0;
        for(let i =0; i<gradesarray.length; i++) {
        sum = sum+parseInt(gradesarray[i]);
    }
    console.log(this.firstname + " " + this.lastname + " has grade average of " + (sum/(gradesarray.length)));
}
  
var s = Student("Magdalena", "Zembrzuska", "s20983", [3,4,5,5,5]);
printStudent(s);
  