// Given two lists, combine the nodes in alternating order as much as possible

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Initializing a group of nodes
const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');

const v = new Node('v');
const w = new Node('w');
const x = new Node('x');
const y = new Node('y');
const z = new Node('z');

// Linking the nodes together
a.next = b;
b.next = c;
c.next = d;
d.next = e;

v.next = w;
w.next = x;
// x.next = y;
// y.next = z;

// We need to traverse through each list in this order:
// h1, h2, h1, h2

// const zipLists = (head1, head2) => {
//     let tailNode = head1;
//     let currentNode1 = head1.next;
//     let currentNode2 = head2;
//     let count = 0;

//     // Iterate through both lists until one is null
//     // When either node is null, we know we have hit the end of a list
//     while (currentNode1 !== null && currentNode2 !== null) {
//         // Alternate traversing between these two lists
//         if (count % 2 == 0) {
//             // If even, set next to currentNode2
//             tailNode.next = currentNode2;

//             // Set currentNode2 next
//             currentNode2 = currentNode2.next;
//         } else {
//             // If count is odd, set next to current 1
//             tailNode.next = currentNode1;

//             // Set current1 next
//             currentNode1 = currentNode1.next;
//         }

//         // Now that we are out, we need to move to the new next node
//         // This new next node is what we just appeneded as the next node
//         tailNode = tailNode.next;
        
//         // Increase count by 1 so we can are able to alternate
//         count += 1;
//     }

//     // If current node 1 is empty, append the rest of currentNode2 to the tailNode
//     if (currentNode1 !== null) {
//         tailNode.next = currentNode2
//     }

//     // If current node 2 is empty, append the rest of currentNode 1 to the tailNode
//     if (currentNode2 !== null) {
//         tailNode.next = currentNode1
//     }

//     return head1;
// }

const zipLists = (head1, head2) => {
    // If both heads are null, we are at the end of both nodes
    if (head1 == null && head2 == null) {
        return null;
    }

    // If head1 is null, then just append head2 to tail
    if (head1 == null) {
        return head2;
    }

    // If head2 is null, then just append head1 to tail
    if (head2 == null) {
        return head1;
    }

    // Merge the current nodes and recursively merge the rest
    const next1 = head1.next;
    const next2 = head2.next;

    head1.next = head2;
    head2.next = zipLists(next1, next2);

    return head1;
}

console.log(zipLists(a, v));