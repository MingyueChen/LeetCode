/*
Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without duplicate characters.

 

Example 1:
Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.

Example 2:
Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Example 3:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
*/
function lengthOfLongestSubstring(s: string): number {
    const set = new Set();
    let left = 0;
    let right = 0;
    let maxLength = 0;
    while(right < s.length) {
        while(set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLength = Math.max(maxLength, right-left+1);
        right++;
    }
    return maxLength;
};


/**
 * 解题思路
 * 
 * 先用这个：

s = "abcabcbb"

我们要找的是：

最长的、没有重复字符的连续 substring 是多长？

先记住两个东西

我们有两个指针：

left
 ↓
a b c a b c b b
             ↑
            right
right：一直往右走，负责把新字符加入窗口
left：如果出现重复，负责从左边删除字符

当前 left 到 right 之间，就是我们的窗口。

第一步

一开始：

a b c a b c b b
↑
left
↑
right

窗口：

[a]

没有重复。

所以目前最长：

"a"
长度 = 1

然后 right 往右。

第二步

现在：

a b c a b c b b
↑   ↑
left right

窗口：

[a b]

没有重复。

所以：

最长 = "ab"
长度 = 2

right 继续往右。

第三步

现在：

a b c a b c b b
↑     ↑
left  right

窗口：

[a b c]

没有重复。

所以：

最长 = "abc"
长度 = 3

现在 right 继续往右。

第四步：出现重复！

现在 right 来到了第二个 a：

a b c a b c b b
↑     ↑
left  right

窗口变成：

[a b c a]

发现：

a 重复了！

怎么办？

不能继续保持这个窗口。

所以移动 left。

删除左边的 a

原来：

[a b c a]
 ↑
left

我们把左边这个 a 删除：

[b c a]
 ↑
left

现在窗口里面：

b c a

没有重复了。

所以现在：

"bca"
长度 = 3

注意：

我们没有把 right 往回移动。

right 还是在那个 a。

只有 left 动。

第五步

right 继续向右，遇到 b：

a b c a b c b b
  ↑     ↑
 left  right

当前窗口：

[b c a b]

发现 b 重复了。

怎么办？

移动 left。

先删除左边的 b：

[c a b]
 ↑
left

现在没有重复了。

所以：

"cab"
长度 = 3
第六步

right 继续向右：

a b c a b c b b
    ↑     ↑
   left  right

窗口：

[c a b c]

发现 c 重复。

所以移动 left：

删除左边的 c：

[a b c]
 ↑
left

现在：

"abc"
长度 = 3
第七步

right 再往右，遇到 b：

a b c a b c b b
      ↑     ↑
     left  right

窗口：

[a b c b]

b 重复了。

所以删除左边：

[b c b]
 ↑
left

还是有两个 b！

所以：

继续移动 left。

删除左边这个 b：

[c b]
 ↑
left

现在没有重复。

所以：

"cb"
长度 = 2
第八步

最后一个 b：

a b c a b c b b
        ↑     ↑
       left  right

当前：

[c b b]

又重复了 b。

所以移动 left：

删除 c：

[b b]
 ↑
left

还是重复。

继续移动 left：

删除第一个 b：

[b]
 ↑
left

现在没有重复。

长度：

1

结束。

那我们最后怎么知道答案是 3？

你注意一下整个过程中，我们一直记录当前窗口的最大长度：

"a"       → 1
"ab"      → 2
"abc"     → 3   ← 最大
"bca"     → 3
"cab"     → 3
"abc"     → 3
"cb"      → 2
"b"       → 1

所以最后：

最大长度 = 3

答案：

3

最长的 substring 可以是：

"abc"
"bca"
"cab"

它们长度都是 3。
 */