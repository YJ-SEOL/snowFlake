const API_KEY = "5f586d9f73d3c53f6b730142c8d83ca7";

// 위치한 곳의 날씨정보 불러오기
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log("You live in", lat, lon);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            weather.innerText = `${data.weather[0].main} ${data.main.temp}℃ @`;
            city.innerText = data.name;
        });
}

function onGoeErr() {
    alert("Can't find you, No weater for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGoeErr);

//getCurrentPosition(성공함수, 에러함수)
