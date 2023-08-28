// This is TwoSum from AlgoExpert

const TwoSum = (array, targetSum) => {
    array.sort((a, b) => a - b); // Sort array
    let left = 0; right = array.length - 1; // Initialize pointers at left and right
    while (left < right) { // We stop when the left pointer has passed the right pointer
        let currentSum = array[left] + array[right]; // Initializing sum as left pointer + right pointer
        if (currentSum == targetSum) { // If the current sum == target
            return [array[left], array[right]]; // Return left pointer and right pointer
        }
        if (currentSum < targetSum) { // If the current sum < target
            left++; // Increment left, because as we increment, the sum should increase
        }
        if (currentSum > targetSum) { // If the current sum > target
            right--; // Decrement right, because as we decrement, the sum should decrease
        }
    }
    return [] // If we make it out of the while loop and haven't hit our base case of currentSum == targetSum, return an empty array
}

console.log(TwoSum([3, 5, -4, 8, 11, 1, -1, 6], 10));