// Calculate the sum of numbers within an array
function sumArray(numbers) {
  let sum = 0; // Declare a number in which all the array elements will be added
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
let array = [2, 3, 4, 2, 3, 4]; //This array will be passed to numbers
console.log(sumArray(array));
