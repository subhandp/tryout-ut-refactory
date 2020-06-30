function myPrompt(){
    let val;
    let total = 0;
    while(val !== '='){
        if (Number.isInteger(val)) {
            val = prompt("Input angka anda untuk ditotalkan: ");
            total += parseInt(val);
        }

    }
    let hasil = `Total nilai adalah ${total}`;
    console.log(hasil);
    return hasil;
}

myPrompt();