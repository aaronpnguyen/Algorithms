// Given two points in an acylic graph, return a boolean if there is a path from the source node to the destination node

// Breadth First Search
const hasPathBFS = (graph, sourceNode, destinationNode) => {
    // Start with the root node
    const queue = [sourceNode];

    // Once the queue is empty, we know we have traversed through all the nodes
    while (queue.length > 0) {
        // Remove the first node, index 0, and use as our current node
        const currentNode = queue.shift();

        // If the current node == destination node, we know we have found a path
        if (currentNode == destinationNode) {
            return true;
        }

        // Traverse a node's neighbors
        for (const neighbor of graph[currentNode]) {
            queue.push(neighbor);
        }
    }

    // If the queue is empty and we hit this statement, we cannot find a path from the source node
    return false;
}

// Depth First Search
const hasPathDFS = (graph, sourceNode, destinationNode) => {
    // If the current == destination node, we know we have found a path
    if (sourceNode == destinationNode) {
        return true;
    }

    for (let neighbor of graph[source]) {
        // Recursively call function, which returns a boolean
        if (hasPathDFS(graph, neighbor, destinationNode) == true) {
            return true;
        };
    };

    // If the stack is empty and we hit this statement, we cannot find a path from the source node
    return false;
}