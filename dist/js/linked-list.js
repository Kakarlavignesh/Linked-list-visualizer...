/**
 * Node class representing a single element in a linked list.
 * @param {any} value - The data stored in the node.
 */
class Node {
    constructor(value) {
        this.value = value;
        this.next = null; // Pointer to the next node
        this.prev = null; // Pointer to the previous node (for doubly linked lists)
    }
}

/**
 * Singly Linked List implementation.
 * Provides basic operations: insertion, deletion, and searching.
 */
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insertAtHead(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
        return newNode;
    }

    insertAtTail(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
        this.size++;
        return newNode;
    }

    deleteFromHead() {
        if (!this.head) return null;
        const removed = this.head;
        this.head = this.head.next;
        this.size--;
        return removed;
    }

    deleteByValue(value) {
        if (!this.head) return null;
        if (this.head.value === value) {
            return this.deleteFromHead();
        }
        let current = this.head;
        while (current.next && current.next.value !== value) {
            current = current.next;
        }
        if (current.next) {
            const removed = current.next;
            current.next = current.next.next;
            this.size--;
            return removed;
        }
        return null;
    }

    search(value) {
        let current = this.head;
        let index = 0;
        while (current) {
            if (current.value === value) return { node: current, index };
            current = current.next;
            index++;
        }
        return null;
    }

    toArray() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }
}

/**
 * Doubly Linked List implementation.
 * Inherits from SinglyLinkedList and adds previous pointers for bidirectional traversal.
 */
class DoublyLinkedList extends SinglyLinkedList {
    insertAtHead(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.size++;
        return newNode;
    }

    insertAtTail(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
            newNode.prev = current;
        }
        this.size++;
        return newNode;
    }

    deleteFromHead() {
        if (!this.head) return null;
        const removed = this.head;
        this.head = this.head.next;
        if (this.head) this.head.prev = null;
        this.size--;
        return removed;
    }

    deleteByValue(value) {
        if (!this.head) return null;
        if (this.head.value === value) return this.deleteFromHead();

        let current = this.head;
        while (current && current.value !== value) {
            current = current.next;
        }

        if (current) {
            if (current.next) current.next.prev = current.prev;
            if (current.prev) current.prev.next = current.next;
            this.size--;
            return current;
        }
        return null;
    }
}

/**
 * Circular Linked List implementation.
 * The last node points back to the head of the list.
 */
class CircularLinkedList extends SinglyLinkedList {
    insertAtTail(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = newNode;
            newNode.next = this.head;
        }
        this.size++;
        return newNode;
    }

    deleteFromHead() {
        if (!this.head) return null;
        const removed = this.head;
        if (this.head.next === this.head) {
            this.head = null;
        } else {
            let last = this.head;
            while (last.next !== this.head) {
                last = last.next;
            }
            this.head = this.head.next;
            last.next = this.head;
        }
        this.size--;
        return removed;
    }
}
