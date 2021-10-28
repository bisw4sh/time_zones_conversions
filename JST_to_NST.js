const prompt = require('prompt-sync')();
const date = new Date();
const offset = date.getTimezoneOffset();
const hour = date.getHours();
const minute = date.getMinutes(); 
const UTChour = date.getUTCHours();
const UTCminute = date.getUTCMinutes();

//takes input in console, using npm package prompt-sync
const userHour = Number(prompt('Enter hour of time in the that region '));
const userMinute = Number(prompt('Enter minute of time in the that region '));

//this makes the hours and minutes with in 0-23 and 0-59 range respectively
const resolveTime = (h, m) => {
  if (m <= 0) {
    h--;
    m = Math.abs(m % 60);
  }

  else if (m >= 60) {
    h++;
    m = Math.abs( m % 60);
  }

  if (h >= 24)
    h = Math.abs(h % 24);
  else if (h <= 0)
    h = Math.abs( h % 24);
  return [h, m];              }

//returns timeoffset in hour and minutes with - for ahead and + for behind the UTC time
const timeoffset = offsetM => {
  let minutesoffset = Math.abs(offsetM) % 60;
  let hoursoffset = Math.floor(Math.abs(offsetM) / 60);
  if (offsetM > 0)
    return [hoursoffset, minutesoffset];
  else
    return [-hoursoffset, -minutesoffset];  }

const offsetArray = timeoffset(offset);
const [offsetHour, offsetMinute] = [offsetArray[0], offsetArray[1]];

const JapaneseSTime = (resolveTime, uhour, ohour, uminute, ominute) => {
  let [hr, min] = [uhour - ohour - 9, uminute - ominute];
  let result = resolveTime(hr, min);
  let [resultHour, resultMinute] = [result[0], result[1]];
  console.log(`Time in your region is ${resultHour} : ${resultMinute}`);
}

JapaneseSTime(resolveTime, userHour, offsetHour, userMinute, offsetMinute);