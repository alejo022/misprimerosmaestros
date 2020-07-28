// (function() {
//     this.App || (this.App = {});
  
//     App.cable = ActionCable.createConsumer();
  
//   }).call(this);


//JavaScript
console.log("...!");






//  PARA VENTANAS MODALES BOTON "VER"
 

function verDetalleDocente(urlDjango) {
    $.ajax({
        url: urlDjango,
        /*data: {
          'username': username
        },*/
        //dataType: 'json',
        success: function (data) {
            $("#respuesta_ajax").html(data);
        }
    });
}




function verDetalleEstudiante(urlDjango) {
    $.ajax({
        url: urlDjango,
        /*data: {
          'username': username
        },*/
        //dataType: 'json',
        success: function (data) {
            $("#respuesta_ajax").html(data);
        }
    });
}


function verDetalleGrupo(urlDjango) {
    $.ajax({
        url: urlDjango,
        /*data: {
          'username': username
        },*/
        //dataType: 'json',
        success: function (data) {
            $("#respuesta_ajaxG").html(data);
        }
    });
}


function verDetalleUsuario(urlDjango) {
    $.ajax({
        url: urlDjango,
        /*data: {
          'username': username
        },*/
        //dataType: 'json',
        success: function (data) {
            $("#respuesta_ajaxU").html(data);
        }
    });
}


//  PARA BUSCAR EN LA BARRA PRINCIPAL DE LAS TABLAS 


function buscarDocentes(urlDjango, cod){
    token = document.getElementsByName('csrfmiddlewaretoken')[0].value
    $.ajax({
        type: "POST",
        url: urlDjango,
        data: {
          'valor': cod,
          'csrfmiddlewaretoken': token
        },
        //dataType: 'json',
        success: function (data) {
            $("#respuesta_docentes").html(data);
        }
    });
}




function buscarEstudiantes(urlDjango, cod){
    token = document.getElementsByName('csrfmiddlewaretoken')[0].value
    $.ajax({
        type: "POST",
        url: urlDjango,
        data: {
          'valor': cod,
          'csrfmiddlewaretoken': token
        },
        //dataType: 'json',
        success: function (data) {
            $("#respuesta_estudiantes").html(data);
        }
    });
}




function buscarGrupos(urlDjango, cod){
    token = document.getElementsByName('csrfmiddlewaretoken')[0].value
    $.ajax({
        type: "POST",
        url: urlDjango,
        data: {
          'valor': cod,
          'csrfmiddlewaretoken': token
        },
        //dataType: 'json',
        success: function (data) {
            $("#respuesta_grupos").html(data);
        }
    });
}


/* $('.collapse').collapse()

$('#caminadores').collapse({
    toggle: true
  })
 */