$(document).ready( function(){

    var arregloDeObjetos = [];//Arreglo de objetos post
    var numeroPost = 0;

    //console.log("Contenido : "+textoPost);
    
    $("button#addPost").on(
        "click", 
        function (event){

            var textoPost = $("#textoPost").val();
            console.log("Listo : "+textoPost);
            //Si hay contenido que publicar

            var nuevoPost = {
                numero   : numeroPost,
                contenido: textoPost
            };

            
            if(textoPost !== "")
            {
                arregloDeObjetos[arregloDeObjetos.length] = nuevoPost;
                numeroPost++;
                //Obtener contenido html
                //var miHTML = $("div#posts").html();
                //console.log(miHTML);
                //Editar contenido html
                //var miHTML = $("div#posts").html("<h1>Hola</h1>");
                $("#posts").prepend(
                    '<div class="container">'+
                    '<div class="row">'+
                        '<div class="col-4">'+
                            '<img src="img/author1.jpg">'+
                            
                        '</div>'+
                        '<div class="col-4">'+
                                'Texto 1<br>'+
                                nuevoPost.numero+
                        '</div>'+                
                    '</div>'+
                    '<div class="row">'+
                            '<div class="col-12">'+
                             nuevoPost.contenido+
                    '</div>'+
                '</div>'+        
            '</div>'
                );
            }

            
            console.log(textoPost);
            
        });


        //Valores a enviarle a la ruta
        
       
        /*
        $.ajax(
                {
                    type        : "POST", //Metodod de llamada
                    contentType : "application/json", //Tipo de dato que esperamos que nos devuelva la respuesta
                    url         : "http://localhost:8080/Banana_GEST/respuesta-ajax", //Ruta que queremos acceder, mi servlet en este caso
                    contentType    : "application/json",
                    dataType: "json", //Tipo de dato que enviaremos
                    dato        : jsonSend, //JSON Codificado
                    
                    //Aquí entramos si la llamada a la url es correcta y nos devuelve el tipo de dato deseado
                    success: function ( data, textStatus, jqXHR) {
                        console.log("Exito!!!");
                        console.log("Disque "+jsonSend.dato);
                        console.log(data); //Data contien el json devuelto por la ruta
                        //Aquí es donde por ejemplo hacemos render a un template con los datos recibidos
                    },
                    
                    //Si hay error al acceder la ruta y/o no obtenemos el tipo de dato esperad
                    error       : function (jqXHR, textStatus, errorThrown) {
                        //Entraremos a este método
                        console.log("error_feo");
                }
            });*/
            var jsonSend = {
                "dato": "Catarino"
            };
            $.post(
                "http://localhost:8080/Banana_GEST/respuesta-ajax",
                jsonSend,
                function(data){
                    console.log("Respuesta : "+data.dato);
                },
                "json"
            );
        
            /*
        $.post('http://localhost:8080/Banana_GEST/respuesta-ajax',jsonSend,
                function(resp){
                    console.log("SPPTM");
                    console.log(jsonSend);
                    console.log(resp);
                })
                .fail(function(){
                    console.log("Error!!!");
                });*/  


                /*
// Remove Post


protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //processRequest(request, response);
        
        //Devolver JSON
        response.setContentType("application/json");
        
        //JSON Por defecto
        String jsonResult = "{\"status\":\"error\"}";
        
        //Conectar a la base de datos
        Connection con = conectarAMySQL();

        //Si la conexión fue exitosa relizamos el proceso
        if (con != null) {
            //Send request reader and get
            JsonObject jo = JSONPost.getJsonObject(
                request.getReader() //Aquí está nuestro json
            );
            
            int id = jo.get("id").getAsInt();
            
            //Creamos la query
            String query = "UPDATE san_posts SET pst_control = 0 WHERE pst_id = " + id;
            //System.out.println(query);
            
            try {
                //Consulta
                Statement stmt = (Statement) con.createStatement();
                
                //ResultSet rs   =  stmt.executeUpdate(query);
                stmt.executeUpdate(query);
                
                con.close();
                
                JsonObject jobj = new JsonObject();
                jobj.addProperty("id", id);
                jobj.addProperty("status", "ok");
                jsonResult = jobj.toString();
            } catch (SQLException ex) {
                ex.printStackTrace();
            }
            
        }
        
        //Escribir JSON
        try (PrintWriter out = response.getWriter()) {
            out.print(jsonResult);
        }
    }
    
    //ModifyPost


    
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        //processRequest(request, response);
        
        //Especificar que obtendremos un JSON
        response.setContentType("application/json");
        
        //JSON Por defecto
        String jsonResult = "{\"status\":\"error\"}";
        
        //Conectar a la base de datos
        Connection con = conectarAMySQL();
        
        //Si la conexión fue exitosa relizamos el proceso
        if (con != null) {
            //Send request reader and get
            JsonObject jo = JSONPost.getJsonObject(
                request.getReader() //Aquí está nuestro json
            );
            
            //Obtener paámetros
            int    id      = jo.get("id").getAsInt();
            String content = jo.get("content").getAsString();
            
            //Creamos la query
            String query = "UPDATE san_posts SET pst_content = '"+ content + "' WHERE pst_id = " + id;
            //System.out.println(query);
            try {
                //Consulta
                Statement stmt = (Statement) con.createStatement();
                
                //ResultSet rs   =  stmt.executeUpdate(query);
                stmt.executeUpdate(query);
                
                con.close();
                
                con.close();
                
                JsonObject jobj = new JsonObject();
                jobj.addProperty("id", id);
                jobj.addProperty("content", content);
                jobj.addProperty("status", "ok");
                jsonResult = jobj.toString();
                
            } catch (SQLException ex) {
                 ex.printStackTrace();
            }
        }
        
        //Esribir ese JSON
        try (PrintWriter out = response.getWriter()) {
            out.print(jsonResult);
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    $(document).ready(function () {

    // Clear console
    console.clear();

    /* ------------------------------------------------------------------------------ *\
        Renderear todos los posts existententes al cargar la página
    \* ------------------------------------------------------------------------------ */

    $.ajax({
        url         : "http://localhost:8084/red-social/ObtainPost", //Aquí la ruta exacta de su servlet
        type        : "POST",
        // Qué espero recibir de la ruta
        contentType : "application/json",
        // Que tipo de datos te voy a enviar
        dataType    : "json",
        data        : JSON.stringify({}),
        // Servlet existe y me devolvió un JSON
        success     : function (data, textStatus, jqXHR) {
            // console.log("Aqui vamos a obtener y renderear los posts");
            // En data llegarán los postsdesde el servlet
            // console.log(data);
            
            // Recorrer el arreglo de posts
            for(var idx = 0; idx < data.length; idx++) {
                // Obtener el html actual
                var htmlElement =
                        '<div id="mi-post-' + data[idx].id + '" class="container mi-post">' +
                            '<div class="row">' +
                                '<div class="col-4">' +
                                    '<img src="img/author1.jpeg">' +
                                '</div>' +
                                '<div class="col-4">' +
                                    '<b>Publicado el </b><label class="h-date-pr" data-date=""> alguna fecha </label><br>' +
                                    '<b>Hace </b><label class="h-date-tp" data-date="">algun momento</label><br>' +
                                '</div>' +
                                '<div class="col-3">' + 
                                    '<b>POST ' + data[idx].id + '</b></div>' +
                                    '<div class="col-1">' +
                                '<button class="btn btn-outline-danger btn-sm post-delete" data-numero="' + data[idx].id + '">&times;</button>' +
                                '</div>' +
                            '</div>' +
                            '<div class="row">' +
                                '<div class="col-12 contenido-post" data-numero="' + data[idx].id + '" contenteditable>' + data[idx].content + '</div>' +
                            '</div>' +
                        '</div>';
                
                // Inyectar el post al final
                // Los obtuvimos en orden inverso
                $("div#posts").append(htmlElement);
            }
        },
        error       : function (jqXHR, textStatus, errorThrown) {
            // console.log(jqXHR);
            // console.log(textStatus);
            // console.log(errorThrown);
        }
    });

    /* ------------------------------------------------------------------------------ *\
        Agregar un nuevo post, al hacer click en el botón agregar
    \* ------------------------------------------------------------------------------ */

    $("button#add-post").on("click", function (event) {
        // console.log("Entro");
        // alert("Entro");

        // Obteniendo valor de un elemento por su tipo y su id
        var postText = $("textarea#textoPost").val();

        // Quitamos espacios en blanco, a las orillas
        postText = $.trim(postText);

        // console.log(postText);

        // Si llega texto que agregar
        if (postText !== "") {

            // alert(postText);

            // Objeto a enviar al servlet
            var nuevaPublicacion = {
                "id"        : $("div.mi-post").length + 1,
                "contenido" : postText
            };

            // alert(nuevaPublicacion);

            $.ajax({
                url         : "http://localhost:8084/red-social/NewPost", //Aquí la ruta exacta de su servlet
                type        : "POST",
                // Qué espero recibir de la ruta
                contentType : "application/json",
                // Que tipo de datos te voy a enviar
                dataType    : "json",
                data        : JSON.stringify(nuevaPublicacion),
                // Servlet existe y me devolvió un JSON
                success     : function (data, textStatus, jqXHR) {
                    // console.log("Si el acceso al servlet fue correcto");

                    // Insertar nueva publicacion
                    var htmlElement =
                        '<div id="mi-post-' + data.id + '" class="container mi-post">' +
                            '<div class="row">' +
                                '<div class="col-4">' +
                                    '<img src="img/author1.jpeg">' +
                                '</div>' +
                                '<div class="col-4">' +
                                    '<b>Publicado el </b><label class="h-date-pr" data-date=""> alguna fecha </label><br>' +
                                    '<b>Hace </b><label class="h-date-tp" data-date="">algun momento</label><br>' +
                                '</div>' +
                                '<div class="col-3">' + 
                                    '<b>POST ' + data.id + '</b></div>' +
                                    '<div class="col-1">' +
                                '<button class="btn btn-outline-danger btn-sm post-delete" data-numero="' + data.id + '">&times;</button>' +
                                '</div>' +
                            '</div>' +
                            '<div class="row">' +
                                '<div class="col-12 contenido-post" data-numero="' + data.id + '" contenteditable>' + data.content + '</div>' +
                            '</div>' +
                        '</div>';

                    // console.log(htmlElement);

                    $("div#posts").prepend(htmlElement);
                    // $(htmlElement).prependTo("div#posts");
                    
                    // Dejar limpia el área de texto
                    $("textarea#textoPost").val("");
                    // Esconder modal
                    $("div#exampleModal").modal("hide");

                },
                error       : function (jqXHR, textStatus, errorThrown) {
                    // console.log(jqXHR);
                    // console.log(textStatus);
                    // console.log(errorThrown);
                }
            });

            // Si la publicacion está vacía
        } else {
            alert("Agrega texto no seas flojo");
        }

    });

    /* ------------------------------------------------------------------------------ *\
        Borrar un nuevo post, al hacer click en el botón borrar
    \* ------------------------------------------------------------------------------ */

    $("div#posts").on("click", "button.post-delete", function(event) {
        // Entramos a ejecutar las acciones, sólo si el usuario acepta
        if (confirm("Estás seguro?")) {
            // Armar dinámicamente el id del post a eliminar
            // Junto con el número desde el data-numero del botón clickeado
            var numero = $(this).data("numero");
            // console.log(id);
            
            // Generar JSON a enviar
            var jsonSend = {
                "id": numero
            };
            
            // console.log(jsonSend);
            
            $.ajax({
                url         : "http://localhost:8084/red-social/RemovePost", //Aquí la ruta exacta de su servlet
                type        : "POST",
                // Qué espero recibir de la ruta
                contentType : "application/json",
                // Que tipo de datos te voy a enviar
                dataType    : "json",
                data        : JSON.stringify(jsonSend),

                // Servlet existe y me devolvió un JSON
                success     : function (data, textStatus, jqXHR) {
                    var divPost = "div#mi-post-" + data.id;
                    console.log(divPost);
                    $(divPost).remove();
                },
                error       : function (jqXHR, textStatus, errorThrown) {
                    // console.log(jqXHR);
                    // console.log(textStatus);
                    // console.log(errorThrown);
                }
            });
        }
    });

    /* ------------------------------------------------------------------------------ *\
        Modificar post, al hacer click y abandonar la caja de texto
    \* ------------------------------------------------------------------------------ */

    // Variable para guardar el contenido del post al hacerle click
    var GLOBALLastPostContent = "";
    
    // Click en el contenido del post
    $("div#posts").on("click", "div.contenido-post", function (event) {
        // console.log("Click contenido");
        // Quedarse con el contenido al hacer click
        GLOBALLastPostContent = $(this).html();
        // console.log(GLOBALLastPostContent);
    });
    
    // Salir del focus del contenido del post
    $("div#posts").on("blur", "div.contenido-post", function (event) {
        // console.log("Abandonar contenido");
       
        // Obtenemos el nuevo contenido
        var newContent = $(this).html();
        
        //console.log(newContent);
        
        //Quitar todos los espacios en formato html &nbsp;
        newContent = newContent.replace(new RegExp("&nbsp;", 'g'), " ");
        
        // Borramos los espacios al principio y al final
        newContent = $.trim(newContent);
        
        // Antes que nada hay que asegurarnos de que el nuevo contenido no esté vacío
        if (newContent === "") {
            // sólo lanzaremos una alerta indicándolo
            alert("El nuevo contenido no puede ser vacío.");
            
            // Reestablecemos el contenido con el contenido original
            $(this).html(GLOBALLastPostContent);
            
        // Si el nuevo contenido no está vacío
        } else {
            
            // Comparamos la igualdad con el valor anterior
            if (newContent === GLOBALLastPostContent) {
                // En realidad no se hizo cambio alguno,
                // pero sustituiremos para evitar posibles espacios extras
                $(this).html(GLOBALLastPostContent);
                
                // Sólo se limpia la variable global
                GLOBALLastPostContent = "";
            
            // Si el contenido cambió
            } else {
                // Obtener id post
                var id = $(this).data("numero");
                // console.log(id);
                // Json para enviar al servlet
                var jsonSend = {
                    "id"      : id,
                    "content" : newContent
                };
                
                // console.log(jsonSend);
                
                $.ajax({
                    url         : "http://localhost:8084/red-social/ModifyPost", //Aquí la ruta exacta de su servlet
                    type        : "POST",
                    // Qué espero recibir de la ruta
                    contentType : "application/json",
                    // Que tipo de datos te voy a enviar
                    dataType    : "json",
                    data        : JSON.stringify(jsonSend),

                    // Servlet existe y me devolvió un JSON
                    success     : function (data, textStatus, jqXHR) {
                        //console.log("Entramos");
                        // console.log(data);
                        
                        // Sustituimos el contenido HTML de nuestro div con el nuevo valor
                        $(this).html(data.content);
                        // Como ya se acabó el proceso, limpiamos la variable global
                        GLOBALLastPostContent = "";
                    },
                    error       : function (jqXHR, textStatus, errorThrown) {
                        // console.log(jqXHR);
                        // console.log(textStatus);
                        // console.log(errorThrown);
                    }
                });
                
            }
        
        }
        
    });

});
               
                



