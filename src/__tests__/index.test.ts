import { hello } from "..";

test('index.ts', () => {
    expect(hello("test")).toBe('Hello test! ');
  });