$(function () {
    //Evento click para mostrar servicios(direcionamiento a modulos dentro de la barra menu)
    $("#link_servicios").on("click", function(){
        $("#bodymenu").load("php/loadServicio.php");
        
    });

});

