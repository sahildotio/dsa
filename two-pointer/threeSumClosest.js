const threeSumClosest = (numbers, target) => {

    numbers.sort((a, b) => a - b);

    let closest = numbers[0] + numbers[1] + numbers[2];

    for (let i = 0; i < numbers.length - 2; i++) {
        let left = i + 1;
        let right = numbers.length - 1;

        while (left < right) {
            let sum = numbers[i] + numbers[left] + numbers[right];
            if (sum === target) {
                return sum;
            }

            if (Math.abs(sum - target) < Math.abs(closest - target)) {
                closest = sum;
            }

            if (sum < target) {
                left++;
            } else { 
                right--;
            }
        }
    }
    return closest;
}

console.log(threeSumClosest([-1, 2, 1, -4], 1)); // Output: 2