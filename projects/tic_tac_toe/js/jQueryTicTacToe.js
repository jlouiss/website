// global variables
var human = 'x', // or 'o'
    computer = (human == 'x') ? 'o' : 'x',
    depth = 0; // number of total moves


// represents a game state at any moment
var State = function(previousState) {
    this.board = [];

    // constructs a new state from the previous one
    if (typeof(previousState) != 'undefined') {
        // copy previous board
        var n = previousState.board.length;
        this.board = new Array(n);

        for (var i = 0; i < n; i++) {
            this.board[i] = previousState.board[i];
        }

        this.activePlayer = previousState.activePlayer;
    }

    this.activePlayer = '';

    // switches state's player to the other player
    this.switchPlayer = function() {
        this.activePlayer = (this.activePlayer == 'x') ? 'o' : 'x';
    };

    // returns empty cells
    this.getEmptyCells = function() {
        var emptyCells = [];

        for (var i = 0; i < this.board.length; i++) {
            if (this.board[i] == '')
                emptyCells.push(i);
        }

        return emptyCells;
    };

    // checks if the given player will win
    this.doesWin = function(thisPlayer) {
        var board = this.board;
        // 0-1-2 | 3-4-5 | 6-7-8
        for (var i = 0; i < 7; i += 3) {
            if (board[i] == thisPlayer &&
                board[i] == board[i + 1] &&
                board[i + 1] == board[i + 2]) {
                return true;
            }
        }

        // 0-3-6 | 1-4-7 | 2-5-8
        for (var i = 0; i < 3; i += 3) {
            if (board[i] == thisPlayer &&
                board[i] == board[j] &&
                board[j] == board[k]) {
                return true;
            }
        }

        // 0-4-8 | 2-4-6
        if (board[4] == thisPlayer &&
            board[0] == board[4] && board[4] == board[8] ||
            board[2] == board[4] && board[4] == board[6]) {
            return true;
        }

        return false;
    };

    // checks whether the game will finish at the end of current state
    this.isGameOver = function() {
        // one of the player wins
        if (this.doesWin(human) || this.doesWin(computer) ||
            this.getEmptyCells().length === 0) {
            return true;
        } else {
            return false;
        }
    };

};
/* end State */



// constructs ai player with a given level of intelligence
var AI = function(intelligenceLevel) {
    var currentState = {};
};


// given cell positioin, constructs the action that ai could make
var AIAction = function(cell) {
    this.minimaxValue = 0;

    // applies the choice to a state in order to get the next one
    this.getNextState = function(state) {
        var next = new State(state);
        next.board[cell] = state.activePlayer;

        if (state.activePlayer == 'o')
            depth++;

        next.switchPlayer();

        return next;
    };
};


// constructs a game object
var Game = function(aiPlayer) {
    // initialize a state
    this.currentState = new State();

    // x plays first
    this.currentState.activePlayer = 'x';

    this.currentState.board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];

    this.status = 'starting';

    // advances the game to a new state
    this.advanceTo = function(state) {
        this.currentState = state;

        if (state.isGameOver()) {
            this.status = 'ended';
            if (state.doesWin(human))
                // display human won
                alert('human won');
            else if (state.doesWin(computer))
                // display computer won
                alert('computer won');
            else
                // display draw
                alert('draw');
        } else {
            if (this.currentState.activePlayer == human) {
                // let human choose
            } else {
                // ai chooses
                aiPlayer.notify(computer);
            }
        }
    };

    // start the game
    this.start = function() {
        if (this.status == 'starting') {
            this.advanceTo(this.currentState);
            this.status = 'running';
        }
    };
};


// // calculates score for minimax
// var score = function(state) {
//     if (state.isGameOver()) {
//         if (state.doesWin(human))
//             return 10 - depth;
//         else if (state.doesWin(computer))
//             return depth - 10;
//         else
//             return 0;
//     }
// };

// // minimax function
// var minimax = function(state) {
//     if (state.isGameOver())
//         return Game.score(state);

//     depth++;

//     var scores = [],
//         possibleMoves = [];

//     // parses possible states
//     var possibleStates = state.getEmptyCells()
//         .map(function(cell) {
//             var action = new AIAction(cell);
//             var nextState = action.getNextState(state);

//             return nextState;
//         });

//     // calculates minimax value for all possible states
//     possibleStates.forEach(function(nextState) {
//         var nextScore = minimax(nextState);

//         if (state.activePlayer == player) {

//         }
//     });
// };

var score = function(state, depth) {
    // returns +10 if the current player wins the game
    // returns -10 if the other player wins
    // returns 0 if draw
    if state.win(player)
    return 10 - depth;
    else if state.win(opponent)
    return depth - 10;
    else
        return 0;
};

var minimax = function(state, depth) {
    if (state.isGameOver())
        return score(state, depth);

    depth++;
    var choice,
        scores = [],
        possibleMoves = [];

    // populate scores array with possible moves
    state.getEmptyCells().forEach(function(cell) {
        var possibleState = new State(move);
        scores.push(minimax(possibleState, depth));
        moves.push(cell);
    });

    if (state.activePlayer == computer) {
        /* TIL: spread operator
         * arr1 = [3, 4, 5, 6];
         * arr2 = [1, 2, ...arr1, 7, 8];
         * console.log(arr2);
         * // 1, 2, 3, 4, 5, 6, 7, 8
         */
        maxScoreIndex = Math.max(...scores);
        choice = possibleMoves[maxScoreIndex];
        return scores[maxScoreIndex];
    } else {
        minScoreIndex = Math.min(...scores);
        choice = possibleMoves[minScoreIndex];
        return scores[minScoreIndex];
    }
};