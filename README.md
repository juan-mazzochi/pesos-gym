# Pesos del Gym

App para el celular para anotar el peso y los ajustes de cada máquina del gimnasio.

- Elegís tus ejercicios de un catálogo de 66 con foto, con buscador y filtro por grupo muscular.
- Tocás un ejercicio y elegís el peso con una rueda que va de a 2,5 kg.
- Cada cambio de peso queda en el historial, y en **Progreso** ves el gráfico por ejercicio.
- Si un ejercicio no está, podés crear uno propio con tu foto.

## Estructura

- `index.html`: toda la app (HTML, CSS y JS en un solo archivo).
- `img/`: fotos del catálogo, una por ejercicio (`img/<id>.jpg`).

Los datos se guardan con la base de datos del artifact de Claude donde está publicada la app, así que fuera de ese entorno la app muestra el catálogo pero no guarda.

## Fotos

Las fotos son de [free-exercise-db](https://github.com/yuhonas/free-exercise-db), de dominio público (Unlicense).
