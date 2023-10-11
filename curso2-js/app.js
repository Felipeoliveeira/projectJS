let numeroSecreto = contadorNumeroSecreto();
let tentativas = 1;
console.log(numeroSecreto);

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1','Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número, de 1 a 10:');

function verificarChute(){
    let chute = document.querySelector('.container__input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemAcertou = `Parabéns, você acertou o número secreto com ${tentativas} ${palavraTentativa}.`
        if ( chute == numeroSecreto) {
            exibirTextoNaTela('p', mensagemAcertou);
            exibirTextoNaTela('h1', 'Acertou!');
        }else{
            if( chute > numeroSecreto){
                exibirTextoNaTela('p', `O número secreto é menor que ${chute}`);
            }else{
                if ( chute < numeroSecreto){
                    exibirTextoNaTela('p', `O número secreto é maior que ${chute}`)
                }
            }
        }
    tentativas++;
}

function contadorNumeroSecreto() {
    return parseInt(Math.random() * 10 + 1);
}
