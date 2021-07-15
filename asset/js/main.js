'use stirct';
/* 스크롤 했을 시 스크롤의 거리값과 네비게이션 높이값 이상이 되었을시 색상이 변경되게끔 적용시켜라 */
const navBar = document.querySelector('#navbar');
const navBarHeight = navBar.getBoundingClientRect().height;

document.addEventListener('scroll', function(){
    //console.log(window.scrollY);
    //console.log(`navBarHeight : ${navBarHeight}`);
    if(window.scrollY > navBarHeight){
        navBar.classList.add('navbar--dark');
    } else{
        navBar.classList.remove('navbar--dark');
    }
});

/* 네비게이션 탭을 클릭시 각 해당 영역으로 슬라이드 이동하기 */
const navBarMenu = document.querySelector('.navbar__menu'); 
navBarMenu.addEventListener('click', function(event){

    const target = event.target;
    const link = target.dataset.link;
    //console.log(link);
    if(link == null){
        return;
    }
    const scrollTo = document.querySelector(link);
    //console.log(scrollTo);
    scrollTo.scrollIntoView({behavior: "smooth"});
});

//contact 버튼 클릭시 해당 영역으로 슬라이드 이동하기
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', (e) => {
    const contactBtnLink = e.target.dataset.link;
    //console.log(contactBtnLink);
    const contSection = document.querySelector(contactBtnLink);
    //console.log(contSection);
    contSection.scrollIntoView({behavior:'smooth'});
});