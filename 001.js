function grade(num) {
  if(Number.isInteger(num)){
    if (num >= 90) {
        console.log('A');
        return 'A';
    } else if (num >= 80 && num <= 89) {
        console.log('B');
        return 'B';
    } else if (num >= 70 && num <= 79) {
        console.log('C');
        return 'C';
    } else if (num >= 60 && num <= 69) {
        console.log('D');
        return 'D';
    } else if (num <= 59) {
        console.log('E');
        return 'E';
    }
  }
}

grade(10);
grade(80);
grade(90);