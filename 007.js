//menggunakan for..loop
function reverseForLoop(str) {
    let revStr = "";
 
    for (let s = str.length - 1; s >= 0; s--) { 
        revStr += str[s];
    }

    return revStr; 
}

//menggunakan ES6
function reverse(str) {
    const revStr = str.split('').reverse().join('');
    console.log(revStr);
    return revStr;
}

reverse("semua kata-kata");
