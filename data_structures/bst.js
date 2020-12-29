// IMPLEMENTATION OF A BINARY SEARCH TREE
// WORKSHOPS COURTESY OF BEIATRIX (https://www.youtube.com/watch?v=6JeuJRqKJrI&t=242s)
// & FREECODECAMP (https://www.youtube.com/watch?v=5cU1ILGy6dM)

// DEFINING A SINGLE NODE ELEMENT
class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

// DEFINING AN ENTIRE BINARY SEARCH TREE
class bsTree {
     constructor(rootValue) {
         this.root = new Node(rootValue);
         this.count = 1;
     }

    // RETURN SIZE OF LIST
     size() {
        return this.count;
     }

     // INSERT A NEW NODE INTO THE TREE
     insert(value) {
        let newNode = new Node(value);

        // Recursively find the right location for the new node.
        const searchTree = node => {
            // If the value is less than node.value, go left.
            if (value < node.data) {
                // Base case: if there is no left child, append this node to the tree.
                if (!node.left) {
                    node.left = newNode;
                } 
                // Recursive case: there is a left child, so look left again.
                else { 
                    searchTree(node.left);
                }
            }
            // If the value is greater than node.value, go right.
            else if (value > node.data) {
               // Base case: if there is no right child, append this node to the tree.
               if (!node.right) {
                node.right = newNode;
                } 
                // Recursive case: there is a right child, so look right again.
                else { 
                    searchTree(node.right);
                }
            }
        }

        // Call the recursive function on the root node.
        searchTree(this.root);

        // Increment number of nodes in the tree
        this.count++;
     }

    // RETURN THE NODE WITH THE MINIMUM VALUE
     min() {
        // RECURSIVE SOLUTION (MY OWN ATTEMPT)
        // Recursively find the left-most leaf node.
        // const getMin = node => {
        //     // Base case: there is no left node.
        //     if (!node.left) {
        //         return node.data;
        //     } 
        //     // Recursive case: there is a left child, so look left again.
        //     else {
        //         return getMin(node.left);
        //     }
        // }
        
        return getMin(this.root);

        // // ITERATIVE SOLUTION (COURTESY BEIATRIX, SIMPLER)
        let currentNode = this.root;

        // Traverse to the left-most leaf node the way you would in a linked list.
        while (currentNode.left) {
            currentNode = currentNode.left;
        }

        return currentNode.data;
     }

    // RETURN THE NODE WITH THE MAXIMUM VALUE
     max() {
        // RECURSIVE SOLUTION (MY OWN ATTEMPT)
        // Recursively find the right-most leaf node.
        // const getMax = node => {
        //     // Base case: there is no right node.
        //     if (!node.right) {
        //         return node.data;
        //     } 
        //     // Recursive case: there is a right child, so look right again.
        //     else {
        //         return getMax(node.right);
        //     }
        // }
        // return getMax(this.root);

        //  // ITERATIVE SOLUTION (COURTESY BEIATRIX, SIMPLER)
         let currentNode = this.root;

         // Traverse to the right-most leaf node the way you would in a linked list.
         while (currentNode.right) {
             currentNode = currentNode.right;
         }
 
         return currentNode.data;
     }
    
     // RETURN BOOLEAN VALUE: TRUE IF TREE CONTAINS VALUE, FALSE IF NOT
     contains(value) {
         let currentNode = this.root;
         // Edge case: input value is root node's value.
         if (currentNode.value === value) {
             return true;
         }
         while (currentNode) {
             // Traverse through the tree based on the BST invariant:

             // If input value is less than the current value, it must be in the left subtree.
             if (value > currentNode.value) {
                 currentNode = currentNode.right;
             }
             // If input value is greater than the current value, it must be in the right subtree.
             else if (value < currentNode.value) {
                 currentNode = currentNode.left;
             }
             // The currentNode has updated based on the above conditionals, 
             // so now check if the value matches the input value.
             if (currentNode.value === value) {
                 return true;
             }
         }
         return false;
     }

     // DEPTH-FIRST SEARCH (BRANCH BY BRANCH)

     // IN-ORDER
     // PROCESS NODES IN: LEFT, ROOT, RIGHT ORDER
     dfsInOrder() {
         // Initialize an array to store the result of the search.
         let result = [];

         const traverse = node => {
             // Recursive case for left node(s).
             if (node.left) traverse(node.left);
             // Base case for root node(s).
             result.push(node.data);
             // Recursive case for right node(s).
             if (node.right) traverse(node.right);
         }

         // Implement recursive function starting at root element.
         traverse(this.root);

         return result;
     }

     // PRE-ORDER
     // PROCESS NODES IN: ROOT, LEFT, RIGHT ORDER
     dfsPreOrder() {
         // Initialize an array to store the result of the search.
         let result = [];

         const traverse = node => {
             // Base case for root node(s).
             result.push(node.data);
             // Recursive case for left node(s).
             if (node.left) traverse(node.left);
             // Recursive case for right node(s).
             if (node.right) traverse(node.right);
         }

         // Implement recursive function starting at root element.
         traverse(this.root);

         return result;
     }

     // POST-ORDER
     // PROCESS NODES IN: LEFT, RIGHT, ROOT ORDER
     dfsPostOrder() {
           // Initialize an array to store the result of the search.
           let result = [];

           const traverse = node => {
               // Recursive case for left node(s).
               if (node.left) traverse(node.left);
               // Recursive case for right node(s).
               if (node.right) traverse(node.right);
               // Base case for root node(s).
               result.push(node.data);
           }
  
           // Implement recursive function starting at root element.
           traverse(this.root);
  
           return result;
     }

     // BREADTH-FIRST SEARCH (LEVEL BY LEVEL)
     // ALGORITHM UTILIZES A QUEUE
     bfs() { 
         // Initialize an array to store the result of the search.
         let result = [];
         // Initialize a queue for use in the BFS algorithm, to keep track of unvisited nodes(?).
         let queue = [];
         // Push root node into queue.
         queue.push(this.root);
         
         // Loop while the queue still contains nodes to visit.
         while (queue.length > 0) {
             let currentNode = queue.shift();   
             result.push(currentNode.data);

             if (currentNode.left) {
                 queue.push(currentNode.left)
             }
             if (currentNode.right) {
                 queue.push(currentNode.right);
             }
         }
         return result;
     }
 }


 // TESTING

 const bst = new bsTree(11);
 bst.insert(2);
 bst.insert(15);
 bst.insert(6);
 bst.insert(9);
 bst.insert(1);

//  console.log(bst);

//  [INPUT TREE]

//          11
//        /   \ 
//       2     15
//     /  \
//    1    6
//          \
//           9

// Expected output: [1, 2, 6, 9, 11, 15]
console.log(bst.dfsInOrder());
// Expected output: [11, 2, 1, 9, 6, 15]
console.log(bst.dfsPreOrder());
// Expected output: [1, 6, 9, 2, 15, 11]
console.log(bst.dfsPostOrder());
// Expected output: [11, 2, 15, 1, 6, 9]
console.log(bst.bfs());

// Expected values: 1, 15, 6
console.log(bst.min(), bst.max(), bst.size());
