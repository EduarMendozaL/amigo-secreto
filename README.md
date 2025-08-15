# Sorteador de Amigo Secreto

Este proyecto es una sencilla aplicación web que permite agregar solo nombres de amigos, validar la entrada de datos, evitar duplicados y finalmente realizar el sorteo de un amigo secreto de manera aleatoria con al menos dos nombres.

## Características
- Permite agregar nombres de amigos a una lista.
- Valida que el nombre no esté vacío ni sea duplicado.
- Convierte los nombres a mayúsculas de forma automática.
- Permite el ingreso solo de letras.
- Realiza el sorteo de un amigo secreto de forma aleatoria.
- Muestra el resultado del sorteo.

## Tecnologías Utilizadas
- HTML
- CSS
- JavaScript

## Estructura del Proyecto
- `index.html`: Archivo principal que contiene la estructura HTML de la aplicación.
- `style.css`: Archivo para los estilos de la aplicación (opcional si deseas incluir diseño adicional).
- `app.js`: Archivo con la lógica en JavaScript.

## Cómo Usar

1. Clona este repositorio o descarga el proyecto.
   ```bash
   git clone <url-del-repositorio>
   ```
2. Abre el archivo `index.html` en tu navegador.

3. Ingresa los nombres de los amigos en el campo de texto y haz clic en `Añadir`.
   - Se validará que no ingreses nombres vacíos ni repetidos.
   - Los nombres se convertirán automáticamente a mayúsculas.

4. Una vez agregados al menos dos nombres, haz clic en `Sortear Amigo`.
   - Se mostrará el nombre del amigo secreto sorteado.

5. Si intentas sortear con menos de dos nombres, se mostrará una alerta.

## Funcionalidades del Código

### `agregarAmigo()`
Valida el nombre ingresado y lo agrega a la lista de amigos si cumple con las condiciones.

### `actualizarListaAmigos()`
Actualiza la lista visible de amigos en el navegador.

### `sortearAmigo()`
Realiza el sorteo del amigo secreto y muestra el resultado. Vacía la lista de amigos.

### `letrasConvertirMayuscula(letra)`
Convierte el nombre a mayúsculas y elimina caracteres no permitidos.

### `limpiarCajaNombre()`
Limpia el campo de entrada de texto y mantiene el foco en él.

<!-- ## Mejoras Posibles
- Mantener la lista de amigos después del sorteo.
- Guardar los nombres en `localStorage` para persistencia de datos.
- Agregar estilos CSS para mejorar la interfaz.
- Permitir exportar la lista de amigos y el resultado del sorteo.

## Contribuciones
Las contribuciones son bienvenidas. Puedes enviar un pull request o abrir un issue. -->

## Licencia
Este proyecto está bajo la Licencia MIT.

