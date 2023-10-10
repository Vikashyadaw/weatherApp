// let apiurl = 'https://api.openweathermap.org/data/2.5/weather?q=patna&appid=4561a5022ad2e8985bd76d5775ebb75e&units=metric';

let apikey = '4561a5022ad2e8985bd76d5775ebb75e';
let apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

let searchBox = document.querySelector('input');
let searchBtn = document.querySelector('button');

async function checkWeather(city){
    const response = await fetch(apiurl +city+`&appid=${apikey}`);
    var data = await response.json();
    console.log(data);

    document.querySelector('.city').innerHTML=data.name;
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+'°C';
    document.querySelector('.humidity').innerHTML=data.main.humidity+'%';
    document.querySelector('.wind').innerHTML=data.wind.speed+'km/h';

}

searchBtn.addEventListener('click', function(){

    checkWeather(searchBox.value);

})