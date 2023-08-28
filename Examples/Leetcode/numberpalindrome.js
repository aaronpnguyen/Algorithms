var isPalindrome = function(x) {
    let word = x.toString();
    for (let i = 0, j = word.length - 1; i < word.length; i++, j--) {
        if (word[i] !== word[j]) {
            return false
        }
    }
    return true
};