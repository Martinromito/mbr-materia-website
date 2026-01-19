// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
const animatedElements = document.querySelectorAll('.product-card, .process-step, .why-card, .contact-card');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Load product images from uploaded image
// Replace these paths with your actual product photos
const productImages = {
    'product-1': 'images/florero-alto.jpg',
    'product-2': 'images/porta-velas.jpg',
    'product-3': 'images/plato-decorativo.png',
    'product-4': 'images/plato-ovalado.jpg',
    'product-5': 'images/porta-velas.jpg',
    'product-6': 'images/florero-bajo.jpg',
};

// Apply images to products
Object.keys(productImages).forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.style.backgroundImage = `url('${productImages[id]}')`;
    }
});

// About section image - usando la foto grupal de productos
const aboutImage = document.getElementById('about-image');
if (aboutImage) {
    aboutImage.style.backgroundImage = `url('images/logo.jpg')`;
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero-content');
    if (hero && scrolled < window.innerHeight) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled / window.innerHeight);
    }
});

// Add stagger animation to product cards
const productCards = document.querySelectorAll('.product-card');
productCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

