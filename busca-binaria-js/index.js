// inicialização das variáveis
let nivel = parseInt(prompt("Digite o nível de dificuldade: 1, 2 ou 3"));
let tentativas = 0;
// gerar número aleatório
let numeroSecreto = parseInt(Math.floor(Math.random() * 100));
// definir o número de tentativas de acordo com o nível
if (nivel === 1) {
  tentativas = 7;
} else if (nivel === 2) {
  tentativas = 5;
} else if (nivel === 3) {
  tentativas = 3;
} else {
  alert("Nível inválido");
}
// loop principal do jogo
for (let i = 1; i <= tentativas; i++) {
  let chute = parseInt(prompt("Digite um número entre 0 e 100:"));
  alert(`O número chutado foi: ${chute}`);
  if (chute === numeroSecreto) {
    alert("Parabéns, você acertou!");
    document.write(
      `<h2>Parabéns, você acertou!</h2><br><h3>O número secreto era: ${numeroSecreto}</h3>`
    );
    break;
  } else if (chute > numeroSecreto) {
    alert(
      `O número chutado foi maior que o número secreto \nTentativa ${i} de ${tentativas}`
    );
  } else if (chute < numeroSecreto) {
    alert(
      `O número chutado foi menor que o número secreto \nTentativa ${i} de ${tentativas}`
    );
  }
  if (i === tentativas) {
    alert("Suas tentativas acabaram. O jogo acabou!");
    document.write(
      `<h2>Suas tentativas acabaram. O jogo acabou!</h2><br><h3>O número secreto era: ${numeroSecreto}</h3>`
    );
  }
}