$(document).ready(function () {
    var num = '0',
        mem = 0,
        sign = '',
        lastSign = '',
        partialSum = 0,
        partialMult = 0,
        reset = false,
        done = false;

    function mult() {
        //console.log('before mult m2: ' + partialMult);
        //console.log('before mult m1: ' + partialSum);
        //console.log('lastSign: ' + lastSign)
        if (!done) {
            switch (lastSign) {
            case '*':
                partialMult *= num;
                break;
            case '/':
                partialMult /= num;
                break;
            case '':
                partialSum = 0;
            case '+':
                partialMult = num;
                break;
            case '-':
                partialMult = -num;
                break;
            }
            if (lastSign == '')
                $('#screen').attr('value', partialMult);
            else $('#screen').attr('value', Math.abs(partialMult));
        }
        //console.log('after mult m1: ' + partialSum);
        //console.log('after mult m2: ' + partialMult);
    };

    function add() {
        //console.log('before add m1: ' + partialSum);
        //console.log('before add m2: ' + partialMult);
        if (!done) {
            if (lastSign != '') {
                if (lastSign == '+') {
                    partialSum += num;
                    partialMult = 0;
                } else if (lastSign == '-') {
                    partialSum -= num;
                    partialMult = 0;
                } else {
                    mult();
                    partialSum += partialMult;
                }
            } else {
                partialMult = 0;
                partialSum = num;
            }
            $('#screen').attr('value', partialSum);
        }
        //console.log('after add m2: ' + partialMult);
        //console.log('after add m1: ' + partialSum);
    };

    // +-*/ buttons
    $('.op').click(function () {
        num = eval(num);
        switch ($(this).attr('id')) {
        case 'plus':
            sign = '+';
            add();
            break;
        case 'minus':
            sign = '-';
            add();
            break;
        case 'times':
            sign = '*';
            mult();
            break;
        case 'divided':
            sign = '/';
            mult();
            break;
        }
        done = true;
        lastSign = sign;
        //console.log('sign: ' + sign);
        //console.log('num: ' + num);
    });

    $('#equals').click(function () {
        var total = 0;
        num = eval(num);
        if (!done) {
            switch (lastSign) {
            case '':
                total = num;
                break;
            case '+':
            case '-':
                add();
                break;
            case '*':
            case '/':
                mult();
                break;
            }
            total = partialSum + partialMult;
            num = total;
        }
        //console.log('total: ' + total);
        // reset calculator's state
        sign = '';
        lastSign = '';
        $('#screen').attr('value', total);
    });

    // reset everything
    $('#C').click(function () {
        num = 0;
        partialSum = 0;
        partialMult = 0;
        sign = '';
        lastSign = '';
        $('#screen').attr('value', 0);
    });

    // store number in memory
    $('#M').click(function () {
        mem = eval(num);
    });

    // memory recall
    $('#MR').click(function () {
        num = mem;
    });

    // resets num when non-input buttons are pressed
    $('.fn, .op').click(function () {
        reset = true;
        //console.log('.fn, .op');
    });

    // input [string type]
    $('.num').click(function () {
        var digit = $(this).attr('value'),
            screenLimit = 14;
        if (reset) num = '0';
        if (num.length < screenLimit) {
            switch (digit) {
            case '0':
                if (num != '0') num += '0';
                break;
            case '.':
                if (num.indexOf('.') == -1) num += '.';
                break;
            default:
                if (num != '0') num += digit;
                else num = digit;
                break;
            }
        }
        done = false; // done keeps from evaluating calculations
        reset = false; // allows to add more digits to the input
        $('#screen').attr('value', num);
    });
});