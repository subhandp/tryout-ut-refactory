const between = (x, min, max) => {
  return x >= min && x <= max;
}

const onlyNumberCheck = (num) => Number.isInteger(num);

const deretCheck = (deret) => {
  if(!Array.isArray(deret)){
    console.log('deret hanya boleh Array');
    return 'deret hanya boleh Array';
  }
  if(!between(deret.length,1,100)){
    console.log('deret hanya bisa berisi 1-100 angka');
    return 'deret hanya bisa berisi 1-100 angka';
  }
  if(!deret.every(onlyNumberCheck))
    console.log('deret hanya boleh angka');
    return 'deret hanya boleh angka';
}

function max(deret){
    deretCheck(deret);
    const resultMax = Math.max(...deret);
    console.log(resultMax);
    return resultMax;

}

function min(deret){
    deretCheck(deret);
    const resultMin = Math.min(...deret);
    console.log(resultMin);
    return resultMin;

}

function avg(deret){
    deretCheck(deret);
    const reducer = (a,b) => a + b;
    const resultAvg = deret.reduce(reducer) / deret.length;
    console.log(resultAvg);
    return resultAvg;

}

let deret = [4,5,2,3,10,4,5,6,77,134,1,3,4];
max(deret);
min(deret);
avg(deret);