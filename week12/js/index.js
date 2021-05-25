const pp = document.querySelector('.gg');

window.addEventListener('scroll', function() {

    if (window.scrollY > 30) {
        pp.style.transform="scale(0.5) translateY(-350px)"
        pp.style.transitionDuration = "0.3s"
    }else {
        pp.style.transform="scale(1)"
    }

});

// window.addEventListener('scroll', function() {

//     pp.style.transform="scale(0.5)"
//     behavior: "smooth"
    

// });


// const $scrollToTop = document.querySelector(".scrollToTop");

// $scrollToTop.addEventListener("click", function () {
//     window.scroll({
//       top: 0,
//       left: 0,
//       behavior: "smooth",
//     });
//   });



const scrollToTop = () => {
    window.scroll({top:0, left:0, behavior:'smooth'});
}

const scrollToTopBtn = document.querySelector('btn--scrollToTop')

window.addEventListener("scroll", function(){

    window.scrollY > 30
    ? scrollToTopBtn.style.display = 'block'
    : scrollToTopBtn.style.display = 'none'
})