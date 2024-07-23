# Courseinfo

## Ejercicios

### 1.1: Información del Curso, paso 1

Se ha creado una aplicación que muestra información sobre un curso de desarrollo de aplicaciones Half Stack. La aplicación inicialmente muestra el nombre del curso y una lista de partes con el número de ejercicios para cada parte. Toda la información está en el componente `App`.

### 1.2: Información del Curso, paso 2

Se ha refactorizado el componente `Content` para que no muestre los nombres de las partes ni el número de ejercicios por sí mismo. En su lugar, utiliza componentes `Part` que representan cada uno el nombre y el número de ejercicios de una parte.

### 1.3: Información del Curso, paso 3

Se ha modificado la aplicación para utilizar objetos en lugar de variables individuales para representar las partes del curso. Cada parte es un objeto con `name` y `exercises`.

### 1.4: Información del Curso, paso 4

Las partes del curso se han colocado en un array. La aplicación ha sido modificada para funcionar con esta nueva estructura.

### 1.5: Información del Curso, paso 5

Se ha llevado la estructura un paso más allá. El curso y sus partes se han combinado en un solo objeto JavaScript. La aplicación ha sido adaptada para trabajar con esta nueva estructura.

## Explicación del Código

### Importación y definición del componente:

- Se definen varios componentes: `Header`, `Part`, `Content`, y `Total`.
- El componente `App` es el principal y contiene la estructura del curso y las partes.

### Componentes:

- `Header`: muestra el nombre del curso.
- `Part`: muestra el nombre de una parte y el número de ejercicios.
- `Content`: muestra una lista de componentes `Part`.
- `Total`: calcula y muestra el número total de ejercicios sumando los ejercicios de todas las partes.

### Renderizado del componente `App`:

- Se define un objeto `course` que contiene el nombre del curso y un array de partes.
- Se pasa el nombre del curso al componente `Header`.
- Se pasa el array de partes al componente `Content` y al componente `Total`.

### Estructura del código:

El código del archivo `App.jsx` se estructura de la siguiente manera:

1. **Componente `Header`**:

   - Muestra el nombre del curso.

2. **Componente `Part`**:

   - Muestra el nombre y el número de ejercicios de una parte.

3. **Componente `Content`**:

   - Utiliza el componente `Part` para mostrar la información de cada parte del curso.

4. **Componente `Total`**:

   - Calcula y muestra el total de ejercicios sumando los ejercicios de todas las partes.

5. **Componente `App`**:
   - Define el objeto `course` que contiene el nombre del curso y las partes.
   - Renderiza los componentes `Header`, `Content` y `Total`, pasando los datos necesarios como props.
