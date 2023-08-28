/**
    Given an array of positive integers representing the values of coins in your possession, write a function that returns the minimum
    amount of change (the minimum sum of money) that you cannot create. The given coins can have any positive integer value and aren't
    necessarily unique (i.e., you can have multiple coins of the same value).

    For example, if you're given coins = [1, 2, 5], the minimum amount of change that you can't create is 4.
    If you're given no coins, the minimum amount of change that you can't create is 1.
**/


function nonConstructibleChange(coins) {
    // Sort change from lowest to highest
    coins.sort((a, b) => a - b);

    // Minimum amount we can return is 1
    let change = 1;
    for (const coin of coins) {
        // If a coin is greater than change, return the amount of change we already have, default is 1
        if (coin > change) return change;

        // Add the coin to change
        change += coin
    }
    return change;
}