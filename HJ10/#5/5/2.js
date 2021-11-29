function sayHi(a) {
  a = prompt("Введіть своє ім'я");
  Boolean(a.charAt(0) === a.charAt(0).toUpperCase());
  if (Boolean(a.charAt(0) === a.charAt(0).toUpperCase()) == true) {
    console.log(a, ", доброго Вам дня");
  }
  if (Boolean(a.charAt(0) === a.charAt(0).toUpperCase()) == false) {
    alert("Це не ім'я");
    sayHi(a);
  }
}
sayHi();
