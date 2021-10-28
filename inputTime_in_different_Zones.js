const prompt = require('prompt-sync')();
const date = new Date();
const offset = date.getTimezoneOffset();

//takes input in console, using npm package prompt-sync
const userHour = Number(prompt('Enter the hour in your time '));
const userMinute = Number(prompt('Enter the minute in your time '));

//this makes the hours and minutes with in 0-23 and 0-59 range respectively
const resolveTime = (h, m) => {
  if (m <= 0) {
    h--;
    m = Math.abs(m % 60);
  }

  else if (m >= 60) {
    h++;
    m = Math.abs(m % 60);
  }

  if (h >= 24)
    h = Math.abs(h % 24);
  else if (h <= 0)
    h = Math.abs(h % 24);
  return [h, m];
}

//returns timeoffset in hour and minutes with - for ahead and + for behind the UTC time
const timeoffset = offsetM => {
 let minutesoffset = Math.abs(offsetM) % 60;
 let hoursoffset = Math.floor( Math.abs(offsetM) / 60) ;
 if(offsetM > 0)
  return [hoursoffset , minutesoffset];
 else
  return [-hoursoffset, -minutesoffset];
 }

const offsetArray = timeoffset(offset);
const [offsetHour, offsetMinute] = [offsetArray[0], offsetArray[1]];

//calculating the time in that location with offset, user provided time and how ahead/behind the timezone is to the UTC

//Pacific Standard Time, GMT - 7:00
const pacificTime = (resolveTime, uhour, ohour, uminute, ominute) => {
  let [hr, min] = [uhour + ohour - 7, uminute + ominute ];
  let result = resolveTime(hr, min);
  let [resultHour, resultMinute] = [result[0], result[1]];
  console.log(`Pacific Standard Time ► ${resultHour} : ${resultMinute}`);
}

//Eastern Standard Time, GTM - 5:00
const easternTime = (resolveTime, uhour, ohour, uminute, ominute) => {
  let [hr, min] = [uhour + ohour - 5, uminute + ominute];
  let result = resolveTime(hr, min);
  let [resultHour, resultMinute] = [result[0], result[1]];
  console.log(`Eastern Standard Time ► ${resultHour} : ${resultMinute}`);
}

//Indian Standard Time, GMT + 5:30
const indianSTime = (resolveTime, uhour, ohour, uminute, ominute) => {
  let [hr, min] = [uhour + ohour + 5, uminute + ominute + 30];
  let result = resolveTime(hr, min);
  let [resultHour, resultMinute] = [result[0], result[1]];
  console.log(`Indian Standard Time ► ${resultHour} : ${resultMinute}`);
}

//Atlantic Standard Time, GMT - 4:00
const atlanticTime = (resolveTime, uhour, ohour, uminute, ominute) => {
  let [hr, min] = [uhour + ohour - 4, uminute + ominute ];
  let result = resolveTime(hr, min);
  let [resultHour, resultMinute] = [result[0], result[1]];
  console.log(`Atlantic Standard Time ► ${resultHour} : ${resultMinute}`);
}

//Central Standard Time, GMT - 6:00
const centralTime = (resolveTime, uhour, ohour, uminute, ominute) => {
  let [hr, min] = [uhour + ohour - 6, uminute + ominute];
  let result = resolveTime(hr, min);
  let [resultHour, resultMinute] = [result[0], result[1]];
  console.log(`Central Standard Time ► ${resultHour} : ${resultMinute}`);
}

//Japanese Standard Time, GMT + 9:00
const JapaneseSTime = (resolveTime, uhour, ohour, uminute, ominute) => {
  let [hr, min] = [uhour + ohour + 9, uminute + ominute];
  let result = resolveTime(hr, min);
  let [resultHour, resultMinute] = [result[0], result[1]];
  console.log(`Japanese Standard Time ► ${resultHour} : ${resultMinute}`);
}

pacificTime(resolveTime, userHour, offsetHour, userMinute, offsetMinute);
easternTime(resolveTime, userHour, offsetHour, userMinute, offsetMinute);
indianSTime(resolveTime, userHour, offsetHour, userMinute, offsetMinute);
atlanticTime(resolveTime, userHour, offsetHour, userMinute, offsetMinute);
centralTime(resolveTime, userHour, offsetHour, userMinute, offsetMinute);
JapaneseSTime(resolveTime, userHour, offsetHour, userMinute, offsetMinute);