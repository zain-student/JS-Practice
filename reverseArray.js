// Create a function that will reverse an array

function reverseArray(array) {
  //   for (let i = 0; i < array.length; i++) {
  //     console.log(array[i]);
  //   }
  for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
  }
}

let arr = [1, 2, 3, 4, 5, 6];
console.log("Reverse of array is:");
reverseArray(arr);
