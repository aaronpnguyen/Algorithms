// https://leetcode.com/problems/height-checker/

/*
    Height Checker

    Description:
    A school is trying to take an annual photo of all the students.
    The students are asked to stand in a single file line in non-decreasing order by height.
    Let this ordering be represented by the integer array expected where expected[i] is the expected height of the ith student in line.

    You are given an integer array heights representing the current order that the students are standing in.
    Each heights[i] is the height of the ith student in line (0-indexed).

    Return the number of indices where heights[i] !== expected[i].
*/

/*
    Key take aways:

    Runtime is not specified
    Compares given array to sorted array
    Count is incremented when heights[i] !== sorted[i]

    Example: 
    Input: heights = [1,1,4,2,1,3]
    Output: 3
    Explanation: 
    heights:  [1,1,4,2,1,3]
    expected: [1,1,1,2,3,4]
    Indices 2, 4, and 5 do not match.
*/

var heightChecker = function (heights) {
    let counter = 0; // Count starts at 0
    let sorted = [...heights].sort((a, b) => a - b); // Sort from low to high
    for (let i = 0; i < heights.length; i++) {
      if (heights[i] !== sorted[i]) { // Checks if heights[i] !== sorted[i]
        counter++; // If heights[i] is not equal, increment the count
      }
    }
    return counter;
  };