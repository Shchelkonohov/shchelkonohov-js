function sayYes() {
  console.log("Оу є");
}
function sayNo() {
  console.log("Оу ні");
}
function question(a) {
  a = confirm("yes|no");
  if (a == true) {
    sayYes();
  } else if (a == false) {
    sayNo();
  }
}
question();
