const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

function setDate() {
  const now = new Date();
  const second = now.getSeconds();
  const minute = now.getMinutes();
  const hour = now.getHours();

  const secondDeg = (second / 60) * 360 + 90;
  const minuteDeg = (minute / 60) * 360 + 90;
  const hourDeg = (hour / 12) * 360 + (minute / 60 / 12) * 360 + 90;

  secondHand.style.transform = `rotate(${secondDeg}deg)`;

  minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
  hourHand.style.transform = `rotate(${hourDeg}deg)`;

  console.log(hour);
}

setInterval(setDate, 1000);
