# Pesos del Gym

App para el celular para anotar el peso y los ajustes de cada máquina del gimnasio.

- Elegís tus ejercicios de un catálogo de 62 ilustrados, con buscador y filtro por grupo muscular.
- Tocás un ejercicio y elegís el peso con una rueda que va de a 2,5 kg.
- Cada cambio de peso queda en el historial, y en **Progreso** ves el gráfico por ejercicio.
- Si un ejercicio no está, podés crear uno propio con tu foto.

## Estructura

- `index.html`: toda la app (HTML, CSS y JS en un solo archivo).
- `img/`: ilustraciones del catálogo. `img/<id>.svg` es la posición final y `img/<id>-2.svg` muestra las dos posiciones.

Los datos se guardan con la base de datos del artifact de Claude donde está publicada la app, así que fuera de ese entorno la app muestra el catálogo pero no guarda.

## Ilustraciones

Las ilustraciones son de [Everkinetic](https://github.com/everkinetic/data), bajo licencia [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Están recoloreadas al azul de la app (#181a47) y combinadas en una imagen con las dos posiciones. Las imágenes modificadas de `img/` se comparten bajo la misma licencia.
