# Notes on Data Structures

Below are notes and links to various resources associated with my learning of each data structure.

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

## Doubly-Linked List

I followed along with [this implementation](https://www.youtube.com/watch?v=ChWWEncl76Y&t=305s) by Beiatrix, mixing it together with pieces of the singly-linked list implementation (the video itself is a great explainer, just found it easier to rework the code I had already written). Here are some thoughts on doubly-linked lists:

- Much of the implementation is the same as singly-linked lists, except for the addition of previous pointers for each node, which allows for traversal in either direction.

- This particular implementation keeps track of a **tail node** (which I don't think is unique to doubly-linked lists) but I find it's a handy variable to have access to, especially when implementing an append method. For example, I can use something like:

    ```javascript
    let newNode = new Node(data); 
    // store current tail in variable
    let previousTail = this.tail; 
    // make the new node the tail node
    this.tail = newNode; 
    // route pointers
    previousTail.next = this.tail;
    this.tail.prev = previousTail; 
    ```

    ...instead of using a while-loop to step through each node and setting a condition to check if the end of the list has been reached. I'll probably make this a default feature of any linked-list in the future.

- I ran into some bugs on account of freestyling the methods for this implementation, namely I was seeing:
    ```
    TypeError: Cannot read property 'next' of null
    ```
    which I was able to resolve by changing the conditional describing the bounds of the list in the edge cases. 