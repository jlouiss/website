$(document).ready(function () {
    var pomodoro = 25,
        pause = 5,
        time = 0,
        mins = 0,
        secs = 0,
        interval = 100, // ms
        select = false, // false = pomodoro, true = break
        timer,
        check = false,
        alarm = document.createElement('audio');

    alarm.setAttribute('src', 'http://www.soundjay.com/button/beep-07.mp3');

    // return 2 digit number
    function pad2(number) {
        return (number < 10 ? '0' : '') + number;
    }

    //display initial time
    $('#time').html('Start');
    $('#b-time').html(pause);
    $('#p-time').html(pomodoro);

    // set timers
    $('#b-minus').click(function () {
        if (!check && pause > 1) {
            pause -= 1;
            $('#b-time').html(pause);
        }
    });
    $('#b-plus').click(function () {
        if (!check) {
            pause += 1;
            $('#b-time').html(pause);
        }
    });
    $('#p-minus').click(function () {
        if (!check && pomodoro > 1) {
            pomodoro -= 1;
            $('#p-time').html(pomodoro);
        }
    });
    $('#p-plus').click(function () {
        if (!check) {
            pomodoro += 1;
            $('#p-time').html(pomodoro);
        }
    });

    $('#circle').click(function () {
        if (!select)
            time = pomodoro * 60;
        else
            time = pause * 60;

        if (!check)
            check = true;
        else {
            check = false;
            clearInterval(timer);
        }

        if (check) {
            timer = setInterval(function () {
                time -= interval / 1000; // 100 ms, 0.1 s
                mins = pad2(Math.floor(time / 60));
                secs = pad2(Math.floor(time % 60));
                $('#time').html(mins + ':' + secs);
                if (time <= 0) {
                    $('#time').html('00:00');
                    alarm.play();
                    if (select) {
                        time = pomodoro * 60;
                        select = false;
                    } else {
                        time = pause * 60;
                        select = true;
                    }
                }
            }, interval); //setInterval
        }
    });

    $('#reset').click(function () {
        clearInterval(timer);
        time = pomodoro * 60;
        check = false;
        select = false;
        mins = pad2(Math.floor(time / 60));
        secs = pad2(Math.floor(time % 60));
        $('#time').html(mins + ':' + secs);
    });
});