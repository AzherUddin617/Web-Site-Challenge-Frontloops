const submitBtn = document.getElementById('submit-btn');
const submitInput = document.getElementById('submit-input');
const tabsDiv = document.getElementById('content-tabs');
const tabs = tabsDiv.querySelectorAll('.tab-text');
const activeTabText = document.getElementById('active-tab-text');

let activeTab = Array.from(tabs).find(tab => tab.classList.contains('active'));
resetActiveTabText();

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  let index = submitInput.value - 1;
  if (index < 0 || index >= tabs.length) {
    alert("Invalid index!");
  }
  else if (!tabs[index].classList.contains('active')) {
    tabs[index].classList.add('active');
    activeTab.classList.remove('active');
    activeTab = tabs[index];
    resetActiveTabText();
  }
  submitInput.value = null;
});

tabsDiv.addEventListener('click', e => {
  let target = e.target;
  if (target.classList.contains('tab-text') && target !== activeTab) {
    target.classList.add('active');
    activeTab.classList.remove('active');
    activeTab = target;
    resetActiveTabText();
  }
});

function resetActiveTabText() {
  let tabTag = activeTab.textContent;
  tabTag = tabTag[0].toUpperCase() + tabTag.slice(1, tabTag.length).toLowerCase();
  activeTabText.textContent = `${tabTag} content`;
}