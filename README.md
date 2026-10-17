# Conexus

Site estático de leitura em português brasileiro. A página inicial apresenta quatro matérias; cada matéria tem um portal próprio e uma lista de artigo em ordem numérica.

## Executar

Abra `index.html` em um navegador ou sirva a raiz do projeto com um servidor HTTP local. Não há dependência externa de JavaScript.

## Adicionar artigo

1. Crie o arquivo `material/{materia}/NN-nome-do-artigo.html`, com nome minúsculo, hífen e sem acento.
2. Copie a casca de artigo existente e atualize `data-materia`, `data-artigo`, título, resumo e conteúdo. Mantenha `data-root="../../"` e a ordem de CSS e script.
3. Acrescente um `<a class="card">` no `material/{materia}/index.html`, na ordem numérica, apontando para `./NN-nome-do-artigo.html`.

## Adicionar matéria

1. Crie `material/{materia}/index.html` e a subpasta da matéria para o artigo.
2. Use `data-root="../../"` e `data-materia="{materia}"` no portal.
3. Acrescente um card em `index.html` e um link no cabeçalho de `src/js/cabecalho.js`.
4. Liste cada artigo do novo portal em ordem numérica e use o mesmo nome da matéria no atributo `data-materia` do artigo.

O cabeçalho e o rodapé são montados por `src/js/cabecalho.js` e `src/js/rodape.js`. Os estilos compartilhados ficam em `src/css/`; interação geral fica em `src/js/`.

## Licença

O projeto usa a GNU General Public License v3.0 ou posterior. Consulte [LICENSE](./LICENSE) para o identificador e o link ao texto integral.
