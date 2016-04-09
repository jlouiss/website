var MAX = 'x',
    MIN = 'o';

var initialState = [
    '-', '-', '-',
    '-', '-', '-',
    '-', '-', '-'
];

// counts the number of emptyCells at given state
var cellsLeft = function(state) {
    var emptyCells = 0;

    for (var i in state) {
        if (state[i] == '-')
            emptyCells++;
    }

    return emptyCells;
};

// determines the active player at given state
var activePlayer = function(state) {
    if (cellsLeft(state) % 2 === 1)
        return MAX;
    else
        return MIN;
};

// determines possible actions from given state
var possibleActions = function(state) {
    var actions = [];

    for (var i in state) {
        if (state[i] == '-')
            actions.push(i);
    }

    return actions;
};

// resulting state after given action is applied on given state
var nextState = function(state, action) {
    var result = state;
    result[action] = activePlayer(state);
    return result;
};

// true if given player wins at given state
var willWin = function(state, player) {
    var s = state;
    // horizontal <0-1-2 | 3-4-5 | 6-7-8>
    for (var i = 0, j = 1, k = 2; i <= 6; i += 3, j += 3, k += 3) {
        if (s[i] == player && s[i] == s[j] && s[j] == s[k])
            return true;
    }
    // vertical <0-3-6 | 1-4-7 | 2-5-8>
    for (var i = 0, j = 3, k = 6; i <= 2; i++, j++, k++) {
        if (s[i] == player && s[i] == s[j] && s[j] == s[k])
            return true;
    }
    // diagonal <0-4-8 | 2-4-6>
    for (var i = 0, j = 4, k = 8; i <= 2; i += 2, k -= 2) {
        if (s[i] == player && s[i] == s[j] && s[j] == s[k])
            return true;
    }
}

// true if the game finishes at given state
var terminal = function(state) {
    return (willWin(state, MAX) || willWin(state, MIN) || cellsLeft === 0);
};

// returns the utility for MAX at given state
var utility = function(state) {
    var depth = 9 - cellsLeft(state);
    if (willWin(state, MAX))
        return 10 - depth;
    else if (willWin(state, MIN))
        return depth - 10;
    else
        return 0;
};
