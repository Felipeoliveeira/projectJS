alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
let chute = prompt('Escolha um número de 1 e 10');

if (chute == numeroSecreto) {
    alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto}`);
}
else{
    alert(`Você errou, o número certo é ${numeroSecreto} e você escolheu ${chute}!`)
}