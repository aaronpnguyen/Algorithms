// Given two points in a cylic graph, return a boolean if there is a path from the source node to the destination node

const undirectedPath = (edges, sourceNode, destinationNode) => {
    // Create an adjacency list
    const graph = createGraph(edges);

    // Keep track of nodes visited, globally
    const visitedNodes = new Set();

    // Practice with either DFS or BFS suffix
    return hasPathDFS(graph, sourceNode, destinationNode, visitedNodes);
}

const hasPathDFS = (graph, currentNode, destinationNode, visitedNodes) => {
    // Check if the currentNode matches the destination node
    if (currentNode == destinationNode) {
        return true;
    }

    // Check if the node has been visited or does not exist
    if (visitedNodes.has(currentNode) || !(currentNode in graph)) {
        return false;
    }

    visitedNodes.add(currentNode);

    for (const neighbor of graph[currentNode]) {

        // If we hit a true boolean, we can exit and this lets us know we have found a path
        if (hasPathDFS(graph, neighbor, destinationNode, visitedNodes) == true) {
            return true;
        }
    }

    // If we traverse through the whole graph and every node's neighbors
    // Without finding a path, return false
    return false
}

const hasPathBFS = (graph, sourceNode, destinationNode, visitedNodes) => {
    // If the source node does not exists, we cannot traverse
    if (!(sourceNode in graph)) {
        return false;
    }

    // Start queue with the sourceNode that is passed in
    const queue = [sourceNode];

    while (queue.length > 0) {
        const currentNode = queue.shift();

        // If the current node == destination node, we know we have found a path
        if (currentNode == destinationNode) {
            return true;
        }
        
        for (const neighbor of graph[currentNode]) {
            // If the node has not been visited, we should add it
            // Returning false here would give us false values and will not allow us to
            // traverse the rest of the component
            if (!visitedNodes.has(neighbor)) {
                visitedNodes.add(neighbor);
    
                queue.push(neighbor);
            }
        }
    }

    return false;
}

// Create adjacency list
// Edges is an array of arrays
const createGraph = edges => {
    // Create the graph lookup in the form of an adjacency list
    const graph = {}

    // Each element is a relationship between two nodes
    for (const edge of edges) {
        // Destructure index 0, 1 of each element
        const [firstNode, secondNode] = edge;
        
        // Create edges/neighbors per node
        // Empty array initializes a list of relationships a node has
        if (!(firstNode in graph)) {
            graph[firstNode] = [];
        }

        if (!(secondNode in graph)) {
            graph[secondNode] = [];
        }

        // The two indexes, 0 and 1, have a relationship together, meaning they have a relationship
        // Pushing the nodes into neighbor's array allows us to create this relationship
        graph[firstNode].push(secondNode);
        graph[secondNode].push(firstNode);
    }

    return graph;
};

const edges = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't'],
];

console.log(undirectedPath(edges, 'r', 'b')); // -> true