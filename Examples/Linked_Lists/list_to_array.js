// Given a linked list, convert the list into an array

// Create the structure for a node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Initializing a group of nodes
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');

// Linking the nodes together
a.next = b;
b.next = c;
c.next = d;
d.next = e;

// const listToArray = (head) => {
//     // Start with an empty array, because we should not have any values yet
//     let convertedArray = [];

//     // Traversing iteratively
//     while (head !== null) {
//         convertedArray.push(head.value);

//         head = head.next;
//     }

//     return convertedArray;
// }

// Recursive solution
const listToArray = (head) => {
    // Create a "global" array to keep track of the nodes
    const array = [];

    insertValue(head, array);

    return array
}

const insertValue = (head, array) => {
    if (head == null) {
        return
    }

    // Add value into array that is passed in
    array.push(head.value);

    // Traversing each node recursively while passing in a version of an array with the previous node
    insertValue(head.next, array);

    return array
}


console.log(listToArray(a))