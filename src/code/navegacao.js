// Onde os links vão ser inseridos.
// Por padrão, procura um elemento com id="nav".
function obterAlvo(id) {
  return document.getElementById(id || "nav");
}

// Cria e insere um link.
//   nome     -> texto visível
//   endereco -> href (pode ser absoluto ou relativo, você decide)
//   id       -> opcional: id do container. Se omitido, usa "nav"
function add_link(nome, endereco, id) {
  const alvo = obterAlvo(id);
  if (!alvo) {
    console.warn('add_link: container não encontrado:', id || "nav");
    return;
  }

  const a = document.createElement("a");
  a.href        = endereco;
  a.textContent = nome;
  a.className   = "cartao-navegacao";

  alvo.appendChild(a);
}