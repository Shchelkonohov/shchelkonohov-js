alert("Введіть цифри");

let f = +prompt("f=");
let r = +prompt("r=");
let q = +prompt("q=");
let s;
function AddNumb(f, r, q) {
  s = f + r + q;
  if (f >= 10 || r >= 10 || q >= 10) {
    console.log("Одне або всі із введених значень - не цифра");
  } else if (f <= -10 || r <= -10 || q <= -10) {
    console.log("Одне або всі із введених значень - не цифра");
  }
  console.log(s);
  console.log(f + r + q);
  alert(s);
}
AddNumb(f, r, q);
