daysInMonths = [31,28,31,30,31,30,31,31,30,31,30,31]

let total = 0;

let dayOfTheWeek = 1;
for(let year = 1900;year <= 2000;year++){
  
  for(let month = 0;month <= 11;month++){
    let leapYearDay = 0;
    if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0) && month == 1){
      leapYearDay = 1;
    }
    for(let day = 0;day < daysInMonths[month] + leapYearDay;day++){
      if(day == 0 && dayOfTheWeek == 0 && year >= 1901){
        total++;
      }
      dayOfTheWeek++;
      if(dayOfTheWeek == 7){
        dayOfTheWeek = 0;
      }
    }
  }
}
console.log(total);