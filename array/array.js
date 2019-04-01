class Array {
    constructor() {
        this.length = 0
        this.data = {}
    }
    push(ele) {
        this.data[this.length] = ele
        this.length++
    }
    pop(){
        delete this.data[this.length - 1]
        this.length--
        return this.data
    }
    insertAt(ele, index) {
        if(index > this.length) return -1
        for(let i = this.length; i>=index; i--) {
            this.data[i] = this.data[i-1]
        }
        this.data[index] = ele
        this.length++
        return this.data
    }
    deleteAt(index) {
        if(index > this.length) return -1
        for(let i = index; i<this.length; i++) {
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
            this.length--
        return this.data
    }
    getElementAtIndex(index){
        return this.data[index]
    }
    printArray() {
        let str = ""
        Object.keys(this.data).forEach(key => str+=`${this.data[key]} `)
        return str
    }
}

let newArr = new Array()
newArr.push(78)
newArr.push(1)
newArr.push(99)
newArr.insertAt(44, 3)
newArr.deleteAt(2)
console.log(newArr.getElementAtIndex(1))
console.log(newArr.printArray())