/**
 * battleships
 *
 * @param {Array} grid
 * @param {Array} shots
 * @return {Array}
 *
 * description:
 *
 *  - Grid is a 2d array of size n x m
 *  - Shots is an array of shots x-coordinate and y-coordinate
 *  - Given array shots, determine the result of each shot, possible results are:
 *     - Missed
 *     - Attacked ship {shipNumber}
 *     - Ship {shipNumber} sunk
 *     - Already attacked
 *
 * @example :
 *
 *          grid = [[".", "1", "2", "2", "."],
 *                  [".", "1", ".", ".", "3"] ,
 *                  ["4", "4", "5", "5", "5"]
 *                 ]
 *
 *          shots = [[0, 0], [0, 1], [0, 1], [0, 2], [1, 1], [0, 1],
 *                   [1, 4], [2, 2], [2, 4], [0, 3], [1, 3], [1, 4]]
 *
 *
 *          result = ["Missed", "Attacked ship 1", "Attacked ship 2", "Ship 1 sunk",
 *                    "Already attacked", "Ship 3 sunk", "Attacked ship 5",
 *                    "Attacked ship 5", "Ship 2 sunk", "Missed", "Already attacked"]
 *
 */

function solution (grid, shots) {
  // Iterate my shots and compare with my grid
  // if my grid at position shot ith == . store "Missed" in answer
  // keep track what was hit, inside and object with key/value. { '1' : [[1,1]] , '3': []  }
  // after checking the position of shp remove it, and check the len of ship

  const ships = {}

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      var currentShip = grid[r][c]
      if (ships[currentShip] === undefined) {
        ships[currentShip] = []
      }
      ships[currentShip] = [...ships[currentShip], [r, c]]
    }
  }
  console.log(ships)
}





const grid = [
  ['.', '1', '2', '2', '.'],
  ['.', '1', '.', '.', '3'],
  ['4', '4', '5', '5', '5']
]

const shots = [
  [0, 0],
  [0, 1],
  [0, 1],
  [0, 2],
  [1, 1],
  [0, 1],
  [1, 4],
  [2, 2],
  [2, 4],
  [0, 3],
  [1, 3],
  [1, 4]
]

console.log(solution(grid, shots))
