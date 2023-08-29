// Given two nodes, find the shortest path in a graph from an edge list

const shortestPath = (edges, startNode, finishNode) => {
    // Create graph
    const graph = createGraph(edges);

    return breadthFirstSearch(graph, startNode, finishNode);
};

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

    return graph
};

const breadthFirstSearch = (graph, sourceNode, destinationNode) => {
    // When we instanuate our set, we want to start the set with the sourceNode
    // We don't need to keep track of the count
    const visitedNodes = new Set([sourceNode]);

    // The queue should be an array with the sourceNode and its distance from the root
    // The sourceNode automatically starts with a distance of 0 because it is the root
    const queue = [[sourceNode, 0]];

    while (queue.length > 0) {
        // Destructure the array, we know it'll be [node, distance]
        const [currentNode, distance] = queue.shift();

        if (currentNode == destinationNode) {
            return distance;
        }

        for (const neighbor of graph[currentNode]) {
            // If the node has not been visited, add to set along with push the neighbor to the queue
            if (!visitedNodes.has(neighbor)) {
                visitedNodes.add(neighbor);

                queue.push([neighbor, distance + 1]);
            }
        }
    }

    return -1
}

const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v']
];

console.log(shortestPath(edges, 'y', 'x'));