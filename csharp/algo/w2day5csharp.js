

// Doubly linked lists

// Node
class DNode{
    constructor(val){
        this.value = val;
        this.next = null;
        // This is what makes it a doubly linked list
        this.prev = null;
    }
}

class DLL {
    constructor(){
        this.head = null;
        this.tail = null;
    }
    // We need to add nodes in for this list to mean anything
    // Adding to front
    addToFront(val){
        var newNode = new DNode(val);
        // We need to be aware of the head
        // We're making a new head after all
        // We need to make a new DNode that will become head
        // Edge case, there is nothing in the list
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
    }

    addToBack(val){
        var newNode = new DNode(val);
        // Edge case: the list is empty
        if(this.head == null){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    // Remove from front
    removeFromFront(){
        // Edge case: what if there is no node?
        if(this.head == null){
            return null;
        }
        // Edge case 2: what if there is only one node?
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            return null;
        }
        // Option 1
        // var track = this.head.next;
        // this.head.next = null;
        // track.prev = null;
        // this.head = track;

        // Option 2
        this.head = this.head.next;
        this.head.prev = null;

        
    }

    removeFromBack(){
        // Edge case: what if there is no node?
        if(this.head == null){
            return null;
        }
        // Edge case 2: what if there is only one node?
        if(this.head === this.tail){
            this.head = null;
            this.tail = null;
            return null;
        }
        // All other cases
        this.tail = this.tail.prev;
        this.tail.next = null;
    }

    // reverseList() {
    //     // temp variable is assigned to null
    //     let temp = null;
    //     // current variable is assigned to head of list
    //     let current = this.head;

    //     // reassigning which is head of list
    //     while (current) {
    //         // temp gets reassigned to what was the head before
    //         temp = current.prev;
    //         // the old current gets reassigned to what was AFTER the current
    //         current.prev = current.next;
    //         // the next current gets reassigned to what the temp is
    //         current.next = temp;
    //         // current gets reassigned to what was before the current
    //         current = current.prev;
    //     }

    //     if (temp != null) {
    //         // head becomes what's before temp is temp's value exists
    //         this.head = temp.prev;
    //     }
    // }
    
    reverseList() {
        
        // let prev = null;
        let runner = this.head;
        let next = null;

        while (runner !=null){
            next = runner.next;
            runner.next = runner.prev;
            runner.prev = next;
            runner = next;
        }
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        
    }

    // Display
    display(){
        // Edge case: nothing in the list
        if(this.tail == null){
            console.log("Nothing to print");
        } else {
            var runner = this.tail;
            var result = "";
            while(runner){
                result += `${runner.value} <-> `;
                runner = runner.prev;
            }
            console.log(result);
        }
    }
}

// Create an instance of a Doubly Linked List
var myList = new DLL();
// Let's make a list!
myList.display();
myList.addToFront(1);
myList.addToBack(2);
myList.addToBack(3);
// myList.removeFromBack();
myList.addToBack(4);
myList.addToBack(5);
// myList.removeFromFront();
myList.display();
myList.reverseList();
myList.display();
myList.reverseList();
myList.display();












