//Objetos
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
        },
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
},
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
},
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
},
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
},
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
},
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
},
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
},
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
},
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
},
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
},
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
},
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
},
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
},
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
},
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
},
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
},
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
},
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
},
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
},
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
},
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
},
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
},
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
},
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
},
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
},
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
},
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
},
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
},
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
var usuario = new Array(
        {
            tipo: 'adminstrador',
            nombre: 'William',
            apellido: 'Machado',
            mail: 'william.machado.uy@gmail.com',
            contrasena: 'william11'
        },
{
    tipo: 'adminstrador',
    nombre: 'Juan',
    apellido: 'Rodríguez',
    mail: 'niandubay79@gmail.com',
    contrasena: 'juan11'
},
{
    tipo: 'vendedor',
    nombre: 'Pedro',
    apellido: 'Sánchez',
    mail: 'pedro.sanchez@gmail.com',
    contrasena: 'pedro22'
},
{
    tipo: 'vendedor',
    nombre: 'Marta',
    apellido: 'Carrasco',
    mail: 'marta.carrasco@gmail.com',
    contrasena: 'marta22'
},
{
    tipo: 'vendedor',
    nombre: 'Pilar',
    apellido: 'Jiménez',
    mail: 'pilar.jimenez@gmail.com',
    contrasena: 'pilar22'
});
var ventas = new Array(
        {
            numero: 1,
            fecha: '22/5/2015',
            codigo_pub: '6789123456789',
            cantidad: 1,
            total: 213
        },
{
    numero: 2,
    fecha: '23/5/2015',
    codigo_pub: '4489123458',
    cantidad: 2,
    total: 170
},
{
    numero: 3,
    fecha: '23/5/2015',
    codigo_pub: '5678901234567',
    cantidad: 3,
    total: 840
},
{
    numero: 4,
    fecha: '24/5/2015',
    codigo_pub: '3356789014',
    cantidad: 2,
    total: 230
},
{
    numero: 5,
    fecha: '24/5/2015',
    codigo_pub: '2345678912345',
    cantidad: 4,
    total: 1040
},
{
    numero: 6,
    fecha: '25/5/2015',
    codigo_pub: '3356789014',
    cantidad: 3,
    total: 345
},
{
    numero: 7,
    fecha: '25/5/2015',
    codigo_pub: '6789123456789',
    cantidad: 2,
    total: 426
});

// Constantes
var stockMinimo = 4;

// Validaciones
function validar_primer_letra_mayuscula(_string) {
    var _correcto = false;
    var _caracter = _string.charCodeAt(0);
    // la primer letra debe ser mayúscula..
    if ((_caracter >= 'A') && (_caracter <= 'Z'))
    {
        _correcto = true;
    } else {
        _correcto = false;
    }
    return _correcto;
}
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
function validarCampoVacio(_campo) {
    var _vacio = false;
    if (_campo !== "") {
        _vacio = true;
    }
    return _vacio;
}
function validarPrecio(_precio) {
    var _precioValido = false;
    if (_precio > 0) {
        _precioValido = true;
    }
    return _precioValido;
}

// Generar fecha
function generar_fecha() {
    var _fecha = new Date();
    var _mes = _fecha.getMonth() + 1;
    var _dia = _fecha.getDate();
    var _ano = _fecha.getFullYear();

    _fecha = _dia + '/' + _mes + '/' + _ano;
    return _fecha;
}

// Buscadores
function buscar_publicacion_codigo(_listaPublicaciones, _codigo) {
    var _publicacion = -1;
    for (var i = 0; i < _listaPublicaciones.length; i++)
    {
        var _codigo_elemento = parseInt(_listaPublicaciones[i].codigo); //AGREGO PARSE INT YA QUE CON ESTOS DATOS LO LEVANTA COMO STRING
        if (_codigo_elemento === _codigo)
        {
            _publicacion = _listaPublicaciones[i];
            break;
        }
    }
    if(_publicacion === -1)
    {
        alert("No existe la publicacion");
    }
    return _publicacion;
}

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
            _linea += "<td>" + _array[i][k] + "</td>";
        }
        _linea += "</tr>";
        $("#" + _tabla + ">tbody").append(_linea);
    }
}

// Listar publicaciones de precio menor a un precio dado...
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
// Listar ventas con fecha igual a una fecha dada...
function total_ventas_fecha(_ventas, _fecha) {
    var _totalVentas = 0;
    for (var i = 0; i < _ventas.length; i++)
    {
        if (_ventas[i].fecha === _fecha)
        {
            //_totalVentas++; ---> esto sería un contador de ventas y pide el total
            // en _totalVentas acumulamos los totales de cada venta...
            _totalVentas += _ventas[i].total;
        }
    }
    return _totalVentas;
}

// Separar palabras de un string...
function separar_palabras(_texto) {
    var _palabras = new Array();
    var _caracterseparador = " ";
    _palabras = _texto.split(_caracterseparador);
    return _palabras;
}

// Ordenar publicaciones alfabeticamente utilizando bubble sort
function ordenar_publicaciones(_listaPublicaciones) {
    //var _publicaciones = _listaPublicaciones;  --->no furula, hay que "clonar" el array...
    //var _publicaciones = _listaPublicaciones.slice(0); // -->hay que comprobarla mejor...
    var _publicaciones = JSON.parse( JSON.stringify(_listaPublicaciones)); // -->furula pero usando JSON    
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

// Buscar posición (indice) de publicación según su _codigo
function posicion_publicacion(_listaPublicaciones, _codigo) {
    var _posicion = 0;
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

// Actualizar stock de un objeto de _listaPublicaciones, con _codigoPublicacion usando _cantidad
function actualizar_stock(_listaPublicaciones, _codigoPublicacion, _cantidad) {
    //Busco la publicacion para obtener su informacion
    var _publicacion = buscar_publicacion_codigo(_listaPublicaciones, _codigoPublicacion);
    //Busco la posicion de la publicacion en la lista 
    var _posPublicacion = posicion_publicacion(_listaPublicaciones, _codigoPublicacion);
    //Actualizo el stock
    var _stock = _publicacion.stock - _cantidad;
    _publicacion.stock = _stock;
    //Utilizando la posicion actualizo el objeto
    _listaPublicaciones[_posPublicacion] = _publicacion;
}

// Ingresar una venta
function ingresar_ventas(_ventas, _codigoPublicacion, _cantidad) {
    var _fecha = generar_fecha();
    var _publicacion = buscar_publicacion_codigo(listaPublicaciones, _codigoPublicacion);
    var _stock = _publicacion.stock;
    var _total = _publicacion.precio * _cantidad;
    // a _cantidad le paso un parseInt porque lo capturamos como string...
    var _nuevaVenta;
    if(_publicacion !==-1)
    {
        if (_stock >= _cantidad)
        {
            var _numeroVenta = _ventas.length + 1; //empiezan en 1 las ventas
            _nuevaVenta = {
                numero: _numeroVenta,
                fecha: _fecha,
                codigo_pub: _codigoPublicacion,
                cantidad: _cantidad,
                total: _total
            };
            actualizar_stock(listaPublicaciones, _codigoPublicacion, _cantidad);
            _ventas.push(_nuevaVenta);
            alert('Venta agregada con exito');

        } else {
            alert('No hay stock!');
        }
    }else
    {
        alert('No se agrego la venta');
    }
    if (_publicacion.stock<stockMinimo){
        alert('El stock de este artìculo ha quedado por debajo de '+stockMinimo+' unidades!');
    }
    return _nuevaVenta;
}

// Clona _ventas pero le agrega la clave precio
function agregarPrecioPublicacionEnArrayVentas(_ventas){
    var _lista = new Array();
    for (var i = 0; i < _ventas.length; i++){
        //cargo la venta
        var _venta = _ventas[i];
        // cargo el codigo_pub de la venta
        var _codigo = parseInt(_venta.codigo_pub);
        // cargo el precio de la publicacion que tenga el _codigo de la venta
        var _precio = buscar_publicacion_codigo(listaPublicaciones,_codigo).precio;
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

// Ordenar _array por _clave
function ordenarArrayPorClave(_array, _clave) {
    // clono el array _ventas
    var _lista = _array.slice();
    // esta es la magia que apenas entiendo...
    _lista.sort(function (a, b) {
        // significa algo como retornar el array pero ordenado de b -> a (descendente)
        // usando los valores de la clave (_clave) de cada objeto... 
        return b[_clave] - a[_clave];
    });
    // retorno la _lista ordenada...
    return _lista;
}
// Ordenar _array por _clave1 y luego por _clave2
function ordenarArrayPor2Claves(_array, _clave1, _clave2) {
    // clono el array _ventas
    var _lista = _array.slice();
    // esta es la magia que apenas entiendo...
    _lista.sort(function (a, b) {
        // significa algo como retornar el array pero ordenado de b -> a (descendente)
        // usando los valores de la clave (_clave) de cada objeto... 
        //return b[_clave] - a[_clave];
        if(a[_clave1] - b[_clave1] > 0){
            return b[_clave1]-a[_clave1];            
        } else if(b[_clave1] - a[_clave1] < 0){
            return a[_clave1]-b[_clave1];
        } else{
            if(b[_clave2] - a[_clave2] > 0){
                return a[_clave2]-b[_clave2];
            } else if(b[_clave2] - a[_clave2] < 0){
                return b[_clave2]-a[_clave2];
            }
        }
    });
    // retorno la _lista ordenada...
    return _lista;
}
// Tomar sólo las primeras '_cuantas' de ese _array...
function cuantasPrimerasDeArray(_array, _cuantas) {
    // creo un array que contenga sólo los objetos de 0 a _cuantas (_cuantas es excluyente)...
    var _primeras = _array.slice(0, _cuantas);
    return _primeras;
}
// Sumar ventas de misma publicación
function sumarVentas(_ventas) {
    var _array = JSON.parse( JSON.stringify(_ventas)); // --> forma correcta de clonar un array???
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
    for (var n = 0; n < _array.length; n++){
        delete _array[n].fecha;
        delete _array[n].numero;
    }
    return _array;
}
// Dibujar tabla tops   ->> es distinta porque mezcla datos, no saca el header de las claves...
function dibujarTablaTops(_arrayDeTops, _tabla) {
    // clono el array para trabajar sobre copia...
    var _array = JSON.parse( JSON.stringify(_arrayDeTops));
    // elimino en los objetos del array las claves no usadas..
    for (var n = 0; n < _arrayDeTops.length; n++){
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
        var _publicacion = buscar_publicacion_codigo(listaPublicaciones, parseInt(_array[i].codigo_pub)); // el parseInt lo necesita la funciòn buscar_publicacion_codigo...
        var _linea = "<tr><td>"+_publicacion.titulo+"</td><td>"+
                _array[i].cantidad+"</td><td>"+_publicacion.precio+"</td></tr>";
        $("#" + _tabla + ">tbody").append(_linea);
    }
}

// Reporte por fecha
function totalVentasPorFecha(_ventas,_fecha){
    var _array = JSON.parse( JSON.stringify(_ventas));
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
        for(var n = 0; n < _array.length; n++){
            delete _array[n].numero;
            delete _array[n].codigo_pub;
        }
    }
    for (var g = 0; g < _array.length; g++){
        if (_array[g].fecha !== _fecha){
            _array.splice(g, 1);
            g--;
        }
    }
    return _array;    
}
// Reporte por precio menor a dado
function publicacionesConPrecioMenorADado(_publicaciones,_precio){
    var _array = JSON.parse( JSON.stringify(_publicaciones));
    var _publicacionesDePrecioMenor = new Array();
    for (var i = 0; i < _array.length; i++) {
        if(_array[i].precio < _precio){
            _publicacionesDePrecioMenor.push(_array[i]);
        }
    }
    return _publicacionesDePrecioMenor;
}

// PRUEBAS
$("#probarfuncion").click(function () {
    dibujarTabla(listaPublicaciones, 'tabla1');
});
$("#probarfuncion2").click(function () {
    var _listaOrdenada = ordenar_publicaciones(listaPublicaciones);
    dibujarTabla(_listaOrdenada, 'tabla1');
});
$("#probarfuncion3").click(function () {
    dibujarTabla(ventas, 'tabla1');
});
$("#probarfuncion4").click(function () {
    var _ventasOrdenadasPorTotales = ordenarArrayPorClave(ventas, 'total', 'precio');
    dibujarTabla(_ventasOrdenadasPorTotales, 'tabla1');
});
$("#probarfuncion5").click(function () {
    // en este caso la clave es total...
    var _ventasOrdenadasPorClave = ordenarArrayPorClave(ventas, 'total');
    // el 3 que paso como parámetro es para un top 3... si fuera top 10, pues un 10.
    var _tops = cuantasPrimerasDeArray(_ventasOrdenadasPorClave, 3);
    dibujarTabla(_tops, 'tabla1');
});
$("#probarfuncion6").click(function () {
    var _sumaVentas = sumarVentas(ventas);
    var _sumaVentasOrdenadasPorMayor = ordenarArrayPorClave(_sumaVentas, 'total');
    dibujarTabla(_sumaVentasOrdenadasPorMayor, 'tabla1');
});
$("#probarfuncion7").click(function () {
    var _sumaVentas = sumarVentas(ventas);
    var _sumaVentasOrdenadasPorMayor = ordenarArrayPorClave(_sumaVentas, 'cantidad');
    var _solo3primerasDeSumaVentasOrdenadasPorMayor = cuantasPrimerasDeArray(_sumaVentasOrdenadasPorMayor, 4);
    dibujarTabla(_solo3primerasDeSumaVentasOrdenadasPorMayor, 'tabla1');
});
$("#probarfuncion8").click(function () {    
    var _sumaVentas = sumarVentas(ventas);
    var _sumaVentasOrdenadasPorMayor = ordenarArrayPorClave(_sumaVentas, 'cantidad');
    var _solo3primerasDeSumaVentasOrdenadasPorMayor = cuantasPrimerasDeArray(_sumaVentasOrdenadasPorMayor, 4);
    var _masprecio = agregarPrecioPublicacionEnArrayVentas(_solo3primerasDeSumaVentasOrdenadasPorMayor);
    var _ordenada = ordenarArrayPor2Claves(_masprecio, 'cantidad', 'precio');
    dibujarTablaTops(_ordenada, 'tabla1');
});
$("#probarfuncion9").click(function () {
    var _ventasPorFecha = totalVentasPorFecha(ventas,'24/5/2015');
    dibujarTabla(_ventasPorFecha, 'tabla1');
});
$("#probarfuncion10").click(function () {
    var _publicacionesDePrecioMenor = publicacionesConPrecioMenorADado(listaPublicaciones,250);
    dibujarTabla(_publicacionesDePrecioMenor, 'tabla1');
});
$('#ingresar_venta').click(function(){
    var codigo_pub_venta = parseInt($('#codigo_pub_venta').val());
    var cantidad = parseInt($('#cantidad_venta').val());
    var venta1 = ingresar_ventas(ventas, codigo_pub_venta, cantidad);
    
});
$("#codigo_pub_venta").blur(function(){alert('hola');});// tiene que llamar al que crea el total y lo muestra.