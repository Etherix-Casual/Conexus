/* Cuida da interação de cartão, filtro e compartilhamento. */
(() => {
    // Atualiza a posição do brilho ao mover o ponteiro sobre o cartão.
    document.querySelectorAll("[data-card]").forEach((cartao) => {
        cartao.addEventListener("mousemove", (evento) => {
            const limite = cartao.getBoundingClientRect();
            cartao.style.setProperty("--mx", `${evento.clientX - limite.left}px`);
            cartao.style.setProperty("--my", `${evento.clientY - limite.top}px`);
        });
    });

    // Cria os filtros a partir da categoria de cada cartão do catálogo.
    const filtroMateria = document.querySelector("[data-filtro-materia]");
    const gradeMateria = document.querySelector("[data-grade-materia]");
    if (filtroMateria && gradeMateria) {
        const cartoes = [...gradeMateria.querySelectorAll("[data-categoria]")];
        const categorias = [...new Set(cartoes.map((cartao) => cartao.dataset.categoria).filter(Boolean))];
        const opcoes = ["Tudo", ...categorias];

        opcoes.forEach((categoria, indice) => {
            const botao = document.createElement("button");
            botao.className = "filtro-materia-botao";
            botao.type = "button";
            botao.textContent = categoria;
            botao.setAttribute("aria-pressed", String(indice === 0));
            botao.addEventListener("click", () => {
                cartoes.forEach((cartao) => {
                    cartao.hidden = indice !== 0 && cartao.dataset.categoria !== categoria;
                });
                filtroMateria.querySelectorAll("button").forEach((opcao) => {
                    opcao.setAttribute("aria-pressed", String(opcao === botao));
                });
            });
            filtroMateria.appendChild(botao);
        });
    }

    // Copia o endereço atual do artigo.
    const botaoCompartilhar = document.getElementById("botao-compartilhar");
    botaoCompartilhar?.addEventListener("click", async () => {
        const rotulo = botaoCompartilhar.querySelector("[data-rotulo-compartilhar]");
        const original = rotulo?.textContent || "Compartilhar";
        try {
            await navigator.clipboard.writeText(location.href);
            if (rotulo) rotulo.textContent = "Link copiado";
            window.setTimeout(() => {
                if (rotulo) rotulo.textContent = original;
            }, 1600);
        } catch (erro) {
            console.error("Não foi possível copiar o link do artigo.", erro);
            if (rotulo) rotulo.textContent = "Falha ao copiar link";
            window.setTimeout(() => {
                if (rotulo) rotulo.textContent = original;
            }, 1600);
        }
    });
})();
