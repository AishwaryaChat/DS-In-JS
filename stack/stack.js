class Stack {
    constructor () {
        this.items = []
    }
    push(data) {
        this.items.push(data)
    }
    pop() {
        if(this.items.length === 0) return -1
        else this.items.pop()
    }
    peek() { // get the top most item of stack
        if(this.items.length === 0) return -1
        this.items[this.items.length - 1]
    }
    isEmpty() {
        return this.items.length === 0
    }
    printStack() {
        let str = ""
        this.items.forEach(item => str += `${item} `)
        return str
    }
}

let newStack = new Stack()
newStack.push(1)
newStack.push(2)
newStack.push(3)
newStack.peek()
console.log(newStack.printStack())