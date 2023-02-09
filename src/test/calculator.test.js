const Calculator = require("../calculator.js");

// test("calculator", () => {
//   // 테스트 코드 작성

//   const calculator = new Calculator();

//   calculator.set(100);
//   expect(calculator.value).toBe(100);
//   calculator.clear();
//   expect(calculator.value).toBe(0);
//   calculator.add(5);
//   expect(calculator.value).toBe(5);
//   // calculator.add(100);
//   // expect(calculator.value).toBe();
//   calculator.subtract(1);
//   expect(calculator.value).toBe(4);
//   calculator.multiply(10);
//   expect(calculator.value).toBe(40);
//   calculator.divide(4);
//   expect(calculator.value).toBe(10);
// });

describe("Calculator", () => {
  let cal;

  /**
   * 각 테스트는 모든 테스트가 수행되기 전에 새로운 오브젝트를 생성한다.
   * 각각의 테스트는 독립적으로 서로에게 영향을 주지 않게 만드는 것이 좋기 때문이다.
   */
  beforeEach(() => {
    cal = new Calculator();
  });
  it("init with 0", () => {
    expect(cal.value).toBe(0);
  });

  it("sets", () => {
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it("clear", () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it("adds", () => {
    cal.set(1);
    cal.add(2);
    expect(cal.value).toBe(3);
  });

  /** Exceptions
   * If you want to test whether a particular function throws an error when it's called,
   * use toThrow!
   */

  it("add should throw an error if value is greater than 100", () => {
    expect(() => {
      cal.add(101);
    }).toThrow("Value can not be greater than 100");
  });

  /** */

  it("subtracts", () => {
    cal.subtract(1);
    expect(cal.value).toBe(-1);
  });

  it("multiplies", () => {
    cal.set(5);
    cal.multiply(4);
    expect(cal.value).toBe(20);
  });

  describe("divides", () => {
    it("0 / 0 === NaN", () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it("1 / 0 === Infinity", () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it("4 / 4 === 1", () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
