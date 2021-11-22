let a = "         ";
let r = "*";
let m = 9;
for (let q = 0; q < 10; q++) {
  a = a.substring(0, m);
  m--;
  a = a + r;
  r = r + "*"
  console.log(a);
}
