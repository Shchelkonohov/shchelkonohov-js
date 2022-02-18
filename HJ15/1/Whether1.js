    let temp = document.querySelector(".first_part")
    let description = document.querySelector(".second_part")
    let name = document.querySelector(".third_part")

    let icon = document.querySelector(".icon")


    function getWether() {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=49.838261&lon=24&units=metric&appid=8aff93f121b1c5138acd1735a974912d")
            .then(res => res.json())
            .then(data => {
                let nameValue = data['name'];
                let tempValue = data["main"]['temp']
                let allValue = data['weather'][0]['description']
                let iconValue = data['weather'][0]['main']
                temp.innerHTML = tempValue + ' C°  '
                description.innerHTML = allValue
                name.innerHTML = nameValue + ',   ' + nameValue
                if (iconValue = "Clouds") {
                    var img = document.createElement("img")
                    img.src = 'weather-1_icon-icons.com_67740.png';
                    icon.appendChild(img);
                }


            })
            .catch(err => alert("smth wrng"))


    }
    getWether()

    function my_function() {
        var today = new Date();
        var date = today.getDate() + '-0' + (today.getMonth() + 1) + '-' + today.getFullYear();
        inside = document.getElementById("data1")
        inside.innerHTML = date;
    }
    my_function()













    // function cloud() {
    //     let clouds = document.createElement("clouds")
    //     clouds.src = 'weather-1_icon-icons.com_67740.png'
    //     let src = document.getElementsByClassName("icon")
    //     src.appendChild(clouds)
    // }

    // function snow() {
    //     let snow = document.createElement("snow")
    //     snow.src = "png-transparent-rain-and-snow-mixed-weather-computer-icons-snow-leaf-cloud-heart-removebg-preview.png"
    //     let src = document.getElementsByClassName("icon")
    //     src.appendChild(snow)
    // }

    // function sun() {
    //     let sun = document.createElement("sun")
    //     sun.src = "Без_названия-removebg-preview.png"
    //     let src = document.getElementsByClassName("icon")
    //     src.appendChild(sun)

    // }