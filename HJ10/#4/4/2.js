function Age(a) {
  a = +prompt("Your age");
  if (a <= 0) {
    console.log("Happy future birthday");
  } else if (a < 18) {
    console.log("Closed for you");
  } else if (a >= 18 && a < 99) {
    console.log("Welcome");
  } else if (a >= 99 && a < 120) {
    console.log("Be carefull");
  } else if (a >= 120) {
    console.log("Let me help you");
  }
}
Age();
