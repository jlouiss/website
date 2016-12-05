let today = new Date();
let endDate = new Date(Date.UTC(2016, 11, 30, 3, 0, 0));
let dayInMs = 24 * 60 * 60 * 1000;
let daysToEnd = (endDate - today) / dayInMs;

document.getElementsByTagName('h1')[0].innerHTML = Math.floor(daysToEnd);
