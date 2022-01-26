//  Singly Linked List Flatten Children
// Given a Singly Linked List that may contain nodes with children, return a flattened version of the list
// Ex: given 1 -> 2 -> 3    ->  4 -> 5
//                |             |
//                1 -> 2 -> 3   2 -> 3
// Return a list like so: 1 -> 2 -> 1 -> 2 -> 3 -> 3 -> 4 -> 2 -> 3 -> 5

// Singly Linked List Unflatten Children
// Given a Singly Linked List that may have flattened children, unflatten it back to its original state



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

    flatList(){
        start = this.head
        Next = this.head.next
        this.head.next = start.child
        while(start.child.next){

        }
    }

    // Friends answer (ED)
    // flatten(){
    //     let runner = this.head;
    //     while(runner){
    //         let next = runner.next;
    //         if(runner.child){
    //             runner.next = runner.child.head;
    //             let child_runner = runner.child.head;
    //             while(child_runner.next){
                    
    //                 child_runner = child_runner.next;
    //             }
    //             child_runner.next = next;

    //         }
    //         runner = runner.next;
    //     }
    // }
}

var new_sll = new SinglyLinkedList();

new_sll.addToFront("Disneyland");
new_sll.addToFront("Las Vegas");
new_sll.addToFront("Mount Rushmore");
new_sll.addToFront("Times Square");
console.log(new_sll.display());
new_sll.populateChildren()
new_sll.printWithChildren()
console.log(new_sll.display());

