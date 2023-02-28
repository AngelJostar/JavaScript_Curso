//  Funcion anonima autoejecutable

(function(){
    console.log("mi primer IIFE");
})();

(function(d,w,c){
    console.log("mi segunda IIFE");
    console.log(d);
    c.log("Este es un console.log")
})(document,window,console);

// Formas de escribir las funciones Anónimas autoejecutables
(function(){
    console.log("versión clásica");
})();

// La crockford (javaScript The Good parts)

((function(){
    console.log("Versión Crockford");
})());

// Unaria
+function (){
    console.log('versión Unaria');
}();

// Facebook

!function(){
    console.log('versión Facebook');
}();