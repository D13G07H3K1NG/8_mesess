// Lógica para el botón con frases aleatorias
document.getElementById('miBoton').addEventListener('click', function() {
    const frases = [
         "Eres el sol que ilumina mis mañanas.",
        "Cada día a tu lado es un regalo.",
        "Me haces increíblemente feliz.",
        "Eres mi persona favorita en el mundo.",
        "No puedo imaginar mi vida sin ti.",
        "Gracias por cada sonrisa y cada abrazo.",
        "Mi amor por ti crece cada día más.",
        "Eres todo lo que siempre soñé.",
        "Y aunque no siempre he entendido mis culpas y mis fracasos, en cambio, sé que en tus brazos el mundo tiene sentido.",
        "Te quiero como para escuchar tu risa toda la noche y dormir en tu pecho, sin sombras ni fantasmas. Te quiero como para no soltarte jamás.",
        "Tus ojos son mi conjuro contra la mala jornada.",
        "Estábamos, estamos, estaremos juntos. A pedazos, a ratos, a parpados, a sueños.",
        "Cinco minutos son suficientes para vivir una vida entera, así de relativo es el tiempo.",
        "De todas aquellas manos, la suya era la única que me transmitía la vida.",
        "Te espero cuando miremos al cielo de noche: tú allá, yo aquí.",
        "Que te quede bien claro. Donde acaba tu boca, ahí empieza la mía"
    ];
    
    // Selecciona una frase aleatoria del array
    const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
    
    // Muestra la frase en el párrafo
    const mensaje = document.getElementById('mensaje');
    mensaje.textContent = fraseAleatoria;
    mensaje.classList.remove('hidden');
});

// Lógica para los corazones flotantes (sin cambios)
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 8 + 's';
    heart.style.width = heart.style.height = Math.random() * 20 + 10 + 'px';
    
    document.body.appendChild(heart);
    
    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(createHeart, 300);