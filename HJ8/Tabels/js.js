const NumbOfTabl = prompt("Введіть кількість столів!(1-100)");
let x = NumbOfTabl.charAt(NumbOfTabl.length - 1);
let y = NumbOfTabl.charAt(NumbOfTabl.length - 2);
const whole = parseInt(NumbOfTabl, 10);
if (x == 1 && y != 1) {
  console.log(whole + " стіл");
} else if (x >= 5 || x === 0 || y == 1) {
  console.log(whole + " столів");
} else if (x <= 4 && x === 0) {
  console.log(whole + " столи");
}
if (NumbOfTabl < 0) {
  console.log("Вас часом не Максим звуть, а то руки чешуться");
}
if (NumbOfTabl > 100) {
  console.log("Оптом?");
}
