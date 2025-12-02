/* 

Obtener un elemento de referencia. Esate será en nodo de HTML donde vamos a crear el nuevo elemento.

*/

const peliculas = document.getElementById("peliculas");

/* 

para crear un nuevo elemento usamos createElement()

sintaxis:
    elemento.createElement("tipoElemento");

*/

const nuevaPeli = document.createElement("li");

/* 

para agregar el elemento al DOM, tomamos el elem,ento de referencia y usamos el metodo append()

sintaxis:
    elemento.append("nuevoElemento");

*/

peliculas.append(nuevaPeli);

/* 

para agragarle contenidpo al nuevo elemento podemos utilizar innerText

*/

nuevaPeli.innerText = "Ratatouille";

console.log(peliculas)

/* 

reto

*/

nuevaPeli.classList.add("pelicula" , "fondo-dos");

