//todo -------------DOUBLY LINKED LIST----------------

//^ Doubly linked list is a linked list where each node contains three parts
//! data
//! next
//! prev

//^ Advantages of doubly linked list
//! Bidirectional traversal
//! efficient deletion

//^ Disadvantages
//! Increased memory usage
//! complexity

//^ Operations on doubly linked list
//! Insertion
//! Deletion
//! Traversal

//^ Real-time use
//! Browser history navigation(forward and backward)
//! Music or video playlist
//! undo and redo operation

class Node{
    constructor(data){
        this.data = data
        this.next = null
        this.prev = null
    }
}
class DoublyLinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }
    getSize() {
        return this.size
    }
    append(data){
        let newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.size ++
    }
    prepend(data){
        let newNode = new Node(data)
        if(this.head === null){
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.size++
    }
    displayForward(){
        let current = this.head
        let result = " "
        while(current !== null){
            result += current.data + " <=> "
            current = current.next
        }
        console.log(result + "null");
    }
    displayBackward(){
        let current = this.tail
        let result = " "
        while(current !== null){
            result += current.data + " <=> "
            current = current.prev
        }
        console.log(result + "null")
    }
}
const linkedList = new DoublyLinkedList()
console.log(linkedList)
console.log(linkedList.getSize())
linkedList.append(10)
linkedList.append(20)
linkedList.append(30)
linkedList.append(40)
linkedList.prepend(1)
linkedList.prepend(2)
linkedList.prepend(3)
console.log(linkedList)
linkedList.displayForward()
linkedList.displayBackward()