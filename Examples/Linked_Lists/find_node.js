// Given a linked list and a target, return true if the target exists and false if it does not exist

// Create the structure for a node
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Initializing a group of nodes
const a = new Node(19);
const b = new Node(63);
const c = new Node(81);
const d = new Node(52);
const e = new Node(12);

// Linking the nodes together
a.next = b;
b.next = c;
c.next = d;
d.next = e;

/********************************/
/*      Iterative solution      */
/********************************/

// const findNode = (head, target) => {
//     while (head !== null) {
//         if (head.value == target) {
//             return true;
//         }
        
//         head = head.next
//     }

//     return false
// }

// console.log(findNode(a, 12));

/********************************/
/*      Recursive solution      */
/********************************/

const findNode = (head, target) => {
    // If our current value is null, that means we are at the end and did not find the target    
    if (head == null) {
        return false
    }

    // If this is true, we have found our target
    if (head.value == target) {
        return true
    }

    // Recursively look for the node
    return findNode(head.next, target);
}

console.log(findNode(a, 63));