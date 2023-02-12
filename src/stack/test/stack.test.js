const Stack = require("../stack.js");

describe("Stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it("init with 0", () => {
    expect(stack._size).toBe(0);
  });

  it("set size", () => {
    stack.size();
    expect(stack._size).toBe(0);
  });

  it("push", () => {
    stack.push(1);
    expect(stack.head).toEqual({ item: 1, next: null });
    expect(stack._size).toBe(1);
  });

  it("twice push", () => {
    stack.push(1);
    stack.push(2);
    expect(stack.head).toEqual({ item: 2, next: { item: 1, next: null } });
    expect(stack._size).toBe(2);
  });

  it("third push", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.head).toEqual({
      item: 3,
      next: { item: 2, next: { item: 1, next: null } },
    });
    expect(stack._size).toBe(3);
  });

  it("pop - throw error when size is 0", () => {
    expect(() => stack.pop()).toThrow("There is no item.");
    expect(stack.head).toEqual(null);
    expect(stack._size).toBe(0);
  });

  it("pop - should return head node", () => {
    stack.push(1);
    stack.pop();
    expect(stack._size).toBe(0);
    expect(stack.head).toBe(null);
  });

  it("peek - should return last item", () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.peek();

    expect(stack.head.item).toBe(3);
    expect(stack._size).toBe(3);
  });

  it("peek - when stack is empty", () => {
    expect(() => stack.peek()).toThrow("There is no item.");
  });
});
