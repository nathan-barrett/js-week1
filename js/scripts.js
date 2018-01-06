const secInYear = 3.154e+7;
const secInMonth = 2.628e+6;
const secInDay = 86400;
const secInHr = 3600;
const mercYear = secInYear * 0.24;
const venYear = secInYear * 0.62;
const marsYear = secInYear * 1.88;
const jupYear = secInYear * 11.86;


export class CurrentTime {
  contructor(seconds, minutes, day, month, year) {
    this.seconds = seconds;
    this.minutes = minutes;
    this.day = day;
    this.month = month;
    this.year = year;
  }
  currentToSeconds(seconds, minutes, hour,  day, month, year) {
    const currentMinSec = minutes * 60;
    const currentHrSec = hour * secInHr;
    const currentDaySec = day * secInDay;
    const currentMonthSec = month * secInMonth;
    const currentYearSec = year * secInYear;
    return seconds + currentMinSec + currentHrSec + currentDaySec + currentMonthSec + currentYearSec;
  }
}
export class Birthday {
  contructor(day, month, year){
    this.day = day;
    this.month = month;
    this.year = year;
  }
  birthInSeconds(day, month, year){
    const dayAge = day * secInDay;
    const monthAge = month * secInMonth;
    const yearAge = year * secInYear;
    return dayAge + monthAge + yearAge;
  }
  ageInSeconds(age, current) {
    const secondsAge = current - age;
    return secondsAge;
  }
  ageOnEarth(age){
    const earthAge = Math.floor(age / secInYear);
    return earthAge;
  }
  ageOnMerc(age){
    const mercAge = Math.floor(age / mercYear);
    return mercAge;
  }
  ageOnVen(age){
    const venAge = Math.floor(age / venYear);
    return venAge;
  }
  ageOnMars(age){
    const marsAge = Math.floor(age / marsYear);
    return marsAge;
  }
  ageOnJup(age){
    const jupAge = Math.floor(age / jupYear);
    return jupAge;
  }
  lifeExpect(yearBorn, age, gender, planet) {
    if (planet !== earth ) {
      return "At most, you would last about 15 seconds before losing conciousness from lack of oxygen. (That's how long it would take the body to use up the oxygen left in the blood.) Remember, in space no one can hear you scream.";
    } else if (yearBorn >= 1980 && yearBorn <= 2017  && gender === "female" && planet === "earth") {
      return "Looks like you will live to the tender age of 81 years old. You will die" + (81 - age) + " years from now";
    } else if (yearBorn >= 1980 && yearBorn <= 2017 && gender === "male" && planet === "earth") {
      return "Looks like you will live to the tender age of 75 years old. you will die" + (75 - age) + " years from now";
    }else if (yearBorn < 1980 && yearBorn >= 1900 && gender === "female" && planet === "earth") {
      return "Looks like you will live to the tender age of 52 years old. you will die in" + (yearBorn + 52) + ", good luck?";
    }else if (yearBorn < 1980 && yearBorn >= 1900 && gender === "male" && planet === "earth") {
      return "Looks like you will live to the tender age of 52 years old. you will die in" + (yearBorn + 52) + ", good luck?";
    } else if (yearBorn < 1900 || yearBorn > 2017) {
      return "looks like u ded";
    }
  }
}
