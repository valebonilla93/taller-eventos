const div = document.getElementById('miDiv');
const boton = document.querySelector('button');

div.addEventListener("click", (event) => {
    if (event.target === boton) {
        return;
    }else{
    alert('Hola! Soy el div');}
});

