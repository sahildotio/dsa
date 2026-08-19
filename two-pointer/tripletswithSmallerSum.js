class Solution {
  countTriplets(sum, arr) {
    arr.sort((a, b) => a - b);

    let count = 0;

    for (let i = 0; i < arr.length - 2; i++) {
      let left = i + 1;
      let right = arr.length - 1;

      while (left < right) {
        let currentSum = arr[i] + arr[left] + arr[right];

        if (currentSum < sum) {
          count += right - left;
          left++;
        } else {
          right--;
        }
      }
    }

    return count;
  }
}

const solution = new Solution();

console.log(solution.countTriplets(2, [-2, 0, 1, 3]));
