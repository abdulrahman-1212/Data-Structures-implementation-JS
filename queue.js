class Queue  {
    constructor()  {
        this.queue = []
    }

    enqueue(item)  {
        this.queue.push(item)
    }

    dequeue()  {
        if(this.queue.length === 0)  {
            throw new Error('Queue is already Empty')
        }
        let result = this.queue[0]
        this.queue.splice(0, 1)
        // this.queue = this.queue.slice(1, this.queue.length)
        return result
    }

    getSize()  {
        return this.queue.length;
    }

    getData()  {
        return this.queue
    }
    getPeek()  {
        return this.queue[0]
    }
}

class TwoStackQueue  {
    constructor()  {
        this.inputStack = []
        this.outputStack = []
    }
    enqueue(item)  {
        this.inputStack.push(item)
    }
    dequeue() {
        if(this.inputStack.length > 0)  {
            while(this.inputStack.length > 0)  {
                this.outputStack.push(this.inputStack.pop())
            }
        }

        if(this.outputStack.length > 0)  {
            return this.outputStack.pop()
        }
    }
    listIn()  {
        return this.inputStack
    }
    listOut()  {
        return this.outputStack
    }

}

const que = new TwoStackQueue()
que.enqueue(1)
que.enqueue(2)
que.enqueue(3)
