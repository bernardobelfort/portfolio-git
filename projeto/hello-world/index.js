// Projeto Hello-World — Copa 2026

function exibirSelecao(pais, grupo) {
  return `${pais} está no Grupo ${grupo} da Copa 2026!`;
}

function exibirArtilheiro(nome, gols) {
  return `${nome} é o artilheiro com ${gols} gols.`;
}

console.log(exibirSelecao("Brasil", "D"));
console.log(exibirSelecao("Argentina", "A"));
console.log(exibirArtilheiro("Vinicius Jr", 5));