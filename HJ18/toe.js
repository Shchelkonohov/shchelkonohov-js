function myfunc() {

    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1 = document.getElementById("b1").value;
    b2 = document.getElementById("b2").value;
    b3 = document.getElementById("b3").value;
    b4 = document.getElementById("b4").value;
    b5 = document.getElementById("b5").value;
    b6 = document.getElementById("b6").value;
    b7 = document.getElementById("b7").value;
    b8 = document.getElementById("b8").value;
    b9 = document.getElementById("b9").value;

    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' ||
            b2 == 'X') && (b3 == 'x' || b3 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player X won');
    } else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' ||
            b4 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;

        window.alert('Player X won');
    } else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' ||
            b8 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        window.alert('Player X won');
    } else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' ||
            b6 == 'X') && (b9 == 'x' || b9 == 'X')) {

        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b4").disabled = true;

        window.alert('Player X won');
    } else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' ||
            b5 == 'X') && (b9 == 'x' || b9 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b4").disabled = true;
        window.alert('Player X won');
    } else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' ||
            b5 == 'X') && (b7 == 'x' || b7 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b4").disabled = true;
        window.alert('Player X won');
    } else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' ||
            b5 == 'X') && (b8 == 'x' || b8 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        window.alert('Player X won');
    } else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' ||
            b5 == 'X') && (b6 == 'x' || b6 == 'X')) {
        document.getElementById('print')
            .innerHTML = "Player X won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b4").disabled = true;
        window.alert('Player X won');
    } else if ((b1 == '0' || b1 == '0') && (b2 == '0' ||
            b2 == '0') && (b3 == '0' || b3 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        window.alert('Player 0 won');
    } else if ((b1 == '0' || b1 == '0') && (b4 == '0' ||
            b4 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b3").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;

        window.alert('Player 0 won');
    } else if ((b7 == '0' || b7 == '0') && (b8 == '0' ||
            b8 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;

        window.alert('Player 0 won');
    } else if ((b3 == '0' || b3 == '0') && (b6 == '0' ||
            b6 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b4").disabled = true;
        window.alert('Player 0 won');
    } else if ((b1 == '0' || b1 == '0') && (b5 == '0' ||
            b5 == '0') && (b9 == '0' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b4").disabled = true;
        window.alert('Player 0 won');
    } else if ((b3 == '0' || b3 == '0') && (b5 == '0' ||
            b5 == '0') && (b7 == '0' || b7 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b4").disabled = true;
        window.alert('Player 0 won');
    } else if ((b2 == '0' || b2 == '0') && (b5 == '0' ||
            b5 == '0') && (b8 == '0' || b8 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        window.alert('Player 0 won');
    } else if ((b4 == '0' || b4 == '0') && (b5 == '0' ||
            b5 == '0') && (b6 == '0' || b6 == '0')) {
        document.getElementById('print')
            .innerHTML = "Player 0 won";
        document.getElementById("b2").disabled = true;
        document.getElementById("b9").disabled = true;
        document.getElementById("b1").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b4").disabled = true;
        window.alert('Player 0 won');
    } else if ((b1 == 'X' || b1 == '0') && (b2 == 'X' ||
            b2 == '0') && (b3 == 'X' || b3 == '0') &&
        (b4 == 'X' || b4 == '0') && (b5 == 'X' ||
            b5 == '0') && (b6 == 'X' || b6 == '0') &&
        (b7 == 'X' || b7 == '0') && (b8 == 'X' ||
            b8 == '0') && (b9 == 'X' || b9 == '0')) {
        document.getElementById('print')
            .innerHTML = "Match Tie";
        window.alert('Match Tie');
    } else {

        if (flag == 1) {
            document.getElementById('print')
                .innerHTML = "Player X Turn";
        } else {
            document.getElementById('print')
                .innerHTML = "Player 0 Turn";
        }
    }
}

function myfunc_2() {
    location.reload();

}


let flag = 1;



function myfunc_3() {

    switch (flag) {
        case 1:
            if (flag == 1) {
                var img = document.createElement("img")
                img.src = '588-5882204_thank-you-everyone-for-using-my-sticker-and-removebg-preview.png';
                let x = document.getElementById("b1")
                x.appendChild(img);
                flag = 0;
                document.getElementById("b1").onclick.disabled = true;
                document.getElementById("b1").disabled = true;

            }


            break


        case 0:
            if (flag == 0) {
                var img = document.createElement("img")
                img.src = 'number0_PNG19188.png';
                let x = document.getElementById("b1")
                x.appendChild(img);
                flag = 1;
                document.getElementById("b1").disabled = true;
                document.getElementById("b1").onclick.disabled = true;
            }


            break






            // if (flag == 1) {
            //     var img = document.createElement("img")
            //     img.src = '588-5882204_thank-you-everyone-for-using-my-sticker-and-removebg-preview.png';
            //     let x = document.getElementById("b1")
            //     x.appendChild(img);
            //     document.getElementById("b1").onclick.disabled = true;
            //     document.getElementById("b1").disabled = true;
            //     flag = 0;



            // } else {
            //     var img = document.createElement("img")
            //     img.src = 'number0_PNG19188.png';
            //     let x = document.getElementById("b1")
            //     x.appendChild(img);
            //     document.getElementById("b1").onclick.disabled = true;
            //     document.getElementById("b1").disabled = true;
            //     flag = 1;





    }




}

function myfunc_4() {
    if (flag == 1) {
        var img = document.createElement("img")
        img.src = '588-5882204_thank-you-everyone-for-using-my-sticker-and-removebg-preview.png';
        let x = document.getElementById("b2")
        x.appendChild(img);
        document.getElementById("b2").onclick.disabled = true;
        flag = 0;


    } else {
        var img = document.createElement("img")
        img.src = 'number0_PNG19188.png';
        let x = document.getElementById("b2")
        x.appendChild(img);
        document.getElementById("b2").onclick.disabled = true;
        flag = 1;
    }
}

function myfunc_5() {
    if (flag == 1) {
        var img = document.createElement("img")
        img.src = '588-5882204_thank-you-everyone-for-using-my-sticker-and-removebg-preview.png';
        var div = document.getElementById("b3");
        div.appendChild(img);
        document.getElementById("b3").disabled = true;
        flag = 0;
    } else {
        var img = document.createElement("img")
        img.src = 'number0_PNG19188.png';
        var div = document.getElementById("b3");
        div.appendChild(img);
        document.getElementById("b3").disabled = true;
        flag = 1;
    }
}

function myfunc_6() {
    if (flag == 1) {
        var img = document.createElement("img")
        img.src = '588-5882204_thank-you-everyone-for-using-my-sticker-and-removebg-preview.png';
        var div = document.getElementById("b4");
        div.appendChild(img);
        document.getElementById("b4").disabled = true;
        flag = 0;
    } else {
        var img = document.createElement("img")
        img.src = 'number0_PNG19188.png';
        var div = document.getElementById("b4");
        div.appendChild(img);
        document.getElementById("b4").disabled = true;
        flag = 1;
    }
}

function myfunc_7() {
    if (flag == 1) {
        var img = document.createElement("img")
        img.src = '588-5882204_thank-you-everyone-for-using-my-sticker-and-removebg-preview.png';
        var div = document.getElementById("b5");
        div.appendChild(img);
        document.getElementById("b5").disabled = true;
        flag = 0;
    } else {
        var img = document.createElement("img")
        img.src = 'number0_PNG19188.png';
        var div = document.getElementById("b5");
        div.appendChild(img);
        document.getElementById("b5").disabled = true;
        flag = 1;
    }
}

function myfunc_8() {
    if (flag == 1) {
        var img = document.createElement("img")
        img.src = '588-5882204_thank-you-everyone-for-using-my-sticker-and-removebg-preview.png';
        var div = document.getElementById("b6");
        div.appendChild(img);
        document.getElementById("b6").disabled = true;
        flag = 0;
    } else {
        var img = document.createElement("img")
        img.src = 'number0_PNG19188.png';
        var div = document.getElementById("b6");
        div.appendChild(img);
        document.getElementById("b6").disabled = true;
        flag = 1;
    }
}

function myfunc_9() {
    if (flag == 1) {
        var img = document.createElement("img")
        img.src = '588-5882204_thank-you-everyone-for-using-my-sticker-and-removebg-preview.png';
        var div = document.getElementById("b7");
        div.appendChild(img);
        document.getElementById("b7").disabled = true;
        flag = 0;
    } else {
        var img = document.createElement("img")
        img.src = 'number0_PNG19188.png';
        var div = document.getElementById("b7");
        div.appendChild(img);
        document.getElementById("b7").disabled = true;
        flag = 1;
    }
}

function myfunc_10() {
    if (flag == 1) {
        var img = document.createElement("img")
        img.src = '588-5882204_thank-you-everyone-for-using-my-sticker-and-removebg-preview.png';
        var div = document.getElementById("b8");
        div.appendChild(img);
        document.getElementById("b8").disabled = true;
        flag = 0;
    } else {
        var img = document.createElement("img")
        img.src = 'number0_PNG19188.png';
        var div = document.getElementById("b8");
        div.appendChild(img);
        document.getElementById("b8").disabled = true;
        flag = 1;
    }
}

function myfunc_11() {
    if (flag == 1) {
        var img = document.createElement("img")
        img.src = '588-5882204_thank-you-everyone-for-using-my-sticker-and-removebg-preview.png';
        var div = document.getElementById("b9");
        div.appendChild(img);
        document.getElementById("b9").disabled = true;
        flag = 0;
    } else {
        var img = document.createElement("img")
        img.src = 'number0_PNG19188.png';
        var div = document.getElementById("b9");
        div.appendChild(img);
        document.getElementById("b9").disabled = true;
        flag = 1;
    }
}