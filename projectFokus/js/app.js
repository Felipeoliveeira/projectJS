const html = document.querySelector('html');
const focoBt = document.querySelector('.app__card-button--foco');
const curtoBt = document.querySelector('.app__card-button--curto');
const longoBt = document.querySelector('.app__card-button--longo');
const imagem = document.querySelector('.app__image');
const tituloDescanso = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const inputMusica = document.querySelector('.toggle-checkbox');
const arquivoSomFoco = new Audio('./sons/luna-rise-part-one.mp3');
const botaoContagem = document.querySelector('.app__card-primary-button');


let tempoDecorridoEmSegundos = 5;

arquivoSomFoco.loop = true

inputMusica.addEventListener('change', () => {
    if (arquivoSomFoco.paused) {
        arquivoSomFoco.play();
        arquivoSomFoco.currentTime = 2
    } else {
        arquivoSomFoco.pause();
    }
})

focoBt.addEventListener('click', () => {
    alterarContexto('foco');
    focoBt.classList.add('active');
})
curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto');
    curtoBt.classList.add('active');
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo');
    longoBt.classList.add('active');
})

function alterarContexto(contexto) {
    botoes.forEach(function (contexto) {
        contexto.classList.remove('active');
    })
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

const contagemRegressiva = () => {
    tempoDecorridoEmSegundos -= 1;
    console.log('temportizador' + tempoDecorridoEmSegundos);
}

botaoContagem.addEventListener('click', contagemRegressiva)