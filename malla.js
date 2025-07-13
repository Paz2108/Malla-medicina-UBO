// Este es un ejemplo reducido de cómo empieza el archivo
// El archivo completo puede ser muy extenso para colocar aquí entero.
// Aquí puedes ver cómo definir la estructura general:
const malla = {
  "1": [
    { id: "bases_quim", nombre: "Bases Químicas de la Medicina", abre: ["bio_cel"] },
    { id: "fis_med", nombre: "Física Médica", abre: ["morfo1"] },
    { id: "biomatematicas", nombre: "Biomatemáticas", abre: ["salud_pub"] },
    { id: "intro_med", nombre: "Introducción a la medicina e intervención básica en emergencias", abre: ["elem_clin"] },
    { id: "ingles1", nombre: "Inglés I", abre: ["ingles2"] },
    { id: "hab1", nombre: "Habilidades Académicas I", abre: ["hab2"] }
  ],
  "2": [
    { id: "bio_cel", nombre: "Biología Celular y Molecular Médica", abre: ["bioq"] },
    { id: "morfo1", nombre: "Morfología Integrada I", abre: ["morfo2"] },
    { id: "salud_pub", nombre: "Salud Pública y Estadística aplicada a la Medicina", abre: ["metodo"] },
    { id: "elem_clin", nombre: "Elementos Clínicos Básicos" },
    { id: "ingles2", nombre: "Inglés II", abre: ["ingles3"] },
    { id: "hab2", nombre: "Habilidades Académicas II" }
  ],
  "3": [
    { id: "bio_cel", nombre: "Biología Celular y Molecular Médica", abre: ["bioq"] },
    { id: "morfo1", nombre: "Morfología Integrada I", abre: ["morfo2"] },
    { id: "salud_pub", nombre: "Salud Pública y Estadística aplicada a la Medicina", abre: ["metodo"] },
    { id: "elem_clin", nombre: "Elementos Clínicos Básicos" },
    { id: "ingles2", nombre: "Inglés II", abre: ["ingles3"] },
    { id: "hab2", nombre: "Habilidades Académicas II" }
  ],
  // ... continúan los semestres 3 al 14
};

const relacionesExtra = {
  "farm_gen": ["farm_clin"],
  "diag1": ["diag2", "med_int1"],
  "bases2": ["bases3", "med_int1"],
  "med_int1": ["med_int2"],
  "diag2": ["metodos"],
  "bases3": ["med_int2"],
  "metodos": ["neuro", "onco", "nutri", "gine", "orto", "fisio", "ciru", "pedi", "oft_derm", "urg", "psiq"],
  "med_int2": ["neuro", "onco", "nutri", "gine", "orto", "fisio", "ciru", "pedi", "oft_derm", "urg", "psiq"],
  "pract1": ["pract2"],
  "pract2": ["pract3"],
  "pract3": ["pract4"],
  "pract4": ["pract5"],
  "pract5": ["pract6"],
  "sns3": ["sns4"],
  "sns4": ["sns5"],
  "sns5": ["gest"],
  "etica": ["resp_soc"],
  "psico": ["fisio"],
  "internado1": ["internado2"],
  "internado2": ["internado3"],
  "internado3": ["internado4"]
};

// Resto del script: generación DOM, manejo de clics, iluminación, etc.
// Esto se copia igual que el bloque JavaScript interno que usábamos antes
const contenedor = document.getElementById("contenedorMalla");
const aprobados = new Set();

Object.entries(malla).forEach(([semestre, ramos]) => {
  const col = document.createElement("div");
  col.className = "semestre";
  col.innerHTML = `<h2>${semestre}º semestre</h2>`;

  ramos.forEach(ramo => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.id = ramo.id;
    div.textContent = ramo.nombre;

    div.addEventListener("click", () => {
      div.classList.toggle("aprobado");
      const estaAprobado = div.classList.contains("aprobado");
      if (estaAprobado) {
        aprobados.add(ramo.id);
      } else {
        aprobados.delete(ramo.id);
      }

      document.querySelectorAll('.ramo').forEach(r => r.classList.remove("habilitado"));

      Object.values(malla).flat().forEach(r => {
        if (r.abre) {
          r.abre.forEach(id => {
            const habilitado = document.getElementById(id);
            if (habilitado && !habilitado.classList.contains("aprobado")) {
              const requisitos = Object.values(malla).flat().filter(x => x.abre?.includes(id));
              const cumplidos = requisitos.every(x => aprobados.has(x.id));
              if (cumplidos) habilitado.classList.add("habilitado");
            }
          });
        }
      });

      Object.entries(relacionesExtra).forEach(([id, abreList]) => {
        if (aprobados.has(id)) {
          abreList.forEach(a => {
            const sig = document.getElementById(a);
            if (sig && !sig.classList.contains("aprobado")) {
              sig.classList.add("habilitado");
            }
          });
        }
      });
    });

    col.appendChild(div);
  });

  contenedor.appendChild(col);
});
