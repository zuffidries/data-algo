// IMPLEMENTATION OF A SINGLY-LINKED LIST DATA STRUCTURE
// WORKSHOP COURTESY OF TRAVERSY MEDIA (https://www.youtube.com/watch?v=ZBdE8DElQQU)

// DEFINING A SINGLE NODE ELEMENT
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// DEFINING AN ENTIRE LINKED LIST OBJECT
class sLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;    
    }

    // INSERT FIRST NODE
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    // INSERT LAST NODE
    insertLast(data) {
        let newNode = new Node(data);
        let currentNode;

        // Edge Case: List is empty, make new node the head (only element).
        if (!this.head) {
            this.head = newNode;
        } else {
            currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            this.size++;
        }

    }

    // INSERT AT INDEX
    insertAtIndex(index, data) {
        let i = 0; // counter
        let newNode = new Node(data);
        let currentNode, previousNode;
        currentNode = this.head;

        // Edge Case: Index does not exist.
        if (index < 0 || index >= this.size) {
            console.error('Index out of range.');
            return;
        }

        // Edge Case: Index is 0th element (first in linked list).
        if (index === 0) {
            this.insertFirst(data);
        }

        // We need to keep track of two nodes at once so as to redirect the pointers.
        while (i < index) {
            previousNode = currentNode;
            currentNode = currentNode.next
            i++
        }
        previousNode.next = newNode;
        newNode.next = currentNode;
        this.size++;
    }

    // GET AT INDEX
    getAtIndex(index) {
        let i = 0; // counter
        let currentNode = this.head;

         // Edge Case: Index does not exist.
         if (index < 0 || index >= this.size) {
            console.error('Index out of range.');
            return;
        }
        while (currentNode) {
            if (i === index) {
                console.log(currentNode.data);
            }
            currentNode = currentNode.next;
            i++;
        }
        return null;
    }

    // REMOVE AT INDEX
    removeAtIndex(index) {
        let i = 0; // counter
        let currentNode, previousNode;
        currentNode = this.head;

         // Edge Case: Index does not exist.
        if (index < 0 || index >= this.size) {
            console.error('Index out of range.');
            return;
        }

       // Edge Case: Index is 0th element (first in linked list).
       if (index === 0) {
           this.head = currentNode.next;
       } else {
            while (i < index) {
                previousNode = currentNode;
                currentNode = currentNode.next;
                i++
            }
            previousNode.next = currentNode.next;
            this.size--;
       }    
    }

    // REVERSE LIST (ITERATIVELY)
    reverseIterate() {
        let currentNode = this.head;
        let prevNode = null;
        let nextNode;

        while (currentNode) {
            nextNode = currentNode.next;
            currentNode.next = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        this.head = prevNode;
    }

    // REVERSE LIST (RECURSIVELY)
    reverseRecurse(head) {
        if (!head || !head.next) {
            return head;
        } else {
            let reverse = this.reverseRecurse(head.next);
            head.next.next = head;
            head.next = null;
            this.head = reverse;
        }    
    }

    // CLEAR LIST
    clearList() {
        this.head = null;
        this.size = 0;
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

const sll = new sLinkedList();

sll.insertFirst(1);
sll.insertFirst(2);
sll.insertLast(9);
sll.insertFirst(12);

sll.insertAtIndex(1, 13);
sll.removeAtIndex(3);
sll.getAtIndex(3);

// sll.printListData();
// sll.reverseIterate();
// sll.printListData();
// sll.reverseRecurse(sll.head);

// sll.clearList();
sll.printListData();
