# Obligatorio-Programacion1

Tipos de datos que forman los Objetos:

Objeto publicación:
        {
            tipo: 'libro',------------------------------->string
            // puede ser 'libro' o 'revista'
            codigo: '1234567891234',--------------------->string
            // es un string para poder separarlo en subcadenas
            imagen: 'libro1.jpg',------------------------>string
            // string para completar href de las etiquetas <a>
            titulo: 'Aprende a tocar la guitarra',------->string
            // string normal
            descripcion: 'Curso de guitarra',------------>string
            // string normal
            autor: 'Phil Capone',------------------------>string
            // es un int para usarlo en los cálculos
            precio: 320,--------------------------------->int
            // es un int para poder aumentarlo o disminuirlo
            stock: 15,----------------------------------->int
            // un simple string de control
            estado: 'habilitado'------------------------->string
        }
Objeto usuario:
        {
            tipo: 'adminstrador',------------------------>string
            // string que puede ser 'administrador' o 'usuario'
            nombre: 'William',--------------------------->string
            // string normal
            apellido: 'Machado',------------------------->string
            // string normal
            mail: 'william.machado.uy@gmail.com',-------->string
            // string para contolar con subcadenas la presencia del @
            contrasena: 'william11'---------------------->string
            // string que es alfanumérico.. descartar signos?
        }
Objeto venta:
        {
            numero: 1,----------------------------------->int
            // es un int autogenerado, ventas.length + 1
            fecha: '22/05/2015',------------------------->string
            // string generado en el momento de la venta
            codigo_pub: '6789123456789',----------------->string
            // string para poder compararlo como cadena
            cantidad: 1,--------------------------------->int
            // es un int porque necesito operar con él
            total: 213----------------------------------->int
            // int que surge de multiplicar precio * cantidad
        }

Tipos de datos que reciben las Funciones y que devuelven:

function headers(_lista):
        _lista------------------------------------------>Array asociativo
        // imprime la estructura del thead según las claves del objeto _lista.

function listar(_lista):
        _lista------------------------------------------>Array asociativo
        // imprime la estructura de la tabla usando el thead que da headers(_lista) y 
        // y genera el tbody.

function listar(_lista, _thead, _tbody):
        _lista------------------------------------------>Array asociativo
        _thead------------------------------------------>string
        _tbody------------------------------------------>string
        // función que imprime el thead y el tbody de una tabla en base a las claves de los
        // objetos en _lista, pero especificando el id de thead y tbody respectivamente

function validar_titulo(_titulo):
        _titulo----------------------------------------->string
        // función que devuelve true si el string comienza con mayúsculas..

function validar_descripcion(_desc):
        _desc------------------------------------------->string
        // funcion que devuelve true si el string comienza con mayúsculas y
        // tiene 15 caracteres...

function validar_email(_texto):
        _texto------------------------------------------>string
        // devuelve true si el string contiene el signo @...

function validarCodigoIdentificador(_codigoId, _tipoPub):
        _codigoId--------------------------------------->string
        _tipoPub---------------------------------------->string
        // según el string _tipoPub que puede ser "libro" o "revista" controla de una 
        // manera o de otra que el string _codigoId sea válido...

function validarCampoVacio(_campo):
        _campo------------------------------------------>string
        // devuelve true si el string no es vacío...

function validarPrecio(_precio):
        _precio----------------------------------------->int
        // devuelve true si el int _precio es mayor a cero...

function generar_fecha():
        // devuelve un string con el formato 'DD/MM/AAAA'

function buscar_publicacion_codigo(_listaPublicaciones, _codigo):
        _listaPublicaciones----------------------------->Array asociativo
        _codigo----------------------------------------->string
        // devuelve el objeto al que corresponda el string _codigo...

function listar_publicaciones_menor_precio(_listaPublicaciones, _precio):
        _listaPublicaciones----------------------------->Array asociativo
        _precio----------------------------------------->int
        // devuelve un array indexado formado por los objetos del
        // array asociativo _listaPublicaciones que tengan el valor de su
        // clave precio mayor al int _precio...

function separar_palabras(_texto):
        _texto------------------------------------------>string
        // devuelve un array indexado formado por los subsegmentos de la cadena
        // string _texto que se forman usando como separador el caracter de espacio...

function ordenar_publicaciones(_listaPublicaciones):
        _listaPublicaciones----------------------------->Array asociativo
        // empezamos clonando el objeto y luego usamos el método sort bubble para
        // ordenar alfabeticamente los objetos dentro del array asociativo 
        // clonado de _listaPublicaciones según el string de su clave titulo...

function total_ventas_fecha(_ventas, _fecha):
        _ventas----------------------------------------->Array asociativo
        _fecha------------------------------------------>string
        // devuelve un int que es la suma acumulativa de todos los valores de
        // cada clave 'total' de cada objeto contenido en el array asociativo _ventas..

function posicion_publicacion(_listaPublicaciones, _codigo):
        _listaPublicaciones----------------------------->Array asociativo
        _codigo----------------------------------------->string
        // devuelve un int que es el indice en el cual se ubica el objeto con el
        // valor _codigo en su clave 'codigo' dentro del array _listaPublicaciones...

function actualizar_stock(_listaPublicaciones, _codigoPublicacion, _cantidad):
        _listaPublicaciones----------------------------->Array asociativo
        _codigoPublicacion------------------------------>string
        _cantidad--------------------------------------->int
        // carga desde el array asociativo _listaPublicaiones el objeto al que 
        // corresponda el _codigoPublicacion, también guarda su indice dentro de ese
        // array asociativo, luego modifica el valor de su clave 'stock' y vuelve a
        // asociarlo dentro del array asociativo.

function ingresar_ventas(_ventas, _codigoPublicacion, _cantidad):
        _ventas------------------------------------>Array asociativo
        _codigoPublicacion------------------------------>string
        _cantidad--------------------------------------->int
        // crea un nuevo objeto venta y lo ingresa en el array asociativo _ventas