const menuOpenEL = document.getElementById('btn--open')
// 아이디값으로 btn--open을 document에서 불러와줘 나는 얘를 menuOpenEL이라고 부를거야

const menuCloseEL = document.getElementById('btn--close')

const sideMenuEL = document.getElementById("nav__menu")


// 클릭이라는 이벤트가 발생하면 발생하는 이벤트에따라 동작하게될 함수 작성
menuOpenEL.addEventListener("click", function() {
    menuOpenEL.style.display = "none"     
    // menuOpenEL 클릭했을때 
    menuCloseEL.style.display = "block"

    sideMenuEL.style.transform = "translateX(0%)"
}
)


menuCloseEL.addEventListener("click", function() {
    menuOpenEL.style.display = "block"     
    // menuOpenEL 클릭했을때 
    menuCloseEL.style.display = "none"

    sideMenuEL.style.transform = "translateX(-100%)"
}
)




