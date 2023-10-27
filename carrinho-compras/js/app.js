let valorTotal = 0;
limpar();
function adicionar() {
    // recuperar nome e quantidade e valor do produto
    let produtoEscolhido = document.getElementById('produto').value;
    let quantidadeProduto = document.querySelector('.quantidade-input').value;
    let nomeProduto = produtoEscolhido.split('-')[0];
    let valorProduto = produtoEscolhido.split('R$')[1];
    // calcular o preco, subtotal
    let preco = quantidadeProduto * valorProduto;
    let listaCarrinho = document.getElementById('lista-produtos');
    // adicionar carrinho
    listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidadeProduto}x</span> ${nomeProduto} <span class="texto-azul">R$${valorProduto}</span>
    </section>`;
    // valor total
    valorTotal = valorTotal + preco;
    let CampoValorTotal = document.getElementById('valor-total');
    CampoValorTotal.innerHTML = `R$ ${valorTotal}`;
    document.querySelector('.quantidade-input').value = 0;
}

function limpar(){
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerHTML = `R$ ${valorTotal}`;
    valorTotal = 0;
} 