import Node from './Node'

export default class LinkedList{
	constructor() {
		this.head = null;
	}

	insert(nodeValue) {
		let node = this.head;
		if(node) {
			while(node.next) {
				node = node.next;
			}
			node.next = new Node(nodeValue);
		} else {
			this.head = new Node(nodeValue);
		}
	}

	insertFromHead(nodeValue) {
		let head = this.head;
		if(head) {
			let node = new Node(nodeValue);
			node.next = head;
			this.head = node;
		} else {
			this.head = new Node(nodeValue);
		}
	}

	deleteHead() {
		let head = this.head;
		if(head && head.next) {
			let node = head.next;
			head.next = null;
			this.head = node;
		}
	}

	deleteByValue(nodeValue) {
		if(!this.head)
			return 'NO head';

		let node = this.head, prev = null;
		while(node.next!=null) {
			if(node.value !== nodeValue) {
				prev = node;
				node = node.next;
			} else {
				break;
			}
		}
		if(node.next == null) {
			return 'No element found'
		}
		let temp = node.next;
		prev.next = temp;
		return 'Deleted element';
	}

	reverseLLInSectionsOfK(node) {
		if(!node)
			return null;

		let k =0, prev = null, first= node;

		while(node != null && k <3) {
			let temp = node.next;
			node.next = prev;
			prev = node;
			node = temp;
			k++;
		}
		first.next = this.reverseLLInSectionsOfK(node);
		return prev;
	}

	searchByValue(value) {
		if(!this.head)
			return 'NO head';

		let node = this.head, i=0;
		while(node) {
			if(node.value == value) {
				return i;
			}
			i++;
			node = node.next;
		}
		return 'Element not found';
	}


	  findIntersection(l1, l2) {
		if(!l1.head || !l2.head) {
			return;
		}

		let node1 =  l1.head, node2 = l2.head, len1=0, len2=0, prev1 = null, prev2 = null;
		while(node1 != null) {
			prev1 = node1;
			node1 = node1.next;
			len1++;
		}

		while(node2 != null) {
			prev2 = node2;
			node2 = node2.next;
			len2++;
		}

		if(prev1.value == prev2.value) {
			node1 = len1>len2? l1.head : l2.head;
			let diff = len1 > len2? len1 - len2 : len2 - len1;

			while(diff >= 0) {
        		diff--;
				node1 = node1.next;
			}
			console.log(node1);
			return node1.value;
		}
		return 'No Intersection'
	}



}
