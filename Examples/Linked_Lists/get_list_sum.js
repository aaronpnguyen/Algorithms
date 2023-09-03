// Given a linked list, return the sum

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

// const getSum = (head) => {
//     let sum = 0;

//     // Traverse through linked list until our current value is null
//     while (head !== null) {
//         sum += head.value;

//         // Go to the node's next
//         head = head.next;
//     }

//     return sum;
// }

// console.log(getSum(a)); // Return 15

/********************************/
/*      Recursive solution      */
/********************************/

// const getSum = (head) => {
//     if (head == null) {
//         return 0;
//     }

//     // Recursively add the value + its next value
//     return head.value + getSum(head.next);
// }


// console.log(getSum(a));