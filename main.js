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