let turn = 0;

function markCell(cellId) {
  cell = document.getElementById("c" + cellId);
  console.log(cell);
  if (turn === 0) {
    cell.innerHTML = "<span class='Xmark'>x</span>";
    turn++;
    return;
  }
  cell.innerHTML = "<span class='Omark'>O</span>";
  turn--;
}
