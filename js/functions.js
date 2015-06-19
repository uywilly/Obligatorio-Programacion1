//------------------------------------------------------------------------------
////////////////////////////////////Objetos/////////////////////////////////////
//------------------------------------------------------------------------------
var listaPublicaciones = new Array(
        {
            tipo: 'libro',
            codigo: '1234567891234',
            imagen: 'libro1.jpg',
            titulo: 'Aprende a tocar la guitarra',
            descripcion: 'Curso de guitarra',
            autor: 'Phil Capone',
            precio: 320,
            stock: 15,
            estado: 'habilitado'
        }
,
        {
            tipo: 'libro',
            codigo: '2345678912345',
            imagen: 'libro2.jpg',
            titulo: 'Introducción a Piaget',
            descripcion: 'Manual de método docente',
            autor: 'Ed Labinowicz',
            precio: 260,
            stock: 25,
            estado: 'habilitado'
        }
,
        {
            tipo: 'libro',
            codigo: '3456789123456',
            imagen: 'libro3.jpg',
            titulo: 'Ovinos Tecnologías',
            descripcion: 'Catálogo de ovejas mecánicas',
            autor: 'César Calvo',
            precio: 120,
            stock: 8,
            estado: 'habilitado'
        }
,
        {
            tipo: 'libro',
            codigo: '4567891234567',
            imagen: 'libro4.jpg',
            titulo: 'Al fin libre',
            descripcion: 'Manual de autosuperación',
            autor: 'Beth Moore',
            precio: 120,
            stock: 42,
            estado: 'habilitado'
        }
,
        {
            tipo: 'libro',
            codigo: '5678912345678',
            imagen: 'libro5.jpg',
            titulo: 'Caligrafía del pelo',
            descripcion: 'Recopilación de poesías capilares',
            autor: 'Renzo Carnevale',
            precio: 324,
            stock: 8,
            estado: 'habilitado'
        }
,
        {
            tipo: 'libro',
            codigo: '6789123456789',
            imagen: 'libro6.jpg',
            titulo: 'La cocina japonesa del Kabuki',
            descripcion: 'Recetas de pescado crudo',
            autor: 'Ricardo Sanz',
            precio: 213,
            stock: 13,
            estado: 'habilitado'
        }
,
        {
            tipo: 'libro',
            codigo: '7891234567890',
            imagen: 'libro7.jpg',
            titulo: 'Organización de congresos y convenciones',
            descripcion: 'Libro para quitarle guita a los giles',
            autor: 'Manuel Papillón',
            precio: 420,
            stock: 5,
            estado: 'habilitado'
        }
,
        {
            tipo: 'libro',
            codigo: '8912345678901',
            imagen: 'libro8.jpg',
            titulo: 'Identificación forense',
            descripcion: 'Manual para averiguar quién es el muerto',
            autor: 'Francisco Trillas',
            precio: 312,
            stock: 18,
            estado: 'habilitado'
        }
,
        {
            tipo: 'libro',
            codigo: '9123456789012',
            imagen: 'libro9.jpg',
            titulo: 'Las actividades turísticas y recreacionales',
            descripcion: 'Catálogo de cosas para hacer en el tiempo libre',
            autor: 'Esteban Quito',
            precio: 50,
            stock: 10,
            estado: 'habilitado'
        }
,
        {
            tipo: 'libro',
            codigo: '1234567890123',
            imagen: 'libro10.jpg',
            titulo: 'Seguridad e higiene en el trabajo',
            descripcion: 'Reglas para bañarse seguro en el trabajo',
            autor: 'Walter Gargano',
            precio: 282,
            stock: 31,
            estado: 'habilitado'
        }
,
        {
            tipo: 'libro',
            codigo: '2345678901234',
            imagen: 'libro11.jpg',
            titulo: 'Las cortinas rojas',
            descripcion: 'Libro de cuento con tapa horrible',
            autor: 'Margarita Mainé',
            precio: 150,
            stock: 12,
            estado: 'habilitado'
        }
,
        {
            tipo: 'libro',
            codigo: '3456789012345',
            imagen: 'libro12.jpg',
            titulo: 'Mi libro de lectura 2',
            descripcion: 'Libro para leer dos veces.',
            autor: 'Carolo Santillana',
            precio: 115,
            stock: 22,
            estado: 'habilitado'
        }
,
        {
            tipo: 'libro',
            codigo: '4567890123456',
            imagen: 'libro13.jpg',
            titulo: 'Yoga en casa',
            descripcion: 'Como torcerse uno mismo sin morir',
            autor: 'Ruben Rada',
            precio: 200,
            stock: 14,
            estado: 'habilitado'
        }
,
        {
            tipo: 'libro',
            codigo: '5678901234567',
            imagen: 'libro14.jpg',
            titulo: 'Libro de poemas',
            descripcion: 'Recopilación de buenos poemas',
            autor: 'Federico García Lorca',
            precio: 280,
            stock: 20,
            estado: 'habilitado'
        }
,
        {
            tipo: 'libro',
            codigo: '6789012345678',
            imagen: 'libro15.jpg',
            titulo: 'Guía literaria de Roma',
            descripcion: 'Ambientación de obras literarias romanas',
            autor: 'Massimo Mastrancuzo',
            precio: 100,
            stock: 5,
            estado: 'habilitado'
        }
,
        {
            tipo: 'revista',
            codigo: '1134567898',
            imagen: 'revista1.jpg',
            titulo: 'Hola - Diego es cursi',
            descripcion: 'Chusmeríos de celebridades',
            autor: 'Antonia Capalutto',
            precio: 75,
            stock: 44,
            estado: 'habilitado'
        }
,
        {
            tipo: 'revista',
            codigo: '1145678910',
            imagen: 'revista2.jpg',
            titulo: 'Hola - Suar y Oreiro',
            descripcion: 'Chusmeríos de celebridades',
            autor: 'Antonia Capalutto',
            precio: 75,
            stock: 32,
            estado: 'habilitado'
        }
,
        {
            tipo: 'revista',
            codigo: '2256789122',
            imagen: 'revista3.jpg',
            titulo: 'El gráfico - Genio insaciable',
            descripcion: 'Revista deportiva',
            autor: 'Marcelo Zalayeta',
            precio: 80,
            stock: 20,
            estado: 'habilitado'
        }
,
        {
            tipo: 'revista',
            codigo: '3367891234',
            imagen: 'revista4.jpg',
            titulo: 'Bodas - Casamientos de verano',
            descripcion: 'Revista de novias desesperadas',
            autor: 'Monica Rajo',
            precio: 180,
            stock: 9,
            estado: 'habilitado'
        }
,
        {
            tipo: 'revista',
            codigo: '3378912346',
            imagen: 'revista5.jpg',
            titulo: 'Bodas - Novia de verano',
            descripcion: 'Revista de novias desesperadas',
            autor: 'Gudalupe Lotuda',
            precio: 180,
            stock: 11,
            estado: 'habilitado'
        }
,
        {
            tipo: 'revista',
            codigo: '4489123458',
            imagen: 'revista6.jpg',
            titulo: 'Ciencia hoy',
            descripcion: 'Divulgación científica',
            autor: 'Albert Einstein',
            precio: 85,
            stock: 13,
            estado: 'habilitado'
        }
,
        {
            tipo: 'revista',
            codigo: '5591234560',
            imagen: 'revista7.jpg',
            titulo: 'Luz - Chocolate',
            descripcion: 'Revista para mujeres',
            autor: 'Catalina Pedruño',
            precio: 120,
            stock: 21,
            estado: 'habilitado'
        }
,
        {
            tipo: 'revista',
            codigo: '1112345672',
            imagen: 'revista8.jpg',
            titulo: 'Gente - Ahora vamos por todo',
            descripcion: 'Chusmeríos de celebridades',
            autor: 'Julio Iglesias',
            precio: 115,
            stock: 18,
            estado: 'habilitado'
        }
,
        {
            tipo: 'revista',
            codigo: '6623456785',
            imagen: 'revista9.jpg',
            titulo: 'Paint Works',
            descripcion: 'Revista para ilustradores gráficos',
            autor: 'Roberto Goya',
            precio: 220,
            stock: 16,
            estado: 'habilitado'
        }
,
        {
            tipo: 'revista',
            codigo: '5534567898',
            imagen: 'revista10.jpg',
            titulo: 'Para ti - Horóscopo del amor',
            descripcion: 'Revista para mujeres',
            autor: 'Margarita Houdini',
            precio: 130,
            stock: 31,
            estado: 'habilitado'
        }
,
        {
            tipo: 'revista',
            codigo: '3345678901',
            imagen: 'revista11.jpg',
            titulo: 'Bodas - Amor de primavera',
            descripcion: 'Revista de novias desesperadas',
            autor: 'Anastasia Larrusa',
            precio: 150,
            stock: 22,
            estado: 'habilitado'
        }
,
        {
            tipo: 'revista',
            codigo: '3356789014',
            imagen: 'revista12.jpg',
            titulo: 'Bodas - Blanca y radiante',
            descripcion: 'Revista de novias desesperadas',
            autor: 'Justina Dimenti',
            precio: 115,
            stock: 23,
            estado: 'habilitado'
        }
,
        {
            tipo: 'revista',
            codigo: '5567890127',
            imagen: 'revista13.jpg',
            titulo: 'Sophia - Vivir diferente',
            descripcion: 'Revista para mujeres',
            autor: 'Chengue Morales',
            precio: 110,
            stock: 24,
            estado: 'habilitado'
        }
,
        {
            tipo: 'revista',
            codigo: '7778901230',
            imagen: 'revista14.jpg',
            titulo: 'Nuevos Pueblos',
            descripcion: 'Publicación cultural geográfica',
            autor: 'Miranda Cuenca',
            precio: 140,
            stock: 18,
            estado: 'habilitado'
        }
,
        {
            tipo: 'revista',
            codigo: '5589012343',
            imagen: 'revista15.jpg',
            titulo: 'Woman',
            descripcion: 'Revista vieja para mujeres viejas',
            autor: 'Fortunato Mascaronne',
            precio: 125,
            stock: 22,
            estado: 'habilitado'
        }
);
var usuarios = new Array(
        {
            tipo: 'administrador',
            nombre: 'William',
            apellido: 'Machado',
            mail: 'william.machado.uy@gmail.com',
            contrasena: 'william11'
        }
,
        {
            tipo: 'administrador',
            nombre: 'Juan',
            apellido: 'Rodríguez',
            mail: 'niandubay79@gmail.com',
            contrasena: 'juan11'
        }
,
        {
            tipo: 'vendedor',
            nombre: 'Pedro',
            apellido: 'Sánchez',
            mail: 'pedro.sanchez@gmail.com',
            contrasena: 'pedro22'
        }
,
        {
            tipo: 'vendedor',
            nombre: 'Marta',
            apellido: 'Carrasco',
            mail: 'marta.carrasco@gmail.com',
            contrasena: 'marta22'
        }
,
        {
            tipo: 'vendedor',
            nombre: 'Pilar',
            apellido: 'Jiménez',
            mail: 'pilar.jimenez@gmail.com',
            contrasena: 'pilar22'
        }
);
var ventas = new Array(
        {
            numero: 1,
            fecha: '22/05/2015',
            codigo_pub: '6789123456789',
            cantidad: 1,
            total: 213
        }
,
        {
            numero: 2,
            fecha: '23/05/2015',
            codigo_pub: '4489123458',
            cantidad: 2,
            total: 170
        }
,
        {
            numero: 3,
            fecha: '23/05/2015',
            codigo_pub: '5678901234567',
            cantidad: 3,
            total: 840
        }
,
        {
            numero: 4,
            fecha: '24/05/2015',
            codigo_pub: '3356789014',
            cantidad: 2,
            total: 230
        }
,
        {
            numero: 5,
            fecha: '24/05/2015',
            codigo_pub: '2345678912345',
            cantidad: 4,
            total: 1040
        }
,
        {
            numero: 6,
            fecha: '25/05/2015',
            codigo_pub: '3356789014',
            cantidad: 3,
            total: 345
        }
,
        {
            numero: 7,
            fecha: '25/05/2015',
            codigo_pub: '6789123456789',
            cantidad: 2,
            total: 426
        }
,
        {
            numero: 8,
            fecha: '26/5/2015',
            codigo_pub: '5591234560',
            cantidad: 3,
            total: 360
        }
,
        {
            numero: 9,
            fecha: '26/05/2015',
            codigo_pub: '5567890127',
            cantidad: 6,
            total: 660
        }
,
        {
            numero: 10,
            fecha: '27/05/2015',
            codigo_pub: '3378912346',
            cantidad: 2,
            total: 360
        }
,
        {
            numero: 11,
            fecha: '27/05/2015',
            codigo_pub: '7891234567890',
            cantidad: 4,
            total: 1680
        }
,
        {
            numero: 12,
            fecha: '27/05/2015',
            codigo_pub: '4567890123456',
            cantidad: 3,
            total: 600
        }
);
//------------------------------------------------------------------------------
/////////////////////////////////Constantes/////////////////////////////////////
//------------------------------------------------------------------------------
var stockMinimo = 4;
var topCuanto = 10;
//------------------------------------------------------------------------------
///////////////////////////////////Login////////////////////////////////////////
//------------------------------------------------------------------------------
// Control de usuarios
// que la contraseña sea alfanumérica significa que tiene que ser un string o
// que hay que verificar que tenga si o sí alguna letra y algún número?
function controlUsuario(_usuario, _password) {
    // devuelve vendedor, administrador o incorrecto.
    var _tipoUsuario = 'incorrecto';
    var _usuarioEncontrado = false;
    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].nombre === _usuario) {
            _usuarioEncontrado = true;
            if (usuarios[i].contrasena === _password) {
                _tipoUsuario = usuarios[i].tipo;
                break;
            } else {
                $(".loginError").show(); //-> contraseña incorrecta
                break;
            }
        }
    }
    if (_usuarioEncontrado === false) {
        $(".loginError").show(); //->usuario no encontrado
    }
    return _tipoUsuario;
}
//------------------------------------------------------------------------------
// Ocultar todo al inicio
function ocultoAlInicio() {
    // login
    $(".loginError").hide();
    $(".logout").hide();
    // secciones
    $("#catalogo").hide();
    $("#administrador").hide();
    $("#vendedor").hide();
    $("#reportes").hide();
    // menu principal
    $("#spanCatalogo").hide();
    $("#spanVentas").hide();
    $("#spanAdministracion").hide();
    $("#spanReportes").hide();
}
ocultoAlInicio();   //--------> Comentado ves todo, descomentado, lo que toca.
//------------------------------------------------------------------------------
// Mostrar interfaz principal de vendedores o administradores
function interfazSegunTipoUsuario(_tipo) {
    switch (_tipo) {
        case 'vendedor':
            // secciones
            $("#vendedor").show();
            $("#ingresarVenta").show();
            $("#mensajeBienvenida").hide();
            $("#publicacionesInicio").hide();
            $("#ingresar").hide();
            $(".logout").show();
            // menu principal
            $("#spanCatalogo").show();
            $("#spanVentas").show();
            // Mensajes
            $("#mensajesVenta").hide();
            $(".message").hide();
            $(".warning").hide();
            $(".error").hide();
            break;
        case 'administrador':
            // secciones
            $("#administrador").show();
            $("#ingresos").show();
            $("#modificaciones").hide();
            $("#mensajeBienvenida").hide();
            $("#publicacionesInicio").hide();
            $("#ingresar").hide();
            $(".logout").show();
            // menu principal
            $("#spanCatalogo").show();
            $("#spanAdministracion").show();
            $("#spanReportes").show();
            // Mensajes
            $("#mensajesIngreso").hide();
            $(".message").hide();
            $(".warning").hide();
            $(".error").hide();
            break;
    }
}
//------------------------------------------------------------------------------
///////////////////////////////Validaciones/////////////////////////////////////
//------------------------------------------------------------------------------
function validar_primer_letra_mayuscula(_string) {
    var _correcto = false;
    var _caracter = _string[0];
    // la primer letra debe ser mayúscula..
    if ((_caracter >= 'A') && (_caracter <= 'Z'))
    {
        _correcto = true;
    } else {
        _correcto = false;
    }
    return _correcto;
}
//------------------------------------------------------------------------------
function validar_descripcion(_desc) {
// la descripción debe empezar con mayúscula y tener al menos 15 caracteres...
    var _primer_letra_mayuscula = validar_primer_letra_mayuscula(_desc);
    var _correcto = false;
    var _largo = _desc.length;
    if (_largo >= 15 && _primer_letra_mayuscula === true)
    {
        _correcto = true;
    } else {
        _correcto = false;
    }
    return _correcto;
}
//------------------------------------------------------------------------------
function validar_email(_texto) {
    var _correcto = false;
    if ((_texto.indexOf('@') !== -1) && (_texto.indexOf('@') === _texto.lastIndexOf('@')))
    {
        _correcto = true;
    } else {
        _correcto = false;
    }
    return _correcto;
}
//------------------------------------------------------------------------------
function validarCodigoIdentificador(_codigoId, _tipoPub) {
    var _codigoIdentificador = _codigoId;
    var _tipoPublicacion = _tipoPub;
    var _valido = true;
    // según el tipo de publicación controlo una cosa u otra...
    switch (_tipoPublicacion) {
        case "libro":
            if (_codigoIdentificador.length === 13) {
// si tiene 13 digitos me fijo si alguno de ellos no es un número...
                for (var i = 0; i < _codigoIdentificador.length; i++) {
                    if (isNaN(_codigoIdentificador[i])) {
                        _valido = false;
                        // el break es para si encuentra un isNaN ya salga del for
                        // y _valido sea false...
                        break;
                    }
                }
// si no tiene 13 digitos es falso...
            } else {
                _valido = false;
            }
            break;
        case "revista":
            if (_codigoIdentificador.length === 10) {
// controlo que sean todos números...
                for (var j = 0; j < _codigoIdentificador.length; j++) {
                    if (isNaN(_codigoIdentificador[j])) {
// si alguno no es un número... false...
                        _valido = false;
                        break;
                    }
                }
// si en este punto sigue siendo true es que son todos números...
                if (_valido) {
// inicializo _numeroPublicacion
                    var _numeroPublicacion = "";
                    // lo relleno con los números de 2 a 8...
                    for (var n = 2; n < 9; n++) {
                        _numeroPublicacion = _numeroPublicacion + _codigoIdentificador[n];
                    }
// le asigno a _digitoVerificadorIngresado el digito en la posición 9...
                    var _digitoVerificadorIngresado = parseInt(_codigoIdentificador[9]);
                    // inicializo la variable donde hago la suma...
                    var _suma7digitos = 0;
                    // hago la suma..
                    for (var k = 0; k < _numeroPublicacion.length; k++) {
                        _suma7digitos = _suma7digitos + parseInt(_numeroPublicacion[k]);
                    }
                    var _restoDivisionEntera = _suma7digitos % 10;
                    // inicializo el digitoVerificadorCalculado y lo fijo en 0 por si
                    // el resto de la división entera es igual a 0...
                    var _digitoVerificadorCalculado = 0;
                    if (_restoDivisionEntera !== 0) {
// si el resto no es cero, el digito es 10 - resto...
                        _digitoVerificadorCalculado = 10 - _restoDivisionEntera;
                    }
// si el digito varificador ingresado es distinto al calculado...
                    if (_digitoVerificadorIngresado !== _digitoVerificadorCalculado) {
                        _valido = false;
                    }
                }
            } else {
                _valido = false;
            }
            break;
    }
    return _valido;
}
//------------------------------------------------------------------------------
function validarCampoVacio(_campo) {
    var _vacio = false;
    if (_campo !== "") {
        _vacio = true;
    }
    return _vacio;
}
//------------------------------------------------------------------------------
function validarPrecio(_precio) {
    var _precioValido = false;
    if (_precio > 0) {
        _precioValido = true;
    }
    return _precioValido;
}
//------------------------------------------------------------------------------
function validarStock(_stock) {
    var _precioValido = false;
    if (_stock >= 0) {
        _precioValido = true;
    }
    return _precioValido;
}
//------------------------------------------------------------------------------
function validar_publicacion(_tipo, _codigo, _imagen, _titulo, _desc, _autor, _precio, _stock, _estado) {
    //Esta nueva funcion realiza todas las validaciones de los campos para las publicaciones de la misma forma en que 
    //la realizaba la funcion ingresar_pubicacion fue dividida para reutilizar codigo
    var _parametros = [_tipo, _codigo, _imagen, _titulo, _desc, _autor, _precio, _stock, _estado];
    var _pubCorrecta = false;
    var _campoNoVacio = false;
    var _letraMayus = false;
    var _descOk = false;
    var _codIdentif = false;
    var _precioValido = false;
    var _stockValido = false;
    //Valido que todos los campos tengan datos
    for (var i = 0; i < _parametros.length; i++)
    { //true = no vacio
        if (validarCampoVacio(_parametros[i]) === false)
        {
            return _pubCorrecta;
        } else
        {
            _campoNoVacio = true;
        }
    }
    // Si todos los campos estan llenos, se realizan validaciones individuales
    if (_campoNoVacio === true) // si nungún campo está vacío...
    {
        _letraMayus = validar_primer_letra_mayuscula(_titulo);
        _descOk = validar_descripcion(_desc);
        _codIdentif = validarCodigoIdentificador(_codigo, _tipo);
        _precioValido = validarPrecio(_precio);
        _stockValido = validarStock(_stock); // no puede ser negativo, igual que el precio...
        //Si todas las validaciones fueron exitosas se procede al ingreso de la nueva publicacion
        if (_letraMayus === true && _descOk === true &&
                _codIdentif === true && _precioValido === true && _stockValido === true)
        {
            _pubCorrecta = true;
        }
    }
    return _pubCorrecta;
}
//------------------------------------------------------------------------------
/////////////////////////////////Buscadores/////////////////////////////////////
//------------------------------------------------------------------------------
function buscar_publicacion_codigo(_listaPublicaciones, _codigo) {
    var _publicacion = -1;
    for (var i = 0; i < _listaPublicaciones.length; i++)
    {
        var _codigo_elemento = parseInt(_listaPublicaciones[i].codigo); //AGREGO PARSE INT YA QUE CON ESTOS DATOS LO LEVANTA COMO STRING
        if (_codigo_elemento === parseInt(_codigo))
        {
            _publicacion = _listaPublicaciones[i];
//            $("#mensajesBusqueda").show();
//            $("#publiNoEncontrada").hide();
//            $("#publiEncontrada").show(); //->publicación encontrada
            break;
        }
    }
//    if (_publicacion === -1)
//    {
//        $("#mensajesBusqueda").show();
//        $("#publiEncontrada").hide();
//        $("#publiNoEncontrada").show(); //->no existe la publicación
//    }
    return _publicacion;
}
//------------------------------------------------------------------------------
function posicion_publicacion(_listaPublicaciones, _codigo) {
    var _posicion = false;
    for (var i = 0; i < _listaPublicaciones.length; i++)
    {
        var _codigo_elemento = _listaPublicaciones[i].codigo;
        if (_codigo_elemento === _codigo)
                // habíamos quedado en que tanto _codigo_elemento como _codigo eran strings..
                {
                    _posicion = i;
                    break;
                }
    }
    return _posicion;
}
//------------------------------------------------------------------------------
function buscarVentasPorCodigo(_codigo) {
    var _ventas = new Array();
    for (var i = 0; i < ventas.length; i++) {
        if (ventas[i].codigo_pub === _codigo) {
            _ventas.push(ventas[i]);
        }
    }
    if (_ventas.length === 0) {
        // devuelve false si no hay ventas con ese código...
        _ventas = false;
    }
    return _ventas;
}
//------------------------------------------------------------------------------
///////////////////////////////////Tablas///////////////////////////////////////
//------------------------------------------------------------------------------
// Dibujar tabla
function dibujarTabla(_array, _tabla) {
// thead
    var _cabecera = "<tr>";
    for (var j in _array[0]) {
        _cabecera += "<th>" + j + "</th>";
    }
    _cabecera += "</tr>";
    // un thead que sea hijo directo de un #table1
    $("#" + _tabla + ">thead").html(_cabecera);
    // limpio el tbody para rellenarlo..
    $("#" + _tabla + ">tbody").html("");
    // tbody
    for (var i = 0; i < _array.length; i++) {
        var _linea = "<tr>";
        for (var k in _array[i]) {
            if (k !== "imagen") {
                _linea += "<td>" + _array[i][k] + "</td>";
            } else {
                _linea += "<td style='text-align: center; vertical-align: middle;'><img src='tapas/" + _array[i][k] + "' alt='" + _array[i][k] + "' heigth='50%' width='50%'></td>";
            }
        }
        _linea += "</tr>";
        $("#" + _tabla + ">tbody").append(_linea);
    }
}
//------------------------------------------------------------------------------
// Dibujar tabla tops   ->> mezclando datos
function dibujarTablaTops(_arrayDeTops, _tabla) {
// clono el array para trabajar sobre copia...
    var _array = JSON.parse(JSON.stringify(_arrayDeTops));
    // elimino en los objetos del array las claves no usadas..
    for (var n = 0; n < _arrayDeTops.length; n++) {
        delete _arrayDeTops[n].fecha;
        delete _arrayDeTops[n].numero;
    }
// thead
    var _cabecera = "<tr><th>Publicación</th><th>Ventas</th><th>Precio</th></tr>";
    // un thead que sea hijo directo de un #table1
    $("#" + _tabla + ">thead").html(_cabecera);
    // limpio el tbody para rellenarlo..
    $("#" + _tabla + ">tbody").html("");
    // tbody
    for (var i = 0; i < _array.length; i++) {
        //var _publicacion = buscar_publicacion_codigo(listaPublicaciones, parseInt(_array[i].codigo_pub)); // el parseInt lo necesita la funciòn buscar_publicacion_codigo...
        var _publicacion = buscar_publicacion_codigo(listaPublicaciones, _array[i].codigo_pub); // el parseInt lo necesita la funciòn buscar_publicacion_codigo...
        var _linea = "<tr><td>" + _publicacion.titulo + "</td><td>" +
                _array[i].cantidad + "</td><td>" + _publicacion.precio + "</td></tr>";
        $("#" + _tabla + ">tbody").append(_linea);
    }
}
//------------------------------------------------------------------------------
// Dibujar tabla Publicaciones en Orden Alfabético
function dibujarTablaPublicaciones(_array, _tabla) {
    var _cabecera = "<tr><th>Título</th><th>Autor/Editorial</th><th>Tipo</th><th>Descripción</th><th>Precio</th></tr>";
    $("#" + _tabla + ">thead").html(_cabecera);
    $("#" + _tabla + ">tbody").html("");
    for (var i = 0; i < _array.length; i++) {
        var _titulo = _array[i].titulo;
        var _autor = _array[i].autor;
        var _tipo = _array[i].tipo;
        var _descripcion = _array[i].descripcion;
        var _precio = _array[i].precio;
        var _linea = "<tr><td>" + _titulo + "</td><td>" + _autor + "</td><td>" + _tipo + "</td><td>" + _descripcion + "</td><td>" + _precio + "</td></tr>";
        $("#" + _tabla + ">tbody").append(_linea);
    }
}
//------------------------------------------------------------------------------
// Dibujar tabla Catálogo a lo bruto
function dibujarTablaCatalogo(_array, _tabla) {
    var _cabecera = "<tr><th>Tipo</th><th>Código</th><th>Imagen</th><th>Título</th><th>Descripción</th><th>Autor</th><th>Precio</th><th>Stock</th><th>Estado</th></tr>";
    $("#" + _tabla + ">thead").html(_cabecera);
    $("#" + _tabla + ">tbody").html("");
    for (var i = 0; i < _array.length; i++) {
        var _linea = "<tr>";
        for (var k in _array[i]) {
            if (k !== "imagen") {
                _linea += "<td>" + _array[i][k] + "</td>";
            } else {
                _linea += "<td style='text-align: center; vertical-align: middle;'><img src='tapas/" + _array[i][k] + "' alt='" + _array[i][k] + "' heigth='50%' width='50%'></td>";
            }
        }
        _linea += "</tr>";
        $("#" + _tabla + ">tbody").append(_linea);
    }
}
//------------------------------------------------------------------------------
//////////////////////////////////Listados//////////////////////////////////////
//------------------------------------------------------------------------------
// Listar publicaciones de precio menor a un precio dado
function listar_publicaciones_menor_precio(_listaPublicaciones, _precio) {
    var _listadoPrecio = new Array();
    for (var i = 0; i < _listaPublicaciones.length; i++)
    {
        if (_listaPublicaciones[i].precio < _precio)
        {
            _listadoPrecio.push(_listaPublicaciones[i]);
        }
    }
    return _listadoPrecio;
}
//------------------------------------------------------------------------------
// Listar ventas con fecha igual a una fecha dada...
function total_ventas_fecha(_ventas, _fecha) {
    var _totalVentas = 0;
    for (var i = 0; i < _ventas.length; i++)
    {
        if (_ventas[i].fecha === _fecha)
        {
            _totalVentas += _ventas[i].total;
        }
    }
    return _totalVentas;
}
//------------------------------------------------------------------------------
// Sumar ventas de misma publicación
function sumarVentas(_ventas) {
    var _array = JSON.parse(JSON.stringify(_ventas)); // --> forma correcta de clonar un array???
    for (var i = 0; i < _ventas.length - 1; i++) {
        var k = i + 1;
        for (var j = k; j < _array.length; j++) {
            if (_array[i].codigo_pub === _array[j].codigo_pub) {
                _array[i].total += _array[j].total;
                _array[i].cantidad += _array[j].cantidad;
                _array.splice(j, 1);
                j--;
            }
        }
    }
// esto es para borrar claves innecesarias del nuevo array..
    for (var n = 0; n < _array.length; n++) {
        delete _array[n].fecha;
        delete _array[n].numero;
    }
    return _array;
}
//------------------------------------------------------------------------------
// Seleccionar solo las publicaciones que estén habilitadas
function publicacionesHabilitadas(_array) {
    var _publicacionesHabilitadas = new Array();
    for (var i = 0; i < _array.length; i++) {
        if (_array[i].estado === 'habilitado') {
            _publicacionesHabilitadas.push(_array[i]);
        }
    }
    return _publicacionesHabilitadas;
}
// -----------------------------------------------------------------------------
// Tomar sólo los primeros '_cuantos' elementos de un _array...
function cuantasPrimerasDeArray(_array, _cuantos) {
// creo un array que contenga sólo los objetos de 0 a _cuantas (_cuantas es excluyente)...
    var _primeras = _array.slice(0, _cuantos);
    return _primeras;
}
//------------------------------------------------------------------------------
// Separar palabras de un string...
function separar_palabras(_texto) {
    var _palabras = new Array();
    var _caracterseparador = " ";
    _palabras = _texto.split(_caracterseparador);
    return _palabras;
}
//------------------------------------------------------------------------------
// Clona _ventas pero le agrega la clave precio
function agregarPrecioPublicacionEnArrayVentas(_ventas) {
    var _lista = new Array();
    for (var i = 0; i < _ventas.length; i++) {
//cargo la venta
        var _venta = _ventas[i];
        // cargo el codigo_pub de la venta
        var _codigo = parseInt(_venta.codigo_pub);
        // cargo el precio de la publicacion que tenga el _codigo de la venta
        var _precio = buscar_publicacion_codigo(listaPublicaciones, _codigo).precio;
        // defino una nuevo objeto con la estructura de _venta más la clave nueva precio y lo relleno..
        var _ventaModif = {
            numero: _venta.numero,
            fecha: _venta.fecha,
            codigo_pub: _venta.codigo_pub,
            cantidad: _venta.cantidad,
            total: _venta.total,
            precio: _precio
        };
        // lo agrego a la _lista
        _lista.push(_ventaModif);
    }
    return _lista;
}
//------------------------------------------------------------------------------
///////////////////////Actualizaciones-Modificaciones///////////////////////////
//------------------------------------------------------------------------------
// Actualizar stock restándole _cantidad
function actualizar_stock(_listaPublicaciones, _codigoPublicacion, _cantidad) {
//Busco la publicacion para obtener su informacion
    var _publicacion = buscar_publicacion_codigo(_listaPublicaciones, _codigoPublicacion);
    //Busco la posicion de la publicacion en la lista 
    var _posPublicacion = posicion_publicacion(_listaPublicaciones, _codigoPublicacion);
    // si la publicación existe...
    if (_posPublicacion !== false) {
        //Actualizo el stock
        var _stock = _publicacion.stock - _cantidad;
        _publicacion.stock = _stock;
        //Utilizando la posicion actualizo el objeto
        _listaPublicaciones[_posPublicacion] = _publicacion;
    } else {
        alert('Publicación no encontrada al intentar actualizar el stock!');
    }
}
//------------------------------------------------------------------------------
// Actualizar publicacion
function actualizar_publicacion(_tipo, _codigo, _imagen, _titulo, _desc, _autor, _precio, _stock, _estado) {

    var _pubValida = validar_publicacion(_tipo, _codigo, _imagen, _titulo, _desc, _autor, _precio, _stock, _estado);
    if (_pubValida === true) {
//creo una nueva publicacion
        var _nuevaPublicacion = {
            tipo: _tipo,
            codigo: _codigo,
            imagen: _imagen,
            titulo: _titulo,
            descripcion: _desc,
            autor: _autor,
            precio: _precio,
            stock: _stock,
            estado: _estado
        };
        //Busco la posicion de la publicacion en la lista 
        var _posPublicacion = posicion_publicacion(listaPublicaciones, _codigo);
        //Utilizando la posicion y reemplazo la publicacion existente por la nueva
        listaPublicaciones[_posPublicacion] = _nuevaPublicacion;
        // publicación modificada
        $("#mensajesBusqueda").hide();
        $("#mensajesModificacion").show();
        $("#publiModificada").show();
        $("#publiEliminada").hide();
        $("#publiNoEliminada").hide();
        $("#publiCamposMalos").hide();
        $("#publiNoModificada").hide();
    } else {
        // publicación no modificada por campos malos
        $("#mensajesBusqueda").hide();
        $("#mensajesModificacion").show();
        $("#publiModificada").hide();
        $("#publiEliminada").hide();
        $("#publiNoEliminada").hide();
        $("#publiCamposMalos").show();
        $("#publiNoModificada").show();
    }
}
//------------------------------------------------------------------------------
// Sustituir el codigo de las ventas con codigo_viejo por el codigo_nuevo...
function modificarVentas(_codigo_pub_viejo, _codigo_pub_nuevo) {
    // esto es por si modificamos el código de una publicación, que no pierda sus
    // ventas asociadas anteriores.
    var _ventas = buscarVentasPorCodigo(_codigo_pub_viejo);
    if (_ventas !== false) {
        for (var i = 0; i < _ventas.length; i++) {
            _ventas[i].codigo_pub = _codigo_pub_nuevo;
        }
    }
}
//------------------------------------------------------------------------------
//////////////////////////////////Ingresos//////////////////////////////////////
//------------------------------------------------------------------------------
// Ingresar una venta
function ingresar_ventas(_ventas, _codigoPublicacion, _cantidad) {
    // genero la fecha...
    var _fecha = generar_fecha();
    // me guardo la publicación con ese código...
    var _publicacion = buscar_publicacion_codigo(listaPublicaciones, _codigoPublicacion);
    // si la publicación existe...
    if (_publicacion !== -1) {
        // me guardo el stock..
        var _stock = _publicacion.stock;
        // calculo el total de la venta...
        var _total = _publicacion.precio * _cantidad;
        // si hay suficiente stock para efectuar la venta...
        if (_stock >= _cantidad && _cantidad !== 0) {
            // genero el número de venta...
            var _numeroVenta = _ventas.length + 1; //empiezan en 1 las ventas
            // creo el objeto venta...
            var _nuevaVenta = {
                numero: _numeroVenta,
                fecha: _fecha,
                codigo_pub: _codigoPublicacion,
                cantidad: _cantidad,
                total: _total
            };
            // actualizo el stock de la publicación con ese código...
            actualizar_stock(listaPublicaciones, _codigoPublicacion, _cantidad);
            // una vez actualizado el stock, agrego la _nuevaVenta a _ventas
            _ventas.push(_nuevaVenta);
            // mando el mensaje exitoso...
            //alert('Venta agregada con exito');
            $("#mensajesVenta").show();
            $("#ventaIngresada").show();
            $("#ventaNoIngresada").hide();
            $("#stockBajo").hide();
            $("#ventaSinStock").hide();
            $("#pubNoEncontrada").hide();
            // si el stock de esa publicación ha quedado por debajo del stock mínimo...
            if (_publicacion.stock < stockMinimo) {
                // meto un alert para avisar...
                //alert('El stock de este artìculo ha quedado por debajo de ' + stockMinimo + ' unidades!');
                $("#mensajesVenta").show();
                $("#ventaIngresada").show();
                $("#stockBajo").show();
                $("#ventaSinStock").hide();
                $("#pubNoEncontrada").hide();
                $("#ventaNoIngresada").hide();
            }
        } else {
            // si no hay suficiente stock...
            //alert('No hay stock!');
            $("#ventaIngresada").hide();
            $("#pubNoEncontrada").hide();
            $("#stockBajo").hide();
            $("#mensajesVenta").show();
            $("#ventaSinStock").show();
            $("#ventaNoIngresada").show();
        }
    } else {
        // si no se encuentra la publicación para la que se quiere crear la venta...
        //alert('Está agregando una venta de una publicación que no existe!');
        $("#ventaIngresada").hide();
        $("#ventaSinStock").hide();
        $("#stockBajo").hide();
        $("#mensajesVenta").show();
        $("#pubNoEncontrada").show();
        $("#ventaNoIngresada").show();
    }
    //return _nuevaVenta;  --> este return sobra, no tiene que devolver nada, solo ingresarla.
}
//------------------------------------------------------------------------------
// Ingresar una publicación
function ingresar_publicacion(_tipo, _codigo, _imagen, _titulo, _desc, _autor, _precio, _stock, _estado) {
    var _proceder = validar_publicacion(_tipo, _codigo, _imagen, _titulo, _desc, _autor, _precio, _stock, _estado);
    if (_proceder === true) {
        if (buscar_publicacion_codigo(listaPublicaciones, _codigo) === -1) // si no existe la pub..
        {
            var _nuevaPub = {
                tipo: _tipo,
                codigo: _codigo,
                imagen: _imagen,
                titulo: _titulo,
                descripcion: _desc,
                autor: _autor,
                precio: _precio,
                stock: _stock,
                estado: _estado
            };
            listaPublicaciones.push(_nuevaPub);
            // publicación ingresada            
            $("#mensajesIngreso").show();
            $("#ingresoExitoso").show();
            $("#ingresoCamposMalos").hide();
            $("#ingresoPubDuplicada").hide();
            $("#ingresoError").hide();
        } else {
            // publicación duplicada
            $("#mensajesIngreso").show();
            $("#ingresoExitoso").hide();
            $("#ingresoCamposMalos").hide();
            $("#ingresoPubDuplicada").show();
            $("#ingresoError").show();
        }
    } else {
        // publicación no ingresada por error en los campos
        $("#mensajesIngreso").show();
        $("#ingresoExitoso").hide();
        $("#ingresoCamposMalos").show();
        $("#ingresoPubDuplicada").hide();
        $("#ingresoError").show();
    }
}
//------------------------------------------------------------------------------
//////////////////////////////////Eliminaciones/////////////////////////////////
//------------------------------------------------------------------------------
// Eliminar una publicacion
function eliminar_pub(_codigo) {
    var _pos = posicion_publicacion(listaPublicaciones, _codigo);
    listaPublicaciones.splice(_pos, 1); //no hay que actualizar ventas
}
//------------------------------------------------------------------------------
//////////////////////////////////Ordenar///////////////////////////////////////
//------------------------------------------------------------------------------
// Ordenar publicaciones alfabeticamente utilizando bubble sort
function ordenar_publicaciones(_listaPublicaciones) {
    var _publicaciones = JSON.parse(JSON.stringify(_listaPublicaciones)); // -->furula pero usando JSON    
    var _largo = _publicaciones.length;
    do
    {
        var _cambios = false; //flag para cortar el loop
        for (var i = 1; i <= _largo - 1; i++)
        {
//cargo los titulos completos
            var _titulo1 = _publicaciones[i - 1].titulo.toLowerCase();
            var _titulo2 = _publicaciones[i].titulo.toLowerCase();
            /*separo los titulos por palabras considerando que algunos 
             titulos pueden tener solo una palabra*/
            var _palabras_titulo1 = separar_palabras(_titulo1);
            var _palabras_titulo2 = separar_palabras(_titulo2);
            var _cantidadpalabras = 0;
            if (_palabras_titulo2.length > _palabras_titulo1.length)
            {
                _cantidadpalabras = _palabras_titulo1.length;
            } else {
                _cantidadpalabras = _palabras_titulo2.length;
            }
            for (var j = 0; j < _cantidadpalabras; j++)
            {
                if (_palabras_titulo1[j] !== _palabras_titulo2[j])
                {
//ordenar y salir...
//obtengo el largo de la palabra mas corta
                    if (_palabras_titulo2[j].length > _palabras_titulo1[j].length)
                    {
                        var _largoPalabra = _palabras_titulo1[j].length;
                    } else {
                        var _largoPalabra = _palabras_titulo2[j].length;
                    }
//comparo las letras de la palabra mas corta 
//y de ser necesario ordeno utilizando el bubble sort
                    for (var k = 0; k < _largoPalabra; k++)
                    {
                        if (_palabras_titulo1[j].charAt(k) !== _palabras_titulo2[j].charAt(k))
                        {
                            if (_palabras_titulo1[j].charAt(k) > _palabras_titulo2[j].charAt(k))
                            {
                                var aux = _publicaciones[i - 1];
                                _publicaciones[i - 1] = _publicaciones[i];
                                _publicaciones[i] = aux;
                                _cambios = true;
                                j = _cantidadpalabras;
                                break;
                            } else {
                                j = _cantidadpalabras;
                                break;
                            }
                        }
                    }
                } else {
                    break;
                }
            }
        }
        _largo = _largo - 1;
    } while (_cambios === true);
    return _publicaciones;
}
//------------------------------------------------------------------------------
// Ordenar _array por _clave
function ordenarArrayPorClave(_array, _clave) {
// clono el array _ventas
    var _lista = _array.slice();
    _lista.sort(function (a, b) {
        // dados a y b (se asume b>a) y retorno primero b y luego a
        return b[_clave] - a[_clave];
    });
    // retorno la _lista ordenada...
    return _lista;
}
//------------------------------------------------------------------------------
// Ordenar _array primero por _clave1 y luego por _clave2
function ordenarArrayPor2Claves(_array, _clave1, _clave2) {
// clono el array _ventas
    var _lista = _array.slice(0);
    _lista.sort(function (a, b) {
        // si a es menor que b
        if (a[_clave1] - b[_clave1]) {
            // retorno primero b y luego a
            return b[_clave1] - a[_clave1];
            // si b es menor que a
        } else if (b[_clave1] - a[_clave1]) {
            // retorno primero a y luego b
            return a[_clave1] - b[_clave1];
        } else {
            if (a[_clave2] - b[_clave2]) {
                return a[_clave2] - b[_clave2];
            } else {
                return b[_clave2] - a[_clave2];
            }
        }
    });
    // retorno la _lista ordenada...
    return _lista;
}
//------------------------------------------------------------------------------
//////////////////////////////////Reportes//////////////////////////////////////
// -----------------------------------------------------------------------------
// Reporte por fecha
function totalVentasPorFecha(_ventas, _fecha) {
    var _array = JSON.parse(JSON.stringify(_ventas));
    for (var i = 0; i < _array.length - 1; i++) {
        var k = i + 1;
        for (var j = k; j < _array.length; j++) {
            if (_array[i].fecha === _array[j].fecha && _array[i].fecha === _fecha) {
                _array[i].total += _array[j].total;
                _array[i].cantidad += _array[j].cantidad;
                _array.splice(j, 1);
                j--;
            }
        }
        for (var n = 0; n < _array.length; n++) {
            delete _array[n].numero;
            delete _array[n].codigo_pub;
        }
    }
    for (var g = 0; g < _array.length; g++) {
        if (_array[g].fecha !== _fecha) {
            _array.splice(g, 1);
            g--;
        }
    }
    return _array;
}
//------------------------------------------------------------------------------
// Reporte por precio menor a dado
function publicacionesConPrecioMenorADado(_publicaciones, _precio) {
    var _array = JSON.parse(JSON.stringify(_publicaciones));
    var _publicacionesDePrecioMenor = new Array();
    for (var i = 0; i < _array.length; i++) {
        if (_array[i].precio < _precio) {
            _publicacionesDePrecioMenor.push(_array[i]);
        }
    }
    return _publicacionesDePrecioMenor;
}
//------------------------------------------------------------------------------
////////////////////////////////////Fecha///////////////////////////////////////
//------------------------------------------------------------------------------
// Generar fecha
function generar_fecha() {
    var _fecha = new Date();
    var _mes = _fecha.getMonth() + 1;
    if (_mes < 10) {
        _mes = '0' + _mes;
    }
    var _dia = _fecha.getDate();
    if (_dia < 10) {
        _dia = '0' + _dia;
    }
    var _ano = _fecha.getFullYear();
    _fecha = _dia + '/' + _mes + '/' + _ano;
    return _fecha;
}
//------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////
//----------------------------FUNCIONES PARA INDEX------------------------------
//////////////////////////////////////////////////////////////////////////////// 
//------------------------------------------------------------------------------
// TopTen
function TablaTop() {
    var _sumaVentas = sumarVentas(ventas);
    var _sumaVentasOrdenadasPorMayor = ordenarArrayPorClave(_sumaVentas, 'cantidad');
    var _soloXprimerasDeSumaVentasOrdenadasPorMayor = cuantasPrimerasDeArray(_sumaVentasOrdenadasPorMayor, topCuanto);
    var _masPrecio = agregarPrecioPublicacionEnArrayVentas(_soloXprimerasDeSumaVentasOrdenadasPorMayor);
    var _ordenada = ordenarArrayPor2Claves(_masPrecio, 'cantidad', 'precio');
    dibujarTablaTops(_ordenada, 'tablatopten');
}
$(TablaTop);
//------------------------------------------------------------------------------
// Publicaciones en página de inicio
function TablaPublicaciones() {
    var _listaOrdenada = ordenar_publicaciones(listaPublicaciones);
    var _listaOrdenadaHabilitadas = publicacionesHabilitadas(_listaOrdenada);
    dibujarTablaPublicaciones(_listaOrdenadaHabilitadas, 'listaPublicacionesInicio');
}
$(TablaPublicaciones);
//------------------------------------------------------------------------------
// Publicaciones en página de catálogo
function TablaCatalogo() {
    dibujarTablaCatalogo(listaPublicaciones, 'listaPublicacionesCatalogo');
}
$(TablaCatalogo);
//------------------------------------------------------------------------------
///////////////////////////////////Botones//////////////////////////////////////
//------------------------------------------------------------------------------
// Login
$("#botonLogin").click(function () {
    // me guardo el user y el pass...
    var _user = $("#user").val();
    var _pass = $("#pass").val();
    // verifico el usuario con esos user y pass...
    var _tipoUsuario = controlUsuario(_user, _pass);
    // muestro la interfaz que corresponda...
    interfazSegunTipoUsuario(_tipoUsuario);
});
//------------------------------------------------------------------------------
// Logout
$(".logout").click(function () {
    // oculto todo lo correspondiente al inicio..
    ocultoAlInicio();
    // muestro sólo las secciones visibles por defecto...
    $("#ingresar").show();
    $("#mensajeBienvenida").show();
    $("#publicacionesInicio").show();
});
//------------------------------------------------------------------------------
// Ingresar una venta
$('#ingresarNuevaVenta').click(function () {
    // cargo en una variable el codigo como string...
    var codigo_pub_venta = $('#codigo_pub').val();
    // cargo en una variable la cantidad como int...
    var cantidad = parseInt($('#cantidad').val());
    // ingreso la venta...
    ingresar_ventas(ventas, codigo_pub_venta, cantidad);
    // Vuelvo a dibujar las tablas para reflejar los cambios...
    $(TablaPublicaciones);
    $(TablaCatalogo);
    $(TablaTop);
});
//------------------------------------------------------------------------------
// Ingresar publicacion
$("#ingresarPub").click(function () {
    // capto los datos de cada input en una variable privada...
    var _tipo = $("#tipoIngreso").val();
    var _codigo = $("#codigoIngreso").val();
    var _imagen = $("#imagenIngreso").val();
    var _titulo = $("#tituloIngreso").val();
    var _desc = $("#descripcionIngreso").val();
    var _autor = $("#autorIngreso").val();
    //var _precio = $("#precioIngreso").val();
    var _precio = parseInt($("#precioIngreso").val());
    //var _stock = $("#stockIngreso").val();
    var _stock = parseInt($("#stockIngreso").val());
    var _estado = $("#estadoIngreso").val();
    // ingreso la publicación usando esas variables...
    ingresar_publicacion(_tipo, _codigo, _imagen, _titulo, _desc, _autor, _precio, _stock, _estado);
    // vuelvo a dibujar la tabla catálogo para que refleje la nueva publicación...
    dibujarTablaCatalogo(listaPublicaciones, 'listaPublicacionesCatalogo');
});
//------------------------------------------------------------------------------
// Buscar publicación para modificar/eliminar (botón)
$('#buscar').click(function () {
    // cargo en una variable interna el codigo de la pub a buscar...
    var _cod = $('#codigo_pub_a_modif').val();
    // busco si existe la pub con ese codigo...
    var _pub = buscar_publicacion_codigo(listaPublicaciones, _cod);
    if (_pub === -1) {
        // si NO encuentro una publicación con ese código...
        $("#mensajesBusqueda").show();
        $("#publiNoEncontrada").show();
        $("#publiEncontrada").hide();
        $("#mensajesModificacion").hide();
    } else {
        // si encuentra una publicación con ese código muestros mensajes...
        $("#mensajesBusqueda").show();
        $("#publiEncontrada").show();
        $("#publiNoEncontrada").hide();
        $("#mensajesModificacion").hide();
        // me guardo el código de la pub en un campo oculto de la tabla...
        $('#codigoBackup').val(_pub.codigo);
        // rellena los inputs del formulario para modificar con los datos...
        $('#tipoModificado').val(_pub.tipo).attr("selected", "selected");
        $('#estadoModificado').val(_pub.estado).attr("selected", "selected");
        // sigo rellenando el formulario..
        $('#codigoModificado').val(_pub.codigo);
        $('#imagenModificado').val(_pub.imagen);
        $('#tituloModificado').val(_pub.titulo);
        $('#descripcionModificado').val(_pub.descripcion);
        $('#autorModificado').val(_pub.autor);
        $('#precioModificado').val(_pub.precio);
        $('#stockModificado').val(_pub.stock);
    }
});
//------------------------------------------------------------------------------
// Modificar publicación
$('#modificarPub').click(function () {
    // me guardo el codigo del campo oculto...
    var _codigoBackup = $("#codigoBackup").val();
    // cargo los datos en variables internas...
    var _tipo = $('#tipoModificado').val();
    var _codigo = $('#codigoModificado').val();
    var _imagen = $('#imagenModificado').val();
    var _titulo = $('#tituloModificado').val();
    var _desc = $('#descripcionModificado').val();
    var _autor = $("#autorModificado").val();
    // el precio lo guardo como int..
    var _precio = parseInt($('#precioModificado').val());
    // el stock lo guardo como int..
    var _stock = parseInt($('#stockModificado').val());
    var _estado = $('#estadoModificado').val();
    // controlo si ha cambiado el codigo...
    if (_codigoBackup === _codigo) {
        // si los 2 codigos son iguales, actualizo y listo...
        var _pub = buscar_publicacion_codigo(listaPublicaciones, _codigo);
        if (_pub !== -1) {
            // si existe la publicaciòn que vamos a modificar la actualizo...
            actualizar_publicacion(_tipo, _codigo, _imagen, _titulo, _desc, _autor, _precio, _stock, _estado);
        } else {
            // si no existe, no actualiza pero muestro errores...
            $("#mensajesModificacion").show();
            $("#publiCamposMalos").show();
            $("#publiNoModificada").show();
            $("#publiModificada").hide();
            $("#publiEliminada").hide();
            $("#publiNoEliminada").hide();
            $("#mensajesBusqueda").hide();
        }
    } else {
        // este else es por si justo lo que se modifica es el código...
        // verifico que el nuevo codigo sea valido...
        var _codigoNuevoValido = validarCodigoIdentificador(_codigo, _tipo);
        //verifico que el nuevo codigo no exista ya en listaPublicaciones...
        var _codigoNuevoDisponible = posicion_publicacion(listaPublicaciones, _codigo);
        // si es  valido el codigo nuevo...
        if (_codigoNuevoValido) {
            // si el codigo nuevo está disponible...
            if (_codigoNuevoDisponible === false) {
                // actualizo las ventas con el código nuevo...
                modificarVentas(_codigoBackup, _codigo);
                // me guardo la posición de la publicación vieja...
                var _posicionPub = posicion_publicacion(listaPublicaciones, _codigoBackup);
                // sobrescribo en esa posición con la publicación actualizada...
                listaPublicaciones[_posicionPub] = {
                    tipo: _tipo,
                    codigo: _codigo,
                    imagen: _imagen,
                    titulo: _titulo,
                    descripcion: _desc,
                    autor: _autor,
                    precio: parseInt(_precio),
                    stock: parseInt(_stock),
                    estado: _estado
                };
                // muestro mensajes de modificación correcta
                $("#mensajesModificacion").show();
                $("#publiModificada").show();
                $("#publiCamposMalos").hide();
                $("#publiNoModificada").hide();
                $("#publiEliminada").hide();
                $("#publiNoEliminada").hide();
                $("#mensajesBusqueda").hide();
            }
        } else {
            // muestro mensajes de publicacion no modificada por campos malos
            $("#mensajesModificacion").show();
            $("#publiCamposMalos").show();
            $("#publiNoModificada").show();
            $("#publiModificada").hide();
            $("#publiEliminada").hide();
            $("#publiNoEliminada").hide();
            $("#mensajesBusqueda").hide();
        }
    }
    // Recargo las listas actualizadas...                
    $(TablaPublicaciones);
    $(TablaCatalogo);
    $(TablaTop);
});
//------------------------------------------------------------------------------
// Eliminar publicación
$("#eliminarPub").click(function () {
//    var _cod = parseInt($('#codigoModificado').val()); //--> uso el codigo del campo modificar
    var _cod = $('#codigoModificado').val(); //--> uso el codigo del campo modificar
    var _pub = buscar_publicacion_codigo(listaPublicaciones, _cod);
    if (_pub !== -1) {
        // si encuentro esa publicación la elimino usando su código
        eliminar_pub(_cod);
        // muestro mensajes correctos        
        $("#mensajesModificacion").show();
        $("#publiEliminada").show();
        $("#publiNoEliminada").hide();
        $("#publiModificada").hide();
        $("#publiNoModificada").hide();
        $("#publiCamposMalos").hide();
        $("#mensajesBusqueda").hide();
    } else {
        // si no encuentra la publicación muestro mensajes de error
        $("#mensajesModificacion").show();
        $("#publiCamposMalos").show();
        $("#publiNoEliminada").show();
        $("#publiEliminada").hide();
        $("#publiModificada").hide();
        $("#publiNoModificada").hide();
        $("#mensajesBusqueda").hide();
    }
    // Recargo las listas actualizadas...                
    $(TablaPublicaciones);
    $(TablaCatalogo);
    $(TablaTop);
});
//------------------------------------------------------------------------------
// Generar reporte por precio
$("#generarReportePorPrecio").click(function () {
    var _publicacionesDePrecioMenor = publicacionesConPrecioMenorADado(listaPublicaciones, parseInt($("#precioDeReporte").val()));
    if (_publicacionesDePrecioMenor.length !== 0) {
        // si existen pubs con precios menores al dado muestro tabla y mensaje correcto
        dibujarTabla(_publicacionesDePrecioMenor, 'tablaReportePorPrecio');
        $("#mensajesBusquedaPorPrecio").show();
        $("#reportePrecioGenerado").show();
        $("#reportePrecioNoGenerado").hide();
        $("#mensajesBusquedaPorFecha").hide();
    } else {
        // si no existen publicaciones muestro mensajes de error
        $("#mensajesBusquedaPorPrecio").show();
        $("#reportePrecioGenerado").hide();
        $("#reportePrecioNoGenerado").show();
        $("#mensajesBusquedaPorFecha").hide();
    }
});
//------------------------------------------------------------------------------
// Generar reporte por fecha
$("#fechaDeReporte").datepicker({
    // formateo del datepicker
    monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Setiembre", "Octubre", "Noviembre", "Diciembre"],
    dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "Sa"],
    dateFormat: "dd/mm/yy"
});
$("#generarReportePorFecha").click(function () {
    var fecha = $("#fechaDeReporte").val();
    var _ventasPorFecha = totalVentasPorFecha(ventas, fecha);
    if (_ventasPorFecha.length !== 0) {
        // si existen ventas en esa fecha muestro la tabla y...
        dibujarTabla(_ventasPorFecha, 'tablaReportePorFecha');
        // muestro  mensaje reporte correcto
        $("#mensajesBusquedaPorFecha").show();
        $("#reporteFechaGenerado").show();
        $("#reporteFechaNoGenerado").hide();
        $("#mensajesBusquedaPorPrecio").hide();
    } else {
        // si no existen ventas en esa fecha muestro mensajes de error
        $("#mensajesBusquedaPorFecha").show();
        $("#reporteFechaNoGenerado").show();
        $("#reporteFechaGenerado").hide();
        $("#mensajesBusquedaPorPrecio").hide();
    }
});
//------------------------------------------------------------------------------
////////////////////////////Menús de navegación/////////////////////////////////
//------------------------------------------------------------------------------
$("#spanAdministracion").click(function () {
    $("#administrador").show();
    $("#ingresos").show();
    $("#publicacionesInicio").hide();
    $("#modificaciones").hide();
    $("#catalogo").hide();
    $("#reportes").hide();
});
$("#spanModificar").click(function () {
    $("#modificaciones").show();
    $("#publicacionesInicio").hide();
    $("#ingresos").hide();
    $("#mensajesBusqueda").hide();
    $("#mensajesModificacion").hide();
});
$("#spanIngresar").click(function () {
    $("#publicacionesInicio").hide();
    $("#ingresos").show();
    $("#modificaciones").hide();
    $("#mensajesIngreso").hide();
});
$("#spanCatalogo").click(function () {
    $("#catalogo").show();
    $("#publicacionesInicio").hide();
    $("#administrador").hide();
    $("#ingresos").hide();
    $("#modificaciones").hide();
    $("#reportes").hide();
    $("#reportePorPrecio").hide();
    $("#reportePorFecha").hide();
    $("#ingresarVenta").hide();
    $("#mensajesVenta").hide();
});
$("#spanReportes").click(function () {
    $("#reportes").show();
    $("#reportePorPrecio").show();
    $("#mensajesBusquedaPorPrecio").hide();
    $("#reportePorFecha").hide();
    $("#ingresos").hide();
    $("#publicacionesInicio").hide();
    $("#administrador").hide();
    $("#modificaciones").hide();
    $("#catalogo").hide();
});
$("#spanPorPrecio").click(function () {
    $("#reportePorPrecio").show();
    $("#mensajesBusquedaPorPrecio").hide();
    $("#reportePorFecha").hide();
});
$("#spanPorFecha").click(function () {
    $("#reportePorFecha").show();
    $("#mensajesBusquedaPorFecha").hide();
    $("#reportePorPrecio").hide();
});
$("#spanVentas").click(function () {
    $("#ingresarVenta").show();
    $("#catalogo").hide();
});
//------------------------------------------------------------------------------