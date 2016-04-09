$(document).ready(function() {
    /* cpuChoice, MAX and MIN are declared as global on the other modules */
    $('.grid').hide();

    // font awesome icons
    var xIcon = '<i class="fa fa-times"></i>',
        oIcon = '<i class="fa fa-circle-o"></i>';

    // initializes players & cpu choice
    var gameState = initialState.splice(0),
        human,
        computer;

    // updates the grid & game state
    var updateGame = function(cell) {
        console.log('begin updateGame, board: ' + JSON.stringify(gameState));
        var cellId = '#c' + cell;
        console.log(cellId);

        if ($(cellId).html() == '') {
            var icon = (activePlayer(gameState) == MAX) ? xIcon : oIcon;
            $(cellId).html(icon);
        }

        // update game state
        gameState = nextState(gameState, cell);
        console.log('end updateGame, board: ' + JSON.stringify(gameState));
    };

    // sets human and computer player
    $('.choice').click(function() {
        human = ($(this).attr('id') == 'x') ? MAX : MIN;
        computer = (human == MAX) ? MIN : MAX;

        $('.initial-message').hide(400);
        $('.grid').show(800);

        if (activePlayer(gameState) == computer) {
            // after a delay, cpu makes its choice
            setTimeout(function() {
                console.log('game board: ' + gameState);
                minimax(gameState.splice(0));
                console.log('cpu choice: ' + cpuChoice);
                updateGame(cpuChoice);
            }, 850);
        }
    });

    $('.cell').click(function() {
        if (activePlayer(gameState) == human && $(this).html() == '') {
            // extracts the cell index
            cell = ($(this).attr('id')).substr(-1, 1);
            console.log(cell);

            updateGame(cell);

            // after a delay, cpu makes its choice
            setTimeout(function() {
                minimax(gameState.splice(0));
                console.log(cpuChoice);
                updateGame(cpuChoice);
            }, 750);
        }
    });
});
