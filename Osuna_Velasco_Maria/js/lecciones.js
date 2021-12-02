document.addEventListener('DOMContentLoaded', function() {

    //Variables sacadas del formulario

    var nivel=document.getElementById('nivel');

    //Eventos

    nivel.addEventListener("click", verLeccion);

    //Funciones para validar

    function verLeccion() {
        if (nivel.value == "facil") {
            document.getElementById("facil").removeAttribute("class");
            document.getElementById("medio").removeAttribute("class");
            document.getElementById("dificil").removeAttribute("class");
            document.getElementById("facil").setAttribute("class", "aparecido");
            document.getElementById("medio").setAttribute("class", "desaparecido");
            document.getElementById("dificil").setAttribute("class", "desaparecido");
        } else if(nivel.value == "medio"){
            document.getElementById("facil").removeAttribute("class");
            document.getElementById("medio").removeAttribute("class");
            document.getElementById("dificil").removeAttribute("class");
            document.getElementById("facil").setAttribute("class", "desaparecido");
            document.getElementById("medio").setAttribute("class", "aparecido");
            document.getElementById("dificil").setAttribute("class", "desaparecido");
        }else if(nivel.value == "dificil"){
            document.getElementById("facil").removeAttribute("class");
            document.getElementById("medio").removeAttribute("class");
            document.getElementById("dificil").removeAttribute("class");
            document.getElementById("facil").setAttribute("class", "desaparecido");
            document.getElementById("medio").setAttribute("class", "desaparecido");
            document.getElementById("dificil").setAttribute("class", "aparecido");
        }
    }
});