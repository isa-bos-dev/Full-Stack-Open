# Unicafe

## Ejercicios

### 1.6: unicafe, paso 1

Se ha creado una aplicación que permite a los usuarios enviar comentarios en tres categorías: good (bueno), neutral y bad (malo). La aplicación muestra el número total de comentarios recopilados para cada categoría. Los datos se mantienen durante una única sesión del navegador.

### 1.7: unicafe, paso 2

La aplicación se ha ampliado para mostrar más estadísticas sobre los comentarios recopilados, incluyendo el número total de comentarios, la puntuación promedio y el porcentaje de comentarios positivos.

### 1.8: unicafe, paso 3

La aplicación se ha refactorizado para extraer la visualización de las estadísticas en su propio componente `Statistics`. El estado de la aplicación permanece en el componente raíz `App`.

### 1.9: unicafe, paso 4

La aplicación ahora muestra las estadísticas solo una vez que se han recopilado los comentarios.

### 1.10: unicafe, paso 5

Se ha continuado refactorizando la aplicación para extraer los siguientes componentes:

- `Button` para definir los botones utilizados para enviar comentarios.
- `StatisticLine` para mostrar una única estadística.

### 1.11: unicafe, paso 6

Las estadísticas se muestran en una tabla HTML para mejorar la presentación.

## Explicación del Código

### Importación y definición del componente:

- Se importa `useState` de React para manejar el estado de la aplicación.

### Estados del componente:

- `good`: número de votos positivos.
- `neutral`: número de votos neutrales.
- `bad`: número de votos negativos.

### Funciones:

- `setGood`, `setNeutral`, `setBad`: funciones para actualizar los estados correspondientes a cada categoría de comentario.

### Renderizado del componente:

- Se muestran tres botones para recolectar feedback (good, neutral, bad).
- Se muestra el componente `Statistics` con las estadísticas basadas en el feedback recibido.
- El componente `Statistics` muestra las estadísticas en una tabla si hay feedback, o un mensaje indicando que no hay feedback si no se ha dado ninguno.
