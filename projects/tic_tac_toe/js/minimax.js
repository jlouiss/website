// minimax algorithm
var minimax = function(state) {
    console.log('begin minimax, board: ' + JSON.stringify(state.board));
    var minimaxValue = maxValue(state);
    var options = new Successors(state);

    // return action in successors(state) with minimax value
    var nextStates = options.possibleStates;
    for (var i = 0; i < nextStates.length; i++) {
        if (utility(nextStates[i]) == minimaxValue)
            return options.moves[i];
    }
};

var maxValue = function(state) {
    if (state.isTerminal())
        return utility(state);

    // arbitrary value
    var minimaxValue = -100;

    // for action, state in successors(state)
    var options = new Successors(state);
    var nextStates = options.possibleStates;

    for (var i in nextStates) {
        minimaxValue = Math.max(minimaxValue, minValue(nextStates[i]));
    }

    return minimaxValue;
};

var minValue = function(state) {
    if (state.isTerminal())
        return utility(state);

    // arbitrary value
    var minimaxValue = 100;

    // for action, state in successors(state)
    var options = new Successors(state);
    var nextStates = options.possibleStates;

    for (var i in nextStates) {
        minimaxValue = Math.min(minimaxValue, maxValue(nextStates[i]));
    }

    return minimaxValue;
};
