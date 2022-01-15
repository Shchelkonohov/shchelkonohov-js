let Me = {
  name: "Olexii",
  surname: " Shchelkonohov",
  schola: "98",
  university: "Franka",
};

let copyed_object = function (Me) {
  let copyed = {};

  for (let key in Me) {
    copyed[key] = Me[key];
  }

  return copyed;
};
console.log(copyed_object(Me));
// console.log(Me); перевірка
