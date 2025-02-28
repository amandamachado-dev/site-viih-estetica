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


// Função para exibir o modal de confirmação
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const confirmationModal = document.getElementById('confirmationModal');
    const closeBtn = document.getElementById('closeConfirmation');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Não vamos prevenir o comportamento padrão para permitir que o Mailchimp receba os dados
            
            // Salvar os dados do formulário para o Mailchimp
            const formData = new FormData(contactForm);
            
            // Mostrar o modal após um breve atraso (tempo para o Mailchimp processar)
            setTimeout(function() {
                confirmationModal.classList.add('fade-in');
                
                // Limpar formulário
                contactForm.reset();
            }, 1000);
        });
    }
    
    // Fechar o modal quando o botão for clicado
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            confirmationModal.classList.remove('fade-in');
        });
    }
    
    // Fechar o modal ao clicar fora dele
    window.addEventListener('click', function(e) {
        if (e.target === confirmationModal) {
            confirmationModal.classList.remove('fade-in');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Impedir o envio normal do formulário
            
            const formData = new FormData(contactForm);
            const url = contactForm.getAttribute('action');
            
            // Enviar os dados via AJAX
            fetch(url, {
                method: 'POST',
                body: formData,
                mode: 'no-cors' // Necessário para domínios cruzados
            })
            .then(response => {
                // Mostrar sua própria confirmação
                showCustomConfirmation();
                
                // Limpar o formulário
                contactForm.reset();
            })
            .catch(error => {
                console.error('Erro ao enviar o formulário:', error);
                // Você pode implementar uma mensagem de erro aqui
            });
        });
    }
    
    // Função para mostrar sua confirmação personalizada
    function showCustomConfirmation() {
        // Aqui você pode exibir seu próprio modal ou mensagem
        const confirmationModal = document.getElementById('confirmationModal');
        if (confirmationModal) {
            confirmationModal.classList.add('fade-in');
        }
    }
    
    // Código para fechar o modal (se estiver usando)
    const closeBtn = document.getElementById('closeConfirmation');
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            const confirmationModal = document.getElementById('confirmationModal');
            confirmationModal.classList.remove('fade-in');
        });
    }
});