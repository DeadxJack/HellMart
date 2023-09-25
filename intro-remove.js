// Seleciona o elemento com a classe 'fundo-inicial'
var elemento = document.querySelector('.fundo-inicial');

// Contador para o número de animações concluídas
var animacoesConcluidas = 0;

// Adiciona um ouvinte de eventos para o evento 'animationend'
elemento.addEventListener('animationend', function() {
    // Incrementa o contador
    animacoesConcluidas++;

    // Se ambas as animações foram concluídas
    if (animacoesConcluidas === 2) {
        // Remove o elemento do DOM
        this.remove();
    }
});
