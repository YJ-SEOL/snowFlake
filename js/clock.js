const clock = document.querySelector("h1#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 5000ms -> 5초
// setInterval(sayHello, 5000);

// setTimeout(sayHello, 5000);

// 웹사이트가 로딩되자마자 getClock() 즉시 실행
getClock();
// getClock() 매초마다 실행
// interval함수가 없다면, 한 번만 실행
setInterval(getClock, 1000);
