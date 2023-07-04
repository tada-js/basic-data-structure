import { Stack } from './Stack.mjs';

// push -> 데이터 삽입
// pop -> 데이터 제거
// peek -> 데이터 참조
// isEmpty -> 비어있는지 체크

let stack = new Stack();

console.log('======== 첫 번째 출력 ========');
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);
console.log(stack.pop().data);

console.log('======== 두 번째 출력 ========');
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
console.log(stack.peek().data);
stack.pop();
console.log(stack.peek().data);
console.log(`isEmpty: ${stack.isEmpty()}`);
stack.pop();
stack.pop();
stack.pop();
console.log(`isEmpty: ${stack.isEmpty()}`);
console.log(stack.pop());
