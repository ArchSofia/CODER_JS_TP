### Clase 7 - Operadores avanzados y Librerías

Objetivos:

- [ ] 1.Simplificar procesos con operadores ternarios y lógicos
- [ ] 2.Aplicar desestructuración de objetos y arrays
- [ ] 3.Comprender el funcionamiento del operador spread
- [ ] 4.Identificar oportunidades de optimización del código

- Dejar de usar prompts para empezar a usar DOM
- Usar una librería

4. Identificar oportunidades de optimización del código

- Reestructuré las carpetas separando el dom - productos - templates
- Optimizé las funciones prompt usando ternarios.
- Utilizé el operador lógico or ||
- Implementé desestructuración en template.js

### Paso a paso de como fui armando el archivo dom.js

1. AGREGO AL PRINCIPIO DEL CÓDIGO EL CARRITO QUE ES UN ARRAY VACÍO
2. CAPTURO EL ELEMENTO HTML EN EL CUAL VOY A INYECTARLE LAS CARDS CON JAVASCRIPT
3. CREO UNA FUNCIÓN QUE CREA UNA CARD USANDO TEMPLATE STRINGS Y TEMPLATE LITERALS QUE ESTA EN EL ARCHIVO TEMPLATES
4. DECLARO LA FUNCIÓN cargarMisProductos (línea 33) PARA INYECTARLE EL HTML AL CONTAINER DE CADA PRODUCTO USANDO FOREACH
5. DECLARO FUNCIONES activarBotonesAdd y activarBotonesRemove PARA QUE AL PRESIONAR LOS BOTONES + Y -, PODAMOS AGREGARLOS AL ARRAY CARRITO EN LAS FUNCIONES
6. AGREGO LA EJECUCIÓN DE ESTAS FUNCIONES EN LA FUNCIÓN cargarMisProductos (línea 33)
7. LUEGO DE DECLARAR LA FUNCIÓN cargarMisProductos (línea 33), LA EJECUTO
8. DECLARO restarCarrito Y agregarAlCarrito PARA AGREGAR Y QUITAR PRODUCTOS DEL CARRITO Y LO REGISTRO EN LA CONSOLA
   10.DECLARO precioTotal PARA SUMAR LOS PRECIOS DEL CARRITO Y REGISTRARLO POR CONSOLA
   11.AHORA QUE YA TENEMOS EL CARRITO Y LOS BOTONES ACTIVOS, DECLARO guardarCarrito Y GUARDAMOS EL CARRITO EN LOCALSTORAGE USANDO JSON PARA CONVERTIR EL ARRAY EN UN STRING
   12.DECLARAMOS LA FUNCIÓN recuperarCarrito QUE VA BUSCAR LA INFORMACIÓN GUARDADA EN LOCALSTORAGE USANDO GETITEM Y PARSEANDO LA INFORMACION PARA CONVERTIR EL STRING EN UN ARRAY DE OBJETOS NUEVAMENTE
