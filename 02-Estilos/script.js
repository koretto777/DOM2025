/* 

    Seleccionar el h1 a traves de su clase


*/

const titulo = document.querySelector(".titulo");

/* 

    Mosntrar el nodo seleccionado

*/

console.log(titulo);

/* 

    Objeto Syle

    Podemos acceder a este objeto usando la notacion de punto

        nodo.style

    Como resultado nos da un CSS Ste declaration. Es decir, nos va a dar una lista que representa todas las propiedades de estilo de un elemento.

    Las propiedades cambian del formato kebab-case a camelCase

    Unicamente muestra el valor de los estilos en linea declarados directamente en el elemento HTML.

*/

console.log(titulo.style);

/* 

    Para acceder a las propiedades de estilo, usamos la notacion de (.)

        nodo.style.nombrePropiedad

*/

console.log("El color del titulo es: " + titulo.style.color);

/* 

    Asignar un valor a la propiedad de estilo del nodo seleccionado

        node.style.color = valor

*/

titulo.style.color = "pink";
titulo.style.backgroundColor = "purple";
titulo.style.fontSize = "48px";

/* 

Método setProperty()

Asignamos una propiedad de estilo a un elemento seleccionado

sintaxis:
elemento.style.setProperty(nombrePropiedad, valor, important);

- Más felxible, por lo tanto más usado
- Las propiedades se escriben en kebab-kase
- El parametr "important" es opcional

*/

titulo.style.setProperty("color", "darkblue");
titulo.style.setProperty("background-color", "green", "important");

/* 

Eliminar valores de propiedades

node.style.nombrePropiedad = "" //Asignamos cadena vacía 

En esta sintaxis, la propiedad de css va en formato camelCase

*/

//titulo.style.color = "";
//titulo.style.backgroundColor = "";

/* 

Método removeProperty()

Esto elimina la prpiedad de estilo

Sintaxis:

nodo.style.removeProperty(nombre-propiedad); //nombre de la propiedad en formato kebab-case

*/

titulo.style.removeProperty("color");
titulo.style.removeProperty("background-color");
titulo.style.removeProperty("font-size");

