// Navigation functionality
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
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

// Scroll indicator click
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
            const offsetTop = servicesSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
}

// WhatsApp Configuration
const WHATSAPP_NUMBER = '+96181818983'; // Dental Arts Clinic WhatsApp number

// Custom WhatsApp message
const CUSTOM_WHATSAPP_MESSAGE = `Hello! I'm interested in booking an appointment at Dental Arts Clinic with Dr. Wissam M. Sinno.`;

// Function to generate WhatsApp message
function generateWhatsAppMessage(formData) {
    const { name, phone, service, date, time, message } = formData;
    
    let whatsappMessage = `${CUSTOM_WHATSAPP_MESSAGE}\n\n`;
    whatsappMessage += `*Appointment Details:*\n`;
    whatsappMessage += `*Name:* ${name}\n`;
    whatsappMessage += `*Phone:* ${phone}\n`;
    whatsappMessage += `*Service Needed:* ${service}\n`;
    whatsappMessage += `*Preferred Date:* ${date}\n`;
    whatsappMessage += `*Preferred Time:* ${time}\n`;
    if (message) {
        whatsappMessage += `*Additional Notes:* ${message}\n`;
    }
    whatsappMessage += `\nThank you!`;
    
    return encodeURIComponent(whatsappMessage);
}

// Function to open WhatsApp
function openWhatsApp(message) {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${message}`;
    window.open(whatsappUrl, '_blank');
}

// Appointment form submission
const appointmentForm = document.getElementById('appointmentForm');
if (appointmentForm) {
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            service: document.getElementById('service').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            message: document.getElementById('message').value.trim()
        };
        
        // Validate required fields
        if (!formData.name || !formData.phone || !formData.service || !formData.date || !formData.time) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Generate WhatsApp message
        const whatsappMessage = generateWhatsAppMessage(formData);
        
        // Open WhatsApp
        openWhatsApp(whatsappMessage);
        
        // Reset form
        appointmentForm.reset();
        
        // Show success message
        showNotification('Redirecting to WhatsApp...', 'success');
    });
}

// WhatsApp floating button click
const whatsappFloat = document.getElementById('whatsappFloat');
if (whatsappFloat) {
    whatsappFloat.addEventListener('click', () => {
        // Scroll to appointment section
        const appointmentSection = document.getElementById('appointment');
        if (appointmentSection) {
            const offsetTop = appointmentSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
}

// Direct WhatsApp links
const whatsappDirect = document.getElementById('whatsappDirect');
const whatsappFooter = document.getElementById('whatsappFooter');
const whatsappAppointment = document.getElementById('whatsappAppointment');

function setupWhatsAppLink(element, defaultMessage = '') {
    if (element) {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            const message = defaultMessage || CUSTOM_WHATSAPP_MESSAGE;
            openWhatsApp(encodeURIComponent(message));
        });
    }
}

setupWhatsAppLink(whatsappDirect, CUSTOM_WHATSAPP_MESSAGE);
setupWhatsAppLink(whatsappFooter, CUSTOM_WHATSAPP_MESSAGE);
setupWhatsAppLink(whatsappAppointment, CUSTOM_WHATSAPP_MESSAGE);

// Set minimum date to today for date input
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#25D366' : '#0d9488'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

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

// Observe service cards and other elements
document.querySelectorAll('.service-card, .contact-card, .gallery-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Form validation enhancement
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        // Allow only numbers, spaces, +, and -
        e.target.value = e.target.value.replace(/[^0-9+\-\s]/g, '');
    });
}

// Add loading state to form submission
if (appointmentForm) {
    const submitButton = appointmentForm.querySelector('button[type="submit"]');
    if (submitButton) {
        appointmentForm.addEventListener('submit', () => {
            submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
            submitButton.disabled = true;
            
            // Re-enable after a short delay (since we're opening WhatsApp)
            setTimeout(() => {
                submitButton.innerHTML = '<i class="fab fa-whatsapp"></i> Book via WhatsApp';
                submitButton.disabled = false;
            }, 2000);
        });
    }
}

// ============================================
// LANGUAGE TOGGLE FUNCTIONALITY (Arabic/English)
// ============================================
let currentLang = localStorage.getItem('preferredLanguage') || 'en';

// Initialize language on page load
function initLanguage() {
    const html = document.documentElement;
    const langToggle = document.getElementById('langToggle');
    const langText = document.getElementById('langText');
    
    if (!translations || !langToggle) return;
    
    // Set initial language
    setLanguage(currentLang);
    
    // Language toggle button click handler
    langToggle.addEventListener('click', () => {
        const newLang = currentLang === 'en' ? 'ar' : 'en';
        setLanguage(newLang);
        localStorage.setItem('preferredLanguage', newLang);
    });
    
    // Keyboard accessibility for language toggle
    langToggle.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            langToggle.click();
        }
    });
}

// Set language and update content
function setLanguage(lang) {
    currentLang = lang;
    const html = document.documentElement;
    const langToggle = document.getElementById('langToggle');
    const langText = document.getElementById('langText');
    
    if (!translations[lang]) return;
    
    // Update HTML lang and dir attributes
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    
    // Update language toggle button
    if (langToggle) {
        langToggle.setAttribute('aria-label', lang === 'en' ? 'Switch to Arabic' : 'Switch to English');
        langToggle.setAttribute('title', lang === 'en' ? 'Switch to Arabic' : 'Switch to English');
    }
    if (langText) {
        langText.textContent = lang === 'en' ? 'AR' : 'EN';
    }
    
    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'OPTION') {
                element.textContent = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update select options
    updateSelectOptions(lang);
}

// Update select dropdown options
function updateSelectOptions(lang) {
    const serviceSelect = document.getElementById('service');
    if (serviceSelect && translations[lang]) {
        const options = serviceSelect.querySelectorAll('option');
        options.forEach((option, index) => {
            if (index === 0) return; // Skip first option (placeholder)
            const value = option.value;
            const key = `services.${value.toLowerCase().replace(/\s+/g, '')}`;
            if (translations[lang][key]) {
                option.textContent = translations[lang][key];
            }
        });
    }
}

// Initialize language when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLanguage);
} else {
    initLanguage();
}

// ============================================
// ACCESSIBILITY IMPROVEMENTS
// ============================================

// Enhanced keyboard navigation
document.addEventListener('keydown', (e) => {
    // Skip to main content with Alt+S
    if (e.altKey && e.key === 's') {
        e.preventDefault();
        const mainContent = document.querySelector('main') || document.querySelector('#home');
        if (mainContent) {
            mainContent.focus();
            mainContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    
    // Close mobile menu with Escape
    if (e.key === 'Escape') {
        const navMenu = document.getElementById('navMenu');
        const hamburger = document.getElementById('hamburger');
        if (navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (hamburger) {
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        }
    }
});

// Update hamburger aria-expanded attribute (hamburger already declared above)
if (hamburger) {
    hamburger.addEventListener('click', () => {
        const isExpanded = hamburger.classList.contains('active');
        hamburger.setAttribute('aria-expanded', isExpanded);
    });
}

// Add skip to main content link
const skipLink = document.createElement('a');
skipLink.href = '#home';
skipLink.className = 'skip-link';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--primary-color);
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 10000;
    border-radius: 0 0 4px 0;
`;
skipLink.addEventListener('focus', () => {
    skipLink.style.top = '0';
});
skipLink.addEventListener('blur', () => {
    skipLink.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// Add ARIA live region for dynamic content
const liveRegion = document.createElement('div');
liveRegion.setAttribute('aria-live', 'polite');
liveRegion.setAttribute('aria-atomic', 'true');
liveRegion.className = 'sr-only';
liveRegion.style.cssText = 'position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0,0,0,0); border: 0;';
document.body.appendChild(liveRegion);

// Announce to screen readers
function announceToScreenReader(message) {
    if (liveRegion) {
        liveRegion.textContent = message;
        setTimeout(() => {
            liveRegion.textContent = '';
        }, 1000);
    }
}

// ============================================
// SECURITY ENHANCEMENTS
// ============================================

// Input sanitization function
function sanitizeInput(input) {
    if (typeof input !== 'string') return '';
    return input
        .replace(/[<>]/g, '') // Remove potential HTML tags
        .replace(/javascript:/gi, '') // Remove javascript: protocol
        .replace(/on\w+=/gi, '') // Remove event handlers
        .trim();
}

// Enhanced form validation with security
function validateAndSanitizeForm(formData) {
    const sanitized = {};
    for (const [key, value] of Object.entries(formData)) {
        sanitized[key] = sanitizeInput(String(value));
    }
    return sanitized;
}

// Update form submission to use sanitization
if (appointmentForm) {
    const originalSubmit = appointmentForm.onsubmit;
    appointmentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get and sanitize form data
        const rawFormData = {
            name: document.getElementById('name').value.trim(),
            phone: document.getElementById('phone').value.trim(),
            service: document.getElementById('service').value,
            date: document.getElementById('date').value,
            time: document.getElementById('time').value,
            message: document.getElementById('message').value.trim()
        };
        
        const formData = validateAndSanitizeForm(rawFormData);
        
        // Validate required fields
        if (!formData.name || !formData.phone || !formData.service || !formData.date || !formData.time) {
            alert('Please fill in all required fields.');
            announceToScreenReader('Please fill in all required fields.');
            return;
        }
        
        // Phone number validation
        const phoneRegex = /^[\d\s\+\-\(\)]+$/;
        if (!phoneRegex.test(formData.phone)) {
            alert('Please enter a valid phone number.');
            announceToScreenReader('Please enter a valid phone number.');
            return;
        }
        
        // Generate WhatsApp message
        const whatsappMessage = generateWhatsAppMessage(formData);
        
        // Open WhatsApp
        openWhatsApp(whatsappMessage);
        
        // Reset form
        appointmentForm.reset();
        
        // Show success message
        showNotification('Redirecting to WhatsApp...', 'success');
        announceToScreenReader('Form submitted successfully. Redirecting to WhatsApp.');
    });
}

// Content Security Policy warning (for production)
if (window.location.protocol === 'https:') {
    console.log('%cSecurity: HTTPS enabled', 'color: #10b981; font-weight: bold;');
}

// ============================================
// PERFORMANCE OPTIMIZATIONS
// ============================================

// Lazy load images when they enter viewport
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimize scroll handler
const optimizedScrollHandler = debounce(() => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}, 10);

window.addEventListener('scroll', optimizedScrollHandler, { passive: true });

// Preload critical resources
const preloadLinks = [
    { href: 'styles.css', as: 'style' },
    { href: 'script.js', as: 'script' }
];

preloadLinks.forEach(link => {
    const preload = document.createElement('link');
    preload.rel = 'preload';
    preload.href = link.href;
    preload.as = link.as;
    document.head.appendChild(preload);
});

// ============================================
// CONSOLE MESSAGES
// ============================================
console.log('%cDental Arts Clinic Lebanon', 'color: #0ea5e9; font-size: 20px; font-weight: bold;');
console.log('%cWebsite by Dr. Wissam M. Sinno', 'color: #64748b; font-size: 14px;');
console.log('%cAccessibility: Press Alt+S to skip to main content', 'color: #10b981; font-size: 12px;');

