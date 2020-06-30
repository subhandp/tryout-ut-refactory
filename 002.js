function oddEven(num) {
  if(Number.isInteger(num)){
    if(num % 2 === 1){
      console.log('Ganjil');
      return 'Ganjil';
    }
    else{
        console.log('Genap');
        return 'Genap';
    }
  }else{
        console.log('Inputan harus angka');
        return 'Inputan harus angka';
  }
}

oddEven(10);
oddEven(5);