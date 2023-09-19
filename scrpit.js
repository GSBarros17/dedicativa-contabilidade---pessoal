/*============================== botões do site ================================================*/

const buttonMenu = document.querySelector(".button-menu-ative")
const menu = document.querySelector(".navigation-bar")
buttonMenu.addEventListener('click', () => {
    menu.classList.toggle("navigation-bar-active")
})

function loadTheme(){
    const darkMode = localStorage.getItem("dark");

    if(darkMode){
        document.body.classList.toggle("dark")
    }
}

loadTheme()

const changeTheme = document.querySelector(".btn-light");
changeTheme.addEventListener("change", () => {
    document.body.classList.toggle("dark")

    localStorage.removeItem("dark")

    if (document.body.classList.contains("dark")){
        localStorage.setItem("dark", 1);
    }
})

/*========================= botão card-dev =================================================*/

const buttonDevCard = document.querySelector(".button-dev-card")
const modal = document.querySelector("dialog")
const buttonCloseDevCard = document.querySelector(".button-close-dev-card")
buttonDevCard.addEventListener("click", () => {
    modal.showModal()
})
buttonCloseDevCard.addEventListener("click", () => {
    modal.close()
})

/*================================= capturando a data atual do sistema ======================*/
let anoAtual = new Date().getFullYear()
document.querySelector(".current-date").textContent = anoAtual










