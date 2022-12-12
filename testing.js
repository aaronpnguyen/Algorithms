/*

    Largest possible square for broken sticks:
    Want To Cut Sticks So That We Achieve 4 Sticks Of The Same Length. (There Can Be Leftover Pieces). What Is The Longest Square Side That We Can Achieve?
    Input: Two Integers A, B Output:
    Return The Side Length Of The Largest Square That We Can Have, If Not Possible Function Should return 0.
    
    Example 1:
    Input: a = 13, b = 11;
    Output = 5

    Example 2:
    Input: a = 10, b = 21;
    Output = 7;

    Example 3:
    Input: a = 2, b = 1;
    Output = 0;

    Example 4:
    Input: a = 1, b = 8;
    Output = 2;

*/

const solution = (a, b) => {
    const sum = a + b;
    if (sum < 4) return 0
    let maxLen = Math.floor(sum / 4);

    // Checking if we can make a square, max length can be 1
    while (maxLen > 0) {
        const maxA = a / maxLen, maxB = b / maxLen;

        // We only care if the sum of maxA and maxB is greater than 4
        if (maxA + maxB > 4) return maxLen;
        maxLen--
    }
    return 0;
}

console.log(solution(13, 11));
console.log(solution(10, 21));
console.log(solution(2, 1));
console.log(solution(1, 8));