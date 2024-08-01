// Create a function that finds the maximum number in an array

function greater(numbers) {
  arrayLength = numbers.length;
  if (numbers.length === 0) {
    console.log("Array is Empty!");
  } else {
    for (let i = 0; i < arrayLength; i++) {
      for (let j = i + 1; j < arrayLength; j++) {
        if (numbers[i] > numbers[j]) {
          let temp = numbers[i];
          numbers[i] = numbers[j];
          numbers[j] = temp;
        }
      }
    }
    console.log(numbers[arrayLength - 1]);
  }
}
const array = [2, 4, 7, 1, 9, 4, 8];
const array2 = [-2, -7, -1, -9, -4, -8];
const array3 = [];
greater(array);
greater(array2);
greater(array3);
