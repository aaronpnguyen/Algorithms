// Given a grid that contains Ws and Ls where W is water and L is land,
// Return the number of islands on the grid.
// An island is depicted by regions of land that are directly connected

const islandCount = (grid) => {
    // First, we need to make a global visited list
    const visitedNodes = new Set();

    // Everytime I see 'L', I want to start DFS
    // We can skip if we have already visited 'L', or if it is 'W'
    let count = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let column = 0; column < grid[0].length; column++) {
            if (depthFirstSearch(grid, row, column, visitedNodes) == true) {
                count++;
            }
        }
    }

    return count;
}

const depthFirstSearch = (grid, row, column, visitedNodes) => {
    const rowInbounds = 0 <= row && row < grid.length;
    const columnInbounds = 0 <= column && column < grid[0].length;

    if (!rowInbounds || !columnInbounds || grid[row][column] == 'W') {
        return false;
    }

    const position = `${row}, ${column}`;

    if (visitedNodes.has(position)) {
        return false;
    }

    visitedNodes.add(position);

    depthFirstSearch(grid, row - 1, column, visitedNodes);
    depthFirstSearch(grid, row + 1, column, visitedNodes);
    depthFirstSearch(grid, row, column - 1, visitedNodes);
    depthFirstSearch(grid, row, column + 1, visitedNodes);

    return true;
}

const grid = [
    ['W', 'L', 'W', 'W', 'W', 'W'],
    ['W', 'L', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'W', 'W'],
    ['L', 'W', 'W', 'L', 'L', 'W'],
    ['L', 'L', 'W', 'W', 'W', 'W'],
];

console.log(islandCount(grid)); // 3