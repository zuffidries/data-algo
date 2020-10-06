// IMPLEMENTATION OF A DOUBLY-LINKED LIST DATA STRUCTURE
// ADDITIONAL WORKSHOP COURTESY OF BEIATRIX (https://www.youtube.com/watch?v=ChWWEncl76Y&t=305s)

// DEFINING A SINGLE NODE ELEMENT
class Node {
    constructor(data, prev = null, next = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}

// DEFINING AN ENTIRE LINKED LIST OBJECT
class dLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;    
    }

    // INSERT FIRST NODE (AKA PREPEND)
    insertFirst(data) {
        let newNode = new Node(data, null, this.head);
        let previousHead; 

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            previousHead = this.head;
            this.head = newNode;
            this.head.next = previousHead;
            previousHead.prev = this.head;
        }
        this.size++;
    }

    // INSERT LAST NODE (AKA APPEND)
    insertLast(data) {
        let newNode = new Node(data);
        let prevTail;

        // Edge Case: List is empty, make new node the head (only element).
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // while (currentNode.next) {
            //     currentNode = currentNode.next;
            // } 
            // This traversal is no longer necessary since
            // we're keeping track of the tail in an instance variable.

            prevTail = this.tail;
            this.tail = newNode;
            prevTail.next = this.tail;
            this.tail.prev = prevTail;
        }
        this.size++;
    }

    // INSERT AT INDEX
    insertAtIndex(index, data) {
        let counter = 0;
        let currentNode = this.head;
        let newNode = new Node(data);

        // Edge Case: Index out of range.
        if (index < 0 || index >= this.size) {
            console.error('Index out of range.');
            return
        }

        // Edge Case: Index is 0th element.
        if (index === 0) {
            this.insertFirst(data);
        } else {
            while (counter < index) {
                currentNode = currentNode.next;
                counter++;
            }
            currentNode.prev.next = newNode;
            currentNode.prev = newNode;
            newNode.prev = currentNode.prev;
            newNode.next = currentNode;
        }
        this.size++
    }

    // REMOVE AT INDEX
    removeAtIndex(index) {
        let counter = 0;
        let previousNode;
        let currentNode = this.head;

         // Edge Case: Index out of range.
         if (index < 0 || index >= this.size) {
            console.error('Index out of range.');
            return
        }

        // Edge Case: Index is 0th element.
        if (index === 0) {
            this.head = currentNode.next;
            currentNode.next = null; 
        } else {
            while(counter < index) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                console.log("STEPPING THROUGH: " + currentNode.data);
                counter++
            }
            // Edge Case: Index is final element.
            if (!currentNode.next) {
                this.tail = previousNode;
                currentNode.prev = null;
                previousNode.next = null;
            } else {
                previousNode.next = currentNode.next;
                currentNode.next.prev = previousNode;
            }
        }
        this.size--;
    }

     // PRINT LIST DATA
    printListData() {
        let currentNode = this.head;
        while (currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }    
}

// TESTING

const dll = new dLinkedList();

dll.insertFirst(1);
console.log("CURRENT SIZE: " + dll.size);
dll.insertLast(8);
console.log("CURRENT SIZE: " + dll.size);
dll.insertFirst(3);
console.log("CURRENT SIZE: " + dll.size);
dll.insertAtIndex(1, 9);
console.log("CURRENT SIZE: " + dll.size);
dll.removeAtIndex(5);
console.log("CURRENT SIZE: " + dll.size);



dll.printListData();