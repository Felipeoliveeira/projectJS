function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtdCadeiras = document.getElementById('qtd').value;
    let qtdDisponivel = document.getElementById(`qtd-${tipo}`).textContent;
    let decremento = qtdDisponivel - qtdCadeiras;
    if ( qtdDisponivel > 0 & qtdCadeiras < qtdDisponivel) {
        document.getElementById(`qtd-${tipo}`).innerHTML = decremento;
        alert('FUNCIONOU DE PRIMA PIVETE!')
    } else {
        alert('Quantidade de ingressos indisponível')
        alert('FUNCIONOU DE PRIMA PIVETE!')
    }
    console.log(decremento)
}