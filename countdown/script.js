var today = new Date();
var endDate = new Date(Date.UTC(2016, 11, 31, 3, 0, 0));
var dayInMs = 24 * 60 * 60 * 1000;
var daysToEnd = (endDate - today) / dayInMs;

document.getElementsByTagName('h1')[0].innerHTML = Math.floor(daysToEnd);
