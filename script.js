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

/* ===========================
   SHOPPING CART LOGIC
   =========================== */
class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('mbr_cart')) || [];
        this.itemsContainer = document.getElementById('cart-items');
        this.cartBadge = document.getElementById('cart-badge');
        this.totalAmountEl = document.getElementById('cart-total-amount');
        this.checkoutBtn = document.getElementById('checkout-btn');
        this.drawer = document.getElementById('cart-drawer');
        this.overlay = document.getElementById('cart-overlay');
        this.toast = document.getElementById('toast');
        
        this.init();
    }

    init() {
        // Toggle Cart
        document.getElementById('cart-toggle').onclick = () => this.toggle(true);
        document.getElementById('cart-close').onclick = () => this.toggle(false);
        this.overlay.onclick = () => this.toggle(false);

        // Add to Cart Buttons
        document.querySelectorAll('.add-to-cart').forEach(btn => {
            btn.onclick = (e) => {
                const product = {
                    id: btn.dataset.id,
                    name: btn.dataset.name,
                    price: parseInt(btn.dataset.price),
                    quantity: 1
                };
                this.addItem(product);
            };
        });

        // Checkout Button
        this.checkoutBtn.onclick = () => this.handleCheckout();

        this.render();
    }

    toggle(show) {
        this.drawer.classList.toggle('active', show);
        this.overlay.classList.toggle('active', show);
        document.body.style.overflow = show ? 'hidden' : '';
    }

    addItem(product) {
        const existing = this.items.find(item => item.id === product.id);
        if (existing) {
            existing.quantity++;
        } else {
            this.items.push(product);
        }
        
        this.save();
        this.render();
        this.showToast(`¡${product.name} añadido!`);
    }

    removeItem(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.save();
        this.render();
    }

    updateQuantity(id, delta) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            item.quantity += delta;
            if (item.quantity <= 0) {
                this.removeItem(id);
            } else {
                this.save();
                this.render();
            }
        }
    }

    save() {
        localStorage.setItem('mbr_cart', JSON.stringify(this.items));
    }

    showToast(msg) {
        this.toast.textContent = msg;
        this.toast.classList.add('active');
        setTimeout(() => this.toast.classList.remove('active'), 2500);
    }

    handleCheckout() {
        this.checkoutBtn.disabled = true;
        this.checkoutBtn.textContent = 'Procesando...';

        // Prepare data for Mercado Pago
        const cartData = {
            items: this.items.map(item => ({
                id: item.id,
                title: item.name,
                unit_price: item.unit_price || item.price,
                quantity: item.quantity,
                currency_id: 'ARS'
            }))
        };

        // Call our serverless function (will create next)
        fetch('/api/create-preference', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cartData)
        })
        .then(res => res.json())
        .then(data => {
            if (data.init_point) {
                window.location.href = data.init_point;
            } else {
                throw new Error('No preferences URL');
            }
        })
        .catch(err => {
            console.error('Checkout error:', err);
            this.showToast('Error al iniciar el pago. Reintente.');
            this.checkoutBtn.disabled = false;
            this.checkoutBtn.textContent = 'Iniciar Pago';
        });
    }

    render() {
        const totalItems = this.items.reduce((sum, item) => sum + item.quantity, 0);
        this.cartBadge.textContent = totalItems;
        this.cartBadge.style.display = totalItems > 0 ? 'flex' : 'none';

        if (this.items.length === 0) {
            this.itemsContainer.innerHTML = '<div class="empty-msg">Tu carrito está vacío</div>';
            this.totalAmountEl.textContent = '$0';
            this.checkoutBtn.disabled = true;
            return;
        }

        let total = 0;
        this.itemsContainer.innerHTML = this.items.map(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;
            return `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <div class="cart-item-title">${item.name}</div>
                        <div class="cart-item-price">$${item.price.toLocaleString()}</div>
                        <div class="cart-item-row">
                            <div class="quantity-controls">
                                <button class="qty-btn" onclick="cart.updateQuantity('${item.id}', -1)">-</button>
                                <span>${item.quantity}</span>
                                <button class="qty-btn" onclick="cart.updateQuantity('${item.id}', 1)">+</button>
                            </div>
                            <button class="remove-item" onclick="cart.removeItem('${item.id}')">Eliminar</button>
                        </div>
                    </div>
                </div>
            `;
        }).join('');

        this.totalAmountEl.textContent = `$${total.toLocaleString()}`;
        this.checkoutBtn.disabled = false;
    }
}

// Initialize Cart when DOM is ready
let cart;
document.addEventListener('DOMContentLoaded', () => {
    cart = new Cart();
});

