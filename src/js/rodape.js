/* Monta o rodapé compartilhado. */
(() => {
    const montagem = document.querySelector('[data-include="footer"]');
    if (!montagem) return;

    const raiz = document.body.dataset.root || "";
    const ano = new Date().getFullYear();
    montagem.innerHTML = `
        <footer class="footer">
            <div>
                <div class="footer-marca">conexus<em>.</em></div>
                <p>Um espaço para conectar ideia e conhecimento.</p>
            </div>
            <nav class="footer-link" aria-label="Navegação de rodapé">
                <a href="${raiz}material/filosofia/index.html">Matéria</a>
                <a href="${raiz}sobre/index.html">Sobre</a>
                <a href="https://github.com/Etherix-Casual/Conexus" target="_blank" rel="noopener noreferrer">GitHub</a>
            </nav>
            <div class="footer-base">© ${ano} Conexus</div>
        </footer>`;
})();
