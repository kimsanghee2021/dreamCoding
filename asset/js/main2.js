'use strict';
const nav = document.querySelector('#navbar');
const navBarHT = nav.getBoundingClientRect().height;
const menuList = document.querySelector('.navbar__menu');
const menus = nav.querySelectorAll('li');
const contBtn = document.querySelector('.home__btn');
const navToggleBtn = document.querySelector('.navbar__toggle-btn');
const home = document.querySelector('#home');
const homeHT = home.getBoundingClientRect().height;
const homeCont = home.querySelector('.home__contatiner');
const arrowUp = document.querySelector('.arrow-up');


// 스크롤 했을시 스크롤의 거리값과 네비게이션 높이값 이상이 되었을시 색상이 변하게끔 적용시켜라
window.addEventListener('scroll',()=>{
    if(this.scrollY >= navBarHT){
        nav.classList.add('navbar--dark');
    } else{
        nav.classList.remove('navbar--dark');
    }
    //스크롤 했을 시 home 섹션 opacity 값 줄이기
    homeCont.style.opacity = 1-window.scrollY / homeHT;

    //화살표 버튼 노출시키기 
    if(this.scrollY > homeHT/2){
        arrowUp.classList.add('visible');
    } else{
        arrowUp.classList.remove('visible');
    }
});

//화살표 클릭시 상단으로 올라가게 하기 
arrowUp.addEventListener('click',function(e){
    e.preventDefault();
    scrollIntoView('#home');
});

//네비게이션 탭 클릭시 각 해당영역으로 섹션 이동 (슬라이드)
menus.forEach(function(menu,idx){
    menu.addEventListener('click',(e)=>{
        const link = e.target.dataset.link;
        for(menu of menus){
            menu.classList.remove('active');
            menus[idx].classList.add('active');
            scrollIntoView(link);
        }
    });
});
//content click 이벤트
contBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    scrollIntoView('#contact');
});

//모바일 버전시 토글버튼 작동
navToggleBtn.addEventListener('click',()=>{
    menuList.classList.toggle('open');
});

//윈도우 스크롤 할시 서서이 #home이 사라지게 해라 



// 클릭시 각 위치로 애니메이션
function scrollIntoView(target){
    const contSection = document.querySelector(target);
    contSection.scrollIntoView({behavior:'smooth'});
}