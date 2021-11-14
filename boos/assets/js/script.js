$(document).ready(function(){ 
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        prevArrow:'<div class="slick-prev"><img src="assets/img/arrow.jpg" alt=""><</div>',
        nextArrow:'<div class="slick-next"><img src="assets/img/arrow.jpg" alt=""><</div>'
   
    });

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        blockid = $(this).data('scroll');
        blockOffset = $(blockid).offset().top;

        $("html, body").animate({
            scrollTop: blockOffset - 80
        }, 0.100);
    });
});

window.addEventListener('DOMContentLoaded', function(){
    let modal = document.getElementById("myModal");
    let btn = document.getElementById("myBtn");             /*чтобы переменная принимала значение  элементов */
    let span = document.getElementsByClassName("close")[0];
    let body = document.body;
    let animate = document.getElementsByClassName ("animate");
    let menu = document.getElementById("menu");
    let contacts = document.getElementById ("contacts");
    let itemNone = document.getElementById ("itemNone");
    let tab = document.querySelectorAll (".infovoz_block_subtitle_item");
    let info = document.querySelector (".infovoz_block_subtitle");
    let tabContent = document.querySelectorAll (".infovoz_block_p"),
        menuItem = document.querySelectorAll ('.menu_item'),
        hamburger = document.querySelector ('.hamburger');
        nav = document.querySelector ('.nav');
        infoInfo = document.querySelector('.info');


function hideTabContent(a) {
    for(let i = a; i < tabContent.length; i++){
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
    }

}
hideTabContent(1);

function showTabContent(b) {
    if (tabContent[b].classList.contains('hide'))
    {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}


info.addEventListener('click', function(event){
    let target = event.target;
    if (target && target.classList.contains('infovoz_block_subtitle_item')){
        for(let i = 0; i < tab.length; i++){
            if(target == tab[i]){
                hideTabContent(0)
                showTabContent(i)
                break;
            }
        }
    }
});

hamburger.addEventListener ('click', () =>{
    hamburger.classList.toggle('hamburger_active');
    menu.classList.toggle('menu_active');
    nav.classList.toggle('nav_active');
    infoInfo.classList.toggle('info_active');
});

menuItem.forEach(items => {
    items.addEventListener("click", function(){
        hamburger.classList.toggle("hamburger_active");
        menu.classList.toggle('menu_active');
        nav.classList.toggle('nav_active');
        infoInfo.classList.toggle('info_active');
    });
 
});

btn.addEventListener('click', function(event){
    modal.style.display = "block";
});

let spane = document.querySelector(".modal_span");
spane.addEventListener("click", function(event){
    modal.style.display = "none";
});

window.onclick = function(event){
    if (event.target ==modal){       /*event.target узнает куда именно ткнул курсор */
        modal.style.display = "none";
    }   
};
let messahe = {
    loading: 'Загрузка...',
    success: 'Спасибо! Скоро мы с вами свяжимся',
    failure: 'Что-то пошло не так',
};

let formModal = document.querySelector('.main-form'),
    input = formModal.getElementsByTagName('input'),
    statusMessage = document.createElement('div');

    statusMessage.classList.add('status'); 

    formModal.appendChild(statusMessage);
    let request = new XMLHttpRequest();
    request.open('POST', 'add.php');
    request.send();

    

formModal.addEventListener('submit',function(event){
    event.preventDefault();



});

//form



// let offset = 0;
// const sliderLine = document.querySelector('.slider_content');

// let back = document.querySelector('.slider_prev').addEventListener('click', function(){
//     offset = offset - 1215;
//     if (offset < 0){
//         offset = 2430;
//     }
    
//     sliderLine.style.left = -offset + 'px';
// });

// let next = document.querySelector('.slider_next').addEventListener('click', function NextSlide(){
//     offset = offset + 1215;
//     if (offset > 2430){
//         offset = 0;
//     }
    
//     sliderLine.style.left = -offset + 'px';
// });


// $(document).ready(function(){
//     $('.slider').slick();
// });

// setInterval(() =>{
//     offset = offset + 1215;
//     if (offset > 2430)
//     {
//         offset = 0;
//     }
//     sliderLine.style.left = -offset + 'px';
    // }, 4000)
});








