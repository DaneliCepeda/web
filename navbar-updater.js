// navbar-updater.js - Script para actualizar la barra de navegación en todas las páginas

document.addEventListener('DOMContentLoaded', function() {
    // 1. Actualizar el logo para que siempre redirija a Inicio.html
    const logo = document.querySelector('header .Logo');
    if (logo) {
        logo.href = 'Inicio.html';
    }
    
    // 2. Asegurarse de que los enlaces de navegación sean correctos
    const navLinks = {
        'Inicio': 'Inicio.html',
        'Nosotros': 'Nosotros.html',
        'Galeria': 'Galeria.html',
        'Contacto': 'Contacto.html',
        'Reseñas': 'Resenas.html',
        'Blog': 'Blog.html' // Por si existe esta página
    };
    
    // Actualizar todos los enlaces de navegación
    const navbarLinks = document.querySelectorAll('header .navbar a');
    navbarLinks.forEach(link => {
        const linkText = link.textContent.trim();
        if (navLinks[linkText]) {
            link.href = navLinks[linkText];
            
            // Verificar si es la página actual para marcarla como activa
            const currentPage = window.location.pathname.split('/').pop();
            if (navLinks[linkText] === currentPage) {
                link.classList.add('active');
            }
        }
    });
    
    // 3. Actualizar los iconos de la barra de navegación
    const iconsContainer = document.querySelector('header .Icons');
    if (iconsContainer) {
        // Limpiar los iconos existentes
        iconsContainer.innerHTML = '';
        
        // Crear el icono de corazón (favoritos)
        const heartIcon = document.createElement('a');
        heartIcon.href = '#';
        heartIcon.className = 'fas fa-heart';
        heartIcon.title = 'Favoritos';
        iconsContainer.appendChild(heartIcon);
        
        // Crear el icono de ayuda
        const helpIcon = document.createElement('a');
        helpIcon.href = 'Ayuda.html';
        helpIcon.className = 'fas fa-question-circle';
        helpIcon.title = 'Ayuda';
        iconsContainer.appendChild(helpIcon);
        
        // Crear el icono de usuario para login
        const userIcon = document.createElement('a');
        userIcon.href = 'Login.html';
        userIcon.className = 'fas fa-user';
        userIcon.title = 'Iniciar Sesión';
        iconsContainer.appendChild(userIcon);
    }
});