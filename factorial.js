function factorial(a) {
  console.log("Factorial of " + a + " is :");
  for (let i = a - 1; i >= 1; i--) {
    a = a * i;
  }
  console.log(a);
}

factorial(10);
factorial(5);
