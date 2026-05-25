document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contato");
    const feedback = document.getElementById("feedback");

    form.addEventListener("submit", (event) => {
        // Impede a página de recarregar
        event.preventDefault();

        // Captura os valores digitados (pronto para enviar para uma API no futuro)
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const mensagem = document.getElementById("mensagem").value;

        // Validação simples
        if (nome && email && mensagem) {
            // Mostra a mensagem de sucesso
            feedback.classList.remove("hidden");
            
            // Limpa o formulário
            form.reset();

            // Esconde o feedback após 5 segundos
            setTimeout(() => {
                feedback.classList.add("hidden");
            }, 5000);
        }
    });
});