// 1. Preloader Logic & Counter Kickoff
window.addEventListener('load', () => {
    const loader = document.getElementById('preloader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => { 
            loader.style.visibility = 'hidden'; 
        }, 500);
    }
    initializeCounterAnimation();
});

// 2. Initialize AOS Animation Library
AOS.init({ 
    duration: 800, 
    once: true 
});

// 3. Simulated Automatic Typing Subtitle Array Effect
const typedStrings = ["BSIT Student", "Web Developer", "UI/UX Designer"];
let stringIdx = 0; 
let charIdx = 0; 
let currentText = ''; 
let isDeleting = false;

function typeEffect() {
    const target = document.getElementById("typedElement");
    if (!target) return;
    
    const fullText = typedStrings[stringIdx];
    
    if (isDeleting) {
        currentText = fullText.substring(0, charIdx - 1);
        charIdx--;
    } else {
        currentText = fullText.substring(0, charIdx + 1);
        charIdx++;
    }
    
    target.innerHTML = currentText;
    
    let typeSpeed = isDeleting ? 40 : 100;
    
    if (!isDeleting && currentText === fullText) {
        typeSpeed = 1800; // Hold at full word
        isDeleting = true;
    } else if (isDeleting && currentText === '') {
        isDeleting = false; 
        stringIdx = (stringIdx + 1) % typedStrings.length; 
        typeSpeed = 400; 
    }
    
    setTimeout(typeEffect, typeSpeed);
}
document.addEventListener("DOMContentLoaded", typeEffect);

// 4. Light/Dark Theme Switch Engine
const themeToggleBtn = document.getElementById('themeToggle');
if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
        const htmlElement = document.documentElement;
        const currentTheme = htmlElement.getAttribute('data-bs-theme');
        const icon = themeToggleBtn.querySelector('i');
        
        if (currentTheme === 'dark') {
            htmlElement.setAttribute('data-bs-theme', 'light');
            icon.className = 'fa-solid fa-sun text-danger fs-5';
        } else {
            htmlElement.setAttribute('data-bs-theme', 'dark');
            icon.className = 'fa-solid fa-moon text-warning fs-5';
        }
    });
}

// 5. Dynamic Back to Top Trigger Elements
const bttButton = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
    if (bttButton) {
        if (window.scrollY > 400) {
            bttButton.style.display = 'flex';
        } else {
            bttButton.style.display = 'none';
        }
    }
});

if (bttButton) {
    bttButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// 6. Numerical Dashboard Counter Function increments
function initializeCounterAnimation() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const duration = 2000; 
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.innerText = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target;
            }
        };
        updateCounter();
    });
}

// 7. Contact Form Submit Mock Intercept Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Message pipeline secure! Simulation sent successfully.');
        contactForm.reset();
    });
}