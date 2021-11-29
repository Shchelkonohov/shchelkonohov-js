let q = +prompt("Переможи комп'ютер, вгадай цифру (1-9)");
function random(x, y, result) {
  x = 10;
  y = 0;
  result = Math.floor(Math.random() * (x - y));
  console.log("Цифра комп'ютера", result);
  if (result == q) {
    console.log("Вітаю, ви вгадали");
  } else {
    console.log("Твоя цифра s", q);
    console.log("Спробуй ще раз");
  }
}
random();
