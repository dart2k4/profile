const hamburger = document.getElementById('hamburger');
    const menu = document.querySelector('.header-menu');
    
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('active');
    });