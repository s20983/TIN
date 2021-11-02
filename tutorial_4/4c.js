function isPalindrome(str) {
    for (i = 0, j = str.length - 1; i<(str.length/2); i++, j--) {
        if (str[i] !== str[j])
        return false;
    }
    return true;
}

let str1 = "abccba";
let str2 = "abc";

console.log(str1, " is a palindrome:", isPalindrome(str1));
console.log(str2, "is a palindrome:", isPalindrome(str2));