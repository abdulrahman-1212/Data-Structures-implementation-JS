// DOUBLY LINKED LIST
class Node  {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.len = 0;
    }

    append(newVal)  {
        const newEle = new Node(newVal);
        if (!this.head)  {
            this.head = newEle;
            this.tail = newEle;
        }
        newEle.prev = this.tail
        this.tail.next = newEle
        this.tail = newEle
        this.len++
    }


    insert(position, element) {
        // Check of out-of-bound values
        if ( position >= 0 && position < this.len)  {
            let counter = 0
            let current = this.head
            let previous = 0
            const node = new Node(element);

            if (position === 0) {
                if (!this.head) {
                    this.tail = node
                    this.head = node
                }
                node.next = this.head
                this.head.prev = node
                this.head = node
            }

            else if (position == this.len) {
                this.tail.next = node
                node.prev = this.tail
                this.tail = node
            }
            else {
                while (counter < position) {
                    previous = current
                    current = current.next
                    counter++
                }
                node.next = current
                node.prev = previous

                current.prev = node
                previous.next = node
            }
            this.len++
            return true
        }
        else{
            return false
        }
    }


    removeAt(position)  {
        if(position >= 0 && position < this.len)  {
            let current = this.head
            let counter = 0
            let previous = null
            if (position === 0) {
                this.head = current.next
            }
            else if (this.len == 1)  {
                this.head = null;
                this.tail = null
            }
            else if (position == this.len - 1)  {
                current = this.tail
                this.tail = current.prev
                this.tail.next = null
            }

            else  {
                while(counter < position)  {
                    previous = current
                    current = current.next
                    counter++
                }
                previous.next = current.next
                current.next.prev = previous
            }
            this.len--
        }
    }
// 1 => 2 => 0 => 3
    pop()  {
        let current = this.tail
        this.tail = current.prev
        this.tail.next = null
        return current.val
    }

    getList()  {
        let current = this.head
        while(current) {
            console.log(current.val)
            current = current.next
        }
    }

   indexOf(elm) {
        let current = this.head
        let index = 0
    
        // If element found then return its position
        while(current)  {
            if(current.val === elm)  {
                return index
            }
            current = current.next
            index++
        }
        return -1
    }

    isPresent(ele)  {
        return (this.indexOf(ele) !== -1)
    }

    delete(elm)  {
        this.removeAt(this.indexOf(elm))
    }
    toString()  {
        let current = this.head
        let str = ''
        while(current)  {
            str += current.val + (current.next ? ' ' : '')
            current = current.next
        }
        return str
    }

    toArray()  {
        const arr = []
        let current = this.head
        
        while (current)  {
            arr.push(current.val)
            current = current.next
        }
        return arr

    }
    ifEmpty()  {
        return (this.len === 0)
    }
    size()  {
        return this.len
    }

    getHead = () => this.head.val
    
    getTail = () => this.tail.val;

    getLen = () => this.len;

}

const dl = new DoublyLinkedList()
dl.append(1)
dl.append(2)
dl.append(3)
dl.insert(2, 0)
console.log(dl.toArray())






