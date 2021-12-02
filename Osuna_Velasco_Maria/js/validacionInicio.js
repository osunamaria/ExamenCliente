document.addEventListener('DOMContentLoaded', function() {

    //Variables sacadas del formulario

    var usuario = document.getElementById("usuario");
    var contrasena = document.getElementById("contrasena");
    var alumno = JSON.parse(localStorage.getItem('key'));

    //Eventos

    document.getElementById("formulario").addEventListener('submit', validarUsuario);

    //Funciones para validar

    function validarUsuario(event) {
        if (usuario.value!=alumno.usuario || contrasena.value!=alumno.contrasena) {
            event.preventDefault();
            document.getElementById("error").removeAttribute("class");
            document.getElementById("error").setAttribute("class", "errores");
        }
    }
});