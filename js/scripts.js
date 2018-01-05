const secInYear = 3.154e+7
const secInMonth = 2.628e+6;
const secInDay = 86400;
const mercYear = secInYear * .24;
const venYear = secInYear * .62;
const marsYear = secInYear * 1.88;
const jupYear = secInYear * 11.86;

export class CurrentTime {
  contructor() {
    this.currentSeconds = seconds;
    this.miuntes = minutes;
    this.month = month;
    this.year = year;
  }


  currentToSeconds(seconds, minutes, month, year) {
    const currentMin = minutes * 60;
    const currentMonth = month * secInMonth;
    const currentYear = year * secInYear;
    return seconds + currentMin + currentMonth + currentYear;
  }
}
export class Birthday {
  contructor(day, month, year){
    this.userDay = day;
    this.userMonth = month;
    this.userYear = year;
  }
  birthInSeconds(day, month, year){
    debugger;
    const dayAge = day * secInDay;
    const monthAge = month * secInMonth;
    const yearAge = year * secInYear;
    return dayAge + monthAge + yearAge;
  }
  ageInSeconds(age, current) {
    const secondsAge = current - age;
    return secondsAge;
  }
  ageonPlanets(age){
    const earthAge = age / secInYear;
    const mercAge = age / mercYear;
    const venAge = age / venYear;
    const marsAge = age / marsYear;
    const jupAge = age / jupYear;
    return earthAge;
    return mercAge;
    return venAge;
    return marsAge;
    return jupAge;
  };

}
