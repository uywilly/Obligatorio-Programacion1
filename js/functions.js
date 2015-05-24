//Objetos
var listaPublicaciones = new Array(
        {
            tipo: 'revista',
            codigo: '1111',
            imagen: 'img1',
            titulo: 'Paula',
            descripcion: 'Revista de variedades',
            autor: 'El Pais',
            precio: '180',
            stock: '20',
            estado: 'habilitada'
        },
{
    tipo: 'libro',
    codigo: '2222',
    imagen: 'img2',
    titulo: 'Firestarter',
    descripcion: 'Novela de terror',
    autor: 'Stephen King',
    precio: '320',
    stock: '10',
    estado: 'habilitado'
},
{
    tipo: 'revista',
    codigo: '1112',
    imagen: 'img3',
    titulo: 'Sabado show',
    descripcion: 'Revista sobre la farandula',
    autor: 'El Observador',
    precio: '220',
    stock: '40',
    estado: 'habilitada'
},
{
    tipo: 'libro',
    codigo: '2223',
    imagen: 'img4',
    titulo: 'The dead Zone',
    descripcion: 'Novela de suspenso',
    autor: 'Stephen King',
    precio: '500',
    stock: '3',
    estado: 'habilitado'
},
{
    tipo: 'libro',
    codigo: '2224',
    imagen: 'img5',
    titulo: 'Entrevista con el vampiro',
    descripcion: 'Novela de ciencia ficcion',
    autor: 'Anne Rice',
    precio: '290',
    stock: '40',
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
                    for (var n = 2; n < 9; n++){
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


