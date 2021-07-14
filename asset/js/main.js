'use strict';
//스크롤 했을 시 네비게이션 바가 불투명해지게 만들고 다시 올라가면 투명하게 만들어라

const navBar = document.querySelector('#navbar');
const navBarHeight = navBar.getBoundingClientRect().height;

document.addEventListener('scroll', function(){
    //console.log(window.scrollY);
    //console.log(navBarHeight);
    if(window.scrollY > navBarHeight){
        navBar.classList.add('navbar--dark');
    }else{
        navBar.classList.remove('navbar--dark');
    }
});
