/* ==========================================================================
   ESTADO GLOBAL DE LA SOLICITUD - ENCUADRE & GOL (Patrón TP5)
   ========================================================================== */

export const solicitud = {
  paso: 0, // 0: Inicio / Catálogo, 1: Detalle del Estilo, 2: Formulario / Cotizador, 3: Éxito
  estiloSeleccionado: null,
  cotizacion: {
    nombre: '',
    email: '',
    estilo: 'flotante',
    mensaje: ''
  }
};

export function irAPaso(n) {
  solicitud.paso = n;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Disparar render cada vez que cambia el estado
  if (window.renderApp) {
    window.renderApp();
  }
}