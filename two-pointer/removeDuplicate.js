// Remove Duplicates from Sorted Array — LeetCode 26

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once.

var removeDuplicate = (nums) => {
    let i = 0;
    for (let j = 1; j < nums.length; j++){
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j]
        }
    }

    return i + 1;
}

console.log(removeDuplicate([1, 1, 2]))