const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const confirmSenha = document.getElementById('confirm-senha')

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    const usernameValue = username.value
    const emailValue = email.value
    const senhaValue = senha.value
    const confirmSenhaValue = confirmSenha.value

    // Conferência do Nome do Usuário
    if(usernameValue == ""){
        setErrorFor(username, "O nome de usuário é obrigatório.");
    }
    else{
        setSuccessFor(username);
    }

    // Conferência do e-mail
    if(emailValue == ""){
        setErrorFor(email, "O e-mail é obrigatório.");
    }
    else if(!checkEmail(emailValue)){
        setErrorFor(email, "Por favor, insira um e-mail válido.");
    }
    else{
        setSuccessFor(email)
    }

    // Conferência da senha
    if(senhaValue === ""){
        setErrorFor(senha, "Insira uma senha.");
    }
    else{
        setSuccessFor(senha)
    }

    // Conferência da confirmação de senha
    if(senhaValue != confirmSenhaValue){
        setErrorFor(confirmSenha, "As senhas devem ser iguais.");
        setErrorFor(senha, "");
        setSuccessFor(confirmSenhaValue);
    }
    else{
        setSuccessFor(confirmSenha);
    }
}

function setErrorFor(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;

    formControl.className = "form-control error";
}

function setSuccessFor(input){
    const formControl = input.parentElement;

    formControl.className = "form-control success";
}

function checkEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}