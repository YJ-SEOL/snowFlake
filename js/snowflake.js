// 애니메이션을 원하는 최소지속시간 10초 상수 명명
const MIN_DURATION = 10;

const body = document.querySelector("body");

function makeSnowflake() {
    const snowflake = document.createElement("div");
    // 떨어지는 눈송이 delay
    const delay = Math.random() * 10;
    // 깊이감을 위한 불투명도 랜덤화
    const initialOpacity = Math.random();
    // '0'과 '20'사이의 임의의 값에 최소지속시간 상수(MIN_DURATION)더하기
    const duration = Math.random() + MIN_DURATION;

    snowflake.classList.add("snowflake");
    // snowflake.style.left 눈송이를 왼쪽으로 이동시키기 위해 'left' 사용
    snowflake.style.left = `${Math.random() * window.window.screen.width}px`;
    // 떨어지는 눈송이 시간 delay 초(Seconds)
    snowflake.style.animationDelay = `${delay}s`;
    snowflake.style.opacity = initialOpacity;
    // 동적지속시간 'snowflake' 애니메이션 설정 style시트 = css
    snowflake.style.animation = `fall ${duration}s linear`;

    // body에 눈송이 추가
    body.appendChild(snowflake);

    // 애니메이션이 끝난 후 페이지에서 눈송이 제거코드로 'setTimeout'호출
    // 눈송이가 떨어지고난 후, 유저가 볼 수 없을 때 눈송이 제거
    setTimeout(() => {
        body.removeChild(snowflake);
        // 눈송이를 무한히 만들기 위해, 'makeSnowflack()' 함수 호출
        makeSnowflake();
        // 애니메이션의 '기간'에 '지연'을 더한 값을 밀리초로 환산 후 1000으로 곱하기
    }, (duration + delay) * 1000);
}
// 함수호출
makeSnowflake();

// 반복문
for (let index = 0; index < 50; index++) {
    // 더 자연스러운 연출을 위해 setTimeout함수호출
    // 눈송이를 동시에 생성하지 않고 약간의 지연후 생성하게 함.
    setTimeout(makeSnowflake, 500 * index);
    // makeSnowflake();
}
