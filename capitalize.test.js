import { capitalize } from "./capitalize";
test('capitalizes the first letter of the string', () => {
    expect(capitalize('hello')).toBe('Hello');
});