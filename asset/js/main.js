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

//handle scrolling when tapping on the navbar menu
// 각 버튼을 클릭시 해당 영역으로 스크롤링 이동하기
const navBarMenu = document.querySelector('.navbar__menu');
navBarMenu.addEventListener('click', function(){

    const target = event.target;
    const link = target.dataset.link;
    if(link == null){
        return;
    }console.log(event.target.dataset.link);
});