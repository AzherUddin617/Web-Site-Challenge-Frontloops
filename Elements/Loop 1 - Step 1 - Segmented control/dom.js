const contentDesktop = document.getElementById('content-desktop');
const contentMobile = document.getElementById('content-mobile');
const contentSelectM = document.getElementById('content-select');
const contentBtnsD = contentDesktop.querySelectorAll('.content__btn');
const contentBtnsM = contentSelectM.querySelectorAll('.content__option');
const activeStateM = document.getElementById('active-state');

let activeIndex = Array.from(contentBtnsD).findIndex(btn => btn.classList.contains('active'));
resetActiveStateMobile();

contentDesktop.addEventListener('click', e => {
  let target = e.target;
  let index = Array.from(contentBtnsD).indexOf(target);

  if (target.classList.contains('content__btn') && index !== activeIndex) {

    contentBtnsD[activeIndex].classList.remove('active');
    contentBtnsD[index].classList.add('active');
    activeIndex = index;
    resetActiveStateMobile();
  }
});

contentMobile.addEventListener('click', contentMobileEvent);

function contentMobileEvent(e) {
  let target = e.target;
  let index = Array.from(contentBtnsM).indexOf(target);

  if (target.classList.contains('content__option') && index !== activeIndex) {

    contentBtnsD[activeIndex].classList.remove('active');
    contentBtnsD[index].classList.add('active');
    activeIndex = index;
    resetActiveStateMobile();
    contentSelectM.classList.remove('active');
  }
  else {
    contentSelectM.classList.add('active');
  }
}

function resetActiveStateMobile () {
  activeStateM.textContent = contentBtnsD[activeIndex].textContent;
}