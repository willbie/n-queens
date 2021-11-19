/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme
  //counter = n;
  // loop through row running the
    //toggle piece
    // use helper fcn to check, if true, toggle piece again, else proceed
  // loop through column running the
    //toggle piece
    // use helper fcn to check, if true, toggle piece again, else proceed
    //var i = 0;
    //var j = 0;
    //togglePiece(i,j)
    //for loop
    //togglePiece(i+1, j+1)
    //if helper fcn return false,  togglePiece another piece;
    //if helper fcn return true, togglePiece again.
    //_isInBounds.
  /*0 0 0 0 [1, 0, 0], |0 1 0 0
    0 0 0 0 [0, 1, 0], |0 0 1 0
    0 0 0 0 [0, 0, 1], |0 0 0 1
    0 0 0 0 0 0 0 0 0  |1 0 0 0
  */

// Are at (2,2)
  //Toggle Off
  //Move to (2,3)
  //toggle off row
//You want to move up one row, hence i--;
//toggle off
  //j--
//



var board = new Board({n:n});

var solution = board.rows();
var solutionCount = 0;
var findSolution = function(row) {
  if (row === n) {
    solution = _.map(board.rows(), function(row) {
      return row.slice();
    })
    return;
  }

  for(var i = 0; i < n; i++) {
    board.togglePiece(row,i);
    if ( !board.hasAnyColConflicts() && !board.hasAnyRowConflicts()) {
      findSolution(row + 1 );
    }
    board.togglePiece(row,i);
  }
};
findSolution(0)



  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n:n});
  var findSolution = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }

    for(var i = 0; i < n; i++) {
      board.togglePiece(row,i);
      if ( !board.hasAnyColConflicts() && !board.hasAnyRowConflicts() ) {
        findSolution(row + 1 );
      }
      board.togglePiece(row,i);
    }
  };
  findSolution(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var board = new Board({n:n});

  var solution = board.rows();
  var solutionCount = 0;
  var findSolution = function(row) {
    if (row === n) {
      solution = _.map(board.rows(), function(row) {
        return row.slice();
      })
      return;
    }

    for(var i = 0; i < n; i++) {
      board.togglePiece(row,i);
      if ( !board.hasAnyQueensConflicts() ) {
        findSolution(row + 1 );
      }
      board.togglePiece(row,i);
    }
  };
  findSolution(0)
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var board = new Board({n:n});
  var findSolution = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }

    for(var i = 0; i < n; i++) {
      board.togglePiece(row,i);
      if ( !board.hasAnyQueensConflicts() ) {
        findSolution(row + 1 );
      }
      board.togglePiece(row,i);
    }
  };
  findSolution(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
