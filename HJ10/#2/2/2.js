alert("Введіть цифри");

let f = +prompt("f=");
let r = +prompt("r=", "Показник степеня цифри(f)");
let q = +prompt("q=");
let s;
function Multiply(f, r, q) {
  s = f * r * q;
  if (f >= 10 || r >= 10 || q >= 10) {
    console.log("Одне із введених значень - не цифра");
  } else if (f <= -10 || r <= -10 || q <= -10) {
    console.log("Одне із введених значень - не цифра");
  }

  console.log("Множення", s);
  console.log(
    "Множнення із піднесенням цифри(f) до степеня(r)",
    Math.pow(f, r) * r * q
  );
  alert("Mnojenia", s);
}
Multiply(f, r, q);
