/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    
    let string = s.toLowerCase();
    let filteredString = "";

    for(let char of string) {
        if(char.match(/[a-z0-9]/)){
            filteredString = filteredString + char;
        }
    }
    let reverseString = filteredString.split("").reverse().join("");
    return filteredString === reverseString;
};