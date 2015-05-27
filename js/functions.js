//Objetos
var listaPublicaciones = new Array(
        {
            tipo: 'libro',
            codigo: '1234567891234',
            imagen: 'libro1.jpg',
            titulo: 'Aprende a tocar la guitarra',
            descripcion: 'Curso de guitarra',
            autor: 'Phil Capone',
            precio: '320',
            stock: '15',
            estado: 'habilitado'
        },
{
    tipo: 'libro',
    codigo: '2345678912345',
    imagen: 'libro2.jpg',
    titulo: 'Introducción a Piaget',
    descripcion: 'Manual de método docente',
    autor: 'Ed Labinowicz',
    precio: '260',
    stock: '25',
    estado: 'habilitado'
},
{
    tipo: 'libro',
    codigo: '3456789123456',
    imagen: 'libro3.jpg',
    titulo: 'Ovinos Tecnologías',
    descripcion: 'Catálogo de ovejas mecánicas',
    autor: 'César Calvo',
    precio: '120',
    stock: '8',
    estado: 'habilitado'
},
{
    tipo: 'libro',
    codigo: '4567891234567',
    imagen: 'libro4.jpg',
    titulo: 'Al fin libre',
    descripcion: 'Manual de autosuperación',
    autor: 'Beth Moore',
    precio: '120',
    stock: '42',
    estado: 'habilitado'
},
{
    tipo: 'libro',
    codigo: '5678912345678',
    imagen: 'libro5.jpg',
    titulo: 'Caligrafía del pelo',
    descripcion: 'Recopilación de poesías capilares',
    autor: 'Renzo Carnevale',
    precio: '324',
    stock: '8',
    estado: 'habilitado'
},
{
    tipo: 'libro',
    codigo: '6789123456789',
    imagen: 'libro6.jpg',
    titulo: 'La cocina japonesa del Kabuki',
    descripcion: 'Recetas de pescado crudo',
    autor: 'Ricardo Sanz',
    precio: '213',
    stock: '13',
    estado: 'habilitado'
},
{
    tipo: 'libro',
    codigo: '7891234567890',
    imagen: 'libro7.jpg',
    titulo: 'Organización de congresos y convenciones',
    descripcion: 'Libro para quitarle guita a los giles',
    autor: 'Manuel Papillón',
    precio: '420',
    stock: '5',
    estado: 'habilitado'
},
{
    tipo: 'libro',
    codigo: '8912345678901',
    imagen: 'libro8.jpg',
    titulo: 'Identificación forense',
    descripcion: 'Manual para averiguar quién es el muerto',
    autor: 'Francisco Trillas',
    precio: '312',
    stock: '18',
    estado: 'habilitado'
},
{
    tipo: 'libro',
    codigo: '9123456789012',
    imagen: 'libro9.jpg',
    titulo: 'Las actividades turísticas y recreacionales',
    descripcion: 'Catálogo de cosas para hacer en el tiempo libre',
    autor: 'Esteban Quito',
    precio: '50',
    stock: '10',
    estado: 'habilitado'
},
{
    tipo: 'libro',
    codigo: '1234567890123',
    imagen: 'libro10.jpg',
    titulo: 'Seguridad e higiene en el trabajo',
    descripcion: 'Reglas para bañarse seguro en e trabajo',
    autor: 'Walter Gargano',
    precio: '282',
    stock: '31',
    estado: 'habilitado'
},
{
    tipo: 'libro',
    codigo: '2345678901234',
    imagen: 'libro11.jpg',
    titulo: 'Las cortinas rojas',
    descripcion: 'Libro de cuento con tapa horrible',
    autor: 'Margarita Mainé',
    precio: '150',
    stock: '12',
    estado: 'habilitado'
},
{
    tipo: 'libro',
    codigo: '3456789012345',
    imagen: 'libro12.jpg',
    titulo: 'Mi libro de lectura 2',
    descripcion: 'Libro para leer',
    autor: 'Carolo Santillana',
    precio: '115',
    stock: '22',
    estado: 'habilitado'
},
{
    tipo: 'libro',
    codigo: '4567890123456',
    imagen: 'libro13.jpg',
    titulo: 'Yoga en casa',
    descripcion: 'Como torcerse uno mismo sin morir',
    autor: 'Ruben Rada',
    precio: '200',
    stock: '14',
    estado: 'habilitado'
},
{
    tipo: 'libro',
    codigo: '5678901234567',
    imagen: 'libro14.jpg',
    titulo: 'Libro de poemas',
    descripcion: 'Recopilación de buenos poemas',
    autor: 'Federico García Lorca',
    precio: '280',
    stock: '20',
    estado: 'habilitado'
},
{
    tipo: 'libro',
    codigo: '6789012345678',
    imagen: 'libro15.jpg',
    titulo: 'Guía literaria de Roma',
    descripcion: 'Ambientación de obras literarias romanas',
    autor: 'Massimo Mastrancuzo',
    precio: '100',
    stock: '5',
    estado: 'habilitado'
},
{
    tipo: 'revista',
    codigo: '1134567898',
    imagen: 'revista1.jpg',
    titulo: 'Hola - Diego es cursi',
    descripcion: 'Chusmeríos de celebridades',
    autor: 'Antonia Capalutto',
    precio: '75',
    stock: '44',
    estado: 'habilitado'
},
{
    tipo: 'revista',
    codigo: '1145678910',
    imagen: 'revista2.jpg',
    titulo: 'Hola - Suar y Oreiro',
    descripcion: 'Chusmeríos de celebridades',
    autor: 'Antonia Capalutto',
    precio: '75',
    stock: '32',
    estado: 'habilitado'
},
{
    tipo: 'revista',
    codigo: '2256789122',
    imagen: 'revista3.jpg',
    titulo: 'El gráfico - Genio insaciable',
    descripcion: 'Revista deportiva',
    autor: 'Marcelo Zalayeta',
    precio: '80',
    stock: '20',
    estado: 'habilitado'
},
{
    tipo: 'revista',
    codigo: '3367891234',
    imagen: 'revista4.jpg',
    titulo: 'Bodas - Casamientos de verano',
    descripcion: 'Revista de novias desesperadas',
    autor: 'Monica Rajo',
    precio: '180',
    stock: '9',
    estado: 'habilitado'
},
{
    tipo: 'revista',
    codigo: '3378912346',
    imagen: 'revista5.jpg',
    titulo: 'Bodas - Novia de verano',
    descripcion: 'Revista de novias desesperadas',
    autor: 'Gudalupe Lotuda',
    precio: '180',
    stock: '11',
    estado: 'habilitado'
},
{
    tipo: 'revista',
    codigo: '4489123458',
    imagen: 'revista6.jpg',
    titulo: 'Ciencia hoy',
    descripcion: 'DIvulgación científica',
    autor: 'Albert Einstein',
    precio: '85',
    stock: '13',
    estado: 'habilitado'
},
{
    tipo: 'revista',
    codigo: '5591234560',
    imagen: 'revista7.jpg',
    titulo: 'Luz - Chocolate',
    descripcion: 'Revista para mujeres',
    autor: 'Catalina Pedruño',
    precio: '120',
    stock: '21',
    estado: 'habilitado'
},
{
    tipo: 'revista',
    codigo: '1112345672',
    imagen: 'revista8.jpg',
    titulo: 'Gente - Ahora vamos por todo',
    descripcion: 'Chusmeríos de celebridades',
    autor: 'Julio Iglesias',
    precio: '115',
    stock: '18',
    estado: 'habilitado'
},
{
    tipo: 'revista',
    codigo: '6623456785',
    imagen: 'revista9.jpg',
    titulo: 'Paint Works',
    descripcion: 'Revista para ilustradores gráficos',
    autor: 'Roberto Goya',
    precio: '220',
    stock: '16',
    estado: 'habilitado'
},
{
    tipo: 'revista',
    codigo: '5534567898',
    imagen: 'revista10.jpg',
    titulo: 'Para ti - Horóscopo del amor',
    descripcion: 'Revista para mujeres',
    autor: 'Margarita Houdini',
    precio: '130',
    stock: '31',
    estado: 'habilitado'
},
{
    tipo: 'revista',
    codigo: '3345678901',
    imagen: 'revista11.jpg',
    titulo: 'Bodas - Amor de primavera',
    descripcion: 'Revista de novias desesperadas',
    autor: 'Anastasia Larrusa',
    precio: '150',
    stock: '22',
    estado: 'habilitado'
},
{
    tipo: 'revista',
    codigo: '3356789014',
    imagen: 'revista12.jpg',
    titulo: 'Bodas - Blanca y radiante',
    descripcion: 'Revista de novias desesperadas',
    autor: 'Justina Dimenti',
    precio: '115',
    stock: '23',
    estado: 'habilitado'
},
{
    tipo: 'revista',
    codigo: '5567890127',
    imagen: 'revista13.jpg',
    titulo: 'Sophia - Vivir diferente',
    descripcion: 'Revista para mujeres',
    autor: 'Chengue Morales',
    precio: '110',
    stock: '24',
    estado: 'habilitado'
},
{
    tipo: 'revista',
    codigo: '7778901230',
    imagen: 'revista14.jpg',
    titulo: 'Nuevos Pueblos',
    descripcion: 'Publicación cultural geográfica',
    autor: 'Miranda Cuenca',
    precio: '140',
    stock: '18',
    estado: 'habilitado'
},
{
    tipo: 'revista',
    codigo: '5589012343',
    imagen: 'revista15.jpg',
    titulo: 'Woman',
    descripcion: 'Revista vieja para mujeres viejas',
    autor: 'Fortunato Mascaronne',
    precio: '125',
    stock: '22',
    estado: 'habilitado'
}
);
var usuario =
        {
            tipo: ' ',
            nombre: ' ',
            apellido: ' ',
            mail: ' ',
            contrasena: ' '
        };
var venta =
        {
            numero: ' ',
            fecha: ' ',
            codigo_pub: ' ',
            cantidad: ' ',
            total: ' '
        };

//MOSTRAR LISTAS
function headers(_lista)
{
    var cabecera = '<tr>';
    for (var j in _lista[0])
    {
        cabecera += '<th>' + j + '</th>';
    }
    cabecera += '</tr>';
    $('#myhead').append(cabecera);
}
function listar(_lista)
{
    //cargo las categorias
    headers(_lista);
    //recorro y cargo la tabla
    for (var i = 0; i < _lista.length; i++)
    {
        var elemento = '<tr>';
        for (var j in _lista[i])
        {
            elemento += '<td>' + _lista[i][j] + '</td>';
        }
        elemento += '</tr>';
        $('#mybody').append(elemento);
    }
}

//validaciones
function validar_titulo(_titulo)
{
    var _correcto = false;
    var _caracter = _titulo.charCodeAt(0);
    if ((_caracter >= 65) && (_caracter <= 90))
    {
        _correcto = true;
    } else {
        _correcto = false;
    }
    return _correcto;
}
function validar_descripcion(_desc)
{
    var _correcto = false;
    var _largo = _desc.length;
    if (_largo >= 15)
    {
        _correcto = true;
    } else {
        _correcto = false;
    }
    return _correcto;
}
function validar_email(_texto)
{
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
function generar_fecha()
{
    var _fecha = new Date();
    var _mes = _fecha.getMonth() + 1;
    var _dia = _fecha.getDate();
    var _ano = _fecha.getFullYear();

    _fecha = _dia + '/' + _mes + '/' + _ano;
    return _fecha;
}
//Buscadores
function buscar_publicacion_codigo(_listaPublicaciones, _codigo)
{
    var _publicacion = -1;
    for (var i = 0; i < _listaPublicaciones.length; i++)
    {
        var _codigo_elemento = parseInt(_listaPublicaciones[i].codigo);
        if (_codigo_elemento === _codigo)
        {
            _publicacion = _listaPublicaciones[i];
            break;
        }
    }
    return _publicacion;
}

//listado
function listar_publicaciones_menor_precio(_listaPublicaciones, _precio)
{
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

function separar_palabras(_texto)
{
    var _palabra = ' ';
    var _cantidadEspacios = 0;
    for (var i = 0; i < _texto.length; i++)
    {
        if (_texto.charAt(i) === ' ')
        {
            _cantidadEspacios++;
        } else {

        }
    }
    if (_cantidadEspacios === 0)
    {
        _palabra = _texto;
    }
    else {
        var _posEspacio = _texto.indexOf(' ');
        _palabra = _texto.slice(0, _posEspacio);
    }

    return _palabra;

}


//Ordenar publicaciones alfabeticamente utilizando bubble sort
function ordenar_publicaciones(_listaPublicaciones)
{
    var _publicaciones = _listaPublicaciones;
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
            var _palabra_titulo1 = separar_palabras(_titulo1);
            var _palabra_titulo2 = separar_palabras(_titulo2);

            //obtengo el largo de la palabra mas corta
            if (_palabra_titulo2.length > _palabra_titulo1.length)
            {
                var cont = _palabra_titulo1.length;
            } else {
                var cont = _palabra_titulo2.length;
            }

            //comparo y de ser necesario ordeno utilizando el bubble sort
            for (var j = 0; j < cont; j++)
            {
                if (_palabra_titulo1.charAt(j) === _palabra_titulo2.charAt(j))
                {

                } else if (_palabra_titulo1.charAt(j) > _palabra_titulo2.charAt(j))
                {
                    var aux = _publicaciones[i - 1];
                    _publicaciones[i - 1] = _publicaciones[i];
                    _publicaciones[i] = aux;
                    _cambios = true;
                    break;
                } else
                {
                    break;
                }
            }
        }
        _largo = _largo - 1;
    } while (_cambios === true);

    return _publicaciones;
}

function total_ventas_fecha(_listaVentas, _fecha)
{
    var _totalVentas = 0;
    for (var i = 0; i < _listaVentas.length; i++)
    {
        if (_listaVentas[i].fecha === _fecha)
        {
            _totalVentas++;
        }
    }
    return _totalVentas;
}
//BUSCAR POSICION PUBLICACION
function posicion_publicacion(_listaPublicaciones, _codigo)
{
    var _posicion = 0;
    for (var i = 0; i < _listaPublicaciones.length; i++)
    {
        var _codigo_elemento = parseInt(_listaPublicaciones[i].codigo);
        if (_codigo_elemento === _codigo)
        {
            _posicion = i;
            break;
        }
    }
    return _posicion;

}
//ACTUALIZAR
function actualizar_stock(_listaPublicaciones, _codigoPublicacion, _cantidad)
{
    //Busco la publicacion para obtener su informacion
    var _publicacion = buscar_publicacion_codigo(_listaPublicaciones, _codigoPublicacion);
    //Busco la posicion de la publicacion en la lista 
    var _posPublicacion = posicion_publicacion(_listaPublicaciones, _codigoPublicacion);
    //Actualizo el stock
    var _stock = parseInt(_publicacion.stock) - _cantidad;
    _publicacion.stock = _stock;
    //Utilizando la posicion actualizo el objeto
    _listaPublicaciones[_posPublicacion] = _publicacion;
}
//INGRESOS DE DATOS
function ingresar_ventas(_listaVentas, _codigoPublicacion, _cantidad)
{
    var _fecha = generar_fecha();
    var _publicacion = buscar_publicacion_codigo(listaPublicaciones, _codigoPublicacion);
    var _stock = parseInt(_publicacion.stock);
    var _total = parseInt(_publicacion.precio) * _cantidad;
    var _nuevaVenta;
    if (_stock >= _cantidad)
    {
        var _numeroVenta = _listaVentas.length;
        _nuevaVenta = {
            numero: _numeroVenta,
            fecha: _fecha,
            codigo_pub: _codigoPublicacion,
            cantidad: _cantidad,
            total: _total
        };
        actualizar_stock(listaPublicaciones, _codigoPublicacion, _cantidad);

    } else {
        _nuevaVenta = -1;
        alert('No hay stock!');
    }
    _listaVentas.push(_nuevaVenta);
    return _nuevaVenta;
}


