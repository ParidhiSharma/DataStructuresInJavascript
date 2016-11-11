/**
 * Created by paridhisharma on 11/11/16.
 */

/*Class to create a Node and Linked list in ES6*/

class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}

class LinkedList  {
    constructor() {
        this.root = null;
    }

    push(value) {
        if(value === undefined) {
            return;
        }

        let root = this.root;
        const node = new Node(value);
        if(!root) {
            this.root = new Node(value);
            return;
        }
        while(root.next) {
            root = root.next;
        }
        root.next = node;
    };

    pop() {
        let root = this.root;
        if(!root) {
            return;
        }
        this.root = root.next;
    };

    reverse() {
        if(!this.root) {
            return;
        }
        let prev, curr = this.root, next;
        while(curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.root = prev;
    };

    printList() {
        var root = this.root;
        if(!root) {
            return;
        }
        while(root) {
            console.log(root.val);
            root = root.next;
        }
    };
}

const linkedList1 = new LinkedList();
linkedList1.push(1);
linkedList1.push(2);
linkedList1.push(3);
linkedList1.push(4);
linkedList1.push(5);
linkedList1.push(6);
linkedList1.push(7);
linkedList1.push(8);
linkedList1.push(9);
linkedList1.push(10);

linkedList1.printList();
linkedList1.reverse();
linkedList1.printList();


