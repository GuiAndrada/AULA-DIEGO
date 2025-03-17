document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const correctEmail = "guiandradateixeira@eduvale.com";
    const correctPassword = "gui123";

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email === correctEmail && password === correctPassword) {
        alert("Login com sucesso!");
        localStorage.setItem("usuarioLogado", email);
    } else {
        alert("Erro ao logar. Por favor, verifique suas credenciais.");
    }
}); 