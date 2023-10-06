alert('Boas vindas ao jogo do número secreto!');
let maximoValor = 200;
let numeroSecreto = parseInt(Math.random() * maximoValor + 1);
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt(`Escolha um número de 1 a ${maximoValor}`);

    if (chute == numeroSecreto) {
        break;
    } else {
        if (numeroSecreto > chute) {
            alert(`Você errou, o número secreto é maior que ${chute}`);

        } else {
            alert(`Você errou, o número secreto é menor que ${chute}`);
            }
    }
    tentativas++
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);
