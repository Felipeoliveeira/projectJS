const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const imagem = document.querySelector('.app__image');
const tituloDescanso = document.querySelector('.app__title');
const subTituloDescanso = document.querySelector('.app__title-strong');
focoBt.addEventListener('click', () => {
    alterarContexto('foco');
})
curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto');
    tituloDescanso.innerHTML = 'Que tal dar uma respirada?';
    subTituloDescanso.textContent = 'Faça uma pausa curta.'
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo');
})

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto);
    imagem.setAttribute('src', `./imagens/${contexto}.png`)
}