const NumbOfTabl = prompt("Введіть кількість столів!(1-100)");
let x = NumbOfTabl.charAt(NumbOfTabl.length - 1);
if (x == 1) {
  console.log(NumbOfTabl + " стіл");
} else if (x >= 5 || x == 0) {
  console.log(NumbOfTabl + " столів");
} else if (x <= 4) {
  console.log(NumbOfTabl + " столи");
}
if (NumbOfTabl < 0) {
  console.log("Вас часом не Максим звуть, а то руки чешуться");
}
if (NumbOfTabl > 100) {
  console.log("Оптом?");
}
