// Singly Linked List Reverse
// Write a method in your singly linked list class that reverses the order of a singly linked list
// Ex: if your current list has 2 -> 4 -> 8 -> 1 -> 5 then after it should be 5 -> 1 -> 8 -> 4 -> 2


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

    reverse(){
        let current = this.head;
        let next = null;
        let previous = null;
        while(current != null){
            
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
}

var new_sll = new SinglyLinkedList();
new_sll.addToFront("Disneyland");
new_sll.addToFront("Las Vegas");
new_sll.addToFront("Mount Rushmore");
new_sll.addToFront("Times Square");
console.log(new_sll.display());
new_sll.reverse()
console.log(new_sll.display());

