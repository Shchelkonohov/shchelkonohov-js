let url = "https://api.openweathermap.org/data/2.5/weather?lat=49.838261&lon=24&units=metric&appid=8aff93f121b1c5138acd1735a974912d"

const getWeather = async () => {
    let response = await fetch(url);
    let json = await response.json();
    console.log(json)

}
getWeather()

function my_function() {
    var today = new Date();
    var date = today.getDate() + '-0' + (today.getMonth() + 1) + '-' + today.getFullYear();
    document.getElementById('data1').value = date
    console.log(date)
    console.log(data1)
}
my_function()