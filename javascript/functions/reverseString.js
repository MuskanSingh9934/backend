function reverse(value) {
  let answer = "";
  for (let i = value.length - 1; i >= 0; i--) {
    answer += value[i];
  }

  return answer;
}
let anser = reverse("Hello");

console.log(anser);
