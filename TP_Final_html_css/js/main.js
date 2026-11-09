/* ==========================================================================
   ENCUADRE & GOL - SCRIPT PRINCIPAL (MAIN.JS)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  console.log("Encuadre & Gol JS Inicializado 🚀");

  // 1. Lógica del Menú Hamburguesa Mobile (Robustecida)
  const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // Evita que el evento se propague
      const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    // Cerrar el menú automáticamente al hacer clic en cualquier enlace de adentro
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', (e) => {
      if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        mobileMenu.classList.add('hidden');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 2. Manejo del Formulario de Contacto / Cotización
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

  // 3. Interactividad para los botones del Catálogo
  const catalogLinks = document.querySelectorAll('#catalogo a');
  const textareaMensaje = document.getElementById('mensaje');

  catalogLinks.forEach(link => {
    link.addEventListener('click', () => {
      const tituloBanner = link.querySelector('h3')?.innerText.replace(/\s+/g, ' ').trim();
      if (textareaMensaje && tituloBanner) {
        textareaMensaje.value = `Hola, me interesa encuadrar un cuadro del estilo: "${tituloBanner}". `;
      }
    });
  });
});
// Lógica para el carrusel de Momentos & Estadios
const carrusel = document.getElementById('carrusel-momentos');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

if (carrusel && prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    carrusel.scrollBy({ left: -320, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    carrusel.scrollBy({ left: 320, behavior: 'smooth' });
  });
}

// Lógica para el carrusel de Trabajos Realizados (Camisetas)
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
function changeImage(src, title, description) {
  // Cambiar la fuente de la imagen principal
  const mainImage = document.getElementById('main-image');
  mainImage.style.opacity = '0';
  
  setTimeout(() => {
    mainImage.src = src;
    mainImage.style.opacity = '1';
  }, 150);

  // Cambiar textos dinámicos opcionales
  document.getElementById('product-title').innerText = title;
  document.getElementById('product-desc').innerText = description;

  // Gestionar clases activas en los botones de miniaturas
  const buttons = document.querySelectorAll('.thumb-btn');
  buttons.forEach(btn => {
    btn.classList.remove('border-white');
    btn.classList.add('border-transparent');
  });
  event.currentTarget.classList.remove('border-transparent');
  event.currentTarget.classList.add('border-white');
}