function generateRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

function changebackground() {
  document.getElementById("box").style.backgroundColor = generateRandomColor();
}

changebackground();

function changebackground2() {
  document.getElementById("box2").style.backgroundColor = generateRandomColor();
}

changebackground2();

function changebackground3() {
  document.getElementById("box3").style.backgroundColor = generateRandomColor();
}

changebackground3();
function changebackground4() {
  document.getElementById("box4").style.backgroundColor = generateRandomColor();
}

changebackground4();
function changebackground5() {
  document.getElementById("box5").style.backgroundColor = generateRandomColor();
}

changebackground5();

function changebackground6() {
  document.getElementById("box6").style.backgroundColor = generateRandomColor();
}

changebackground6();

function changebackground7() {
  document.getElementById("box7").style.backgroundColor = generateRandomColor();
}

changebackground7();
function changebackground8() {
  document.getElementById("box8").style.backgroundColor = generateRandomColor();
}

changebackground8();

function changebackground9() {
  document.getElementById("box9").style.backgroundColor = generateRandomColor();
}

changebackground9();

function changebackground10() {
  document.getElementById("box10").style.backgroundColor =
    generateRandomColor();
}

changebackground10();
