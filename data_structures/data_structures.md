# Notes on Data Structures

Below are notes and links to various resources associated with my learning of each data structure.

I initally started this section without much structure, now I'm following along with these helpful [recommendations](https://www.youtube.com/watch?v=P8Znk6Cu1Ww&list=WL&index=4) from Bukola to systematize my learning. 

I'll also be making use of this [megatutorial](https://www.youtube.com/watch?v=RBSGKlAvoiM) from freeCodeCamp to guide my trajectory re: data structures.

<br>

## **Linked Lists**
---
**Overview**

A linked list is a linear data structure wherein elements are stored at non-contiguous locations in memory. It consists of nodes which contain data and pointers to other nodes in the list.

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fib-assessment-tests%2Fproblem_images%2Fsingly-ll.png&f=1&nofb=1)
<br>

**Use Case Analysis**

_Advantages_

Linked lists are ideal for:
* Dynamic sets of data, i.e. data that is changing frequently and/or is of unknown length/size.
* Implementations of other data structures like stacks and queues.
* Representing circular lists of data (where head node and tail node point to one another).

<br>

_Disadvantages_

The trade-offs of linked lists include:
* Greater memory requirement (compared to arrays) to store each node's data and pointer.
* Slower access to elements due to traversal (no indexing as in arrays).
* In the case of doubly-linked lists, double the amount of pointers is required for reverse traversal, which also demands greater memory.
  
<br>

**Big O Analysis**

In this chart, *S stands for singly-linked and *D for doubly-linked.

| Operation         | Time Complexity  |
| :--------         | :---: | 
| Search            | O(n)  |
| Access            | O(n)  
| Prepend (Unshift) | O(1)  |
| Shift             | O(1)  |  
| Append (Push)     | O(1)  |
| Pop               | O(n)*S / O(1)*D
| Insert            | O(n)  |
| Delete            | O(n)  |

<br>

_Note_: This analysis assumes linked lists with references to a head and tail pointer. 

<br>

## **Linked List Implementation(s)**
---


## Singly-Linked List

I followed along with [this implementation](https://www.youtube.com/watch?v=ZBdE8DElQQU) of a singly-linked lists (s/o Brad Traversy for always holding it down). There are a couple things I'd like to remember about how singly-linked lists work:

- Basically, creating this structure boils down to creating two different classes: the **node** class and the **list** class. 

- Each **node** contains the data associated with it, along with a pointer to the next node in the list. Every instance of the **list** class is a new singly-linked list, which is made up of individual instances of node objects, and contains a reference to the first node (**head**), and a **size** variable to keep track of how many nodes are in the list. Here's a truncated example:

    ```javascript
    class Node {
        constructor(data, next = null) {
            this.data = data;
            this.next = next;
        }
    }
    class sLinkedList {
        constructor() {
            this.head = null;
            this.size = 0;    
        }
        // TODO: Add methods for manipulating the list.
    }
    ```

- Traversing the list seems better done with while-loops than for-loops. This is likely because the advantage of organizing data in a linked-list (over, say, an array), is that the size of the linked-list can change more dynamically (w/r/t memory allocation) and therefore isn't always known. 

<br>

## Doubly-Linked List

I followed along with [this implementation](https://www.youtube.com/watch?v=ChWWEncl76Y&t=305s) by Beiatrix, mixing it together with pieces of the singly-linked list implementation (the video itself is a great explainer, just found it easier to rework the code I had already written). Here are some thoughts on doubly-linked lists:

- Much of the implementation is the same as singly-linked lists, except for the addition of previous pointers for each node, which allows for traversal in either direction.

- This particular implementation keeps track of a **tail node** (which I don't think is unique to doubly-linked lists) but I find it's a handy variable to have access to, especially when implementing an append method. For example, I can use something like:

    ```javascript
    let newNode = new Node(data); 

    // Store current tail in variable.
    let previousTail = this.tail; 

    // Make the new node the tail node.
    this.tail = newNode; 
    
    // Route the pointers.
    previousTail.next = this.tail;
    this.tail.prev = previousTail; 
    ```

    ...instead of using a while-loop to step through each node and setting a condition to check if the end of the list has been reached. I'll probably make this a default feature of any linked-list in the future.

- I ran into some bugs on account of freestyling the methods for this implementation, namely I was seeing:
    `
    TypeError: Cannot read property 'next' of null
 `,
    which I was able to resolve by changing the conditional describing the bounds of the list in the edge cases (OBOE). 

<br>

## **Stacks**
---


**Overview**

A stack is a one-ended, last-in-first-out (LIFO) data structure, which models a real-world stack. Its primary functions are **push** and **pop**, which add a new element to the stack and remove its most recently-added element, respectively.

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.callicoder.com%2Fassets%2Fimages%2Fpost%2Flarge%2Fjava-stack-data-structure.jpg&f=1&nofb=1)

<br>

**Use Case Analysis**

_Advantages_

Stacks are ideal for:

* Undo mechanisms in text editors, back button mechanisms in web browsers, bracket-checking mechanisms in compilers.
* Supporting recursion by tracking previous function calls (each recursive function call is pushed on to the stack, then popped sequentially until the initial call has been executed).
* Implementations of Depth-First Search (DFS) on graphs.

<br>

_Disadvantages_

The trade-offs of stacks include:
* Less flexibility due to the stack being one-ended.
* Slow access to deeper items on the stack, slow search (assuming a linked-list implementation).

<br>

**Big O Analysis**

| Operation         | Time Complexity  |
| :--------         | :---: | 
| Search            | O(n)  |
| Access            | O(n)  |
| Push              | O(1)  |
| Pop               | O(1)  |
| Peek              | O(1)  |

<Br>

_Note_: This chart assumes a linked-list implementation of a stack. An array implementation would give O(1) access to elements.

<br>

## **Stack Implementation**
---

I didn't follow along with a specific tutorial for the implemenation of a stack, instead I chose to adjust my previous singly-linked list implementation to function as a stack. 

It was a fairly straightforward process (I was able to get it working relatively easily), although I _did_ realize after watching this [explainer](https://www.youtube.com/watch?v=MuwxQ2IB8lQ) that my solution wasn't as efficient as it could be.

The reason for that inefficiency was that my `pop()` function was iterating over the entire linked list (complexity of O(n)) in order to remove and return the element at the **top** of the stack, as shown here:

```javascript
    pop() {
        // Note; edge cases omitted for brevity
        // Declaring variable for storing the popped node
        let currentNode = this.head;
        while (currentNode.next != this.tail) {
            // Iterate until second-to-last element
            currentNode = currentNode.next;
        }
        // Reassign pointers and return popped node
        let returnNode = this.tail;
        currentNode.next = null;
        this.tail = currentNode;
        this.size--;
        return returnNode;
    }
```


What didn't occur to me during my first attempt is that the side of the linked list that is used as the linked list is totally arbitrary, and that in the case of a singly-linked list it's more efficient to use the **head** of the list as the top in order to pop elements in constant time (O(1)), a more elegant solution that can be written in fewer lines:

```javascript
    pop() {
        // Note; edge cases omitted for brevity
        let returnNode = this.head;
        this.head = this.head.next;
        this.size--;
        return returnNode;
    }
```

I'm reminded by this solution of how difficult I first found implementing data structures in C, wherein I'd be obligated to directly manage the memory allocated for these operations (lucky for me I'm not being graded this time, JavaScript suits me just fine).



<br>


## **Queues**
---

**Overveiw**  


A queue is a first-in-first-out (FIFO) data structure, which models a real-life queue (imagine waiting in a line). It's primary functions are **enqueue** and **dequeue**, which add an element to the back of the queue and remove an element from the front of the queue, respectively.

![](https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F2.bp.blogspot.com%2F-6tRgMXE7vuc%2FVM_K6cr1aBI%2FAAAAAAAAA_U%2FheRajrRz1GM%2Fs1600%2F2000px-Data_Queue.svg.png&f=1&nofb=1)

<br>

**Use Case Analysis**

_Advantages_

Queues are ideal for: 
* Operations that are handled on a first-come, first-serve basis (for instance, managing requests to a web server, or modeling a real-world line).
* Scenarios where you only need to keep track of the _x_ most recent elements (enqueue until queue contains _x_ elements, then dequeue excess elements as needed).
* Implementation of Breadth-First Search (BFS) on graphs.

_Disadvantages_

Some of the trade-offs of queues include:
* Inefficiency for removing or accessing elements that are not located at either end of the queue (this assumes a linked-list implementation).

<br>

_Note_: For both stacks and queues, the advantages far outweigh the "disadvantages", I hesitate to even call them disadvantages because they seem to mostly come from misuse of the data structure itself, not from any drawback particular to that data structure (i.e. you wouldn't use evaluate a screwdriver on its ability to hammer a nail). 

<br>

**Big O Analysis**

| Operation         | Time Complexity  |
| :--------         | :---: | 
| Search            | O(n)  |
| Access/Removal    | O(n)  |
| Enqueue           | O(1)  |
| Dequeue           | O(1)  |
| Peek              | O(1)  |

<br>

_Note_: This analysis assumes a linked-list impelementation of a queue.

<Br>

## **Queue Implementation**
---

I used another _mycodeschool_ [video](https://www.youtube.com/watch?v=A5_XdiK4J8A) for reference while implementing this queue. Like in my stack implementation, I leveraged my singly-linked list code and adjusted it to fit the definition of a queue.

Given its similarity to the stack, I found this data structure rather simple to implement. By enqueuing from the tail and dequeuing from the head, both of those operations can happen in constant time O(1).

<br>

## **Trees**
---
**Overview**

A **tree** is an **undirected graph** wherein any two vertices are connected by _exactly_ one path, and therefore contains no **cycles** (acyclic). (This results in a graph with _n_ nodes and _n-1_ edges). 

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftechdifferences.com%2Fwp-content%2Fuploads%2F2018%2F03%2FUntitled-1.jpg&f=1&nofb=1)

_Note_: The tree in the image above is a frequently-used kind of tree known as a **binary tree**, which requires that each parent node in the tree have _at most_ two child nodes. Also, the nodes at the bottom of the tree, which have no child nodes themselves, are referred to as **leaf nodes**.

<br>


**Use Case Analysis**

_Note_: This analysis considers binary trees specifically, though some points apply to trees generally.

_Advantages_

Binary trees are used for:

* Implementing **binary search trees**, a type of tree that satisfies the **binary search tree invariant**: the left child (and the resulting **subtree**) of a parent node contains smaller elements than its parent, and the right child contains larger elements.
* Also used to implement other abstract data types such as red-black trees, AVL trees, and binary heaps (more on heaps below).
* Faster search speed (logarithmic on average) compared to other data structures (usually linear).

_Disadvantages_

The tradeoffs of binary trees include:

* Takes more time to modify than some other data structures (for instance, logarithmic time is slower than the constant time it takes to modify a linked list).
* Access and retrieval is also less efficient than in other data structures (for instance, accessing an element in an array takes constant time as opposed to logarithmic time).
* The average time complexity of many operations on a binary tree is logarithmic, although it can be as slow as linear time depending on if the tree **degenerates** (meaning each parent has one child, picture a vertical linked list).

<br>

**Big O Analysis**

| Operation         | Time Complexity  |
| :--------         | :---: | 
| Search            | O(log(n)) / O(n) |
| Insert            | O(log(n)) / O(n)  |
| Delete            | O(log(n)) / O(n)  |

<br>

_Note_: This analysis assumes a binary search tree. The first value refers to the _average_ complexity, the second value refers to the worst case complexity (i.e. a degenerate tree).

<br>


## **Heaps**
---
**Overview**

A heap is a **tree**-based data structure that satisfies a condition(s) known as a **heap property**: for instance in the case of a **min heap**, a parent node must always be less than or equal to its child node(s) (and vice versa in the case of a **max heap**). 

![](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cdn.geeksforgeeks.org%2Fwp-content%2Fuploads%2FMinHeapAndMaxHeap.png&f=1&nofb=1)


**Use Case Analysis**

