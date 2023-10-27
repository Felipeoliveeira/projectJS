function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let qtd = document.getElementById('qtd').value;
    let qtdDisponivel = document.getElementById(`qtd-${tipo}`).textContent;
    let decremento = qtdDisponivel - qtd;
    if ( qtdDisponivel > 0 & qtd < qtdDisponivel) {
        document.getElementById(`qtd-${tipo}`).innerHTML = decremento;
        alert('Compra feita com sucesso')
    } else {
        alert('Tipo ou quantidade indisponível')
        console.log(qtdDisponivel)
    }
}
