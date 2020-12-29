// IMPLEMENTATION OF A STACK (BASED ON A LINKED LIST)
// FUSING MY OWN IMPLEMENTATION OF SLL WITH THIS TUTORIAL: https://www.codesdope.com/course/data-structures-stacks/


// DEFINING A SINGLE NODE ELEMENT
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// DEFINING AN ENTIRE LINKED LIST STACK OBJECT
class sLinkedStack {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;    
    }

    isEmpty() {
       return this.size === 0 ? true : false;
    }

    push(data) {
        let newNode = new Node(data);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return;
        }
        // this.tail.next = newNode;
        // this.tail = newNode;
        // ^ FIRST ATTEMPT ^
        
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    pop() {
        // Empty stack condition
        if (this.isEmpty()) return "Stack is empty.";

        // Declaring variable for storing the popped node
        let returnNode = this.head;

        // Single element condition
        if (this.head === this.tail) {
            this.head = null;
            this.size--;
            return returnNode;
        }

        // let currentNode = this.head;
        // while (currentNode.next != this.tail) {
        //     // iterate until second-to-last element
        //     currentNode = currentNode.next;
        // }
        // returnNode = this.tail;
        // currentNode.next = null;
        // this.tail = currentNode;
        // ^ FIRST ATTEMPT ^

        this.head = this.head.next;
        this.size--;
        return returnNode;
    }

    peek() {
        if (!this.head || !this.tail) return "Stack is empty.";
        return "The top element of the stack contains: " + this.tail.data;
    }
}


// TESTING

let test = new sLinkedStack();
console.log(test.isEmpty());

// Pushing
test.push(10);
test.push(11);

console.log(test);

// Empty stack
console.log(test.isEmpty());

console.log(test.pop());
test.push(13);

// Peeking
console.log(test.peek())
console.log(test);

// Popping 
console.log(test.pop());
console.log(test.pop());
console.log(test.pop());