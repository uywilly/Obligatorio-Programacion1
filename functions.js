//Objetos
var listaPublicaciones = new Array(
{
    tipo:'revista',
    codigo:'1111',
    imagen:'img1',
    titulo:'Paula',
    descripcion:'Revista de variedades',
    autor:'El Pais',
    precio:'180',
    stock:'20',
    estado:'habilitada'      
},
{
    tipo:'libro',
    codigo:'2222',
    imagen:'img2',
    titulo:'Firestarter',
    descripcion:'Novela de terror',
    autor:'Stephen King',
    precio:'320',
    stock:'10',
    estado:'habilitado'      
},            
{
    tipo:'revista',
    codigo:'1112',
    imagen:'img3',
    titulo:'Sabado show',
    descripcion:'Revista sobre la farandula',
    autor:'El Observador',
    precio:'220',
    stock:'40',
    estado:'habilitada'      
},
{
    tipo:'libro',
    codigo:'2223',
    imagen:'img4',
    titulo:'The dead Zone',
    descripcion:'Novela de suspenso',
    autor:'Stephen King',
    precio:'500',
    stock:'3',
    estado:'habilitado'     
},
{
    tipo:'libro',
    codigo:'2224',
    imagen:'img5',
    titulo:'Entrevista con el vampiro',
    descripcion:'Novela de ciencia ficcion',
    autor:'Anne Rice',
    precio:'290',
    stock:'40',
    estado:'habilitado'     
} 
);
var usuario =
{
    tipo: ' ',
    nombre:' ',
    apellido:' ',
    mail:' ',
    contrasena:' '  
};
var venta = 
{
    numero:' ',
    fecha:' ',
    codigo_pub:' ',
    cantidad:' ',
    total:' '           
};

//MOSTRAR LISTAS
function headers(_lista)
{
    var cabecera='<tr>';
    for (var j in _lista[0])
    {
        cabecera += '<th>'+j+'</th>';
    }
    cabecera+='</tr>';
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
            elemento+='<td>'+_lista[i][j]+'</td>';
        }
        elemento+='</tr>';
        $('#mybody').append(elemento);
    }   
}

//validaciones
function validar_titulo(_titulo)
{
    var _correcto = false;
    var _caracter = _titulo.charCodeAt(0);
    if((_caracter >= 65)&&(_caracter <= 90))
    {
        _correcto = true;
    }else{
        _correcto = false;
    }
    return _correcto;
}
function validar_descripcion(_desc)
{
    var _correcto = false;
    var _largo = _desc.length;
    if(_largo >= 15)
    {
        _correcto = true;
    }else{
        _correcto = false;
    }
    return _correcto;
}
function validar_email(_texto)
{
    var _correcto = false;
    if( (_texto.indexOf('@')!==-1) && (_texto.indexOf('@')===_texto.lastIndexOf('@')))
    {
        _correcto = true;
    }else{
        _correcto = false;
    }
    return _correcto; 
}
function generar_fecha()
{
   var _fecha = new Date();
   var _mes = _fecha.getMonth()+1;
   var _dia = _fecha.getDate();
   var _ano = _fecha.getFullYear();
 
   _fecha = _dia+'/'+_mes+'/'+_ano;
   return _fecha;
}
//Buscadores
function buscar_publicacion_codigo(_listaPublicaciones,_codigo)
{
    var _publicacion = -1;
    for(var i =0;i<_listaPublicaciones.length;i++)
    {
        var _codigo_elemento = parseInt(_listaPublicaciones[i].codigo);
        if(_codigo_elemento === _codigo)
        {
            _publicacion = _listaPublicaciones[i];
            break;
        }
    }
    return _publicacion;   
}

//listado
function listar_publicaciones_menor_precio(_listaPublicaciones,_precio)
{
    var _listadoPrecio = new Array();
    for(var i =0;i<_listaPublicaciones.length;i++)
    {
        if(_listaPublicaciones[i].precio < _precio)
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
    for(var i = 0; i<_texto.length;i++)
    {
        if(_texto.charAt(i)===' ')
        {
            _cantidadEspacios++;
        }else{
            
        }
    }
    if(_cantidadEspacios === 0)
    {
        _palabra = _texto;
    }
    else{
        var _posEspacio = _texto.indexOf(' ');
        _palabra = _texto.slice(0,_posEspacio);
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
        for(var i = 1;i<=_largo-1;i++)
        {
            //cargo los titulos completos
            var _titulo1 = _publicaciones[i-1].titulo.toLowerCase();
            var _titulo2 = _publicaciones[i].titulo.toLowerCase();
            
            /*separo los titulos por palabras considerando que algunos 
            titulos pueden tener solo una palabra*/
            var _palabra_titulo1 = separar_palabras(_titulo1);
            var _palabra_titulo2 = separar_palabras(_titulo2);
            
            //obtengo el largo de la palabra mas corta
            if(_palabra_titulo2.length> _palabra_titulo1.length)
            {
                var cont = _palabra_titulo1.length;
            }else{
                var cont = _palabra_titulo2.length;
            }
            
            //comparo y de ser necesario ordeno utilizando el bubble sort
            for(var j = 0; j<cont;j++)
            {
                if(_palabra_titulo1.charAt(j)===_palabra_titulo2.charAt(j))
                {
                    
                }else if(_palabra_titulo1.charAt(j)>_palabra_titulo2.charAt(j))
                {
                    var aux = _publicaciones[i-1];
                    _publicaciones[i-1] = _publicaciones[i];
                    _publicaciones[i] = aux;
                    _cambios = true;
                    break;
                }else
                {
                    break;
                }
            }
        }
        _largo = _largo-1;
    }while(_cambios===true);
    
    return _publicaciones;   
}

function total_ventas_fecha(_listaVentas,_fecha)
{
    var _totalVentas = 0;
    for(var i =0;i<_listaVentas.length;i++)
    {
        if(_listaVentas[i].fecha === _fecha)
        {
            _totalVentas++;
        }
    }
    return _totalVentas;   
}



