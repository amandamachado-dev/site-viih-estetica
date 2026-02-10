// JavaScript para a página de Radiofrequência

document.addEventListener('DOMContentLoaded', function() {
    // ======================================
    // FAQ Accordion
    // ======================================
    const faqItems = document.querySelectorAll('.rf-faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.rf-faq-question');
        
        question.addEventListener('click', function() {
            // Fecha todos os outros itens
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Toggle do item clicado
            item.classList.toggle('active');
        });
    });

    // ======================================
    // Smooth Scroll para âncoras
    // ======================================
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');
    
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Ignora links vazios ou só com #
            if (targetId === '#' || targetId === '') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ======================================
    // Header scroll effect
    // ======================================
    const header = document.querySelector('.header');
    
    function handleScroll() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Mobile específico
        if (window.innerWidth <= 768) {
            if (window.scrollY > 20) {
                header.classList.add('mobile-scrolled');
            } else {
                header.classList.remove('mobile-scrolled');
            }
        }
    }
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Verifica na carga inicial
    handleScroll();

    // ======================================
    // Animação de entrada dos elementos
    // ======================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observa cards e seções para animação
    const animatedElements = document.querySelectorAll(
        '.rf-tech-card, .rf-benefit-card, .rf-result-card, .rf-process-step, .rf-ind-item'
    );
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });

    // ======================================
    // WhatsApp Link Tracking (opcional)
    // ======================================
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');
    
    whatsappLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Aqui você pode adicionar tracking de analytics se necessário
            console.log('WhatsApp link clicked:', this.href);
        });
    });
});

// ======================================
// Prevenção de scroll horizontal
// ======================================
window.addEventListener('load', function() {
    document.body.style.overflowX = 'hidden';
});
