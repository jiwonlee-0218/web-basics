// 헤더 선택자
const headerEl = document.getElementById("header--main")

// 로고 선택자
const logoEl = document.getElementsById("logo")


// 윈도우에서 스크롤 이벤트가 발생하면 익명의 함수 동작
window.addEventListener("scroll" , function() {
    // y축으로 스크롤 위치가 200px을 넘어가면
    if (window.scrollY >= 200) {
        // 헤더 요소의 높이를 160px로 줄인다.
        headerEl.style.height = '160px'
        // 로고 요소의 높이와 너비를 120px로 줄인다
        logoEl.style.height = '120px'
        logoEl.style.width = '120px'
    }
    else {
        // y축으로 스크롤 위치가 200px 미만이면,
        // 헤더 요소의 높이를 원래대로 400px로 돌린다.
        headerEl.style.height = '400px'
        // 로고 요소의 높이와 너비를 원래대로 300px로 돌린다.
        logoEl.style.height = '300px'
        logoEl.style.width = '300px'
    }
})