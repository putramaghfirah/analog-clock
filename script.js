setInterval(() => {
  const handHour = document.querySelector('.hour-hand');
  const handMinute = document.querySelector('.minute-hand');
  const handSecond = document.querySelector('.second-hand');

  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  // const hourDegree = (hour / 60) * 360 + 90;
  const hourDegree = ((hour + minute / 60) / 12) * 360 + 90;
  // console.log(hourDegree + ' jam');
  handHour.style.transform = `rotate(${hourDegree}deg)`;

  const minuteDegree = (minute / 60) * 360 + 90;
  // console.log(minuteDegree + ' menit');
  handMinute.style.transform = `rotate(${minuteDegree}deg)`;

  const secondDegree = (second / 60) * 360 + 90;
  // console.log(secondDegree + ' detik');
  handSecond.style.transform = `rotate(${secondDegree}deg)`;
}, 1000);
