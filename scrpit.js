/* botões do site */

const buttonMenu = document.querySelector(".button-menu-ative")
const menu = document.querySelector(".navigation-bar")
buttonMenu.addEventListener('click', () => {
    menu.classList.toggle("navigation-bar-active")
})

const changeTheme = document.querySelector(".btn-light");
changeTheme.addEventListener("change", () => {
    document.body.classList.toggle("dark")
})

const buttonDevCard = document.querySelector(".button-dev-card")
const modal = document.querySelector("dialog")
const buttonCloseDevCard = document.querySelector(".button-close-dev-card")
buttonDevCard.addEventListener("click", () => {
    modal.showModal()
})
buttonCloseDevCard.addEventListener("click", () => {
    modal.close()
})



/* capturando a data atual do sistema */
let anoAtual = new Date().getFullYear()
document.querySelector(".current-date").textContent = anoAtual

/*========================================página serviços=========================*/

const button = document.querySelector(".btn-card");
const showText = document.querySelector(".dnone");

button.addEventListener('click', () => {
    showText.classList.toggle('dnone');
    button.classList.toggle('btn-card-hide')

    /*if(button.style.display !== "none"){
        button.textContent="-"
    } else { button.textContent="+"
    }
    */
    if (showText.classList.contains('dnone')) {
        button.textContent = "+";
    } else {
        button.textContent = "-";
    }
})
