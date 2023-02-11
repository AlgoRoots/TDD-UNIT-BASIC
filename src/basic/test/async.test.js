const fetchProduct = require("../async");

/**
 * 비동기 코드 테스트 할 시에는 done보다는 리턴해주거나 async await / resolve or reject
 */

describe("Async", () => {
  // done 은 기다려서 수행결과를 더 기다려함
  it("async - done", (done) => {
    fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
      done();
    });
  });

  // return 하는 방식이 더 깔끔하고 수행속도도 빠름
  it("async - return", () => {
    return fetchProduct().then((item) => {
      expect(item).toEqual({ item: "Milk", price: 200 });
    });
  });

  // await으로 비동기 코드 테스트 하는 법
  it("async - await", async () => {
    const product = await fetchProduct();
    expect(product).toEqual({ item: "Milk", price: 200 });
  });

  // 성공시
  it("async - resolves", () => {
    // 비동기이기 때문에 return 해줘야함
    return expect(fetchProduct()).resolves.toEqual({
      item: "Milk",
      price: 200,
    });
  });

  // 실패시
  it("async - reject", () => {
    return expect(fetchProduct("error")).rejects.toEqual("network error");
  });
});
