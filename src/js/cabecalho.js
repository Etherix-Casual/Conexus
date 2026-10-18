/* Monta o cabeçalho compartilhado e indica a página atual. */
(() => {
    const montagem = document.querySelector('[data-include="header"]');
    if (!montagem) return;

    const raiz = document.body.dataset.root || "";
    montagem.innerHTML = `
        <header class="header">
            <a class="logo" href="${raiz}index.html" aria-label="Conexus, início">
                <span class="logo-mark" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round">
                        <circle cx="6" cy="6" r="2.5"></circle><circle cx="18" cy="6" r="2.5"></circle><circle cx="12" cy="18" r="2.5"></circle>
                        <path d="M8 7.5 10.5 15.5M16 7.5 13.5 15.5"></path>
                    </svg>
                </span>
                <span class="logo-text">conexus<em>.</em></span>
            </a>
            <nav class="nav" aria-label="Navegação principal">
                <a href="${raiz}index.html">Início</a>
                <a href="${raiz}material/index.html">Matéria</a>
                <a href="${raiz}sobre/index.html">Sobre</a>
            </nav>
        </header>`;

    const pagina = document.body.dataset.page;
    const destinoAtivo = pagina === "catalogo" || pagina === "materia" || pagina === "artigo"
        ? `${raiz}material/index.html`
        : pagina === "sobre" ? `${raiz}sobre/index.html` : `${raiz}index.html`;
    const caminhoAtivo = new URL(destinoAtivo, location.href).pathname;

    montagem.querySelectorAll(".nav a").forEach((link) => {
        const caminho = new URL(link.href, location.href).pathname;
        if (caminho === caminhoAtivo) {
            link.classList.add("active");
            link.setAttribute("aria-current", "page");
        }
    });
})();
