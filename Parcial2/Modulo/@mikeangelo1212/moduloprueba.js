
    const pasarMayusculas = (cadena) => {return cadena.toUpperCase()}//otra manera de hacerlo
    function quitarEspacios(cadena){return cadena.replace(/ /g,"")}
    function obtenerLongitud(cadena){return cadena.length}

    //el exports hace publicas nuestras funciones, para sacarlos del archivo
    exports.pasarMayusculas=pasarMayusculas;
    exports.quitarEspacios=quitarEspacios;
    exports.obtenerLongitud=obtenerLongitud;