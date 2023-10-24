function adicionar() {
    // recuperar nome e quantidade e valor do produto
    let produtoEscolhido = document.getElementById('produto').value;
    let quantidadeProduto = document.querySelector('.quantidade-input').value;
    let nomeProduto = produtoEscolhido.split('-')[0];
    let valorProduto = produtoEscolhido.split('R$')[1];
    console.log(nomeProduto);
    console.log(valorProduto);
    // calcular o preco, subtotal
    let valorSubtotal = quantidadeProduto * valorProduto;
    console.log(valorSubtotal);
    // adicionar carrinho
    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
    </section>`;
    // valor total
    let valorTotal = document.getElementById('valor-total');
    valorTotal.innerHTML = valorSubtotal + 1400;
}

function limpar(){
    
}