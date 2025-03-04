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


// desliza a foto profile

// Script melhorado para animação baseada em scroll
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona a imagem de perfil
    const profileImage = document.querySelector('.profile-image');
    
    // Se não estiver em mobile ou o elemento não existir, não faz nada
    if (!profileImage || window.innerWidth > 768) return;
    
    // Definir a posição inicial (invisível)
    profileImage.classList.remove('appear');
    
    // Função para verificar se elemento está visível na viewport
    function isElementInViewport(el) {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // Considera visível quando pelo menos 10% do elemento está na viewport
      return rect.top <= windowHeight * 0.9;
    }
    
    // Função para verificar scroll e animar
    function checkScroll() {
      if (isElementInViewport(profileImage) && !profileImage.classList.contains('appear')) {
        profileImage.classList.add('appear');
        // Após ativada, remove o listener para economizar recursos
        window.removeEventListener('scroll', checkScroll);
      }
    }
    
    // Verifica inicialmente (caso o elemento já esteja visível no carregamento)
    setTimeout(checkScroll, 100);
    
    // Adiciona evento de scroll
    window.addEventListener('scroll', checkScroll);
    
    // Também verifica em caso de redimensionamento
    window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
        // Se não for mais mobile, remove as classes de animação
        profileImage.classList.add('appear');
        profileImage.style.opacity = '1';
        profileImage.style.transform = 'none';
      }
    });
  });