
import './styles.css';
import itemsColection from './menu.json';
import cardTpl from "../template.hbs";

const cardsMarkup = createCardsMarkup(itemsColection);

const menu = document.querySelector('.js-menu');
const switchBtn = document.querySelector('.theme-switch__toggle');

// додаємо розмітку а html
menu.insertAdjacentHTML('beforeend', cardsMarkup);
// змінюємо тему сторінки
switchBtn.addEventListener("change", onCheckBoxClick);

// функ. для створення розмітки
function createCardsMarkup(item) {
    return cardTpl(item);
}


const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme"
};
;

// функія для зміни теми на сторінці
function onCheckBoxClick() {
    if (switchBtn.checked) {
        document.body.classList.add(Theme.DARK);
        document.body.classList.remove(Theme.LIGHT);
        localStorage.setItem("theme", Theme.DARK);
    }
    else {
        document.body.classList.add(Theme.LIGHT);
        document.body.classList.remove(Theme.DARK);
        localStorage.setItem("theme", Theme.LIGHT);
    }
}

// збереження теми сторн. при перезавантаженні
const themeLocalStorage = localStorage.getItem('theme');
if (themeLocalStorage === Theme.DARK) {
  document.body.classList.add(Theme.DARK);
  switchBtn.checked = true;
}
  else {
    document.body.classList.add(Theme.LIGHT);
  }


