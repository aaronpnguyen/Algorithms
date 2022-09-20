/*
    Binary search:

    We have three pointers, at the beginning, in the middle, and at the end.
    What we are trying to do is find a target value by moving our pointers
    based off of the target value and middle pointer. If the target value is
    greater than the middle pointer, then we move our left pointer to our middle
    pointer's index + 1, and our middle pointer is now assigned to a new index 
    beetween our new left pointer and pre-existing right pointer. If the pointer
    is equal to the middle pointer, then we can return the middle pointer. However
    if it is not and is less than our middle pointer, the right pointer will now shift to
    our middle pointer's index -1, and our middle pointer will again, be reassigned. We 
    continue our pointer shifting until our middle pointer either finds the target.
    If the target doesn't exist, it will return -1.

    Runtime: O(log(n)) - Divide and conquer method
    Space complexity: O(1) - Binary search is done in place

    Example:
    Array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    Target: 9

    Initial Setup:
    Left: 1 | Middle: 5 | Right: 10
    Target > Middle and not found, shift left and middle pointers

    First loop:
    Left: 6 | Middle: 8 | Right: 10
    Target < Middle and not found, shift middle and right pointers

    Second loop:
    Left: 9 | Middle: 9 | Right: 10
    Target is found, return middle

    =================================================
    *           ONLY WORKS ON SORTED ARRAYS         *
    =================================================
*/

function binarySearch(array, target) {
    let left = 0, right = array.length - 1; // Set up left and right pointer
    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // Setting up mid point
        if (array[mid] == target) return mid; // Return mid point
        else if (array[mid] < target) left = mid + 1 // Because we know target does not exist at middle, shift left pointer to middle index + 1
        else right = mid - 1; // Vice versa from previous step
    }
    return -1
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 9))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 21))
console.log(binarySearch([], 0))