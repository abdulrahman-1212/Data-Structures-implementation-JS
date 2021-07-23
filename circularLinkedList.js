class Node  {
    constructor(val, next = null)  {
        this.val = val
        this.next = next
    }
}

class CircularLinkedList  {
    constructor(head, size)  {
        this.head = head
        this.size = 0
    }

    append (data) {
        const node = new Node(data)
    
        if (!this.head) {
          node.next = node
          this.head = node
          this.size++
        } else {
          node.next = this.head
    
          let current = this.head
    
          while (current.next.val !== this.head.val) {
            current = current.next
          }
    
          current.next = node
          this.size++
        }
      }

    insertAt(index = 0, data)  {
        const node = new Node(data)
        if (index < 0 || index > this.size) return

        if (index === 0) {
            node.next = this.head
            this.head = node
            this.size++
            return
        }

        let prev = 0;
        let current = this.head

        for(let i = 0; i < index; i++)  {

            prev = current
            current = current.next
        }
        prev.next = node
        node.next = current
        this.size++
        
    }

    removeAt(index)  {
        if(!this.head) return 
        let prev;
        let current = this.head
        let counter = 0;
        while (counter < index)  {
            prev = current
            current = current.next
            counter++
        }

        prev.next = current.next
        current = null
        this.size--
    }

    pop()  {
        let prev;
        let current = this.head;

        for (let i = 0; i < this.size; i++)  {
            prev = current
            current = current.next
        }
        prev.next = this.head
        this.size--
    }

    printData () {
        let count = 0
        let current = this.head
    
        while (current !== null && count !== this.size) {
          console.log(current.val + '\n')
          current = current.next
          count++
        }
      }

    getLen()  {
        return this.size
    }
    getHead()  {
        return this.head.val
    }
    
}

let cll = new CircularLinkedList()
cll.append(1)
cll.append(2)
cll.append(2)
cll.append(1)
console.log(cll.printData())