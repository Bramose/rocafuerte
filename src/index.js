// import { saludar } from './js/componentes.js';
import './styles.css';

const btnAboutUs = document.querySelector("#btnAboutUs");

btnAboutUs.addEventListener("click", (event) => {
    let btn = event.target;
    if (btn.classList.contains('active')) {
        return;
    } else {
        if (removeActiveBtnAbout()) {
            btn.classList.add("active");
            document.querySelector(`#${btn.dataset.id}`).classList.remove("d-none");
        }
    }
});

const removeActiveBtnAbout = () => {
    for (let btn of btnAboutUs.children) {
        if (btn.classList.contains("active")) {
            btn.classList.remove("active");
            document.querySelector(`#${btn.dataset.id}`).classList.add("d-none");
            return true;
        }
    }
}




// const nombre = 'Fernando';

// saludar( nombre );