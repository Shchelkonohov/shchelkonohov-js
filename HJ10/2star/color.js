function generateRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function changebackground() {
  document.getElementById("box").style.backgroundColor =
    generateRandomColor();
  document.getElementById("box2").style.backgroundColor = generateRandomColor();
  document.getElementById("box3").style.backgroundColor = generateRandomColor();
  document.getElementById("box4").style.backgroundColor = generateRandomColor();
  document.getElementById("box5").style.backgroundColor = generateRandomColor();
  document.getElementById("box6").style.backgroundColor = generateRandomColor();
  document.getElementById("box7").style.backgroundColor = generateRandomColor();
  document.getElementById("box8").style.backgroundColor = generateRandomColor();
  document.getElementById("box9").style.backgroundColor = generateRandomColor();
  document.getElementById("box10").style.backgroundColor =
    generateRandomColor();
}

changebackground();
