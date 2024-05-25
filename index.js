const assert = require('assert');

// Capitalize function tests
assert.strictEqual(capitalize('hello'), 'Hello');
assert.strictEqual(capitalize('world'), 'World');
assert.strictEqual(capitalize(''), ''); // Empty string test

// ReverseString function tests
assert.strictEqual(reverseString('hello'), 'olleh');
assert.strictEqual(reverseString('world'), 'dlrow');
assert.strictEqual(reverseString(''), ''); // Empty string test

// Calculator object tests
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};

assert.strictEqual(calculator.add(2, 3), 5);
assert.strictEqual(calculator.subtract(5, 2), 3);
assert.strictEqual(calculator.divide(10, 2), 5);
assert.strictEqual(calculator.multiply(3, 4), 12);

// CaesarCipher function tests
assert.strictEqual(caesarCipher('xyz', 3), 'abc');
