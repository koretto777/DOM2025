// referencia del emoji del cursor

const cursor =  document.querySelector(".cursor");

// detectar elemento del movimiento del mouse

document.addEventListener("mousemove" , (e) => {
    //console.log(e.clientX);
    //console.log(e.clientY);

    // lo guardamos en una variable
    let mousex = e.clientX;
    let mousey = e.clientY;

    cursor.style.left = `${mousex}px`
    cursor.style.top = `${mousey}px`
})

// detectar el evento de presionar una tecla

document.addEventListener("keydown" , (e) => {
    //console.log(e.key);

    /* switch para asignar el emoji del mouse */

    switch (e.key) {
        case "1" :
            cursor.textContent = "💀";
            document.body.style.backgroundColor = "#000000"
            break;
        case "2" :
            cursor.textContent = "😺";
            document.body.style.backgroundColor = "#f46912ff"
            break;
        case "3" :
            cursor.textContent = "⭐";
            document.body.style.backgroundColor = "#62ddffff"
            break;
        case "4" :
            cursor.textContent = "🌸";
            document.body.style.backgroundColor = "#ff7096"
            break;
        default: 
            cursor.textContent = "🌙";
            document.body.style.backgroundColor = "#251081"
    }
})