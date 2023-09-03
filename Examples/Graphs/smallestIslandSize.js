// Given a grid that contains Ws and Ls where W is water and L is land,
// Return the size of the smallest island.
// An island is depicted by regions of land that are directly connected

const getSmallestIslandSize = (grid) => {
    // First, we need to make a global visited list
    const visitedNodes = new Set();

    // Everytime I see 'L', I want to start DFS
    // We can skip if we have already visited 'L', or if it is 'W'
    let minIslandSize = Infinity;

    for (let row = 0; row < grid.length; row++) {
        for (let column = 0; column < grid[0].length; column++) {
            const currentIslandSize = depthFirstSearch(grid, row, column, visitedNodes);

            if (currentIslandSize > 0 && currentIslandSize < minIslandSize) {
                minIslandSize = currentIslandSize;
            }
        }
    }

    return minIslandSize;
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
    
    let componentSize = 1;

    componentSize += depthFirstSearch(grid, row - 1, column, visitedNodes);
    componentSize += depthFirstSearch(grid, row + 1, column, visitedNodes);
    componentSize += depthFirstSearch(grid, row, column - 1, visitedNodes);
    componentSize += depthFirstSearch(grid, row, column + 1, visitedNodes);

    return componentSize;
}

const grid = [
    ['W', 'L', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'L', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'W', 'W'],
    ['L', 'W', 'W', 'L', 'L', 'W'],
    ['L', 'L', 'W', 'W', 'W', 'W'],
];

console.log(getSmallestIslandSize(grid)); // 3