const botaoDinamico = document.querySelector('.btn-dinamico');
const sobreMim = document.querySelector('#sobre-mim');

if (botaoDinamico && sobreMim) {
    botaoDinamico.addEventListener('click', () => {
        const estaAberto = botaoDinamico.getAttribute('aria-expanded') === 'true';

        botaoDinamico.setAttribute('aria-expanded', String(!estaAberto));
        sobreMim.hidden = estaAberto;
        botaoDinamico.textContent = estaAberto ? 'Sobre mim' : 'Fechar sobre mim';
    });
}
