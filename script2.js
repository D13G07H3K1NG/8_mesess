document.addEventListener('DOMContentLoaded', () => {
    const sky = document.querySelector('.sky');
    const numberOfStars = 200; // Puedes cambiar el número de estrellas aquí

    function createStar() {
        const star = document.createElement('div');
        star.classList.add('star');

        // Tamaño aleatorio para que se vean diferentes
        const size = Math.random() * 2 + 1; // Entre 1px y 3px
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;

        // Posición aleatoria en todo el cielo
        star.style.top = `${Math.random() * 100}vh`;
        star.style.left = `${Math.random() * 100}vw`;

        // Velocidad de animación aleatoria para un efecto más natural
        const duration = Math.random() * 3 + 2; // Entre 2s y 5s
        star.style.animationDuration = `${duration}s`;

        // Retraso de animación aleatorio para que no parpadeen al mismo tiempo
        const delay = Math.random() * 5; // Hasta 5s
        star.style.animationDelay = `${delay}s`;

        sky.appendChild(star);
    }

    // Crea un loop para generar todas las estrellas
    for (let i = 0; i < numberOfStars; i++) {
        createStar();
    }
});