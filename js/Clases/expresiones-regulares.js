// Expresiones regulares

// Son una secuencia de caracteres que forman un patrón de búsqueda, principalmente
//  utilizada para la busqueda de patrones de cadenas de caracteres

let cadena = "Lorem Ipsum es simplemente el texto 9de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas , las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum"
let expReg = new RegExp("lorem","ig")
console.log(expReg.test(cadena));
console.log(expReg.exec(cadena));
let expReg2 = /[0-9]/ig;
console.log(expReg2.test(cadena));
console.log(expReg2.exec(cadena));