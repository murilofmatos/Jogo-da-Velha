let turn = 1;

let board = [
  [-1, -1, -1],
  [-1, -1, -1],
  [-1, -1, -1],
];

function markCell(x, y) {
  if (board[x][y] == -1) {
    const cell = document.getElementById("c" + x + y);
    if (turn === 1) {
      cell.innerHTML = "<span class='mark x'>x</span>";
      turn = 10;
    } else {
      cell.innerHTML = "<span class='mark o'>O</span>";
      turn = 1;
    }
    board[x][y] = turn;
  }
  checkWin();
}
let possibleWins = [];
function checkWin() {
  let possibleWins = [];
  let winner;

  possibleWins[0] = board[0][0] + board[0][1] + board[0][2];
  possibleWins[1] = board[1][0] + board[1][1] + board[1][2];
  possibleWins[2] = board[2][0] + board[2][1] + board[2][2];

  possibleWins[3] = board[0][0] + board[1][0] + board[2][0];
  possibleWins[4] = board[0][1] + board[1][1] + board[2][1];
  possibleWins[5] = board[0][2] + board[1][2] + board[2][2];

  possibleWins[6] = board[0][0] + board[1][1] + board[2][2];
  possibleWins[7] = board[0][2] + board[1][1] + board[2][0];

  for (let i = 0; i < possibleWins.length; i++) {
    if (possibleWins[i] === 3) {
      winner = "o";
      break;
    } else if (possibleWins[i] === 30) {
      winner = "x";
      break;
    }
  }
  if (winner) window.alert(`${winner} ganhou!`);
}
