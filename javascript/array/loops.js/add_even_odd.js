let even = [];
let odd = [];
for (i = 1; i < 50; i++) {
  if (i % 2 == 1) {
    odd.push(i);
  } else {
    even.push(i);
  }
}
let sum = 0;
odd.forEach((item) => {
  sum += item;
});
console.log(sum);

let evenSum = 0;
even.forEach((item) => {
  evenSum += item;
});
console.log(evenSum);
