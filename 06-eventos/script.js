/* 

Evento

Es una accion o suceso que ocurre en el navegador o en un elemento del DOM. Puede ser iniciado por el usuario o por el sistema.Los eventos pueden ser manejados mediante javaScript.

+ Manejar eventos con JS

    1. Target (objetivo o blanco)
        Es el elemento del DOM en el que ha ocurrido el evento. Este se encuentra dentro del objeto evento (event) y se accede mediante la propiedad event.target

    2. Event Listener (escuchador del evento)
        Es el oido que esta atento a que ocurra un evento en un elemento target en especifico.Usamos el método addEventListener para escuchar los eventos.    

    3. Trigger (disparador o desencadenante)
        Es el desencadenante que provoca que un evento ocurra. Es la accion que reaiza el usuario o el sistema para activar el evento.
            + Hacer click
            + Mover el ratón
            + Tipear teclas
        
    4. Event Handler (manejador de evento)
        Es una función que se va a ejecutar cada vez que ocurre el evento. Con JS le decimos que va a ejecutar el manejador.
            + Mostrar un mensaje 
            + Cambiar el color
            + Agregar un elemento
            + Lanzar una alerta
        
        sintaxis:
        target.eventListener(trigger, eventHandler)

            target => elemento donde ocurre el evento
            listener => escucha y detecta el evento
            trigger => accion que ocurre en el evento
            handler => la funcion que se ejecuta al ocurrir el evento
*/

//Seleccionamos elemento

const button = document.getElementById("button")

//Manjear su evento

button.addEventListener("click", mostrarMensaje);

//Definir la función

function mostarMensaje() {
    alert("Ya vamonos Sophia!")
}
    //Codigo que se ejecuta