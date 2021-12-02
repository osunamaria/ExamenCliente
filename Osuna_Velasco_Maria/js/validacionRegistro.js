document.addEventListener('DOMContentLoaded', function() {

    //Alumnos
    //En un futuro se añadirán estos datos a la base de datos
    function Alumno(usuario,contrasena,nombre,apellidos,email,pago){
        this.usuario=usuario;
        this.contrasena=contrasena;
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.email=email;
        this.metodoPago=pago;
    }

    //Expresiones regulares para validar

    var vEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var vNombre = /(^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]{3,16})+$/;
    var vCuenta = /[0-9]{13,19}|([0-9- ]{3,8}){3,6}/;

    //Variables sacadas del formulario

    var usuario=document.getElementById("usuario");
    var contrasena=document.getElementById("contrasena");
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var email = document.getElementById("email");
    var pago = document.getElementById("pago");
    var numeroCuenta = document.getElementById("numeroCuenta");

    //Eventos

    nombre.addEventListener("focusout", validarNombre);
    apellidos.addEventListener("focusout", validarApellidos);
    email.addEventListener("focusout", validarEmail);
    pago.addEventListener("click", validarCuenta);
    document.getElementById("formulario").addEventListener('submit', noEnviar);

    //Funciones para validar

    function validarNombre() {
        if (nombre.value == "") {
            correcto = false;
            document.getElementById("errores").innerHTML = "Nombre no puede estar vacio.";
            document.getElementsByTagName("input")[0].removeAttribute("class");
            document.getElementsByTagName("input")[0].setAttribute("class", "error");
            
        } else if (!vNombre.test(nombre.value)) {
            correcto = false;
            document.getElementById("errores").innerHTML = "No es un nombre valido.";
            document.getElementsByTagName("input")[0].removeAttribute("class");
            document.getElementsByTagName("input")[0].setAttribute("class", "error");
        } else {
            correcto = true;
            document.getElementsByTagName("input")[0].removeAttribute("class");
            document.getElementsByTagName("input")[0].setAttribute("class", "datos");
        }
        return correcto;
    }

    function validarApellidos() {
        if (apellidos.value == "") {
            correcto = false;
            document.getElementById("errores").innerHTML = "Apellidos no puede estar vacio.";
            document.getElementsByTagName("input")[1].removeAttribute("class");
            document.getElementsByTagName("input")[1].setAttribute("class", "error");
        } else if (!vNombre.test(apellidos.value)) {
            correcto = false;
            document.getElementById("errores").innerHTML = "No son apellidos validos.";
            document.getElementsByTagName("input")[1].removeAttribute("class");
            document.getElementsByTagName("input")[1].setAttribute("class", "error");
        } else {
            correcto = true;
            document.getElementsByTagName("input")[1].removeAttribute("class");
            document.getElementsByTagName("input")[1].setAttribute("class", "datos");
        }
        return correcto;
    }

    function validarEmail() {
        if (email.value == "") {
            correcto = false;
            document.getElementById("errores").innerHTML = "Email no puede estar vacio.";
            document.getElementsByTagName("input")[2].removeAttribute("class");
            document.getElementsByTagName("input")[2].setAttribute("class", "error");
        } else if (!vEmail.test(email.value)) {
            correcto = false;
            document.getElementById("errores").innerHTML = "No es un email valido.";
            document.getElementsByTagName("input")[2].removeAttribute("class");
            document.getElementsByTagName("input")[2].setAttribute("class", "error");
        } else {
            correcto = true;
            document.getElementsByTagName("input")[2].removeAttribute("class");
            document.getElementsByTagName("input")[2].setAttribute("class", "datos");
        }
        return correcto;
    }

    function validarCuenta() {
        if (pago.value == "tarjeta") {
            document.getElementsByTagName("label")[7].removeAttribute("class");
            document.getElementsByTagName("input")[5].removeAttribute("class");
            document.getElementsByTagName("input")[5].setAttribute("class", "datos");

            if (numeroCuenta.value == "") {
                correcto = false;
                document.getElementById("errores").innerHTML = "Numero de cuenta no puede estar vacio.";
                document.getElementsByTagName("input")[5].setAttribute("class", "error");
            } else if (!vCuenta.test(numeroCuenta.value)) {
                correcto = false;
                document.getElementById("errores").innerHTML = "No es un numero de cuenta valido.";
                document.getElementsByTagName("input")[5].setAttribute("class", "error");
            } else {
                correcto = true;
                document.getElementsByTagName("input")[5].removeAttribute("class");
                document.getElementsByTagName("input")[5].setAttribute("class", "datos");
            }
        } else {
            correcto = true;
            document.getElementsByTagName("label")[7].setAttribute("class", "labelCuenta");
            document.getElementsByTagName("input")[5].removeAttribute("class");
            document.getElementsByTagName("input")[5].setAttribute("class", "cuenta");
        }
        return correcto;
    }

    function noEnviar(event) {
        if (validarNombre() && validarApellidos() && validarEmail() && validarCuenta()) {
            var alum=new Alumno(usuario.value,contrasena.value,nombre.value,apellidos.value,email.value,pago.value);
            var object = {'usuario' : alum.usuario, 'contrasena' : alum.contrasena};
            // Lo guardamos en localStorage, pasándolo a cadena con JSON
            localStorage.setItem('key', JSON.stringify(object));
        } else {
            event.preventDefault();
        }
    }
});