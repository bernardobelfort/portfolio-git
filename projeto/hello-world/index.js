// Projeto Hello-World — Copa 2026

function exibirSelecao(pais, grupo) {
  return `${pais} está no Grupo ${grupo} da Copa 2026!`;
}

function exibirArtilheiro(nome, gols) {
  return `Artilheiro: ${nome} com ${gols} gols marcados.`;
}

function exibirPlacar(time1, gols1, time2, gols2) {
  return `${time1} ${gols1} x ${gols2} ${time2}`;
}

console.log(exibirSelecao("Brasil", "D"));
console.log(exibirSelecao("Argentina", "A"));
console.log(exibirArtilheiro("Vinicius Jr", 5));
console.log(exibirArtilheiro("Mbappé", 4));
console.log(exibirPlacar("Brasil", 3, "Argentina", 1));
console.log(exibirPlacar("França", 2, "Alemanha", 2));