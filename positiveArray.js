let arr2 = []; //Array for positive elements
let arr3 = []; // Array for negative elements
function positiveArray(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] > 0) {
      arr2.push(num[i]);
    }
  }
  console.log("Official array :" + arr);
  console.log("Array with positive elements :" + arr2);
  negativeArray(num);
}

function negativeArray(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] < 0) {
      arr3.push(num[i]);
    }
  }
  console.log("Array with negative elements :" + arr3);
}

let arr = [2, 5, -4, -2, -9, 3, -8];
positiveArray(arr);
// negativeArray(arr);
