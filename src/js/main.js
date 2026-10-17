/* Cuida da interação de cartão, curtida e compartilhamento. */
(() => {
    // Atualiza a posição do brilho ao mover o ponteiro sobre o cartão.
    document.querySelectorAll("[data-card]").forEach((cartao) => {
        cartao.addEventListener("mousemove", (evento) => {
            const limite = cartao.getBoundingClientRect();
            cartao.style.setProperty("--mx", `${evento.clientX - limite.left}px`);
            cartao.style.setProperty("--my", `${evento.clientY - limite.top}px`);
        });
    });

    // Mantém a curtida separada para cada artigo neste navegador.
    const materia = document.body.dataset.materia;
    const artigo = document.body.dataset.artigo;
    if (!materia || !artigo) return;

    const chaveContagem = `conexus:curtida:${materia}:${artigo}`;
    const chaveEstado = `conexus:curtida-estado:${materia}:${artigo}`;
    const botaoCurtir = document.getElementById("botao-curtir");
    const contador = document.getElementById("contador-curtida");
    const rotuloCurtir = botaoCurtir?.querySelector("[data-rotulo-curtida]");
    let contagem = Math.max(0, Number.parseInt(localStorage.getItem(chaveContagem) || "0", 10) || 0);
    let curtido = localStorage.getItem(chaveEstado) === "true";

    const atualizarInterfaceCurtida = (total, estado) => {
        if (!botaoCurtir || !contador || !rotuloCurtir) return;
        contador.textContent = `${total} pessoa curtiu`;
        botaoCurtir.classList.toggle("liked", estado);
        botaoCurtir.setAttribute("aria-pressed", String(estado));
        botaoCurtir.setAttribute("aria-label", estado ? "Descurtir artigo" : "Curtir artigo");
        rotuloCurtir.textContent = estado ? "Curtido" : "Curtir";
    };

    atualizarInterfaceCurtida(contagem, curtido);

    botaoCurtir?.addEventListener("click", () => {
        curtido = !curtido;
        contagem = Math.max(0, contagem + (curtido ? 1 : -1));
        localStorage.setItem(chaveContagem, String(contagem));
        localStorage.setItem(chaveEstado, String(curtido));
        atualizarInterfaceCurtida(contagem, curtido);
        if (typeof botaoCurtir.animate === "function") {
            botaoCurtir.animate(
                [{ transform: "scale(1)" }, { transform: "scale(0.92)" }, { transform: "scale(1)" }],
                { duration: 220, easing: "ease-out" }
            );
        }
    });

    // Compartilha o endereço ou oferece uma cópia como alternativa.
    const botaoCompartilhar = document.getElementById("botao-compartilhar");
    botaoCompartilhar?.addEventListener("click", async () => {
        const titulo = document.querySelector(".article h2")?.textContent?.trim() || document.title;
        const rotulo = botaoCompartilhar.querySelector("[data-rotulo-compartilhar]");
        const original = rotulo?.textContent || "Compartilhar";
        try {
            if (navigator.share) {
                await navigator.share({ title: `Conexus · ${titulo}`, text: `${titulo} — no Conexus.`, url: location.href });
            } else {
                await navigator.clipboard.writeText(location.href);
                if (rotulo) rotulo.textContent = "Link copiado";
                window.setTimeout(() => {
                    if (rotulo) rotulo.textContent = original;
                }, 1600);
            }
        } catch (erro) {
            if (erro instanceof DOMException && erro.name === "AbortError") return;
            console.error("Não foi possível compartilhar o artigo.", erro);
            if (rotulo) rotulo.textContent = "Falha ao compartilhar";
            window.setTimeout(() => {
                if (rotulo) rotulo.textContent = original;
            }, 1600);
        }
    });
})();
