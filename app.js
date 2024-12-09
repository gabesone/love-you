// Start on DOM load
document.addEventListener("DOMContentLoaded", (event) => {
  // Play music when the DOM load
  function playMusic() {
    document.querySelector("#music").play();
  }

  // setInterval to keep call the playMusic()
  setInterval(playMusic, 1000);

  const startDate = new Date("August 25, 2023 14:00:00");
  const startTime = startDate.getTime();

  let newDate = new Date();
  let newTime = newDate.getTime();

  function updateClock() {
    newDate = new Date();
    newTime = newDate.getTime();
    let difference = Math.round((newTime - startTime) / 1000);
    let year = Math.floor(difference / (365.25 * 24 * 60 * 60));
    difference = difference - year * 365.25 * 24 * 60 * 60;
    let month = Math.floor(difference / (30 * 24 * 60 * 60));
    difference = difference - month * 30 * 24 * 60 * 60;
    let day = Math.floor(difference / (24 * 60 * 60));
    difference = difference - day * 24 * 60 * 60;
    let hour = Math.floor(difference / (60 * 60));
    difference = difference - hour * 60 * 60;
    let minute = Math.floor(difference / 60);
    difference = difference - minute * 60;
    let seconds = difference;

    let f_year = year > 1 ? year + " anos" : year + " ano";
    let f_month = month > 1 ? month + " meses" : month + " mês";
    let f_day = day > 1 ? day + " dias" : day + " dia";
    let f_hour = hour > 1 ? hour + " horas" : hour + " hora";
    let f_minute = minute > 1 ? minute + " minutos" : minute + " minuto";
    let f_seconds = seconds > 1 ? seconds + " segundos" : seconds + " segundo";

    document.querySelector("#time_1").textContent =
      f_year + ", " + f_month + ", " + f_day;

    document.querySelector("#time_2").textContent =
      f_hour + ", " + f_minute + " e " + f_seconds;
  }

  setInterval(updateClock, 1000);
});
