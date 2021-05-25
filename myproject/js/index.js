// 메인화면에 보이는 검은색 헤더
const new_header = document.querySelector('.head');

// 메인화면의 상단에서 가운데를 차지하고 위치, 체크인, 체크아웃, 인원을 가리키는 상단바
const circle_menu = document.querySelector('.circle');

// 에어비앤비 로고
const new_logo = document.getElementsByClassName('logo');

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
        new_logo[0].style.color="#ff385c"



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




    // 스크롤을 내리지 않았거나 다시 맨위로 올라갈 경우 기존에 main.css에 쓰여있는 효과들을 적용
    }else {
        new_header.style.position = "absolute"
        new_header.style.backgroundColor = "black"
        new_header.style.height = "113px"
        circle_menu.style.transform="scale(1) translateY(0)"
        circle_menu.style.transitionDuration = "0s"
        

        new_logo[0].style.color="white"





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


        




    }
});