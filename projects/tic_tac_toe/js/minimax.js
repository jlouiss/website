// minimax algorithm
var minimax = function(state) {
    var clonedState = jQuery.extend(true, {}, state),
        minimaxValue = maxValue(clonedState),
        options = new Successors(clonedState);
    console.log('begin minimax, board: ' + JSON.stringify(state.board));

    // return action in successors(state) with minimax value
    var nextStates = options.possibleStates;
    for (var i = 0; i < nextStates.length; i++) {
        if (utility(nextStates[i]) == minimaxValue)
            return options.moves[i];
    }
};

var maxValue = function(state) {
    var clonedState = jQuery.extend(true, {}, state);

    if (clonedState.isTerminal())
        return utility(clonedState);

    // arbitrary value
    var minimaxValue = -100;

    // for action, state in successors(state)
    var options = new Successors(clonedState),
        nextStates = options.possibleStates;

    nextStates.forEach(function(nextState) {
        minimaxValue = Math.max(minimaxValue, minValue(nextStates[i]));
    });

    return minimaxValue;
};

var minValue = function(state) {
    var clonedState = jQuery.extend(true, {}, state);

    if (clonedState.isTerminal())
        return utility(clonedState);

    // arbitrary value
    var minimaxValue = 100;

    // for action, state in successors(state)
    var options = new Successors(clonedState),
        nextStates = options.possibleStates;

    nextStates.forEach(function(nextState) {
        minimaxValue = Math.min(minimaxValue, maxValue(nextStates[i]));
    });

    return minimaxValue;
};



// var minimax = function(state) {
//     if (state.isTerminal()) {
//         return utility(state);
//     } else if (state.activePlayer == MAX) {
//         // return maximum for all possible actions of minimax(results(s, a));
//     } else {
//         // return minimum for all possible actions of minimax(results(s, a));
//     }
// };
