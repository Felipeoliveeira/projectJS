alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = 5;
let chute;
let tentativas = 1;

while (chute != numeroSecreto){
    chute = prompt('Escolha um número de 1 e 10');
    if (chute == numeroSecreto) {
        alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
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
