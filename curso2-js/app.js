let numeroSecreto = contadorNumeroSecreto();
console.log(numeroSecreto);

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1','Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número, de 1 a 10:');

function verificarChute(){
    let chute = document.querySelector('.container__input').value;
    // if ( chute == numeroSecreto) {
    //     exibirTextoNaTela('p', 'Parabéns, você acertou o número secreto, vamos novamente!');
    // }else{
    //     exibirTextoNaTela('p', 'Errrrrrou!!!');
    // }
    console.log(chute == numeroSecreto);
}

function contadorNumeroSecreto() {
    return parseInt(Math.random() * 10 + 1);
}
