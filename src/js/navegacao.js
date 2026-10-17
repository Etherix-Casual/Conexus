/* Melhora a navegação por âncora e oferece retorno ao início. */
(() => {
    // Desloca a página suavemente até a âncora solicitada.
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", (evento) => {
            const seletor = link.getAttribute("href");
            if (!seletor || seletor === "#") return;
            const destino = document.querySelector(seletor);
            if (!destino) return;
            evento.preventDefault();
            destino.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    // Exibe o atalho quando a página já rolou além do início.
    const botaoTopo = document.createElement("button");
    botaoTopo.id = "voltar-topo";
    botaoTopo.type = "button";
    botaoTopo.setAttribute("aria-label", "Voltar ao topo");
    botaoTopo.textContent = "↑";
    document.body.appendChild(botaoTopo);

    const atualizarVisibilidade = () => {
        botaoTopo.classList.toggle("visivel", window.scrollY > 400);
    };
    window.addEventListener("scroll", atualizarVisibilidade, { passive: true });
    botaoTopo.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
    atualizarVisibilidade();
})();
