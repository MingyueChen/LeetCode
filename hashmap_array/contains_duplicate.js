/**
Given an integer array nums, return true if any value appears at least twice in the array, 
and return false if every element is distinct.

 
Example 1:

Input: nums = [1,2,3,1]

Output: true



Example 2:

Input: nums = [1,2,3,4]

Output: false
*/

function containsDuplicate(nums) {
  const set = new Set();
  for (const num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
}

/**
 * 
 *Why use set? We only care about whether the value exists or not
 We don't want to get the key's corresponding value (that's for map)
 */
