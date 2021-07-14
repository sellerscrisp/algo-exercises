function bubbleSort(nums) {
  for (let i = 0; i < nums.length; i++) {
    let swap = false;
    while (!swap) {
      for (let j = 0; j < nums.length - i; j++) {
        if (nums[j] > nums[j + 1]) {
          let temp = nums[j + 1];
          nums[j + 1] = nums[j]
          nums[j] = temp;
          swap = true;
        }
      } if (!swap) break;
    }
  }
  return nums;
}


module.exports = bubbleSort;