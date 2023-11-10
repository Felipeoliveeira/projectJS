const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const imagem = document.querySelector('.app__image');
const tituloDescanso = document.querySelector('.app__title');


focoBt.addEventListener('click', () => {
    alterarContexto('foco');

})
curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto');
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo');
})

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto);
    imagem.setAttribute('src', `./imagens/${contexto}.png`);
    focoBt.classList.remove("active")
    switch (contexto) {
        case 'foco':
            tituloDescanso.innerHTML =`Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case 'descanso-curto': 
            tituloDescanso.innerHTML = `
            Que tal dar uma respirada?<br>
            <strong class="app__title-strong">faça uma pausa curta.</strong>
            `
            break;
            case 'descanso-longo':
                tituloDescanso.innerHTML = `
                Que tal dar uma respirada?<br>
                <strong class="app__title-strong">faça uma pausa longa.</strong>
                `
        default:
            break;
    }


}