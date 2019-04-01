class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
    insertAtBeginning(data) {
      let newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
    }
  
    insertAtEnd(data) {
      let newNode = new Node(data);
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
      this.size++;
    }
  
    insertAtPos(data, pos) {
      let newNode = new Node(data);
      if (pos < 0 || pos > this.size) return false;
      if (!this.head) this.head = newNode;
      else if (pos === 0) {
        this.insertAtBeginning(data);
      } else {
        let prev = this.head;
        let counter = 0;
        while (counter < pos - 1) {
          prev = prev.next;
          counter++;
        }
        newNode.next = prev.next;
        prev.next = newNode;
        this.size++;
      }
    }
  
    removeElement(data) {
      if (this.head === null) return -1;
      else {
        let prev = null;
        let curr = this.head;
        while (curr) {
          if (curr.data === data) {
            if (prev === null) {
              this.head = curr.next;
            } else {
              prev.next = curr.next;
            }
  
            this.size--;
            return curr;
          }
          prev = curr;
          curr = curr.next;
        }
      }
      return -1;
    }
  
    removeFromPos(pos) {
      if (pos < 0 || pos > this.size) return -1;
      if (pos === 0) {
        this.head = this.head.next;
      } else {
        let counter = 0;
        let prev = this.head;
        while (counter < pos - 1) {
          counter++;
          prev = prev.next;
        }
        prev.next = prev.next.next;
      }
      this.size--;
    }
  
    printList() {
      let current = this.head;
      let list = "";
      while (current) {
        list += current.data + " -> ";
        current = current.next;
      }
      return list;
    }
  
    shuffle() {
      let p1 = this.head;
      let p2 = this.head;
      let prev = null;
      while (p2) {
        prev = p1;
        p1 = p1.next;
        p2 = p2.next.next;
      }
      prev.next = null;
      p2 = this.head;
      while (p1) {
        let newEle = new Node(p1.data);
        newEle.next = p2.next;
        p2.next = newEle;
        p1 = p1.next;
        p2 = newEle.next;
      }
      return this;
    }
    removeDuplicatesWithBuffer() {
      let obj = {};
      let p1 = this.head;
      let prev = null
      while (p1) {
        if (obj.hasOwnProperty(p1.data)) {
          prev.next = p1.next;
        } else {
          obj[p1.data] = 1;
          prev = p1
        }
        p1 = p1.next;
      }
      return this;
    }
    removeDuplicates() {
      let p1 = this.head
      while(p1) {
        let p2 = p1
        while(p2 && p2.next) {
          if(p1.data === p2.next.data){
            p2.next = p2.next.next
          } else {
            p2 = p2.next
          }
        }
        p1 = p1.next
      }
      return this
    }
  }
  
  let newList = new LinkedList();
  newList.insertAtBeginning("11");
  newList.insertAtEnd("11");
  newList.insertAtEnd("11");
  newList.insertAtEnd("11");
  newList.insertAtEnd("48");
  newList.insertAtEnd("48");
  newList.insertAtEnd("21");
  newList.insertAtEnd("48");
  newList.insertAtEnd("73");
  newList.insertAtEnd("12");
  newList.insertAtEnd("11");
  newList.insertAtEnd("12");
  
  console.log(newList.printList());
  console.log(newList.removeDuplicates().printList());
  