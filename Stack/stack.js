//todo ---------STACK--------------------

//^ Stack 
//! Stack is linear data structure that follows LIFO
//! Last element added will be the first element to get removed

//^ Stack operations 
//! push - pushes the element to the top of the stack
//! pop - removes the element from the top of the stack
//! peek - get the value of top element without removing it
//! isEmpty - check if the stack is empty
//! size - return the number/size of the elements
//! clear - removes the elements from the stack

//^ Advantages of stacks
//! Simplicity
//! Efficiency
//! memory management

//^ Disadvantages of stacks
//! Only the top element will be accessed directly
//! Overflow and underflow

//^ stack use in program
//! Managing the function call in recursion
//! undo/redo functionality in text editors
//! Browser history navigation
//! Reversing data
//! function call stack
//! Managing temporary data

//^ stack's real time use
//! undo operatons
//! stack of plates

//^ Implementaion
//* Array based Implementation
//* Linked-list based Implementaion

//* Array-based Impleneations
//! uses an array to store the elements
//! simple and easy to implement
//! Fixed size if array is not dynamically resizable

// class Stack {
//     constructor() {
//         this.stackItems = []
//     }
//     push(element) {
//         return this.stackItems.push(element)
//     }
//     pop() {
//         if (this.isEmpty()) {
//             return "Stack is empty"
//         }
//         return this.stackItems.pop()
//     }
//     peek() {
//         if (this.isEmpty()) {
//             return "Stack is empty"
//         }
//         return this.stackItems[this.size() - 1]

//     }
//     isEmpty() {
//         return this.size() === 0
//     }
//     size() {
//         return this.stackItems.length
//     }
// }

// const stack = new Stack()
// console.log(stack);
// stack.push(10)
// stack.push(20)
// console.log(stack.isEmpty());
// console.log(stack.size());
// console.log(stack.peek());
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.peek());
// console.log(stack.isEmpty());

//* Linked-List Based Implementations

// class Node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }
// class Stack {
//     constructor(){
//         this.top = null
//         this.size = 0
//     }
//     isEmpty() {
//         return this.size == 0
//     }
//     push(value){
//         const newNode = new Node(value)
//         console.log(newNode);
        
//         if(this.top){
//             newNode.next = this.top
//         }
//         this.top = newNode
//         this.size ++
//     }
//     pop(){
//         if(!this.top){
//             return "Stack is empty"
//         }
//         const value = this.top.value;
//         this.top = this.top.next
//         this.size--
//         return value
//     }
//     peek() {
//         return this.top ? this.top.value : "Empty"
//     }
// }
// const stack = new Stack()
// console.log(stack);
// console.log(stack.isEmpty());
// stack.pop()
// stack.push(10)
// stack.push(20)
// console.log(stack);
// stack.pop()
// console.log(stack.pop());
// console.log(stack);
// console.log(stack.size);
// stack.push(30)
// console.log(stack.peek());

//~ Example 1

function reverseString(str){
    const stack = []
    for(let char of str) {
        stack.push(char)
    }
    let reversed = ''
    while(stack.length){
        reversed = reversed + stack.pop()
    }
    return reversed
}
console.log(reverseString("Hello"));






