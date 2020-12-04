// IMPLEMENTATION OF A QUEUE (BASED ON A LINKED LIST)

// DEFINING A SINGLE NODE ELEMENT
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

// DEFINING AN ENTIRE LINKED LIST OBJECT
class sLinkedQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;    
    }

    isEmpty() {
       return this.size === 0 ? true : false;
    }

    enqueue(data) {
        let newNode = new Node(data);
        // Edge case: queue is empty
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
            this.size++;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.size++;
    }

    dequeue() {
        // Edge case: queue is empty
        if (this.isEmpty()) { 
            console.log("Queue is empty.");
            return;
        }

        let frontNode = this.head;

        // Edge case: dequeuing last element
        if (this.size === 1) {
            this.head = this.tail = null;
            this.size--;
            return frontNode;
        }
        this.head = this.head.next;
        this.size--;
        return frontNode;
    }

    peek() {
        if (!this.head || !this.tail) return "Queue is empty.";
        return "The front element of the queue contains: " + this.head.data;
    }
}


let slq = new sLinkedQueue();

slq.enqueue("once i had a love");
slq.enqueue("and it was a gas");
slq.enqueue("soon turned out");
slq.enqueue("had a heart of glass");

console.log(slq);
console.log(slq.peek());

slq.dequeue();
slq.dequeue();

console.log(slq);
console.log(slq.isEmpty());