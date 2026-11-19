# Pesos del Gym

App web para el celular para anotar el peso y los ajustes de cada máquina del gimnasio.

**Usala acá:** https://juan-mazzochi.github.io/pesos-gym/

- Elegís tus ejercicios de un catálogo de 68 ilustrados, con buscador y filtro por grupo muscular.
- Tocás un ejercicio y elegís el peso con una rueda que va de a 2,5 kg.
- En **Entrenar** armás rutinas (por ejemplo «Día A · Pecho y tríceps»), las duplicás para hacer variantes, y cuando hacés una tocás **La hice hoy**.
- En **Calendario** ves qué días entrenaste, qué rutina hiciste con qué pesos, y tu racha de semanas seguidas.
- Cada cambio de peso queda en el historial, y en **Progreso** ves el gráfico por ejercicio.
- Si un ejercicio no está, podés crear uno propio con tu foto, o usar tu foto en cualquier ejercicio del catálogo.

## Instalarla en el celular

En Android, abrí el link en Chrome y tocá **Instalar app** (o ⋮ → *Agregar a pantalla principal*). Queda con ícono propio y funciona sin internet.

## Dónde se guardan los datos

No hay cuentas ni servidor: cada persona guarda sus ejercicios y pesos en su propio navegador (`localStorage`). Para no perderlos al cambiar de celular, usá **Exportar copia** (descarga un `.json`) e **Importar copia** en el otro teléfono.

## Estructura

- `index.html`: toda la app (HTML, CSS y JS en un solo archivo).
- `sw.js`: service worker para que funcione sin conexión. Si cambiás `index.html`, subí el `VERSION` para que los celulares bajen la versión nueva.
- `manifest.webmanifest` e `icons/`: datos para instalarla como app.
- `img/`: ilustraciones del catálogo. `img/<id>.svg` es la posición final y `img/<id>-2.svg` muestra las dos posiciones.

## Ilustraciones

Las ilustraciones son de [Everkinetic](https://github.com/everkinetic/data), bajo licencia [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). Están recoloreadas al azul de la app (#181a47) y combinadas en una imagen con las dos posiciones. Las imágenes modificadas de `img/` se comparten bajo la misma licencia.
