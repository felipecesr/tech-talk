function sum(a, b) {
  return a + b
}

const result = sum(1, 2)
const expected = 3

if (result !== expected) {
  throw new Error(`${result} is not ${expected}`)
}
