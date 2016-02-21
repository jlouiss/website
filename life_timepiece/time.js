$(document).ready(function () {
    var now = new Date(),
        interval = 1000 / 60, // 60 fps
        timeDifference = now.getTimezoneOffset(),
        sPerDay = 60 * 60 * 24,
        centsPerDay = sPerDay * 100,
        msPerDay = sPerDay * 1000,
        birthDate = new Date('July 18, 1994');

    // calculates seconds to next day
    setInterval(function () {
        var now = new Date(),
            centsToday = Math.floor(((now.getTime()) % msPerDay) / 10),
            seconds = Math.floor((centsPerDay - centsToday - timeDifference / 10) / 100);
        document.getElementById('secondsLeft').innerHTML = seconds;
        document.getElementById('cents').innerHTML = Math.floor(now.getMilliseconds() / 10);
        // document.getElementById('test').innerHTML = now;
    }, interval);

    // calculates age in days
    var msSince = (now.getTime() - birthDate.getTime() + timeDifference),
        days = Math.floor(msSince / msPerDay);
    document.getElementById('ageInDays').innerHTML = days;

    // calculates days to first day of next year
    var firstOfYear = new Date('January 1, ' + (now.getFullYear() + 1)),
        msLeft = (firstOfYear.getTime() - now.getTime() - timeDifference),
        daysLeft = Math.floor(msLeft / msPerDay);
    document.getElementById('daysLeft').innerHTML = daysLeft;
});
