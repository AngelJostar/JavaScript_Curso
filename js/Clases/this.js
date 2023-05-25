function getName(){

    console.log(`Mi nombre es ${this.nick}`);
  }
  
  global.nick = 'Global-nick'
  
  getName()
  
  
  var midudev = {
    nick: 'midudev',
    getName: getName
  }
  
  midudev.getName()
  
  // El this cambia su valor dependiendo el contexto de ejecución
  
  // El this no funciona en arrow function ya que estsa no añaden el contexto de ejecución
  
  function Persona(nombre){
    this.nombre = nombre;
    // return console.log(this.nombre);
    return function(){
      console.log(this.nombre);
    }
  }

  let jon = new Persona("Jon");
  jon();