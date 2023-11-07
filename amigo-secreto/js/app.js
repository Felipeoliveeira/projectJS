let amigos = [];
function adicionar() {
    let inputNomeAmigo = document.getElementById('nome-amigo');
    let listaDeAmigos = document.getElementById('lista-amigos');

    if(amigos.includes(inputNomeAmigo.value)){
        alert('Nome repetido, favor verificar!');
        return;
    } 

    amigos.push(inputNomeAmigo.value);
    console.log(amigos)
    if( inputNomeAmigo.value == ''){
        alert('Insira o nome do Amigo');
        return;
    }
    if ( listaDeAmigos.textContent == '' ) {
        listaDeAmigos.textContent = inputNomeAmigo.value;
    } else {
        listaDeAmigos.textContent = listaDeAmigos.textContent + ', ' + inputNomeAmigo.value;
    }
    inputNomeAmigo.value = '';
}

function sortear() {
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    if(amigos.length < 4){
        alert('Quantidade mínima para sorteio é de 4 amigos.');
        return;
    }
    for (let i = 0; i < amigos.length; i++) {
        if (i == amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[0] + '<br/>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] +' --> ' +amigos[i + 1] + '<br/>';
        }
    }
}

function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}

function reiniciar() {
    amigos = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').textContent = '';
}