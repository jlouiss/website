// minimax players, x starts first
var MAX = 'x',
    MIN = 'o';

// constructor for game states
var GameState = function(previousState) {
    this.board = ['', '', '', '', '', '', '', '', ''];
    this.activePlayer = MAX; // max or min
    this.opponent = MIN;
    this.depth = 0; // total moves, necessary utility assignment

    // constructs state from previousState, if defined
    if (previousState != undefined) {
        var p = previousState;

        this.board = p.board;
        this.activePlayer = p.opponent;
        this.opponent = p.activePlayer;
        this.depth = p.depth + 1;
    }

    // returns empty cells indexes
    var availableMoves = [];
    this.board.splice(0).forEach(function(cell) {
        if (this.board) availableMoves.push(i);
    });
    this.availableMoves = availableMoves;

    // checks if given player will win
    this.willWin = function(player) {
        var b = this.board.splice(0);
        // horizontal <0-1-2 | 3-4-5 | 6-7-8>
        for (var i = 0, j = 1, k = 2; i <= 6; i += 3, j += 3, k += 3) {
            if (b[i] == player && b[i] == b[j] && b[j] == b[k])
                return true;
        }
        // vertical <0-3-6 | 1-4-7 | 2-5-8>
        for (var i = 0, j = 3, k = 6; i <= 2; i++, j++, k++) {
            if (b[i] == player && b[i] == b[j] && b[j] == b[k])
                return true;
        }
        // diagonal <0-4-8 | 2-4-6>
        for (var i = 0, j = 4, k = 8; i <= 2; i += 2, k -= 2) {
            if (b[i] == player && b[i] == b[j] && b[j] == b[k])
                return true;
        }
    };

    // checks if this is a terminal state
    this.isTerminal = function() {
        return this.willWin(this.activePlayer) ||
            this.willWin(this.opponent) ||
            this.availableMoves.length === 0;
    };
};

// generates possible states from a given state
var Successors = function(state) {
    var moves = [],
        possibleStates = [],
        availableMoves = state.availableMoves.splice(0);
    console.log('available moves' + availableMoves);

    for (var i in availableMoves) {
        var clonedState = jQuery.extend(true, {}, state),
            cell = availableMoves[i],
            nextState = {};
        console.log(cell);

        console.log('before nextState, state.board: ' + JSON.stringify(clonedState.board));
        clonedState.board[cell] = clonedState.activePlayer;
        var nextState = new GameState(clonedState);
        console.log('after nextState, nextState.board: ' + JSON.stringify(nextState.board));

        moves.push(cell);
        possibleStates.push(nextState);
    }

    this.moves = moves; // keep track of the chosen cell for new state
    this.possibleStates = possibleStates;
    console.log(this.moves);
};

// utility for MAX player ('x') at the end of a terminal state
var utility = function(state) {
    if (state.willWin(MAX))
        return 1 - state.depth;
    else if (state.willWin(MIN))
        return state.depth - 1;
    else
        return 0;
};
