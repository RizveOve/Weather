const API_KEY = `46ad7457603b9b0104e633e78cd60e16`;

const searchCity= ()=>{
    const city= document.getElementById('searched-city').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    document.getElementById('result').style.display= "block";

    fetch(url)
    .then(res=> res.json())
    .then(data=> display(data))
    console.log(url);
    console.log(city);
}

const display= (data)=> {
    const cityName= document.getElementById('city-name');
    const Temparature= document.getElementById('temp');
    const condition= document.getElementById('condition');

    cityName.innerText= data.name;
    Temparature.innerText= data.main.temp;
    condition.innerText= data.weather[0].main;
    document.getElementById('result').style.display= "block";

    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
    console.log(data);
}