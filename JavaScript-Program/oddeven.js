const arr = [1, 2, 3, 4, 5, 6, 7];
const result = arr.map((item) => (item % 2 === 1) * item * 2 || item);

console.log(result);
