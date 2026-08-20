const movesZero = (nums) => {
    let i = 0;
    for(let j = 0; j < nums.length; j++){
        if(nums[j] !== 0){
            [nums[i], nums[j]] = [nums[j], nums[i]]
            i++;
        }
    }
    return nums;
}

console.log(movesZero([1, 24, 53, 12, 0, 3, 0, 2]))