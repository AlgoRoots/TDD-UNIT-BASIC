const ProductService = require("../product_service_no_di.js");
const ProductClient = require("../product_client.js");

// https://jestjs.io/docs/mock-functions#mocking-partials
// bad: mock 을 남용하는 사례..

/**
 * 원하는 것 ProductService class test !
 * ProductService 에서 그 어떤 다른 모듈, 클래스를 사용하든 그것들의 영향을 받지 않도록 나머지 모든 의존성에 대해서는 mock을 이용한다.
 * mock 을 이용했을 때 ProductClient 가 어떤 데이터를 리턴하는지 mock 함수(fetchItems) 와 mockImplementation를 이용해서
 * 어떤 함수를 호출했을 때 어떤 데이터를 받아올 수 있는지 쉽게 컨트롤 할 수 있게 설정해둔다.
 * 그래서 테스트하고자 하는 ProductService 안에 있는 함수 fetchAvailableItems는 가능한 상품만 filter하는지 안하는지
 * 이 부분만 집중해서 테스트를 작성하는 것
 *
 * ** ProductClient 가 실패하는 등 환경적인 요인에 영향을 받지 않고 오로지 원하는 로직만 타겟하여 테스트하는 것 ==> 단위 테스트!!
 */

// ProductService 내부에서 ProductClient를 사용하니까 이것을 mock함수
jest.mock("../product_client");

describe("ProductService", () => {
  // mock 함수 생성
  const fetchItems = jest.fn(async () => [
    { item: "Milk", available: true },
    { item: "Banana", available: false },
  ]);
  // mock 함수 와 ProductClient 연결
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    };
  });

  let productService;
  beforeEach(() => {
    productService = new ProductService();
    // jset.config 에서  clearMocks: true 하는 것과 같음
    // fetchItems.mockClear();
    // productService.mockClear()
  });

  it("should filter out only available items", async () => {
    const items = await productService.fetchAvailableItems();
    expect(items.length).toBe(1);
    expect(items).toEqual([{ item: "Milk", available: true }]);
  });

  it("test", async () => {
    const items = await productService.fetchAvailableItems();
    expect(fetchItems).toHaveBeenCalledTimes(1);
  });
});
