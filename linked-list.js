/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    
  }
}


/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    
    if(!this.head){
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode; 
      this.tail = newNode;
    }

    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if(!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length += 1;

  }

  /** pop(): return & remove last item. */


  pop() {
      if(!this.head) return undefined;
      let current = this.head;
      let newTail = current; 
      while(current.next){
        newTail = current;
        current = current.next;
      }
      this.tail = newTail;
      this.tail.next = null;
      this.length--;

      if(this.length===0){
        this.head = null;
        this.tail = null;
      }
      return current.val;
  }



  /** shift(): return & remove first item. */

  shift() {

    if(!this.head) return undefined;

    let current = this.head;
    this.head = this.head.next

    this.length--;

    if(this.length===0){
      this.head = null;
      this.tail = null;
    }

    return current.val;


  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if(idx<0 || idx>=this.length) return null;
    //  loop through the list until we reach the index
    let counter = 0;
    let curr = this.head;
    
    while(counter !== idx){
      curr = this.head.next;
      counter ++;
    }
    return curr.val;

  }

  
  get(idx){
    let cur = this.head;
    let count = 0;
    
    while (cur !==null && count!= idx) {
      count +=1 ;
      cur = cur.next;
    }
    
    return cur;
  };
  
  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    // find the node with get and set the node with given data
    let oldVal = this.get(idx);
    oldVal.val = val;

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx===0){
      return this.unshift(val);
    } else if (idx===this.length){
      return this.push(val)
    };

    let newNode = new Node(val);
    let newIdx = idx-1;
    let prev = this.get(newIdx);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    // get the node at the index-1, set the next property on that node to be the next of the next property
    if(!this.get(idx-1)){
      this.shift();
    }

    if(idx>=this.length || idx<0){
      return undefined;
    }

    let prev = this.get(idx-1);
    let toDelete = this.get(idx);
    prev.next = toDelete.next; 
    this.length--;
  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length===0)return 0;

    let total = 0;
    let cur = this.head;

    while(cur){
      total += cur.val;
      cur = cur.next;
    }
    return total / this.length;

  }
}

module.exports = LinkedList;
