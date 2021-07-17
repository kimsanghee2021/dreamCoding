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
    scrollIntoView(link);
});

//contact 버튼 클릭시 해당 영역으로 슬라이드 이동하기
const contactBtn = document.querySelector('.home__contact');
contactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
});



//윈도우 스크롤 할시 서서히 section #Home이 사라지게 해라
const home = document.querySelector('#Home');
const homeHeight = home.getBoundingClientRect().height;
const homeContant = document.querySelector('.home__container'); 
document.addEventListener('scroll', ()=> {
    //console.log(1 - window.scrollY / homeHeight);   
    // 1 - 스크롤양값과 홈의 높이값을 나누고 1을 뺐는데 0이 넘으면 투명도를 주고 1이 된다 하면 불투명을 줘라
    homeContant.style.opacity = 1 - window.scrollY / homeHeight;
});

/* 스크롤 되었을때 화살표 버튼 나오게 하기 */
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll',()=>{
    if(window.scrollY > homeHeight / 2){
        arrowUp.classList.add('visible');
    } else{
        arrowUp.classList.remove('visible');
    }
});

/* 화살표 버튼을 누르면 상위로 올라가게 하기 */
arrowUp.addEventListener('click', ()=>{
    scrollIntoView('#Home');
});

/* 클릭시 각 위치로 스크롤 부드럽게 함수 */
function scrollIntoView(selector){
    const contSection = document.querySelector(selector);
    contSection.scrollIntoView({behavior:'smooth'});
}