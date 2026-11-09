/* ==========================================================================
   MÓDULO DE RENDER (Ocultar y mostrar pasos por data-paso)
   ========================================================================== */
import { solicitud } from './estado.js';

export function render() {
  // Ocultar / Mostrar secciones usando el atributo 'hidden' de HTML5 (Consigna TP5)
  document.querySelectorAll('[data-paso]').forEach((section) => {
    const pasoSeccion = Number(section.dataset.paso);
    if (pasoSeccion === solicitud.paso) {
      section.removeAttribute('hidden');
    } else {
      section.setAttribute('hidden', '');
    }
  });

  // Renderizar información dinámica según el paso activo
  if (solicitud.paso === 1 && solicitud.estiloSeleccionado) {
    const titulo = document.getElementById('detalle-paso-titulo');
    const badge = document.getElementById('detalle-paso-badge');
    const desc = document.getElementById('detalle-paso-desc');
    
    if (titulo) titulo.innerText = solicitud.estiloSeleccionado.titulo;
    if (badge) badge.innerText = solicitud.estiloSeleccionado.badge;
    if (desc) desc.innerText = solicitud.estiloSeleccionado.desc;
  }
}

window.renderApp = render;