$(document).ready(function() {
    $('.grid').hide();

    // font awesome icons
    var xIcon = '<i class="fa fa-times"></i>',
        oIcon = '<i class="fa fa-circle-o"></i>';

    // initializes game state
    var game = new GameState(),
        human,
        computer;


    // updates the grid & game state
    var updateGame = function(cell) {
        console.log('begin updateGame, board: ' + JSON.stringify(game.board));
        var cellId = '#c' + cell;
        console.log(cellId);

        if ($(cellId).html() == '') {
            var icon = (game.activePlayer == MAX) ? xIcon : oIcon;
            $(cellId).html(icon);
        }

        // update game state
        game.board[cell] = game.activePlayer;
        game = new GameState(game);
        console.log('end updateGame, board: ' + JSON.stringify(game.board));
    };

    // sets human and computer player
    $('.choice').click(function() {
        human = ($(this).attr('id') == 'x') ? MAX : MIN;
        computer = (human == MAX) ? MIN : MAX;

        $('.initial-message').hide(400);
        $('.grid').show(800);

        if (game.activePlayer == computer) {
            // after a delay, cpu makes its choice
            setTimeout(function() {
                console.log('game board: ' + game.board);
                var cpuChoice = minimax(game);
                console.log('cpu choice: ' + cpuChoice);
                updateGame(cpuChoice);
            }, 850);
        }
    });

    $('.cell').click(function() {
        if (game.activePlayer == human && $(this).html() == '') {
            // extracts the cell index
            cell = ($(this).attr('id')).substr(-1, 1);
            console.log(cell);

            updateGame(cell);

            // after a delay, cpu makes its choice
            setTimeout(function() {
                var cpuChoice = minimax(game);
                console.log(cpuChoice);
                updateGame(cpuChoice);
            }, 750);
        }
    });
});
