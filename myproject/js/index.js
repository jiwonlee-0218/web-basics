// 메인화면에 보이는 검은색 헤더
const new_header = document.querySelector('.head');

// 메인화면의 상단에서 가운데를 차지하고 위치, 체크인, 체크아웃, 인원을 가리키는 상단바
const circle_menu = document.querySelector('.circle');

// 에어비앤비 로고
// const new_logo = document.getElementsByClassName('logo');
const new_logo = document.querySelector('.logo');

// 오른쪽 상단에 위치한 호스트되기 
const new_host = document.querySelector('.host');

// 오른쪽 상단에 위치한 지구본
const new_global = document.querySelector('.global');

// 오른쪽 상단에 위치한 지구본아이콘
const new_global_icon = document.querySelector('.global_icon');

// 오른쪽 상단에 위치한 멤버쉽아이콘
const new_membership = document.querySelector('.membership');

// 가운데 가장 상단에 위치한 숙소, 체험, 온라인 체험을 가리키는 메뉴바
const present_head_middle = document.querySelector('.head_middle');

// 스크롤을 내리면 새롭게 등장할 '검색 시작하기' 메뉴바
const new_head_middle = document.querySelector('.search_bar');

// 상단의 '숙소'
const new_chehum = document.querySelector('.chehum');
// 상단의 '숙소'에 마우스를 갖다대면 나오는 밑줄
const new_chehum1 = document.querySelector('.chehum1');

// 상단의 체험을 클릭했을때 나오는 '위치', '체크아웃'을 가리키는 상단바
const another_circle = document.querySelector('.another_circle')

// 상단의 '체험'
const new_sukso = document.querySelector('.sukso');
// 상단의 '체험'에 마우스를 갖다대면 나오는 밑줄
const new_sukso1 = document.querySelector('.sukso1');

// scroll to top을 하기위한 이미지
const scrollToTop = document.querySelector(".scrollToTop")



// 스크롤 이벤트 발생
window.addEventListener('scroll', function() {  

    if (window.scrollY > 20){
        // 스크롤 내리면 헤더가 고정이되고 색상이 흰색으로 바뀌고, 길이가 짧아지며, 헤더 하단에 그림자효과가 생긴다. (흰색 바탕화면으로 스크롤을 이동시켜야지 메뉴바 하단의 그림자효과가 보인다.)
        new_header.style.position = "fixed"
        new_header.style.backgroundColor = "white" 
        new_header.style.height = "80px"
        new_header.style.boxShadow = "0px 4px 12px rgb(0 0 0 / 8%)"




        // 스크롤 내리면 상단바는 자연스럽게 위로 사라지도록 효과를 주었다.
        circle_menu.style.transform="scale(0.5) translateY(-350px)"
        circle_menu.style.transitionDuration = "1.5s"
        circle_menu.style.transitionTimingFunction = "linear"


        // 스크롤 내리면 에어비앤비 로고의 색깔이 변하도록 바꿔주었다.
        new_logo.style.color="#ff385c"



        // 스크롤 내렸을때 왼쪽 상단의 에어비앤비 로고를 클릭하면 다시 맨 위로 올라간다.
        new_logo.addEventListener("click", function() {
            window.scroll({
                top: 0,
                left: 0,
                behavior: "auto"
            });
        
        });



        // 스크롤을 내리면 '호스트 되기'는 하얀색바탕에 검정글씨로 바뀌고
        new_host.style.backgroundColor="white"
        new_host.style.color="black"
        // 마우스를 '호스트 되기'위에 올리면 연한 회색으로 바뀌면서 둥근원이 감싸는 효과를 주었다.
        new_host.addEventListener('mouseover', function(){
            new_host.style.backgroundColor = "#f5f5f5";
            new_host.style.borderRadius= "30px" 
        });
        // 마우스를 '호스트 되기'에서 내리면 다시 하얀색바탕에 검정글씨로 바뀐다.
        new_host.addEventListener('mouseout', function(){
            new_host.style.backgroundColor = "white"
            new_host.style.borderRadius= "30px" 
        });



        // 스크롤을 내리면 '지구본'은 하얀색바탕에 '지구본 아이콘은'검정색으로 바뀌고
        new_global.style.backgroundColor="white"
        new_global_icon.style.color="black"
        // 마우스를 '지구본'에 올리면 연한 회색으로 바뀌면서 둥근원이 감싸는 효과를 주었다.
        new_global.addEventListener('mouseover', function(){
            new_global.style.backgroundColor = "#f5f5f5"
            new_global.style.borderRadius= "30px" 
        });
        // 마우스를 '지구본'에서 내리면 다시 하얀색바탕에 검정색으로 바뀐다.
        new_global.addEventListener('mouseout', function(){
            new_global.style.backgroundColor = "white"
            new_global.style.borderRadius= "30px" 
        });
        




        // 스크롤을 내리면 이전에는 보이지 않았던 멤버쉽아이콘에 연한 테두리가 생겼고
        new_membership.setAttribute('style', 'transition: box-shadow 0.2s ease;  border: 1px solid #DDDDDD;')
        // 마우스를 멤버쉽아이콘에 올리면 박스에 shadow효과를 주어 입체적으로 떠보이게 하였다.
        new_membership.addEventListener('mouseover', function(){
            new_membership.style.boxShadow = "0px 1px 2px rgb(0 0 0 / 15%), 0px 4px 12px rgb(0 0 0 / 15%)"
        });
        // 마우스를 엠버쉽아이콘에서 내리면 다시 연한 테두리고 바뀐다.
        new_membership.addEventListener('mouseout', function(){
            new_membership.style.boxShadow = "none"
        });





        // 스크롤을 내리면 숙소, 체험, 온라인 체험 메뉴바는 사라지고 
        present_head_middle.style.visibility="hidden"

        // 스크롤을 내리면 '검색 시작하기' 라는 메뉴바가 등장한다.
        new_head_middle.style.visibility="visible"


        // 스크롤을 내리면 이미지(버튼)가 보이게 한다
        scrollToTop.style.display = 'block'




    // 첫 화면에서 스크롤을 내리지 않았거나 다시 맨위로 올라갈 경우 기존에 main.css에 쓰여있는 효과들을 적용
    }else {
        new_header.style.position = "absolute"
        new_header.style.backgroundColor = "black"
        new_header.style.height = "113px"
        circle_menu.style.transform="scale(1) translateY(0)"
        circle_menu.style.transitionDuration = "0s"
        

        new_logo.style.color="white"





        new_host.style.backgroundColor="black"
        new_host.style.color="white"
        new_host.addEventListener('mouseover', function(){
            new_host.style.backgroundColor = "#333333"
            new_host.style.borderRadius= "30px" 
        });
        new_host.addEventListener('mouseout', function(){
            new_host.style.backgroundColor = "black"
            new_host.style.borderRadius= "30px" 
        });




        new_global.style.backgroundColor="black"
        new_global_icon.style.color="white"
        new_global.addEventListener('mouseover', function(){
            new_global.style.backgroundColor = "#333333"
            new_global.style.borderRadius= "30px" 
        });
        new_global.addEventListener('mouseout', function(){
            new_global.style.backgroundColor = "black"
            new_global.style.borderRadius= "30px" 
        });



        new_membership.setAttribute('style', 'transition: none; border: none;')



        present_head_middle.style.visibility="visible"

        new_head_middle.style.visibility="hidden"



        scrollToTop.style.display = 'none'


    }

});


// '체험'을 클릭했을때 발생하는 이벤트
new_chehum.addEventListener("click", function() {
    // 기존 상단바는 (위치, 체크인, 체크아웃, 인원) 제거 
    circle_menu.style.visibility = "hidden"
    // 새로운 상단바 (위치, 체크아웃) 생성
    another_circle.style.visibility = "visible"
    // '체험'을 클릭했으므로 체험 밑에 고정된 밑줄이 생기고 마우스만 갖다댄 경우와 달리 글씨가 하얀색이며 커서가 pointer -> default로 변했다.
    new_chehum1.className="underline"
    new_chehum.style.color="white"
    new_chehum.style.cursor="default"

    // '체험'을 클릭했으므로 숙소는 클릭전으로 돌아갔으므로 마우스를 갖다대면 짧은 밑줄이 생겼다가 마우스를 떼면 짧은 밑줄이 없어지는 효과를 주었다.
    new_sukso1.className="sukso1"
    new_sukso.className="sukso"
    new_sukso.style.cursor="pointer"

})

// '체험'을 클릭하지 않고 마우스만 갖다댄 경우 글씨 색은 회색
new_chehum.addEventListener('mouseover', function(){
    new_chehum.style.color="gray"
});
// 마우스를 뗀 경우 글씨 색은 하얀색
new_chehum.addEventListener('mouseout', function(){
    new_chehum.style.color="white"
});

// '숙소'를 클릭했을때 발생하는 이벤트
new_sukso.addEventListener("click", function() {
    // '숙소'를 클릭했을때 나타나는 상단바(위치, 체크인, 체크아웃, 인원) 생성
    circle_menu.style.visibility = "visible"
    // '체험'을 클릭했을때 생기는 상단바(위치, 체크아웃)는 제거
    another_circle.style.visibility = "hidden"
    // '숙소'를 클릭했으므로 숙소 밑에 고정된 밑줄이 생기고 마우스만 갖다댄 경우와 달리 글씨가 하얀색이며 커서가 pointer -> default로 변했다.
    new_sukso1.className="underline"
    new_sukso.style.color="white"
    new_sukso.style.cursor="default"

    // '숙소'를 클릭했으므로 체험은 클릭전으로 돌아갔으므로 마우스를 갖다대면 짧은 밑줄이 생겼다가 마우스를 떼면 짧은 밑줄이 없어지는 효과를 주었다.
    new_chehum1.className="chehum1"
    new_chehum.className="chehum"
    new_chehum.style.cursor="pointer"

})

// '숙소'를 클릭하지 않고 마우스만 갖다댄 경우 글씨 색은 회색
new_sukso.addEventListener('mouseover', function(){
    new_sukso.style.color="gray"
});
//  마우스를 뗀 경우 글씨 색은 하얀색
new_sukso.addEventListener('mouseout', function(){
    new_sukso.style.color="white"
});


// 맨처음 즉 첫 화면은 숙소가 클릭되어져 있는 상태이고 scroll to top을 위한 이미지가 안보여야하는 상태여야 한다.
window.onload = function(){
    new_sukso1.className="underline"
    new_sukso.style.color="white"
    new_sukso.style.cursor="default"
    scrollToTop.style.display = 'none'
}




// 이미지 클릭시 위로 올라감
scrollToTop.addEventListener("click", function () {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });

  });







const membership_bar = document.querySelector('.membership_bar');
const membership = document.querySelector('.membership');
const bar_close = document.querySelector('.bar_close');



// 오른쪽 상단에 회원가입 아이콘을 클릭했을때 이와 관련한 메뉴가 뜨도록함
membership.addEventListener("click", () => {
       membership_bar.style.visibility="visible"
       bar_close.style.visibility="visible"
})

// 메뉴를 없애주기위에 X모양 아이콘을 누르면 전부 사라진다.
bar_close.addEventListener("click", () => {
    membership_bar.style.visibility="hidden"
    bar_close.style.visibility="hidden"
})
