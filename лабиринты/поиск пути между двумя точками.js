// находит путь в лабиринте map (двумерный массив. 0 - пустая ячейка, 1 - стена)
//возвращает исходный лабиринт, где путь помечен цифрой 2
function solveMaze(map) {

  function solve(row, col, endRow, endCol, map, wasHere, correctPath) {

    if (row === endRow && col === endCol) {
      correctPath[row][col] = true;
      return true;
    }

    if (map[row][col] === 1 || wasHere[row][col]) {
      return false;
    }

    wasHere[row][col] = true;

    if (row !== 0) {
      if (solve(row - 1, col, endRow, endCol, map, wasHere, correctPath)) {
        correctPath[row][col] = true;
        return true;
      }
    }

    if (row !== map.length - 1) {
      if (solve(row + 1, col, endRow, endCol, map, wasHere, correctPath)) {
        correctPath[row][col] = true;
        return true;
      }
    }

    if (col !== 0) {
      if (solve(row, col - 1, endRow, endCol, map, wasHere, correctPath)) {
        correctPath[row][col] = true;
        return true;
      }
    }

    if (col !== map[row].length - 1) {
      if (solve(row, col + 1, endRow, endCol, map, wasHere, correctPath)) {
        correctPath[row][col] = true;
        return true;
      }
    }

    return false;

  }

  let mapCopy = JSON.parse(JSON.stringify(map));
  let wasHere = Array(map.length).fill(false).map(row => Array(map[0].length).fill(false));
  let correctPath = Array(map.length).fill(false).map(row => Array(map[0].length).fill(false));
  let [startRow, startCol, endRow, endCol] = findStartEnd(map);

  solve(startRow, startCol, endRow, endCol, map, wasHere, correctPath);

  correctPath.forEach((row, rowIndex) => row.map((col, colIndex) => col ? mapCopy[rowIndex][colIndex] = 2 : ""));

  return mapCopy;
}
