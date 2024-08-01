// Remove the spaces found in a string

function remove(string) {
  return string.replace(/\s/g, "");
}

let str = " Hello World! This is Zain from Pakistan";

console.log(remove(str));
