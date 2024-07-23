# Anecdotes

## Ejercicios

### 1.12: anecdotes, paso 1

Se ha creado una aplicación que muestra una anécdota aleatoria del campo de la ingeniería de software cuando se hace clic en un botón.

### 1.13: anecdotes, paso 2

Se ha expandido la aplicación para permitir votar por la anécdota mostrada. Los votos de cada anécdota se almacenan en un array en el estado del componente.

### 1.14: anecdotes, paso 3

Se ha implementado la versión final de la aplicación que muestra la anécdota con el mayor número de votos. Si varias anécdotas empatan en el primer lugar, se muestra una de ellas.

## Explicación del Código

### Importación y definición del componente:

- Se importa `useState` de React para manejar el estado de la aplicación.

### Estados del componente:

- `selected`: índice de la anécdota actualmente seleccionada.
- `votes`: array que contiene el número de votos para cada anécdota, inicializado con ceros.

### Funciones:

- `nextAnecdote`: selecciona una anécdota aleatoria.
- `voteAnecdote`: incrementa el voto de la anécdota actualmente seleccionada.

### Cálculo del índice de la anécdota con más votos:

- Se utiliza `Math.max` y `votes.indexOf` para encontrar el índice de la anécdota con más votos.

### Renderizado del componente:

- Se muestra la anécdota seleccionada actualmente y su número de votos.
- Botones para votar y para seleccionar la siguiente anécdota.
- Se muestra la anécdota con más votos y su número de votos.
