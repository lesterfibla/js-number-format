# JS Number Format

Conjunto de funciones javascript para mostrar números formateados (número sin decimal, con decmal y moneda)

Creado por [Lester Fibla Saavedra](https://lesterfibla.com/pro) para el curso de "Fundamentos de Javascript" de [Platzi](https://platzi.com)

## Funciones que contiene

- n(número [,truncate]), número sin decimales
- d(numero [,truncate]), número con 2 decimales
- m(numero [,truncate]), número sin decimales y signo $ al inicio
- El parámetro opcional truncate, cuando es true, corta el número entero y no lo redondea.

## Instalación

```
npm install js-number-format
```

## Uso

Llamar el script donde se quiera usar:

```
<script src="your/path/to/dist/js-number-format.js"></script>
```

y usar:

```
let numero = 123456.78;
console.log('Entrada: ' + numero);
console.log('n round: ' + n(numero) );
console.log('n trunc: ' + n(numero, true) );
console.log('d round: ' + d(numero) );
console.log('d trunc: ' + d(numero, true) );
console.log('m round: ' + m(numero) );
console.log('m trunc: ' + m(numero, true) );
```