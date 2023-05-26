console.log(this);
this.lugar = "Contexto Global";

function saludar(saludo, aQuien){
  console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

saludar("hola", "simba");

const obj = {
  lugar: "Contexto Objeto"
}

saludar.call(obj, "hola","Jon");
saludar.apply(obj, ["Adios", "Angel"]);


const persona = {
   nombre: "Angel",
  saludar: function(){
    console.log(`Hola ${this.nombre}`)
  }
}

persona.saludar();

const otraPersona = {
  saludar:persona.saludar.bind(persona)
}

otraPersona.saludar();