<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Malla Interactiva Medicina</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    body {
      font-family: sans-serif;
      background-color: #f8f9fa;
      margin: 0;
      padding: 20px;
    }
    h1 {
      text-align: center;
      margin-bottom: 20px;
    }
    .semestres {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      gap: 20px;
      padding-bottom: 20px;
    }
    .semestre {
      flex: 0 0 auto;
      min-width: 250px;
      background-color: #fff;
      border: 1px solid #ccc;
      border-radius: 10px;
      padding: 10px;
    }
    .semestre h2 {
      text-align: center;
      font-size: 16px;
      margin: 10px 0;
    }
    .ramo {
      background-color: #e0f7fa;
      margin: 10px 0;
      padding: 10px;
      border-radius: 6px;
      text-align: center;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    .ramo:hover {
      background-color: #b2ebf2;
    }
    .aprobado {
      text-decoration: line-through;
      background-color: #dcedc8 !important;
    }
    .habilitado {
      background-color: #fff9c4 !important;
    }
    @media (max-width: 768px) {
      .semestres {
        flex-wrap: wrap;
        justify-content: center;
      }
      .semestre {
        width: 90%;
        max-width: 350px;
      }
    }
  </style>
</head>
<body>
  <h1>Malla Curricular Interactiva - Medicina UBO</h1>
  <div class="semestres" id="contenedorMalla"></div>
  <script src="https://cdn.jsdelivr.net/gh/paz2108/malla-ubo-completa@main/malla.js"></script>
</body>
</html>
