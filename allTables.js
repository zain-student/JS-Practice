for (let i = 1; i <= 20; i++) {
  tableOf(i);
  console.log(" ");
}

function tableOf(num) {
  for (let j = 1; j <= 10; j++) {
    console.log(num + " * " + j + "=" + num * j);
  }
}
