let regex = /[\W_]/g;
const cleanPalindrome = (str) => str.toLowerCase().replace(regex, '');

const reverseString = (str) => {
    return str.split('').reverse().join('');
}

function palindrome(str){
    const strPalindrome = cleanPalindrome(str);
    const reversePalindrome = reverseString(strPalindrome);
    if(reversePalindrome === strPalindrome){
        console.log(true);
        return 'true';
    }
    else{
        console.log(false);
        return 'false';    
    }
}

let str1 = "Cigar? Toss it in a can. It is so tragic";
let str2 = "I did, did I?";
let str3 = "Red rum, sir, is murder";
let str4 = "Eva, can I see bees in a cave?";
let str5 = "Hello World";

palindrome(str1);
palindrome(str2);
palindrome(str3);
palindrome(str4);
palindrome(str5);