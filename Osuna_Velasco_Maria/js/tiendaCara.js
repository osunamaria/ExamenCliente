window.onload=function() {
    //Objeto banjolele
        
    function Banjolele(nombre,precio,foto){
        this.nombre=nombre;
        this.precio=precio;
        this.foto=foto;
    }

    //Banjoleles

    var bb1=new Banjolele("Needlid","200,59€","img/bCaro1.PNG");
    var bb2=new Banjolele("Stagg","243,50€","img/bCaro2.PNG");
    var bb3=new Banjolele("Ortega","309,72€","img/bCaro3.PNG");
    var bb4=new Banjolele("Ortega","333,00€","img/bCaro4.PNG");
    var bb5=new Banjolele("Musikalia","375,76€","img/bCaro5.PNG");
    var bb6=new Banjolele("Kala","423,30€","img/bCaro6.PNG");

    var listaBanjolele=[bb1,bb2,bb3,bb4,bb5,bb6];
    //Mostrar

    var article=document.getElementById("article");

    for(i=0;i<=5;i++){
        var div = document.createElement("div");
        div.setAttribute("class", "contenedor");
        div.innerHTML="<img src='"+listaBanjolele[i].foto+"'><div class='letras'><h3>"+listaBanjolele[i].nombre+"</h3><p>"+listaBanjolele[i].precio+"</p><a href='https://www.amazon.es/Vangoa-concierto-pulgadas-banjolele-acolchada/dp/B07BRWQPN1/ref=sr_1_1_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&keywords=banjolele&qid=1638199531&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyWjdTRDJDVkpOSUIyJmVuY3J5cHRlZElkPUEwNTY2Mjc3M0tSWjhERExCUVBFNyZlbmNyeXB0ZWRBZElkPUEwNjU0NjA5M0I1SEM0OEszMlZZMSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU='>Ir a la tienda</a></div>";
        article.appendChild(div);
    }
}