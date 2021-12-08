// Singly Linked List Has Loop
// Some dastardly coding has left you with a loop in your singly linked list! (Meaning your while loop will run forever!) -- 
// It's up to you to figure out if it's just a really long list or your coworker has created a loop in your list!
// Return true if a loop is found, false if one is not

// Break loop
// After identifying that a loop has been found, break it



class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
    addToFront(value) {
        var new_node = new ListNode(value);

        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }

        else {
            new_node.next = this.head;
            this.head = new_node;
        }
    }
    // Our Answer

    reverse() {
        let current = this.head;
        let next = null;
        let previous = null;
        while (current != null) {

            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
    }
    //  Ta Answers

    // reverse(){
    //     let prev = null;
    //     let node = this.head;
    //     while (node) {
    //         const nextNode = node.next;
    //         node.next = prev;
    //         prev = node;
    //         node = nextNode;
    //     }
    //     this.head = prev;
    //     return this;
    // }

    display() {
        if (this.head == null) {
            return null;
        }
        var values = this.head.value;
        var runner = this.head.next;
        while (runner != null) {
            values += " - " + runner.value;
            runner = runner.next;
        }
        return values;
    }

    populateChildren() {
        let runner = this.head;
        while (runner) {
            let numChildren = Math.floor(Math.random() * 5);
            if (numChildren !== 0) {
                let childList = new SinglyLinkedList();
                for (let i = 0; i < numChildren; ++i) {
                    childList.addToFront(Math.floor(Math.random() * 50));
                }
                runner.child = childList;
            }
            runner = runner.next;
        }
    }

    printWithChildren() {
        let returnStr = "";
        let runner = this.head;
        while (runner) {
            returnStr += `${runner.value}`;
            if (runner.child) {
                returnStr += " (";
                let runner2 = runner.child.head;
                while (runner2) {
                    returnStr += `${runner2.value} ${runner2.next ? " -> " : ")"} `;
                    runner2 = runner2.next;
                }
            }
            if (runner.next) {
                returnStr += " -> ";
            }
            runner = runner.next;
        }
        console.log(returnStr);
        return returnStr;
    }

    flatList() {
        start = this.head
        Next = this.head.next
        this.head.next = start.child
        while (start.child.next) {
        }
    }
    secondToLast() {
        var min = this.head
        var runner = this.head
        var walker = this.head

        while (runner.next != null) {
            if (runner.next.value == this.tail.value) {
                walker = runner
            }
            runner = runner.next
        }
        return walker
    }
    // Or Solution
    CheckLoop() {
        var start = this.head
        var runner = this.head
        var count = 0
        while (runner.next.next) {
            start = start.next
            runner = runner.next.next
            if (start === runner || start === runner.next) {
                return true
            }
        }
        return false
    }
    // ED Slution
    // findLoop() {
    //     let runner = this.head;
    //     while(runner){
    //         runner.isChecked = true;
    //         if(runner.next.isChecked){
    //             return runner;
    //         }
    //         runner = runner.next;
    //     }
    //     return null;
    // }

    // breakLoop(node)
    // {
    //     node.next = null;
    // }


    // TA Shawnl Solution
    // createLoop() creates a loop inside of SLL by setting the last node to a random previous node
    // createLoop() {
    //     let random = Math.floor(Math.random() * this.size);
    //     let loopStart = this.head;
    //     for (let i = 0; i < random; ++i) {
    //         loopStart = loopStart.next;
    //     }
    //     this.tail.next = loopStart;
    // }

    // identifyLoop() Checks if SLL runner is looping infinitely
    // If looping infinitely, return true
    // If not looping infinitely, return false
    // If SLL is empty, return false
    // If SLL has only one node, return false
    // If SLL has no loop, return false

    // identifyLoop() {
    //     if (this.head === null) {
    //         return false;
    //     }
    //     if (this.head.next === null) {
    //         return false;
    //     }
    //     let runner = this.head;
    //     let runner2 = this.head;
    //     while (runner !== null && runner2 !== null) {
    //         runner = runner.next;
    //         runner2 = runner2.next.next;
    //         if (runner === runner2) {
    //             return true;
    //         }
    //     }
    //     return false;
    // }

    // // removeLoop() - remove the loop from the SLL using identifyLoop() to check if there is a loop
    // // if there is a loop, remove the loop by changing the tail node to null
    // // if there is no loop, return false

    // removeLoop() {
    //     if (this.head === null) {
    //         return false;
    //     }
    //     if (this.head.next === null) {
    //         return false;
    //     }
    //     if (this.identifyLoop()) {
    //         this.tail.next = null;
    //         return true;
    //     }
    //     return false;
    // }
}

var new_sll = new SinglyLinkedList();
var newList = new SinglyLinkedList();
var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(4);
newList.head = a;
a.next = b;
b.next = c;
c.next = d;
d.next = a;
console.log(newList.CheckLoop());
