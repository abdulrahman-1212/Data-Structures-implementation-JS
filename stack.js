// STACK CLASS  [e1, e2, e3....., head]

class Stack  {
    constructor()  {
        this.stack = []
        this.head = 0;
    }

    push(newItem)  {
        this.stack.push(newItem);
        this.head += 1
    }

    pop()  {
        if(this.head == 0) {
            throw new Error('Stack is already empty')
        }

        else  {
            var x = this.stack[this.head - 1];
            this.stack.pop();
            this.head -= 1;
            return x;

        }
          
    }
    

    getLength() {
        return this.head;
    }
    
    isEmpty() {
        return (this.head == 0)
    }

    getLast()  {
        if (this.head !== 0) {
            return (this.stack[this.head - 1])
        }
        return null;
    }

    isStack(st)  {
        return st instanceof Stack;
    }
    
    getStack()  {
        return this.stack;
    }
}


const st = new Stack()

st.push(0)
st.push(1)
console.log(st.pop())