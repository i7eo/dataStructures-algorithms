// leetcode: 20.有效的括号

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var map = {
        "(": ")",
        "[": "]",
        "{": "}"
    }
    var leftStack = []
    for (var ch of s){
        if (ch in map) {
            //为左括号时，顺序保存   
            leftStack.push(ch);
        }else {
            //为右括号时，与数组末位匹配
            if(ch !== map[leftStack.pop()]) return false;
        }
    }
    return leftStack.length === 0 //防止全部为左括号
};