function factR(n) 
{
    if (n<2) {return 1;}
    return (n*factR(n-1));
}

function factI(n) 
{
    let r = 1;
    for(i = 1; i>0; i--) {
        r = r*i;
    }
    return r;
}

let n = 8;
console.log("FactR of", n, "is", factR(n));
console.log("FactI of", n, "is", factI(n));