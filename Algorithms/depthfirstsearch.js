class Node {
    constructor(value) {
        this.value = value;
        this.children = [];
    }

    addChild(value) {
        this.children.push(new Node(value));
        return this;
    }

    depthFirstSearch(array) {
        array.push(this.value); // The tree starts off with a value, and the value also has children
        for (const child of this.children) { // For every child in the array children, recursively run depthFirstSearch, memoizing array each time
            child.depthFirstSearch(array);
        }
        return array;
    }
}