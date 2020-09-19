# Notes on Data Structures

Below are notes and links to various resources associated with my learning of each data structure.

## Singly-Linked List

I followed along with [this implementation](https://www.youtube.com/watch?v=ZBdE8DElQQU) of a singly-linked lists (s/o Brad Traversy for always holding it down). There are a couple things I'd like to remember about how singly-linked lists work:

- Basically, creating this structure boils down to creating two different classes: the **node** class and the **list** class. 

- Each **node** contains the data associated with it, along with a pointer to the next node in the list. Every instance of the **list** class is a new singly-linked list, which is made up of individual instances of node objects, and contains a reference to the first node (**head**), and a **size** variable to keep track of how many nodes are in the list.



- Traversing the list seems better done with while-loops than for-loops. This is likely because the advantage of organizing data in a linked-list (over, say, an array), is that the size of the linked-list can change more dynamically (w/r/t memory allocation) and therefore isn't always known. 

