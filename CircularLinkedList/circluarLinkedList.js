//todo -----------CIRCULAR LINKED LIST-------------------

//^ Circular linked list is the variation of linked list where last node connects back to the first node, forming a loop
//^ and there will be no null at the end

//^ next pointer points to the first node
//^ it can be singly or doubly
//^ traversal can be started at any node
//^ usefull for buffering(like in audio/ vedio players) and scheduling

class Node {
    constructor(data){
        this.data = data
        this.next = null
    }
}
class CircularLinkedList {
    constructor(){
        this.head = null
        this.tail = null
    }
}