import { Birthday, CurrentTime } from './../js/scripts.js';

$(function(){
  $("form#age-form").submit(function(event){
    event.preventDefault();
    const inputMonth = parseInt($("#monthInput").val());
    const inputDay = parseInt($("#dayInput").val());
    const inputYear = parseInt($("#yearInput").val());
      if (inputDay === isNaN || inputDay < 1 || inputDay > 31 || inputYear === isNaN || inputYear < 1 || inputYear > 3000) {
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
    const currentTimeSec = currentTime.currentToSeconds(currentSec, currentMin, currentHr, currentDay, currentMonth, currentYear);
    const ageInSec = userBirthday.ageInSeconds(userSeconds, currentTimeSec);
    const earthAgeYear = userBirthday.ageOnEarth(ageInSec);
    const mercAgeYear = userBirthday.ageOnMerc(ageInSec);
    const venAgeYear = userBirthday.ageOnVen(ageInSec);
    const marsAgeYear = userBirthday.ageOnMars(ageInSec);
    const jupAgeYear = userBirthday.ageOnJup(ageInSec);
    $(".whats-my-age-again").append('<li>On earth you are: ' + earthAgeYear + ' years old</li>' + '<li>On Mercury you are: ' + mercAgeYear + ' years old</li>' + '<li>On Venus you are: ' + venAgeYear + ' years old</li>' + '<li>On Mars you are: ' + marsAgeYear + ' years old</li>' + '<li>On Jupiter you are: ' + jupAgeYear + ' years old</li>');
  });
});
