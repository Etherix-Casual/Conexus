# Conexus

Site estático de leitura em português brasileiro. A página inicial apresenta o Conexus; o catálogo reúne uma entrada por matéria e filtra por categoria; cada portal ordena artigo pela posição do card no HTML.

## Executar

Abra `index.html` em um navegador ou sirva a raiz do projeto com um servidor HTTP local. Não há dependência externa de JavaScript.

## Adicionar artigo

1. Crie o arquivo `material/{materia}/nome-do-artigo.html`, com nome minúsculo, hífen e sem acento.
2. Copie a casca de artigo existente e atualize `data-materia`, `data-artigo`, título, resumo e conteúdo. Mantenha `data-root="../../"` e a ordem de CSS e script.
3. Acrescente um `<a class="card">` no `material/{materia}/index.html`, na ordem de leitura desejada, apontando para `./nome-do-artigo.html`.

## Adicionar matéria

1. Crie `material/{materia}/index.html` e a subpasta da matéria para o artigo.
2. Use `data-root="../../"` e `data-materia="{materia}"` no portal.
3. Acrescente um card em `material/index.html` com `data-categoria` para que o filtro correspondente seja criado automaticamente; não é necessário alterar o cabeçalho.
4. Liste cada artigo no portal da matéria, na ordem de leitura, e use o mesmo nome da matéria no atributo `data-materia` do artigo.

O cabeçalho e o rodapé são montados por `src/js/cabecalho.js` e `src/js/rodape.js`. Os estilos compartilhados ficam em `src/css/`; interação geral fica em `src/js/`.

## Licença

O projeto usa a GNU General Public License v3.0 ou posterior. Consulte [LICENSE](./LICENSE) para o identificador e o link ao texto integral.
