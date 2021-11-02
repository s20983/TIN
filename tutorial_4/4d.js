function abOrder(str) {
    return str.split('').sort().join('');
}

let str = "webmaster";
console.log("Example string :" + str + ",  string with letters in alphabetical order:" + abOrder(str));

