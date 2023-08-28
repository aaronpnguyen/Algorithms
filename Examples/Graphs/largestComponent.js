// Given multiple graph components, return the size of the largest component

const largestComponent = (graph) => {
    // Initialize a count
    let componentSize = 0;

    // Create global set
    const visitedNodes = new Set();

    // To travese through a graph the fastest, we can use DFS
    for (const node in graph) {
        // This should return an integer which is the size of the graph
        const currentComponentSize = depthFirstSearch(graph, node, visitedNodes);

        // If the current size > component size, reassign the componentSize to the currentComponent
        if (currentComponentSize > componentSize) {
            componentSize = currentComponentSize;
        } // Else keep the current componentSize

    }

    return componentSize;
}

// Recursive DFS
const depthFirstSearch = (graph, currentNode, visitedNodes) => {
    // If the node has been visited, exit with a count of 0
    if (visitedNodes.has(String(currentNode))) {
        return 0;
    }

    visitedNodes.add(String(currentNode));

    // Instantuate the count for the current component
    // Start at 1 because this is the current node
    let count = 1;

    // Traverse the current graph
    // Increment by what is returned
    for (const neighbor of graph[currentNode]) {
        count += depthFirstSearch(graph, neighbor, visitedNodes);
    }

    return count;
}

console.log(largestComponent({
    1: ['2'],
    2: ['1','8'],
    6: ['7'],
    9: ['8'],
    7: ['6', '8'],
    8: ['9', '7', '2']
  }));