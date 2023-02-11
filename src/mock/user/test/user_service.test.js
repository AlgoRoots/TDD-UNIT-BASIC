const UserService = require("../user_service");
const UserClient = require("../user_client");
jest.mock("../user_client");

describe("UserService", () => {
  const login = jest.fn(async () => "success");

  UserClient.mockImplementation(() => {
    return { login };
  });

  let userService;
  beforeEach(() => {
    userService = new UserService(new UserClient());
  });

  it("calls login() on UserClient when tries to login", async () => {
    await userService.login("testId", "abc");
    // expect(login.mock.calls.length).toBe(1);
    expect(login).toHaveBeenCalledTimes(1);
  });

  it("should not call login() on UserClient again if already logged in", async () => {
    await userService.login("testId", "abc");
    await userService.login("testId", "abc");
    // expect(login.mock.calls.length).toBe(1);
    expect(login).toHaveBeenCalledTimes(1);
  });
});
