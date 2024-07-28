// Task-5 : reverse a string through recursion..

let lang = "javascript"


function reverse(lang){
    if(lang.length === 1){
        return lang;
    }
    return lang.charAt(lang.length-1) + reverse(lang.slice(0,-1));
}

console.log(`reverse of '${lang}' is '${reverse(lang)}'.`);

// Task-6 : check string is palindrome or not through recursion..

let str = "abba"
function checkPalindrom(str){
    if(str.length === 0 || str.length === 1){
        return true
    }
    if(str.charAt(0) !== str.charAt(str.length-1)){
        return false;
    }
    return checkPalindrom(str.slice(1,-1));
}

console.log(checkPalindrom(str));