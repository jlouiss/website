// minimax, x starts first
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
    this.availableMoves = this.board.map(function(cell, index) {
        if (cell == '')
            return index;
    });

    // checks if this is a terminal state
    this.isTerminal = function() {
        return willWin(this, this.activePlayer) ||
            willWin(this, this.opponent) ||
            this.availableMoves.length === 0;
    };
};

// generates possible states from a given state
var successors = function(state) {
    this.moves = []; // keep track of the chosen cell for new state
    this.possibilities = state.availableMoves.map(function(cell) {
        var newState = new GameState(state);
        newState.board[cell] = newState.activePlayer;

        this.moves.push(cell);
        return newState;
    });
};

// checks if given player will win
var willWin = function(state, player) {
    var b = state.board;
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

// utility for MAX player ('x') at the end of a terminal state
var utility = function(state) {
    if (willWin(state, MAX))
        return 1 - state.depth;
    else if (willWin(state, MIN))
        return state.depth - 1;
    else
        return 0;
};


$(document).ready(function() {

});
