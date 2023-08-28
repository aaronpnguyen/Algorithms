// Write a function, connectedComponentsCount, that takes in the adjacency list of an undirected graph.
// The function should return the number of connected components within the graph.

const componentCount = (graph) => {
    // Make a global visited lookup to check when nodes have been visited
    const visitedNodes = new Set();
    let count = 0;

    // Traverse each key using "in"
    // "of" gives the values of each key
    for (const node in graph) {
        if (breadthFirstSearch(graph, node, visitedNodes) == true) {
            count++;
        }
    }

    return count;
}

// If we're using a recursive DFS, pass in currentNode
const depthFirstSearch = (graph, currentNode, visitedNodes) => {
    // Preventing infinite cycles
    if (visitedNodes.has(String(currentNode))) {
        return false;
    }

    // Everytime we are at a new node that is NOT in our set, make sure to add it
    visitedNodes.add(String(currentNode));

    // Check the neighbors or relationships of the current node
    for (const neighbor of graph[currentNode]) {
        depthFirstSearch(graph, neighbor, visitedNodes)
    }

    // When all neighbors have been explored (the key's values have been explored),
    // the component has been completely traversed
    return true;
}

// Source node is the node being passed in from parent function
const breadthFirstSearch = (graph, sourceNode, visitedNodes) => {
    // Preventing infinite cycles
    if (visitedNodes.has(String(sourceNode))) {
        return false;
    };

    // Remember, BFS uses a queue
    const queue = [sourceNode];

    while (queue.length > 0) {
        const currentNode = queue.shift();

        for (const neighbor of graph[currentNode]) {
            // If the node has not been visited, we should add it
            // Returning false here would give us false values and will not allow us to
            // traverse the rest of the component
            if (!visitedNodes.has(String(neighbor))) {
                visitedNodes.add(String(neighbor));

                queue.push(neighbor)
            }
        }
    }

    return true;
}

const res = componentCount({
    0: [4,7],
    1: [],
    2: [],
    3: [6],
    4: [0],
    6: [3],
    7: [0],
    8: []
}); // -> 2

console.log(res);