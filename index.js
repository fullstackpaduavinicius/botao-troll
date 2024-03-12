document.addEventListener('DOMContentLoaded', function () {
    const caixaPergunta = document.getElementById('caixaPergunta');
    const botaoNao = document.getElementById('botaoNao');

    function mostrarCaixaPergunta() {
        caixaPergunta.style.display = 'flex';
    }

    function esconderCaixaPergunta() {
        caixaPergunta.style.display = 'none';

        // Mover a caixa para uma posição aleatória na tela
        const novaPosicaoTop = Math.random() * (window.innerHeight - caixaPergunta.offsetHeight);
        const novaPosicaoLeft = Math.random() * (window.innerWidth - caixaPergunta.offsetWidth);

        caixaPergunta.style.top = novaPosicaoTop + 'px';
        caixaPergunta.style.left = novaPosicaoLeft + 'px';
    }

    document.getElementById('botaoSim').addEventListener('click', esconderCaixaPergunta);
    botaoNao.addEventListener('click', esconderCaixaPergunta);

    // Mostrar a caixa de pergunta após um breve atraso
    setTimeout(mostrarCaixaPergunta, 1000);
});
