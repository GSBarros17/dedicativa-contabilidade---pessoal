/*============================== botão do darkmode ================================================*/

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

/*================================= botão contato ===========================================*/

const sendMessage = document.querySelector(".form-btn")
function alertSucess(){
    Swal.fire(
        'Mensagem enviada!',
        'Logo entraremos em contato!',
        'success'
      )
}

function alertErro(){  
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Preencha todos os campos corretamente!'
    })
}

function checkForm(event){
    const nameForm = document.querySelector(".name-form").value
    const emailForm = document.querySelector(".email-form").value
    const textForm = document.querySelector(".text-form").value
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    if(nameForm === "" || !regexEmail.test(emailForm) || textForm === ""){
        event.preventDefault();
        return alertErro();
    } else {
        return alertSucess();
    }
}
sendMessage.addEventListener("click", (event)=> {
    checkForm(event);
})




