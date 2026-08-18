/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let positive = [];
  let negative = [];

  for (let num of nums) {
    if (num < 0) {
      negative.push(num);
    } else {
      positive.push(num);
    }
  }

  for (let i = 0; i < negative.length; i++) {
    negative[i] = negative[i] * negative[i];
  }
  for (let i = 0; i < positive.length; i++) {
    positive[i] = positive[i] * positive[i];
  }

  negative.reverse();

  let result = [];
  let i = 0;
  let j = 0;

  while (i < negative.length && j < positive.length) {
    if (negative[i] < positive[j]) {
      result.push(negative[i]);
      i++;
    } else {
      result.push(positive[j]);
      j++;
    }
  }

  while (i < negative.length) {
    result.push(negative[i]);
    i++;
  }

  while (j < positive.length) {
      result.push(positive[j]);
      j++
  }

  return result;
};
console.log(sortedSquares([-4, -1, 0, 3, 10]));