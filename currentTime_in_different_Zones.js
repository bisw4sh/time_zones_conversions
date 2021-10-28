const date = new Date();
const hour = date.getUTCHours();
const minute = date.getUTCMinutes();
console.log(`Time In Nepal is ${date.getHours()} : ${date.getMinutes()}`);

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
  console.log(`The time is ► ${h} : ${m}`)
}

const pacificTime = resolveTime => {
  let [hr, min] = [hour - 7, minute];
  console.log('Pacific Standard Time');
  resolveTime(hr, min);
}

const easternTime = resolveTime => {
  let [hr, min] = [hour - 5, minute];
  console.log('Pacific Standard Time');

  resolveTime(hr, min);
}

const indianSTime = resolveTime => {
  let [hr, min] = [hour + 5, minute + 30];
  console.log('Eastern Standard Time');
  resolveTime(hr, min);
}

const atlanticTime = resolveTime => {
  let [hr, min] = [hour - 4, minute];
  console.log('Atlantic Standard Time');
  resolveTime(hr, min);
}

const centralTime = resolveTime => {
  let [hr, min] = [hour - 6, minute];
  console.log('Central Standard Time');
  resolveTime(hr, min);
}

const JapaneseSTime = resolveTime => {
  let [hr, min] = [hour + 9, minute];
  console.log('Japanese Standard Time');

  resolveTime(hr, min);
}

pacificTime(resolveTime);
easternTime(resolveTime);
indianSTime(resolveTime);
atlanticTime(resolveTime);
centralTime(resolveTime);
JapaneseSTime(resolveTime);