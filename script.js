document.querySelectorAll('.ramo').forEach(ramo => {
  ramo.addEventListener('click', () => {
    const siguienteId = ramo.dataset.siguiente;
    if (siguienteId) {
      const siguienteRamo = document.getElementById(siguienteId);
      if (siguienteRamo.classList.contains('oculto')) {
        siguienteRamo.classList.remove('oculto');
      }
    }
  });
});
