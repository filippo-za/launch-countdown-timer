const countdown = () => {
  let day = document.getElementById("days");
  const hour = document.getElementById("hours");
  const minute = document.getElementById("minutes");
  const second = document.getElementById("seconds");

  let date = new Date("May 30, 2022 00:00:00").getTime();
  let nowDate = new Date().getTime();

  let difference = date - nowDate;

  let seconds = 1000;
  let minutes = seconds * 60;
  let hours = minutes * 60;
  let days = hours * 24;

  let timeDays = Math.floor(difference / days);
  let timeHours = Math.floor((difference % days) / hours);
  let timeMinutes = Math.floor((difference % hours) / minutes);
  let timeSeconds = Math.floor((difference % minutes) / seconds);

  timeHours = timeHours < 10 ? "0" + timeHours : timeHours;
  timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes;
  timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds;

  day.innerHTML = timeDays;
  hour.innerHTML = timeHours;
  minute.innerHTML = timeMinutes;
  second.innerHTML = timeSeconds;
};

setInterval(countdown, 1000);
