/* ==========================================================================
   APPLICACIÓN PRINCIPAL (Eventos y Navegación)
   ========================================================================== */
import { solicitud, irAPaso } from './estado.js';
import { render } from './render.js';

const infoEstilos = {
  'clasica': {
    badge: 'Línea Clásica Galería',
    titulo: 'Enmarcado Clásico de Galería',
    desc: 'Marco de madera negra profunda con passe-partout doble libre de ácido que resalta los colores del club y vidrio técnico de alta transparencia.'
  },
  'flotante': {
    badge: 'Más Vendido',
    titulo: 'Línea Camiseta Flotante (Caja de Sombra)',
    desc: 'Efecto tridimensional moderno donde la camiseta queda suspendida en el centro de la caja de sombra sin tocar el cristal antirreflejo.'
  },
  'reliquia': {
    badge: 'Edición Premium',
    titulo: 'Línea Reliquia, Fotos & Medallas',
    desc: 'Diseñado para incluir camisetas junto a medallas de campeón, entradas históricas o fotos firmadas en una maquetación múltiple de conservación.'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // Inicializamos el render en paso 0
  render();

  // 1. Botones del Catálogo -> llevan al Paso 1 (Detalle de Estilo)
  document.querySelectorAll('[data-action="ver-estilo"]').forEach(button => {
    button.addEventListener('click', (e) => {
      e.preventDefault();
      const estiloKey = button.dataset.estilo;
      solicitud.estiloSeleccionado = infoEstilos[estiloKey] || infoEstilos['flotante'];
      solicitud.cotizacion.estilo = estiloKey;
      irAPaso(1);
    });
  });

  // 2. Botón "Cotizar este estilo" -> lleva al Paso 2 (Formulario Presupuesto)
  const btnIrACotizar = document.getElementById('btn-ir-cotizar');
  if (btnIrACotizar) {
    btnIrACotizar.addEventListener('click', () => {
      const selectEstilo = document.getElementById('estilo');
      if (selectEstilo && solicitud.cotizacion.estilo) {
        selectEstilo.value = solicitud.cotizacion.estilo;
      }
      irAPaso(2);
    });
  }

  // 3. Botones "Volver"
  document.querySelectorAll('[data-action="volver"]').forEach(button => {
    button.addEventListener('click', () => {
      const pasoAnterior = Number(button.dataset.toPaso ?? (solicitud.paso - 1));
      irAPaso(pasoAnterior >= 0 ? pasoAnterior : 0);
    });
  });

  // 4. Envío del Formulario (Paso 2 -> Paso 3 Éxito)
  const formCotizador = document.getElementById('form-cotizador');
  if (formCotizador) {
    formCotizador.addEventListener('submit', (e) => {
      e.preventDefault();
      
      solicitud.cotizacion.nombre = document.getElementById('nombre').value.trim();
      solicitud.cotizacion.email = document.getElementById('email').value.trim();
      solicitud.cotizacion.estilo = document.getElementById('estilo').value;
      solicitud.cotizacion.mensaje = document.getElementById('mensaje').value.trim();

      // Actualizar datos en pantalla de éxito
      const exitoNombre = document.getElementById('exito-nombre');
      const exitoEmail = document.getElementById('exito-email');
      if (exitoNombre) exitoNombre.innerText = solicitud.cotizacion.nombre;
      if (exitoEmail) exitoEmail.innerText = solicitud.cotizacion.email;

      irAPaso(3);
    });
  }
});