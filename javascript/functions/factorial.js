function factorial(num) {
  let fac = 1;
  for (let i = 1; i <= num; i++) {
    fac *= i;
  }
  return fac;
}
let a = factorial(5);
console.log(a);
