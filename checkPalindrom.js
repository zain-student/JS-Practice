function palindrom(str) {
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] === str[right]) {
      return true;
    }
    left++;
    right--;
  }
  return false;
}

console.log(palindrom("kayak"));
console.log(palindrom("Hello"));
