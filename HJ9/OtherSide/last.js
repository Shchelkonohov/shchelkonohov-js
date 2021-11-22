let a = " ";
let r = "**********";
m = 9;
let f = " ";
for (let q = 0; q < 10; q++) {
  a = f + r;
  r = r.substring(0, m);
  m--;
  f = f + " ";
  console.log(a);
}
