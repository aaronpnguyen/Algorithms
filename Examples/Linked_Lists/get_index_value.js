// Given a linked list and an index, return the value of the index in the list.
// If the index is not found, return null.

// Create the structure for a node
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

// Linking the nodes together
a.next = b;
b.next = c;
c.next = d;
d.next = e;

/********************************/
/*      Iterative solution      */
/********************************/

// const getIndexValue = (head, index) => {
//     // We start at index 0 and need to keep track as we traverse
//     let currentIndex = 0;

//     // Traversing iteratively
//     while (head !== null) {
//         // If the currentIndex we have is == index, we found the index we're looking for
//         if (index == currentIndex) {
//             return head.value;
//         }

//         // Set head to the next value
//         head = head.next;

//         // Increase our index by 1 for the next iteration
//         currentIndex++
//     }

//     // Return null if we cannot return a value
//     return null;
// }

/********************************/
/*      Recursive solution      */
/********************************/

// const getIndexValue = (head, index) => {
//     // Base case if we the index does not exist
//     if (head == null) {
//         return null
//     }

//     // When the index hits 0, meaning we have traveled through the list an index amount of times,
//     // We have found our index
//     // This is so we don't have to keep a count, though a count could be used - this is simpler
//     if (index == 0) {
//         return head.value;
//     }

//     // Decrement index, because each time we iterate, we have already traverse one index
//     return getIndexValue(head.next, index - 1)
// }

// Similar solution, but keeping track of a count instead of decreasing index by 1
// const getIndexValue = (head, index, count = 0) => {
//     // Base case if we the index does not exist
//     if (head == null) {
//         return null
//     }
    
//     // We recursively increase count by 1, so when we reach the index we desire, we cant return the value
//     if (count == index) {
//         return head.value;
//     }

//     // Decrement index, because each time we iterate, we have already traverse one index
//     return getIndexValue(head.next, index , count + 1)
// }

// console.log(getIndexValue(a, 2));