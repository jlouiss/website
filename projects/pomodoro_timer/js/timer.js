var pomodoro = 25,
    pause = 5,
    time = 0,
    mins = 0,
    secs = 0,
    timer,
    interval = 100, // ms
    select = false, // false = pomodoro, true = break
    check = false,
    alarm = document.createElement('audio');

alarm.setAttribute('src', 'http://www.soundjay.com/button/beep-07.mp3');

// return 2 digit number
var pad2 = function(number) {
    return (number < 10 ? '0' : '') + number;
};

// resets pomodoro and pause to user's chosen length
var reset = function() {
    clearInterval(timer);

    time = pomodoro * 60;
    check = false;
    select = false;

    mins = pad2(Math.floor(time / 60));
    secs = pad2(Math.floor(time % 60));

    $('#time').html(mins + ':' + secs);
};

// core function
var watch = function() {
    if (!check) {
        check = true;
    } else {
        check = false;
        clearInterval(timer);
    }

    if ($('#time').html() == 'Start')
        time = pomodoro * 60;

    if (check) {
        timer = setInterval(function() {
            time -= interval / 1000; // 100 ms
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

        }, interval);
    }
};

$('#reset').click(reset);
$('#circle').click(watch);

//display initial time
$('#time').html('Start');
$('#b-time').html(pause);
$('#p-time').html(pomodoro);

// set timers
$('#b-minus').click(function() {
    if (!check && pause > 1) {
        pause--;
        $('#b-time').html(pause);
    }
});

$('#b-plus').click(function() {
    if (!check) {
        pause++;
        $('#b-time').html(pause);
    }
});

$('#p-minus').click(function() {
    if (!check && pomodoro > 1) {
        pomodoro--;
        $('#p-time').html(pomodoro);
    }
});

$('#p-plus').click(function() {
    if (!check) {
        pomodoro++;
        $('#p-time').html(pomodoro);
    }
});
