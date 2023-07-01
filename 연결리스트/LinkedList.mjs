class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null; // 연결리스트 시작 노드를 가리킴
    this.count = 0; // 총 저장된 노드의 수
  }

  printAll() {
    let currentNode = this.head;
    let text = '[';
    while (currentNode != null) {
      text += currentNode.data;
      currentNode = currentNode.next;

      if (currentNode != null) {
        text += ', ';
      }
    }
    text += ']';
    console.log(text);
  }

  inserAt(index, data) {
    if (index > this.count || index < 0) {
      throw new Error('범위를 넘어갔습니다.');
    }

    let newNode = new Node(data);

    if (index == 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }

    this.count++;
  }
}

export { Node, LinkedList };
