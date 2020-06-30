const singleLeapYear = (year) =>
{
  const leapYear = ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  return leapYear ?  'adalah tahun kabisat' : 'adalah bukan tahun kabisat';
 
}

function leapYear(yearMin,yearMax){
  for(let year = yearMin; year <= yearMax; year++){
    console.log(`${year}: ${singleLeapYear(year)}`);
  }
}

leapYear(1600,2020);