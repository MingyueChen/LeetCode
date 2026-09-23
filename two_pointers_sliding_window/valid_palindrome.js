/**

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters 
and removing all non-alphanumeric characters, it reads the same forward and backward. 
Alphanumeric characters include letters and numbers.
Given a string s, return true if it is a palindrome, or false otherwise.
*/

function isPalindrome(s): boolean {
    let left  = 0;
    let right = s.length-1;

    while(left < right) {
        if(!/[a-zA-Z0-9]/.test(s[left])) {
            left++;
            continue;
        }

        if(!/[a-zA-Z0-9]/.test(s[right])) {
            right--;
            continue;
        }

        if(s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};