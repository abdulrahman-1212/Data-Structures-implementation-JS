// LINKEDLIST CLASS
// Creating Node class
class Node  {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Creating LinkedList class
class LinkedList  {
    constructor(head, len) {
        this.head = null;
        this.len = 0;
    }

    // Appending Items
    append(newItem) {
        
        if (this.len == 0)  {
            this.head = new Node(newItem);;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(newItem);
        this.len += 1;
    }

    // Getting items by index
    getItem(index) {
        if (index >= this.len)  {
            throw new Error('Index out of the range');
        }
        if (index == 0) {
            return this.head.value
        }
        let current = this.head;
        let counter = 0;
        while (current)  {
            if (counter != index) {
                current = current.next;
                counter += 1
            }
            else  {
                break;
            }
        }
        return current.next.value;
    }

    // Getting Length
    getLen() {
        return this.len
    }

    // Reomving the last element
    pop()  {
        let current = this.head;
        while(current.next) {
            current = current.next
        }
        current = null;
        this.len -= 1
    }

    // Getting the whole list
    getList()  {
        let current = this.head;
        let arrOfList = new Array();
        while(current.next)  {
            current = current.next;
            arrOfList += (current.value);
        }
        return arrOfList;
    }

    getHead()  {
        return this.head
    }
}

let ll = new LinkedList()
ll.append(1)
ll.append(2)
ll.append(3)
ll.append(4)
ll.append(4)
ll.append(5)
ll.append(6)
ll.append(7)
ll.append(8)
console.log(ll.getList())