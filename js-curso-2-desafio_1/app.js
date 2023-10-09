let titulo = document.querySelector('h1');
titulo.innerHTML = ('Hora do Desafio');

function verificarClique (){
    console.log('O botão foi clicado.');
}

function nomeCidade() {
    let cidade = prompt('Digite o nome de uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

function amoJS() {
    alert('Eu amo JavaScript');
}

function somaNumeros() {
    let valor1 = parseInt(prompt('Digite um valor qualquer:'));
    let valor2 = parseInt(prompt('Digite um outro valor qualquer:'));
    let resultado = valor1 + valor2;
    alert(`${valor1} + ${valor2} = ${resultado}`)
}
