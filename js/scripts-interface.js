import { currentTime, Birthday } from './../js/scripts.js';

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
    const inputAge = new Birthday(inputDay, inputMonth, inputYear);
    const secz = inputAge.birthInSeconds(inputAge.userDay, inputAge.userMonth, inputAge.userYear);
    console.log(secz);

  });
});
