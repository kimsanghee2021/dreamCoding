
/* 스크롤 했을 시 스크롤의 거리값과 네비게이션 높이값 이상이 되었을시 색상이 변경되게끔 적용시켜라 */
const navBar = document.querySelector('#navbar');
const navBarHeight = navBar.getBoundingClientRect().height;
document.addEventListener('scroll',() => {
    //console.log(window.scrollY);
    //console.log(`navBarHeight = ${navBarHeight}`);
    if(window.scrollY > navBarHeight){
        navBar.classList.add('navbar--dark');
    }else{
        navBar.classList.remove('navbar--dark');
    }
});

/* 네비게이션 탭을 클릭시 각 해당 영역으로 슬라이드 이동하기 */
const navBarMenu = document.querySelector('.navbar__menu');

navBarMenu.addEventListener('click',(e) => {
    const target = e.target;
    const link = target.dataset.link;

    if(link == null){
        return;
    }
    scrollIntoView(link);
    //console.log(scrollTo);
});

/* contact 버튼 클릭시 해당 영역으로 슬라이드 이동하기 */
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', function(){
    scrollIntoView('#contact');
});

/* 함수의 재활용성 */
function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: "smooth"});
}

/* 윈도우 스크롤 할시 서서히 section #Home이 사라지게 해라 */
const home = document.querySelector('#Home');
const homeHeight = home.getBoundingClientRect().height;
const homeHeightContant = document.querySelector('.home__container'); 
document.addEventListener('scroll', function(){
    //console.log(1-window.scrollY/homeHeight);
    homeHeightContant.style.opacity = 1-window.scrollY/homeHeight;
});