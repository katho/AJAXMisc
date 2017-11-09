$(document).ready( function(){
    //Esta plantilla le indica a JavaScript que realice un trabajo una vez cargada la página
    //A partir de este punto se pueden crear funciones para realizar control lógico sobre el HTML
     //Clear console
     console.clear();
    /**
     * Esta llamada a función la tiene asignada un botón con un id btn-test-1.
     * Este recoge el evento y ejecuta la función, esta función hace lo que le indiquemos.
     */
    var objetoJSON = {"mensaje" : "Hola Servlet"};
    $('button#btn-test-1').on("click", function (event) {
        console.log("Presionaste btn-test-1");
        
        $.ajax({
            url: "http://localhost:8080/AJAXMisc/simple-request-response", 
            type: "POST",
            //Qué espero recibir de la ruta
            contentType: "application/json",
            //Que tipo de datos te voy a enviar
            dataType: "json",
            data: JSON.stringify(objetoJSON),

            //Servlet existe y me devolvió un JSON
            success: function(data, textStatus, jqXHR) {
                console.log("Si el acceso al servlet fue correcto");
                console.log(data.mensaje);
               
                
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
    });
});