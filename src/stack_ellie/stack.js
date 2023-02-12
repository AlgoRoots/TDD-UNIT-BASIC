/**
 
 * 테스트 코드는 내부 구현사항을 테스트하는 것이 아닌, 사용자 입장에서 제공되어지는 인터페이스를 토대로 해서 테스트하는 것이 유지보수성이 높은 코드이다.
 * 내부 구현사항을 리팩토링 할 때도 테스트 코드가 있기 때문에 안전하게 수정할 수 console.error('있다',있다)
*/
class Stack {
  constructor() {
    this._size = 0;
    this.head = null;
  }

  size() {
    return this._size;
  }

  push(item) {
    const node = { item, next: this.head };
    this.head = node;
    this._size++;
  }

  pop() {
    if (this.head === null) throw new Error("Stack is empty.");
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.item;
  }

  peek() {
    if (this.head === null) throw new Error("Stack is empty.");
    return this.head.item;
  }
}

module.exports = Stack;
