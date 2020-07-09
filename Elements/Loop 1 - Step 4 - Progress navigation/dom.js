const classNames = {
  activeState: "active",
  contentLeftBtn: "content__list-btn",
  contentListNo: "list-no",
  contentItem: "content__item",
  btnNext: "btn-next",
  btnPrev: "btn-prev",
  btnEnd: "btn-end"
};

const ids = {
  contentLeft: "content__left",
  contentRight: "content__right",
  contentEnd: "content-end",
  btnEnd: "btn-end"
};

const contentLeft = document.getElementById(ids.contentLeft);
const contentLeftBtns = Array.from(contentLeft.querySelectorAll('.' + classNames.contentLeftBtn));
const contentRight = document.getElementById(ids.contentRight);
const contentItems = contentRight.querySelectorAll('.' + classNames.contentItem);
const contentEnd = document.getElementById(ids.contentEnd);

let currentIndex = 0, lenght = contentLeftBtns.length;

contentLeft.addEventListener('click', e => {
  let target = e.target;

  if (target.classList.contains(classNames.contentListNo))
    target = target.parrentElement;

  if (target.classList.contains(classNames.contentLeftBtn)) {
    let index = contentLeftBtns.indexOf(target);

    if (index !== currentIndex && index <= currentIndex+1) {
      changeOfContent(index);
    }
  }
});

contentRight.addEventListener('click', e => {
  let target = e.target;

  if (target.classList.contains(classNames.btnNext)) {
    changeOfContent(currentIndex + 1);
  }
  else if (target.classList.contains(classNames.btnPrev)) {
    changeOfContent(currentIndex - 1);
  }
  else if (target.classList.contains(classNames.btnEnd)) {
    contentItems[currentIndex].classList.remove(classNames.activeState);
    contentEnd.classList.add(classNames.activeState);
  }
});

function changeOfContent(index) {
  if (contentEnd.classList.contains(classNames.activeState)) {
    contentItems[currentIndex].classList.add(classNames.activeState);
    contentEnd.classList.remove(classNames.activeState);
  }

  if (index === currentIndex+1) {
    contentLeftBtns[index].classList.add(classNames.activeState);
    contentItems[currentIndex].classList.remove(classNames.activeState);
    contentItems[index].classList.add(classNames.activeState);
  }
  else {
    contentItems[currentIndex].classList.remove(classNames.activeState);
    contentItems[index].classList.add(classNames.activeState);

    for (let i=index+1; i<=currentIndex; i++) {
      contentLeftBtns[i].classList.remove(classNames.activeState);
    }
  }
  currentIndex = index;
}