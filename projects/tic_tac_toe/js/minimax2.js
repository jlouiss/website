// var minimax = function(state) {
//     var minimaxValue = maxValue(state);
//     // return action in successors(state)
//     // with value v
// };
//
// var maxValue = function(state) {
//     if (terminal(state))
//         return utility(state);
//
//     var minimaxValue = -20, // arbitrary value
//         availableMoves = possibleActions(state),
//         successors = availableMoves.map(function(move) {
//             // array of possible states from one state
//             return nextState(state.splice(0), move);
//         });
//
//     for (var i in successors) {
//         minimaxValue = Math.max(minimaxValue, minValue(successors[i]));
//     }
//
//     return minimaxValue;
// };
//
// var minValue = function(state) {
//     if (terminal(state))
//         return utility(state);
//
//     var minimaxValue = 20, // arbitrary value
//         availableMoves = possibleActions(state),
//         successors = availableMoves.map(function(move) {
//             // array of possible states from one state
//             return nextState(state.splice(0), move);
//         });
//
//     for (var i in successors) {
//         minimaxValue = Math.min(minimaxValue, maxValue(successors[i]));
//     }
//
//     return minimaxValue;
// };
var cpuChoice;

var minimax = function(state) {
    state = state.splice(0);
    console.log('state');
    console.log(state);
    console.log('minimax call');
    if (terminal(state))
        return utility(state);

    var moves = possibleActions(state),
        successors = [];

    console.log('moves');
    console.log(moves);

    moves.forEach(function(move) {
        console.log('populating successors');
        console.log('move');
        console.log(move)
        console.log('state');
        console.log(state);
        console.log('\n\n');
        // array of possible states from one state
        successors.push(nextState(state, move));
    });

    console.log('successors');
    console.log(successors);
    var scores = [];
    successors.forEach(function(successor) {
        // array of utility values for each possible state
        scores.push(minimax(successor.splice(0)));
    });
    console.log('scores');
    console.log(scores);

    console.log('moves');
    console.log(moves);

    if (activePlayer(state) == MAX) {
        var maxScore = Math.max(...scores),
            maxScoreIndex = scores.indexOf(maxScore);
        cpuChoice = moves[maxScoreIndex];
        console.log('cpuChoice');
        console.log(cpuChoice);
        return maxScore;
    } else {
        var minScore = Math.max(...scores),
            minScoreIndex = scores.indexOf(minScore);
        cpuChoice = moves[minScoreIndex];
        console.log('cpuChoice');
        console.log(cpuChoice);
        return minScore;
    }
};
