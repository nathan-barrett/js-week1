import { CurrentTime, Birthday } from './../js/scripts.js'


describe('Birthday', function(){

  const bday = new Birthday();
  const current = new CurrentTime();
  it("should be able to convert user's age into seconds", function(){
    expect(bday.birthInSeconds(24,11,1988)).toEqual(62732501600);
  });
  it("should be able to take two dates and determine the difference between the two", function (){
    expect(bday.ageInSeconds(1000,2000)).toEqual(1000);
  });
  it("should be able to Return age of a human in Mercury years", function (){
    expect(bday.ageOnMerc(62732501600)).toEqual(8287);
  });
  it("should be able to Return age of a human in Venus years", function (){
    expect(bday.ageOnVen(62732501600)).toEqual(3208);
  });
  it("should be able to Return age of a human in Mars years", function (){
    expect(bday.ageOnMars(62732501600)).toEqual(1057);
  });
  it("should be able to Return age of a human in Jupiter years", function (){
    expect(bday.ageOnJup(62732501600)).toEqual(167);
  });
  it("should be able to Return age of a human in Jupiter years", function (){
    expect(bday.ageOnJup(62732501600)).toEqual(167);
  });
  it("Convert a time in earth years, months, days, hr, second, minutes and seconds into earth seconds", function (){
    expect(current.currentToSeconds(10, 14, 15, 5, 1 ,2018)).toEqual(63650834850);
  });
});
