Hamburger()
DropDownMenu()
SliderValueChanger()

/* ! Enable hamburger */

function Hamburger() {
    const menu = document.querySelector('.menu');
    const hamburger = document.querySelector('.hamburger');
    const hamburgerElements = document.querySelectorAll('.hamburger__item');

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
        for (span of hamburgerElements) {
            span.classList.toggle("active");
        }
    });
}

/* ! Function to activate dropdown menu */

function DropDownMenu() {
    const dropdown = document.querySelector('.dropdown-menu');
    const title =  document.querySelector('.dropdown-menu__title');
    const list = document.querySelector('.dropdown-menu__list');
    const items= document.querySelectorAll('.dropdown-menu__item');

    dropdown.addEventListener("click", () => {
        dropdown.classList.toggle("active");
        list.classList.toggle("active");
    });

    items.forEach((e) => {
        e.addEventListener('click', () => {
            title.innerHTML = e.innerHTML
        });
    });
}

/* ! Function for changing the slider value */

function SliderValueChanger() {
    const value = document.querySelector('.slider__value');
    const input = document.querySelector('.slider__input');

    input.addEventListener('input', () => {
        value.textContent = `${input.value} %`;
    });
}