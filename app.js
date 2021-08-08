let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let weekDay = date.getDay();
let hour = date.getHours();
let minute = date.getMinutes();
let seconds = date.getSeconds();
let soat = date.getHours();
console.log(soat);
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
// 2021 yil Avgust Oyi Haftaning Juma Kuni 6 avgust soat 21:30:00

document.write(
  "Today is:",
  year,
  months[month],
  days[weekDay],
  hour,
  ":",
  minute,
  ":",
  seconds
);
