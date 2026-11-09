import { chipper } from "./caeserCipher";
test('alphabets should be changed to their adjacent alpabet in letters', () => {
    expect(chipper('Zeeshan Haider123')).toBe('Afftibo Ibjefs123');
});