let html = document.querySelector('html');
let focoBt = document.querySelector('app__card-button--foco');
let curtoBt = document.querySelector('app__card-button--curto');
let longoBt = document.querySelector('app__card-button--longo');

focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco');
})
curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
})