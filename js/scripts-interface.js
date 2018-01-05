import { Birthday, CurrentTime } from './../js/scripts.js';

$(function(){
  $("form#age-form").submit(function(event){
    event.preventDefault();
    const inputMonth = parseInt($("#monthInput").val());
    const inputDay = parseInt($("#dayInput").val());
      if (inputDay < 1 || inputDay > 31) {
        alert("please enter a valid birth day");
        return false;
      }
    const inputYear = parseInt($("#yearInput").val());
    if (inputYear < 1 || inputYear > 3000) {
      alert("please enter a valid birth day");
      return false;
    }
    const userBirthday = new Birthday(inputDay, inputMonth, inputYear);
    const currentSec = moment().second();
    const currentMin = moment().minute();
    const currentHr = moment().hour();
    const currentDay = moment().day();
    const currentMonth = (moment().month() + 1);
    const currentYear = moment().year();
    const currentTime = new CurrentTime(currentSec, currentMin, currentHr, currentDay, currentMonth, currentYear);
    const userSeconds = userBirthday.birthInSeconds(inputDay, inputMonth, inputYear);
    const currentTimeSec = currentTime.currentToSeconds(currentSec, currentMin, currentDay, currentMonth, currentYear);
    const ageInSec = userBirthday.ageInSeconds(userSeconds, currentTimeSec);
    const earthAgeYear = userBirthday.ageOnEarth(ageInSec);
    const mercAgeYear = userBirthday.ageOnMerc(ageInSec);
    const venAgeYear = userBirthday.ageOnVen(ageInSec);
    const marsAgeYear = userBirthday.ageOnMars(ageInSec);
    const jupAgeYear = userBirthday.ageOnJup(ageInSec);






  });
});
