class Node {
    constructor(data, next = null, prev = null) {
        this.data = data
        this.prev = prev
        this.next = next
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    insertAtBeginning (data) {
        let newNode = new Node(data, this.head)
        if(this.head) {
            this.head.prev = newNode
        } else {
            this.tail = newNode
        }
        this.head = newNode
        return this
    }
    insertAtEnd (data) {
        let newNode = new Node(data, null, this.tail)
        if(this.tail) this.tail.next = newNode
        else {
            this.head = newNode
        }
        this.tail = newNode
    }
    search(data) {
        if(!this.head) return -1
        let curr = this.head
        while(curr) {
            if(curr.data === data) return curr
            curr = curr.next
        }
    }
}

let newList = new DoublyLinkedList();
newList.insertAtBeginning(3)
newList.insertAtBeginning(4)
newList.insertAtBeginning(5)
newList.insertAtEnd(6)
console.log(newList.search(3))
// console.log(newList)