const loginForm = document.getElementById("loginForm");
const alerta = document.getElementById("alerta");

loginForm.addEventListener("submit", (event) => {
    event.preventDefault(); // previne que a página seja recarregada

    const username = loginForm.elements.username.value;
    const password = loginForm.elements.password.value;

    // Verifica se as credenciais de login são válidas
    if (username === "Sarita" && password === "princesa") {
        // Credenciais válidas, redireciona o usuário para a página principal
        window.location.href = "principal.html";
    } else {
        // Credenciais inválidas, exibe uma mensagem de erro para o usuário
        alerta.classList.add("alerta");
        alerta.textContent = "Login e senha inválidas. Por favor, tente novamente.";
    }
});