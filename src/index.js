// import { saludar } from './js/componentes.js';
import './styles.css';

const btnAboutUs = document.querySelector("#btnAboutUs");

btnAboutUs.addEventListener("click", async(event) => {
    let btn = event.target;
    if (btn.classList.contains('active')) {
        return;
    } else {
        await removeActiveBtnAbout();
        btn.classList.add("active");
        document.querySelector(`#${btn.dataset.id}`).classList.remove("d-none");
    }
});

const removeActiveBtnAbout = async() => {
    for (let btn of btnAboutUs.children) {
        if (btn.classList.contains("active")) {
            btn.classList.remove("active");
            document.querySelector(`#${btn.dataset.id}`).classList.add("d-none");
        }
    }
}




// const nombre = 'Fernando';

// saludar( nombre );