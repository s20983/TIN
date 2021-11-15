//Use object initializer to create an object, it should have at least 2-3 fields and 2-3 methods. Write a function accepting the object as a parameter and printing all its properties and their types

var cuboid = {
    a: 8,
    b: 10,
    c: 6,
    volume: function() { return a*b*c; },
    totalarea: function() { return 2*a*b + 2*a*c + 2*b*c; }
}

function printProperties(object) {
    for (let x in object) {
        let property = object[x];
        console.log(x + " is " + property + " and it is of type:" + typeof property);
    }
}

printProperties(cuboid);