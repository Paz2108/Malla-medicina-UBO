// 1. Datos de la malla
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
    { id: "bioq", nombre: "Bioquímica Médica y Genética Clínica", abre: ["farm_gen","bases1"] },
    { id: "morfo2", nombre: "Morfología Integrada II", abre: ["morfo3","bases1"] },
    { id: "elect1", nombre: "Electivo I" },
    { id: "sns1", nombre: "Sistema Nacional de Salud I", abre: ["sns2"] },
    { id: "integ1", nombre: "Integración Clínica I", abre: ["integ2"] },
    { id: "ingles3", nombre: "Inglés III", abre: ["ingles4"] }
  ],
  "4": [
    { id: "morfo3", nombre: "Morfología Integrada III", abre: ["farm_gen"] },
    { id: "sns2", nombre: "Sistema Nacional de Salud II", abre: ["sns3"] },
    { id: "metodo", nombre: "Metodología de la Investigación y Medicina Basada en la Evidencia", abre: ["sns3"] },
    { id: "bases1", nombre: "Bases y Mecanismos de la Salud y Enfermedad I", abre: ["diag1","bases2"] },
    { id: "integ2", nombre: "Integración Clínica II", abre: ["pract1"] },
    { id: "ingles4", nombre: "Inglés IV" }
  ],
  "5": [
    { id: "farm_gen", nombre: "Farmacología General", abre: ["farm_clin"] },
    { id: "sns3", nombre: "Sistema Nacional de Salud III", abre: ["sns4"] },
    { id: "diag1", nombre: "Diagnóstico Clínico I", abre: ["diag2","med_int1"] },
    { id: "bases2", nombre: "Bases y Mecanismos de la Salud y Enfermedad II", abre: ["bases3","med_int1"] },
    { id: "pract1", nombre: "Práctica Integrada en Medicina I", abre: ["pract2"] },
    { id: "etica", nombre: "Ética y Ciudadanía", abre: ["resp_soc"] }
  ],
  "6": [
    { id: "farm_clin", nombre: "Farmacología Clínica" },
    { id: "sns4", nombre: "Sistema Nacional de Salud IV", abre: ["sns5"] },
    { id: "diag2", nombre: "Diagnóstico Clínico II", abre: ["metodos"] },
    { id: "bases3", nombre: "Bases y Mecanismos de la Salud y Enfermedad III", abre: ["med_int2"] },
    { id: "med_int1", nombre: "Medicina Interna I", abre: ["med_int2"] },
    { id: "pract2", nombre: "Práctica Integrada en Medicina II", abre: ["pract3"] }
  ],
  "7": [
    { id: "bioetica", nombre: "Bioética Clínica y Antropología Médica" },
    { id: "sns5", nombre: "Sistema Nacional de Salud V", abre: ["gest"] },
    { id: "metodos", nombre: "Métodos Diagnósticos" },
    { id: "med_legal", nombre: "Medicina Legal" },
    { id: "med_int2", nombre: "Medicina Interna II" },
    { id: "pract3", nombre: "Práctica Integrada en Medicina III", abre: ["pract4"] }
  ],
  "8": [
    { id: "onco", nombre: "Oncología" },
    { id: "nutri", nombre: "Nutrición" },
    { id: "psico", nombre: "Psicología", abre: ["fisio"] },
    { id: "neuro", nombre: "Neurología" },
    { id: "pract4", nombre: "Práctica Integrada en Medicina IV", abre: ["pract5"] },
    { id: "resp_soc", nombre: "Responsabilidad Social Universitaria" }
  ],
  "9": [
    { id: "gest", nombre: "Gestión" },
    { id: "gine", nombre: "Ginecología y Obstetricia" },
    { id: "orto", nombre: "Ortopedia y Traumatología" },
    { id: "fisio", nombre: "Fisiatría" },
    { id: "ciru", nombre: "Cirugía" },
    { id: "pract5", nombre: "Práctica Integrada en Medicina V", abre: ["pract6"] }
  ],
  "10": [
    { id: "pedi", nombre: "Pediatría" },
    { id: "oft_derm", nombre: "Oftalmología / Otorrinolaringología / Dermatología" },
    { id: "urg", nombre: "Medicina de Urgencia" },
    { id: "psiq", nombre: "Psiquiatría" },
    { id: "pract6", nombre: "Práctica Integrada en Medicina VI" },
    { id: "elect2", nombre: "Electivo II" }
  ],
  "11": [{ id: "internado1", nombre: "Internado I", abre: ["internado2"] }],
  "12": [{ id: "internado2", nombre: "Internado II", abre: ["internado3"] }],
  "13": [{ id: "internado3", nombre: "Internado III", abre: ["internado4"] }],
  "14": [{ id: "internado4", nombre: "Internado IV" }]
};

// 2. Relaciones adicionales (varios prerrequisitos cruzados)
const relacionesExtra = {
  "farm_gen": ["farm_clin"],
  "bases1": ["diag1","bases2"],
  "diag1": ["diag2","med_int1"],
  "bases2": ["bases3","med_int1"],
  "med_int1": ["med_int2"],
  "diag2": ["metodos"],
  "metodos": ["neuro","onco","nutri","gine","orto","fisio","ciru","pedi","oft_derm","urg","psiq"],
  "med_int2": ["neuro","onco","nutri","gine","orto","fisio","ciru","pedi","oft_derm","urg","psiq"],
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

// 3. Lógica de construcción e interactividad
const contenedor = document.getElementById("contenedorMalla");
const aprobados = new Set(JSON.parse(localStorage.getItem("aprobados") || "[]"));

function construirMalla() {
  Object.entries(malla).forEach(([sem, ramos]) => {
    const col = document.createElement("div");
    col.className = "semestre";
    col.innerHTML = `<h2>${sem}º semestre</h2>`;
    ramos.forEach(r => {
      const div = document.createElement("div");
      div.className = "ramo";
      div.id = r.id;
      div.textContent = r.nombre;
      if (aprobados.has(r.id)) div.classList.add("aprobado");
      div.addEventListener("click", () => {
        div.classList.toggle("aprobado");
        aprobados.has(r.id) ? aprobados.delete(r.id) : aprobados.add(r.id);
        localStorage.setItem("aprobados", JSON.stringify([...aprobados]));
        actualizarHabilitados();
      });
      col.appendChild(div);
    });
    contenedor.appendChild(col);
  });
}

function actualizarHabilitados() {
  document.querySelectorAll(".ramo").forEach(el => el.classList.remove("habilitado"));
  Object.values(malla).flat().forEach(r => {
    if (r.abre) r.abre.forEach(id => {
      const tar = document.getElementById(id);
      if (tar && !tar.classList.contains("aprobado")) {
        const preds = Object.values(malla).flat().filter(x => x.abre?.includes(id));
        if (preds.every(x => aprobados.has(x.id))) tar.classList.add("habilitado");
      }
    });
  });
  Object.entries(relacionesExtra).forEach(([k, arr]) => {
    if (aprobados.has(k)) arr.forEach(i => {
      const t = document.getElementById(i);
      if (t && !t.classList.contains("aprobado")) t.classList.add("habilitado");
    });
  });
}

// 4. Ejecutar
construirMalla();
actualizarHabilitados();
"""

full_file_path.write_text(codigo_completo.strip(), encoding="utf-8")
full_file_path.name
