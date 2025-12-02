/* 

accedder al primer elemento de la lista

*/

const botanas = document.getElementsByTagName ("li");

console.log(botanas[0]);

/* 
propiedad classList

devuelve un DOM Token o listado de clases en el DOM

sintaxis:
    elemento.classList

podemos acceder a las clases a través de su índice

*/

console.log(botanas[0].classList); //DOM Token list

console.log(botanas[0].classList[0]); // semilla

/* 

podemos agregar clases usando el metodo add()

sintaxis:
    elemento.classList.add("nombre-clase")

*/

botanas[2].classList.add("picante");

console.log(botanas[2].classList);

/* 

verificar si existe una clase en un elemento con el metodo contains()

sintaxis:
    elemento.classList.contains("nombre-clase");

- Devuleve true si existe la clase
- Devuelve false si no existe la clase

*/

console.log(botanas[1].classList.contains("botana")); //true
console.log(botanas[1].classList.contains("picante")); //false

/* 

Eliminar una clase usanod el metodo remove()

sintaxis:
    elemento.classList.remove("nombre-clase");

*/

botanas[3].classList.remove("botana");

console.log(botanas[3].classList);
