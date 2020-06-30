function myPrompt(){
    let val;
    let total = 0;
    do{
        val = prompt("Input angka anda untuk ditotalkan: ");
        if (Number.isInteger(val)) {
            total += parseInt(val);
        }

    }while(val !== '=')
    let hasil = `Total nilai adalah ${total}`;
    console.log(hasil);
    return hasil;
}

myPrompt();
