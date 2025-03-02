// JavaScript para o menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    
    // Função para alternar o menu mobile
    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });
    
    // Fechar o menu ao clicar em um link (opcional)
    const menuLinks = document.querySelectorAll('.menu a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            menu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });
});


// Script para navbar mobile
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.header');
    
    function handleMobileScroll() {
        // Aplicar apenas em dispositivos móveis
        if (window.innerWidth <= 768) {
            if (window.scrollY > 20) {
                header.classList.add('mobile-scrolled');
            } else {
                header.classList.remove('mobile-scrolled');
            }
        }
    }
    
    // Verificar na carga inicial
    handleMobileScroll();
    
    // Verificar ao rolar
    window.addEventListener('scroll', handleMobileScroll);
    
    // Verificar ao redimensionar
    window.addEventListener('resize', handleMobileScroll);
});


