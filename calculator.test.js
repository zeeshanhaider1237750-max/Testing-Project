import { add } from "./calculator";
import { subtract } from "./calculator";
import { product } from "./calculator";
import { division } from "./calculator";
test('expect sum of 1 and 2 to be 3', () => {
    expect(add(1, 2)).toBe(3);
});
test('expect subtract of 5 and 9 to be 4', () => {
    expect(subtract(9, 5)).toBe(4);
});
test('expect product of 4 and 2 to be 8', () => {
    expect(product(4, 2)).toBe(8);
});
test('expect division of 20 and 2 to be 10', () => {
    expect(division(20, 2)).toBe(10);
});