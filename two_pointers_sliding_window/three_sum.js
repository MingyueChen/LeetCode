/**
* 
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]


Example 2:
Input: nums = [0,1,1]
Output: []


Example 3:
Input: nums = [0,0,0]
Output: [[0,0,0]]
*/

function threeSum(nums) {
  // sort numbers
  nums.sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < nums.length - 2; i++) {
    // skip duplicate
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;
    const currentPoint = nums[i];

    while (left < right) {
      const leftValue = nums[left];
      const rightValue = nums[right];
      const sum = currentPoint + leftValue + rightValue;
      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        result.push([currentPoint, leftValue, rightValue]);

        // skip duplicate left and right values
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      }
    } // end of while loop
  } // end of for loop
  return result;
}
