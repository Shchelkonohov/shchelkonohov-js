let x = function sayYes() {
  console.log("Оу є");
};
let r = function sayNo() {
  console.log("Оу ні");
};
let q = function question(a) {
  a = confirm("yes|no");
  if (a == true) {
    x();
  } else if (a == false) {
    r();
  }
};
q();
