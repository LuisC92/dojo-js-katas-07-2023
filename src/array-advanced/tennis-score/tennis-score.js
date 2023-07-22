/*
Create a function `getScore` which returns the string of the current scores of a tennis game, from a number array where each value represents the player that scored.

* [1, 1, 2, 2, 1] : serving player (1) scored twice, then the receiving player (2) scored twice, and finally the serving player (1) scored once.
The expected result is "40-30".

Game rules :

The score on the left represents the serving player (1), the score on the right represents the receiving player (2).

Scores from zero to three points are described as "love", "15", "30", and "40", respectively.

If at least three points have been scored by each player, the score is not called out as "40–40", but rather as "deuce".

If at least three points have been scored by each side and a player has one more point than his opponent, the score of the game can be called "ad in" when the serving player (1) is ahead, and "ad out" when the receiving player (2) is ahead.

Example:
* points : [1, 1, 1], result : "40-love"
* points : [2, 1, 2, 2], result : "15-40"
* points : [1, 2, 1, 2, 1, 2], result : "deuce"
* points : [1, 1, 1, 2, 2, 2, 1], result : "ad in"

If the argument is null or not an array, throw a TypeError.
If a value of the argument is null or not a number, throw a TypeError.
If a value of the argument is not 1 or 2, throw a RangeError.

Add you own tests.

*/

// TODO add your code here

const getScore = (points) => {
    
    if (!Array.isArray(points) || points.some((point) => typeof point !== "number")) {
      throw new TypeError("Illegal argument");
    }
  
    const playerScores = [0, 0];
  
    for (const point of points) {
      if (point === 1) {
        playerScores[0]++;
      } else if (point === 2) {
        playerScores[1]++;
      } else {
        throw new RangeError("Illegal argument");
      }
    }
  
    const scoreNames = ["love", "15", "30", "40"];
    let result = `${scoreNames[playerScores[0]]}-${scoreNames[playerScores[1]]}`;
  
    if (playerScores[0] >= 3 && playerScores[1] >= 3) {
      if (playerScores[0] === playerScores[1]) {
        result = "deuce";
      } else if (Math.abs(playerScores[0] - playerScores[1]) === 1) {
        const leadingPlayer = playerScores[0] > playerScores[1] ? "in" : "out";
        result = `ad ${leadingPlayer}`;
      }
    }
  
    return result;
  };  


// Begin of tests
const assert = require("assert");

// TODO add your tests:
try {    
    assert.strictEqual(typeof getScore, "function");
    console.log("getScore function exists");
  
    assert.strictEqual(getScore([1, 1, 1]), "40-love");
    console.log("getScore with [1, 1, 1] returns '40-love'");
  
    assert.strictEqual(getScore([2, 1, 2, 2]), "15-40");
    console.log("getScore with [2, 1, 2, 2] returns '15-40'");
  
    assert.strictEqual(getScore([1, 2, 1, 2, 1, 2]), "deuce");
    console.log("getScore with [1, 2, 1, 2, 1, 2] returns 'deuce'");
  
    assert.strictEqual(getScore([1, 1, 1, 2, 2, 2, 1]), "ad in");
    console.log("getScore with [1, 1, 1, 2, 2, 2, 1] returns 'ad in'");
  
    assert.throws(() => getScore(null), TypeError);
    console.log("getScore with null argument throws TypeError");
  
    assert.throws(() => getScore("invalid"), TypeError);
    console.log("getScore with non-array argument throws TypeError");
  
    assert.throws(() => getScore([1, 2, null, 1]), TypeError);
    console.log("getScore with non-number value in array throws TypeError");
  
    assert.throws(() => getScore([1, 2, 3, 1]), RangeError);
    console.log("getScore with value other than 1 or 2 in array throws RangeError");
  } catch (error) {
    console.error("Test failed:", error.message);
  }


// End of tests
