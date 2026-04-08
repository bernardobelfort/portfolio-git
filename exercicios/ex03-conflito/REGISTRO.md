# Registro de Resolução de Conflito

## O que causou o conflito

O conflito aconteceu no arquivo `projeto/hello-world/index.js`. Duas branches foram criadas a partir do mesmo commit da main:

- `feat/placar-jogo` adicionou a função `exibirPlacar` e dois placares no final do arquivo
- `fix/artilheiro-atualizado` alterou o formato da função `exibirArtilheiro` e adicionou o Mbappé na lista

Quando a primeira branch foi mergeada na main e tentei mergear a segunda, o Git não conseguiu resolver automaticamente porque as duas branches modificaram o mesmo trecho do arquivo.

## Como decidi resolver

As duas mudanças faziam sentido e não se contradiziam, então optei por manter as alterações das duas branches. Combinei o código das duas versões manualmente no VS Code, removendo as marcações de conflito (`<<<<<<<`, `=======`, `>>>>>>>`).

## Como marquei o conflito como resolvido

Depois de editar o arquivo e salvar, rodei:

```bash
git add projeto/hello-world/index.js
git commit -m "fix: resolve conflito entre placar e artilheiros no index.js"
```