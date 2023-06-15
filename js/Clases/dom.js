console.log("*******Elemetos del documento*******");
console.log(document.head)
console.log(document.body)
console.log(document.documentElement)
console.log(document.doctype)
console.log(document.charset)
console.log(document.title)
console.log(document.links)
console.log(document.images)
console.log(document.forms)
console.log(document.styleSheets)
setTimeout(() => {
  console.log(document.getSelection().toString())
},3000)
document.write("<h2> Hola mundo desde el DOM</h2>");

// Esto ya casi no se usa
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
// Esto es lo que lo remplaza
console.log(document.getElementById("menu"));
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach(el => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li"));

console.log(document.documentElement.lang);
console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

document.documentElement.lang = "en";
console.log(document.documentElement.getAttribute("lang"));
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.getAttribute("lang"));

// variables que hagan referencia al dom les agregamos $ por convencion de programación
const $linkDOM = document.querySelector(".link-dom");
$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");
$linkDOM.setAttribute("href", "https://www.google.com");
