let f0 = 0;
let f1 = 1;
console.log(f0);
console.log(f1);
let fi = 0;
for (let i = 0; i < 8; i++) {
  fi = f0 + f1;
  console.log(fi);

  f0 = f1;
  f1 = fi;
}
