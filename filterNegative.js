//  Create a function that filters out negative numbers
function filter(numbers) {
  let filtered = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      filtered.push(numbers[i]);
    }
  }
  return filtered;
}

let arr = [1, -3, -7, 2, -2];
console.log(filter(arr));
