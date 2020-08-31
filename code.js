class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }

}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;

  }


  addToTail(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      let lastNode = this.tail;
      lastNode.next = newNode;
      this.tail = newNode;
      this.length++;
    }
    return this;
  }
  removeTail() {
    if (this.length === 0) {
      return undefined;
    }
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
    } else {
      let secondLastNode = this.head;
      let lastNode = secondLastNode.next;
      while (secondLastNode.next !== this.tail) {
        secondLastNode = secondLastNode.next;
      }
      this.tail = secondLastNode;
      secondLastNode.next = null
      this.length--;
      return lastNode;
    }
  }
  addToHead(val) {
    let newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode;
      this.length++
      return this;
    } else {
      let firstNode = this.head;
      newNode.next = firstNode;
      this.head = newNode;
      this.length++;
      return this;
    }
  }
  removeHead() {
    if (this.length === 0) {
      return undefined;
    }
    if (this.length === 1) {
      let firstNode = this.head;
      this.length--;
      this.head = null;
      this.tail = null;
      return firstNode
    }
    let originalFirstNode = this.head;
    let newFirstNode = originalFirstNode.next;
    this.head = newFirstNode;
    this.length--;
    return originalFirstNode
  }
  contains(target) {
    let eachNode = this.head;
    while (eachNode) {
      if (eachNode.value === target) {
        return true;
      }
      eachNode = eachNode.next;
    }
    return false;
  }

  get(index) {
    if (index < 0 || index > this.length) {
      return null;
    }

    let eachNode = this.head;
    let count = 0;
    while (eachNode !== null) {
      if (count === index) {
        return eachNode;
      }
      eachNode = eachNode.next;
      index--;
    }
  }
  set(index, val) {

    let selectedNode = this.get(index)
    if (selectedNode !== null && selectedNode !== undefined) {
      selectedNode.value = val;
      return true;
    } else {
      return false;
    }
  }

  insert(index, val) {
    if (index < 0 || index >= this.length) {
      return false;
    }
    let newNode = new Node(val);
    if (index === 0) {
      let firstNode = this.head;
      newNode.next = firstNode;
      this.head = newNode;
      this.length++;
      return true;
    }
    let selectedNodeThatWillBecomeAfterNewNOde = this.get(index);
    let beforeNewNOde = this.head;
    newNode.next = selectedNodeThatWillBecomeAfterNewNOde;

    while (beforeNewNOde) {
      if (beforeNewNOde.next === selectedNodeThatWillBecomeAfterNewNOde) {
        beforeNewNOde.next = newNode;
        this.length++;
        return true;;
      }
      beforeNewNOde = beforeNewNOde.next;
    }
  }

  remove(index) {
    if (index >= this.length || index < 0) {
      return undefined;
    }
    if (index === 0) {
      return this.removeHead();
    }
    if (index === this.length - 1) {
      return this.removeTail();
    }
    let removedNode = this.get(index);
    let beforeNode = this.head;
    while (beforeNode) {
      if (beforeNode.next === removedNode) {
        beforeNode.next = removedNode.next;
        this.length--;
        return removedNode;
      }
      beforeNode = beforeNode.next;
    }
  }
  size() {
    return this.length;
  }

  reverse() {
    if (this.length === 0) return null;
    if (this.length === 1) return this;
    let originalHead = this.head;
    let originalTail = this.tail;
    for (let i = (this.length - 1); i > 0; i--) {
      this.get(i).next = this.get(i - 1);
    }
    originalHead.next = null;
    this.head = originalTail;
    this.tail = originalHead


    return this
  }

  reverse2() {
    if (this.length === 0) return {};
    if (this.length === 1) return this.head;

    let current = this.head;
    while (current.next) {
      current.next = current
      //once this.head becomes this.tail, pointer = null
    }


  }
}



let newLl = new LinkedList()
newLl.addToTail(1)
newLl.addToTail(2)
newLl.addToTail(3)
// newLl.addToTail(4)
newLl.reverse()
console.log(newLl)
// console.log(newLl.head)
//example here.
