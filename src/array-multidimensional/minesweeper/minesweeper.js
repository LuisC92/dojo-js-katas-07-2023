/*
Create a function `sweep` which takes a grid and two numbers as parameters :
* grid : a minesweeper matrix where 0 are empty cells and 1 are bombs. The width and height of the grid can vary.
* row : the vertical coordinate of the cell to sweep
* column : the horizontal coordinate of the cell to sweep

The function will check the cell using the coordinates and returns :
* "kaboom", if it contains a boom
* the number of adjacent bombs, if it's empty

The function will throw :
* TypeError if grid is null or not an array
* TypeError if at least one value of the grid is not 0 or 1
* TypeError if row or column are null or not a number
* RangeError if grid has a width or height inferior to one
* RangeError if row or column are out of bounds

Example :

grid :
[
  [0, 0, 0, 1],
  [0, 1, 0, 0],
  [1, 0, 0, 0]
]
row : 1
column : 2

result : 2

*/

// TODO add your code here

function isValidGrid(grid) {
  if (!Array.isArray(grid)) return false;
  if (grid.length === 0) return false;

  const width = grid[0].length;
  for (const row of grid) {
    if (!Array.isArray(row) || row.length !== width) {
      return false;
    }
    for (const cell of row) {
      if (typeof cell !== 'number' || (cell !== 0 && cell !== 1)) {
        return false;
      }
    }
  }

  return true;
}

function sweep(grid, row, column) {
  if (grid === null || !isValidGrid(grid)) {
    throw new TypeError('grid must be a non-empty array of arrays containing only 0 or 1');
  }

  const height = grid.length;
  const width = grid[0].length;

  if (height < 1 || width < 1) {
    throw new RangeError('grid must have a width and height greater than or equal to one');
  }

  if (typeof row !== 'number' || typeof column !== 'number') {
    throw new TypeError('row and column must be numbers');
  }

  if (row < 0 || row >= height || column < 0 || column >= width) {
    throw new RangeError('row or column is out of bounds');
  }

  if (grid[row][column] === 1) {
    return 'kaboom';
  }

  let adjacentBombs = 0;
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];

  for (const [dx, dy] of directions) {
    const newRow = row + dx;
    const newColumn = column + dy;

    if (newRow >= 0 && newRow < height && newColumn >= 0 && newColumn < width) {
      adjacentBombs += grid[newRow][newColumn];
    }
  }

  return adjacentBombs;
}


// Begin of tests
const assert = require("assert");

assert.strictEqual(typeof sweep, "function");
assert.strictEqual(sweep.length, 3);
const grid = [
  [0, 0, 0, 1],
  [0, 1, 0, 0],
  [1, 0, 0, 0],
];
assert.strictEqual(sweep(grid, 1, 1), "kaboom");
assert.strictEqual(sweep(grid, 0, 3), "kaboom");
assert.strictEqual(sweep(grid, 2, 0), "kaboom");
assert.strictEqual(sweep(grid, 0, 0), 1);
assert.strictEqual(sweep(grid, 1, 2), 2);
assert.strictEqual(sweep(grid, 2, 3), 0);
assert.throws(() => {
  sweep(null, 1, 1);
}, TypeError);
assert.throws(() => {
  sweep("a", 1, 1);
}, TypeError);
assert.throws(() => {
  sweep(
    [
      [0, 0, "0", 1],
      [0, 1, 0, 1],
      [1, 0, 0, 0],
    ],
    1,
    1
  );
}, TypeError);
assert.throws(() => {
  sweep(
    [
      [0, 0, 0, 1],
      [0, -1, 0, 1],
      [1, 0, 0, 0],
    ],
    1,
    1
  );
}, TypeError);
assert.throws(() => {
  sweep(
    [
      [0, 0, 0, 1],
      [0, 1, null, 1],
      [1, 0, 0, 0],
    ],
    0,
    1
  );
}, TypeError);
assert.throws(() => {
  sweep(grid, -1, 1);
}, RangeError);
assert.throws(() => {
  sweep(grid, 1, 5);
}, RangeError);

// End of tests
