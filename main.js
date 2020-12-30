'use strict'

// topbar
const navbar=document.querySelector('.navbar');
const main=document.querySelector('.main');
const topbar=document.querySelector('.topbar');
const mainHeight=main.clientHeight;

window.addEventListener('scroll', ()=>{
    const scrolling=window.pageYOffset;

    if(scrolling>mainHeight){
        topbar.classList.add('invisible');
        navbar.classList.add('visible');
    }else{
        topbar.classList.remove('invisible');
        navbar.classList.remove('visible');
    }
})

// main
const mainWrapper=document.querySelector('.main__container');
const mainSlides=document.querySelectorAll('.main__slides');
const mainSlide=document.querySelector('.main__slide');
const mainDot=document.querySelector('.main .dotContainer');
const mainDots=document.querySelectorAll('.main .dots');
const maintotal=mainSlides.length;

let mainWidth=mainWrapper.clientWidth;
let slideIndex=0;


function slidePosition(){
    for(let i=0; i<mainSlides.length; i++){
        mainSlides[i].style.left = `${mainWidth * i}px`;
    }
}

slidePosition();

mainSlide.style.width=mainWidth*maintotal+'px';

// 자동 슬라이드
const auto=setInterval(function(){
    plusSlides(1);
}, 3000)

function showSlides(n) {
    slideIndex = n;
    if (slideIndex == -1) {
        slideIndex = maintotal - 1;
    } else if (slideIndex === maintotal) {
        slideIndex = 0;
    }
    mainSlide.style.left = -(mainWidth * slideIndex) + 'px';
    mainDots[slideIndex].classList.add('active');
    dotRemove(slideIndex);
}

function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

const nextBtn = document.querySelector('.main .next');
const prevBtn = document.querySelector('.main .prev');

nextBtn.addEventListener('click', function () {
    plusSlides(1);
});
prevBtn.addEventListener('click', function () {
    plusSlides(-1);
});

function dotRemove(index){
    mainDots.forEach((dot)=>{
        if(index==dot.dataset.dot){
            dot.classList.add('active');
        }else{
            dot.classList.remove('active');
        }
    })
}

// dot 활성화
mainDot.addEventListener('click', (event)=>{
    const dotNum=event.target.dataset.dot || event.target.parentNode.dataset.dot;

    mainDots.forEach((dot)=>{
        if(dotNum==dot.dataset.dot){
            dot.classList.add('active');
            plusSlides(1);
            clearInterval(auto);
        }else{
            dot.classList.remove('active');
        }
    })
})