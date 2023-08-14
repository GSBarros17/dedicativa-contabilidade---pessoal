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

/* capturando a data atual do sistema */
let anoAtual = new Date().getFullYear()
document.querySelector(".atual-date").textContent = anoAtual

