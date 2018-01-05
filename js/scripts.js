const secInYear = 3.154e+7
const secInMonth = 2.628e+6;
const secInDay = 86400;

export class currentTime {
  contructor() {
    this.currentSeconds = seconds;
    this.miuntes = minutes;
    this.month = month;
    this.year = year;

  }
}

export class userAge {
  contructor(){
    this.userDay = day;
    this.userMonth = month;
    this.userYear = year:
  }

  function ageToSeconds(day, month, year){
      const dayAge = day * secInday;
      const monthAge = month * secInMonth;
      const yearAge = year * secInYear;
      return dayAge + monthAge + yearAge;
      }
  dateToSeconds(currentDate){

  }
}
