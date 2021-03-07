import { hello } from "..";

describe("CLI Application", () => {
  test("basic app can be started", () => {
    expect(hello("test")).toBe("Hello test! ");
  });
});
