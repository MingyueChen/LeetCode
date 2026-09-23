/**
 * Given an array of strings strs, group the anagrams together. You can return the answer in any order.
 * 
 * 
Example 1:
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Example 2:
Input: strs = [""]
Output: [[""]]

Example 3:
Input: strs = ["a"]
Output: [["a"]]
 */

function groupAnagrams(strs) {
  const map = new Map();

  strs.forEach((str) => {
    const s = str.split("").sort().join("");
    if (!map.has(s)) {
      map.set(s, []);
    }
    map.get(s).push(str);
  });
  return Array.from(map.values());
}
