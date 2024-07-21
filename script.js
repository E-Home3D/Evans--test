// Fonction pour gérer l'animation de fade-in
function handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
}

// Écouteur d'événement pour le défilement
window.addEventListener('scroll', handleScrollAnimation);

// Appeler la fonction une fois au chargement de la page
handleScrollAnimation();

// Gestion du formulaire de contact
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Ici, vous pouvez ajouter le code pour envoyer les données du formulaire
        alert('Merci pour votre message ! Nous vous contacterons bientôt.');
        contactForm.reset();
    });
}

// Témoignages dynamiques
const testimonials = [
    { name: "Marie D.", text: "Grâce à CoachSportif, j'ai perdu 15 kilos en 6 mois et je me sens en pleine forme !" },
    { name: "Thomas L.", text: "Les séances personnalisées ont vraiment fait la différence dans ma préparation pour le marathon." },
    { name: "Sophie M.", text: "J'ai gagné en confiance et en force. Merci pour votre soutien constant !" }
];

const testimonialSlider = document.querySelector('.testimonial-slider');
if (testimonialSlider) {
    testimonials.forEach(testimonial => {
        const testimonialElement = document.createElement('div');
        testimonialElement.classList.add('testimonial');
        testimonialElement.innerHTML = `
            <blockquote>"${testimonial.text}"</blockquote>
            <cite>- ${testimonial.name}</cite>
        `;
        testimonialSlider.appendChild(testimonialElement);
    });
}

// Animation du header au défilement
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        document.querySelector('header').style.top = '-100px';
    } else {
        document.querySelector('header').style.top = '0';
    }
    lastScrollTop = scrollTop;
});
