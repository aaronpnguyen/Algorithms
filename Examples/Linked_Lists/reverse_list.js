// Reverse a link list

// Create the structure for a node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Initializing a group of nodes
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);

// Linking the nodes together
a.next = b;
b.next = c;
c.next = d;
d.next = e;

/********************************/
/*      Iterative solution      */
/********************************/

// const reverseList = (head) => {
//     let currentNode = head;
//     let previousNode = null;

//     while (currentNode !== null) {
//         // We know we need to overwrite the current node's next as the previous node, so we need to keep track of the current node's next node
//         const nextNode = currentNode.next;

//         // Change our current node to the previousnode
//         currentNode.next = previousNode;

//         // Current has not been over written yet, so our previous node will be our current node
//         previousNode = currentNode;

//         // Continue traversing through the list normally
//         currentNode = nextNode;
//     }

//     // Previous node is technically now the head
//     return previousNode;
// }

/********************************/
/*      Recursive solution      */
/********************************/

// const reverseList = (head, previousNode = null) => {
//     if (head == null) {
//         return previousNode;
//     }

//     const nextNode = head.next;
//     head.next = previousNode;

//     return reverseList(nextNode, head);
// }

console.log(reverseList(a));