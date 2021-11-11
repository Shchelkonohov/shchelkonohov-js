const Name = prompt("Скажи своє ім'я!!!");
if (
  Name == "Ігор" ||
  Name == "Сергій" ||
  Name == "Оля" ||
  Name == "Оксана" ||
  Name == "Паша"
) {
  if (Name == "Ігор" || Name == "Сергій") {
    alert("проходь Адмін, " + Name);
  }
  if (Name == "Оля" || Name == "Оксана") {
    alert("вітання Вам, " + Name);
  }
  if (Name == "Паша") {
    alert("проходь Хворий, " + Name);
  }
} else {
  alert("Допобачення, в нас коронавірус, " + Name);
}
