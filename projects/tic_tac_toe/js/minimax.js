var minimax = function(state) {
    var minimaxValue = maxValue(state);
    // return action in successors(state) with minimax value
};

var maxValue = function(state) {
    if (state.isTerminal())
        return utility(state);

    var minimaxValue = -infinity;

    // for action, state in successors(state)
    var nextStates = successors(state);
    for (var i in ) {
        minimaxValue = Math.max(minimaxValue, minValue(nextStates[i]));
    }

    return minimaxValue;
};

var minValue = function(state) {
    if (state.isTerminal())
        return utility(state);

    var minimaxValue = -infinity;

    // for action, state in successors(state)
    var nextStates = successors(state);
    for (var i in ) {
        minimaxValue = Math.min(minimaxValue, maxValue(nextStates[i]));
    }

    return minimaxValue;
};
