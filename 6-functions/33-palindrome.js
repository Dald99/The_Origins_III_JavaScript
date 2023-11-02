function isPalindrome(str) {
    let lowerCase = str.toLowerCase();
    let reverse = lowerCase.split('').reverse().join('');

    return lowerCase === reverse;
}

console.log(isPalindrome('radar'));