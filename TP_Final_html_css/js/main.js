/* ==========================================================================
   ENCUADRE & GOL - SCRIPT PRINCIPAL (MAIN.JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  console.log("Encuadre & Gol JS Inicializado 🚀");

  // 1. Menú Hamburguesa Mobile (Navegación Responsive)
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    // Toggle para abrir / cerrar al presionar el botón
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    // Cerrar automáticamente al hacer clic en cualquier opción del menú
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Cerrar al hacer clic en cualquier lugar fuera del menú
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 2. Formulario de Contacto / Cotización
  const contactForm = document.querySelector('#contacto form');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nombreInput = document.getElementById('nombre');
      const emailInput = document.getElementById('email');

      const nombre = nombreInput ? nombreInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';

      if (!nombre || !email) {
        alert('Por favor, completá los campos obligatorios.');
        return;
      }

      alert(`¡Gracias, ${nombre}! Hemos recibido tu consulta correctamente. Nos pondremos en contacto a la brevedad a través de ${email}.`);
      contactForm.reset();
    });
  }

  // 3. Auto-completar mensaje según la opción elegida en Catálogo
  const catalogLinks = document.querySelectorAll('#catalogo a');
  const textareaMensaje = document.getElementById('mensaje');

  if (catalogLinks.length && textareaMensaje) {
    catalogLinks.forEach(link => {
      link.addEventListener('click', () => {
        const tituloBanner = link.querySelector('h3')?.innerText.replace(/\s+/g, ' ').trim();
        if (tituloBanner) {
          textareaMensaje.value = `Hola, me interesa encuadrar un cuadro del estilo: "${tituloBanner}". `;
        }
      });
    });
  }

  // 4. Carrusel de Momentos & Estadios
  const carruselMomentos = document.getElementById('carrusel-momentos');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  if (carruselMomentos && prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      carruselMomentos.scrollBy({ left: -320, behavior: 'smooth' });
    });

    nextBtn.addEventListener('click', () => {
      carruselMomentos.scrollBy({ left: 320, behavior: 'smooth' });
    });
  }

  // 5. Carrusel de Enmarcado de Camisetas
  const carruselCamisetas = document.getElementById('carrusel-camisetas');
  const prevCamisetasBtn = document.getElementById('prevCamisetasBtn');
  const nextCamisetasBtn = document.getElementById('nextCamisetasBtn');

  if (carruselCamisetas && prevCamisetasBtn && nextCamisetasBtn) {
    prevCamisetasBtn.addEventListener('click', () => {
      carruselCamisetas.scrollBy({ left: -320, behavior: 'smooth' });
    });

    nextCamisetasBtn.addEventListener('click', () => {
      carruselCamisetas.scrollBy({ left: 320, behavior: 'smooth' });
    });
  }
});

// 6. Visor Interactivo de Imágenes / Miniaturas (Función Global)
function changeImage(event, src, title, description) {
  const mainImage = document.getElementById('main-image');
  if (mainImage) {
    mainImage.style.opacity = '0';
    
    setTimeout(() => {
      mainImage.src = src;
      mainImage.style.opacity = '1';
    }, 150);
  }

  const titleEl = document.getElementById('product-title');
  const descEl = document.getElementById('product-desc');
  
  if (titleEl && title) titleEl.innerText = title;
  if (descEl && description) descEl.innerText = description;

  // Actualizar el estado visual del borde activo en las miniaturas
  const buttons = document.querySelectorAll('.thumb-btn');
  buttons.forEach(btn => {
    btn.classList.remove('border-white');
    btn.classList.add('border-transparent');
  });

  if (event && event.currentTarget) {
    event.currentTarget.classList.remove('border-transparent');
    event.currentTarget.classList.add('border-white');
  }
}