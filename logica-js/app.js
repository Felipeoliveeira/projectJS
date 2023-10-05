alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = parseInt(Math.random() * 1000);
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt('Escolha um número de 1 e 1000');
    if (chute == numeroSecreto) {
        break;
    }
    else{
        if (numeroSecreto > chute){
            alert(`Você errou, o número secreto é maior que ${chute}`);
            prompt('Escolha um número de 1 e 10');

        }else{
            alert(`Você errou, o número secreto é menor que ${chute}`);
            prompt('Escolha um número de 1 e 10');

        }
    }
    tentativas++
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);
