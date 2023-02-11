class StubProductClient {
  // network에 의존하지 않는 코드
  async fetchItems() {
    return [
      { item: "Milk", available: true },
      { item: "Banana", available: false },
    ];
  }
}
module.exports = StubProductClient;
