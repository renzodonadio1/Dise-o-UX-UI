/* ==========================================================================
   ENCUADRE & GOL - SCRIPT PRINCIPAL (INTERACTIVIDAD)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  console.log("Encuadre & Gol JS Inicializado 🚀");

  // 1. Manejo del formulario de cotización / contacto
  const formCotizador = document.getElementById('form-cotizador');

  if (formCotizador) {
    formCotizador.addEventListener('submit', (e) => {
      e.preventDefault(); // Evita que la página se recargue

      // Capturamos los valores de los inputs
      const nombre = document.getElementById('nombre').value.trim();
      const email = document.getElementById('email').value.trim();
      const estilo = document.getElementById('estilo').value;
      const mensaje = document.getElementById('mensaje').value.trim();

      // Validación básica
      if (!nombre || !email || !mensaje) {
        alert('Por favor, completá todos los campos obligatorios.');
        return;
      }

      // Simulación de envío exitoso (puedes personalizarlo para tu TP)
      console.log('Datos del presupuesto enviados:', { nombre, email, estilo, mensaje });

      alert(`¡Gracias, ${nombre}! Hemos recibido tu consulta sobre la "${estilo}". Nos pondremos en contacto a la brevedad a través de ${email}.`);

      // Limpiamos el formulario después de enviar
      formCotizador.reset();
    });
  }

  // 2. Efecto sutil en la navegación al hacer scroll (opcional)
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('shadow-lg');
    } else {
      header.classList.remove('shadow-lg');
    }
  });
});