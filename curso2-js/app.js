let listaDeNumerosSorteados = [];
let limiteNumeroEscolhido = 10;
let numeroSecreto = contadorNumeroSecreto();
let tentativas = 1;

console.log(numeroSecreto);

function exibirTextoNaTela(tag,texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    (texto, "Brazilian portuguese female", {rate:1.2});
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function exibirMensagemIncial() {
    exibirTextoNaTela('h1','Jogo do Número Secreto');
    exibirTextoNaTela('p', 'Escolha um número, de 1 a 10:');
}
exibirMensagemIncial();

function verificarChute(){
    let chute = document.querySelector('.container__input').value;
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemAcertou = `Parabéns, você acertou o número secreto com ${tentativas} ${palavraTentativa}.`
        if ( chute == numeroSecreto) {
            exibirTextoNaTela('p', mensagemAcertou);
            exibirTextoNaTela('h1', 'Acertou!');
            document.getElementById('reiniciar').removeAttribute('disabled');
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
    limpaCampo();
}

function contadorNumeroSecreto() {
    let numeroEscolhido = parseInt(Math.random() * limiteNumeroEscolhido + 1);
    let quantidadeElementosLista = listaDeNumerosSorteados.length;
    if (quantidadeElementosLista === limiteNumeroEscolhido){
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return contadorNumeroSecreto();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limpaCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function botaoReiniciar() {
    exibirMensagemIncial();
    numeroSecreto = contadorNumeroSecreto();
    console.log(numeroSecreto);
    document.getElementById('reiniciar').setAttribute('disabled',false);
}
