//todo -----------QUEUE----------------------

//^ Queue is a data structure that follows first in first out principle(FIFO)
//^ First element added will be the first element to get removed first

//^ Queue Operations
//! enqueue(value) - adds element to the rear of the queue
//! dequeue() - removes the element from the front of the queue
//! peek() or front() - returns the element at the front of the queue without removing it
//! isEmpty() - checks if the queue is empty
//! size() - returns the number of elements in the queue

//^ use-cases of queue
//! Javascript's event loop
//! message queueing
//! Task scheduling

//^ Queue Implementaion
//* Queue Implemenation using arrays
//* Queue Implemenation using linked list

//* Queue Implemenation using arrays
// class Queue{
//     constructor() {
//         this.queueItems = []
//     }
//     enqueue(element){
//         this.queueItems.push(element)
//     }
//     dequeue() {
//         if(this.isEmpty()){
//             return "Queue is empty"
//         }
//         return this.queueItems.pop()
//     }
//     front() {
//         if(this.isEmpty()){
//             return "Queue is empty"
//         }
//         return this.queueItems[0]
//     }
//     size() {
//        return this.queueItems.length
//     }
//     isEmpty() {
//         return this.size() == 0
//     }
//     clear() {
//         return this.queueItems  = []
//     }
// }
// const queue = new Queue()
// console.log(queue);
// console.log(queue.isEmpty());
// queue.enqueue(10)
// console.log(queue);
// console.log(queue.size());
// console.log(queue.isEmpty());
// console.log(queue.dequeue());
// console.log(queue.isEmpty());
// console.log(queue.front());
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// console.log(queue.front());
// console.log(queue);
// console.log(queue.clear());
// console.log(queue);

//* Queue Implemenation using linked list

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedListQueue {
    constructor() {
        this.front = null
        this.rear = null
        this.size = 0
    }
    enqueue(value){
        const newNode = new Node(value)
        if(this.rear) {
            this.rear.next = newNode
        }
        this.rear = newNode
        if(!this.front){
            this.front = newNode
        }
        this.size ++
    }
    dequeue(){
        if(this.isEmpty()){
            return "queue is empty"
        }
        const dequeuedValue = this.front.value
        this.front = this.front.next
        if(!this.front){
            this.rear = null
        }
        this.size --
        return dequeuedValue
    }
    peek() {
        if(this.isEmpty()){
            return 'queue is empty'
        }
        return this.front.value
    }
    isEmpty() {
        return this.size == 0
    }
    print() {
        let current = this.front
        let result = []
        while(current) {
            result.push(current.value)
            current = current.next
        }
        console.log(result.join(", "));
        
    }
 
}
const queue = new LinkedListQueue()
console.log(queue);
console.log(queue.isEmpty());
queue.enqueue(10)
console.log(queue);
console.log(queue.size);
console.log(queue.isEmpty());
queue.enqueue(100)
queue.enqueue(200)
queue.enqueue(300)
console.log(queue);
console.log(queue.dequeue());
console.log(queue);
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue);
// console.log(queue.dequeue());
// console.log(queue.dequeue());
queue.enqueue(400)
queue.print()

//~ Example 1 - Task scheduling

const taskQueue = new LinkedListQueue()
taskQueue.enqueue("Task 1")
taskQueue.enqueue("Task 2")
taskQueue.enqueue("Task 3")
while(!taskQueue.isEmpty()){
    console.log("Processing " , taskQueue.dequeue());
}


