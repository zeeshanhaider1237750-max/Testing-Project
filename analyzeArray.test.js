import { analyzer } from "./analyzeArray";
test('Values should be answered correctly', () => {
    expect(analyzer([1,3,2,5,2,3,5])).toEqual({
        Average: 3,
        Length: 7,
        Min: 1,
        Max: 5,
    });
});