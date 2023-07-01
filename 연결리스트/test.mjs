import { Node, LinkedList } from './LinkedList.mjs';

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);

node1.next = node2;
node2.next = node3;

let list = new LinkedList();

console.log('==== inserAt() 다섯 번 호출 ====');
list.inserAt(0, 0);
list.inserAt(1, 1);
list.inserAt(2, 2);
list.inserAt(3, 3);
list.inserAt(4, 4);
list.printAll();
