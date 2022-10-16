//Creacion de la clase contenedor: 
class Contenedor {
  #contenido;
  //Declarando método constructor
  constructor() {
    this.#contenido = [];
  }
  //metodo: para guardar objetos. Correcto.
  save(object) {
    this.#contenido.push(object);
  }
  //metodo: para encontrar por numero de id. Correcto
  getById(n) {
    this.#contenido.forEach((element) => {
      if (element.id === n) {
        return console.log(this.#contenido[this.#contenido.indexOf(element)]);
      }
    });

  }
  //metodo: para traer todos los datos almacenados. Correcto
  getAll() {
    if(this.#contenido.length === 0){
        return null
    }
   return this.#contenido
  }
  //metodo:para eliminar por Id 
  deleteById(n) {
    this.#contenido.forEach((element) => {
        if(element.id === n){
           let i = this.#contenido.indexOf(element)
           if (i === 0 ){
            this.#contenido.splice(i,1)
           }
           this.#contenido.splice(i,i)
        }
    });
  }
  //metodo: para eliminar todo los objetos. Correcto
  deleteAll() {
    while(this.#contenido.length>=1){ 
    this.#contenido.pop()
    }
  }
}
//Creación de un objeto contenedor. 
const contenedorGral = new Contenedor();
contenedorGral.save({ id: 1, title: "El numero Uno", price: 100, thumbnail:"www.imagen1.com" });
contenedorGral.save({ id: 2, title: "El numero Dos", price: 150, thumbnail:"www.imagen2.com" });
contenedorGral.save({ id: 3, title: "El numero Tres", price: 200, thumbnail:"www.imagen3.com" });


//Llamado a los métodos. Aquí podemos probar todos las combinaciones posibles. 

contenedorGral.getById(2)
contenedorGral.deleteById(2)
contenedorGral.deleteById(1)
console.log(contenedorGral.getAll());
contenedorGral.deleteById(1)
contenedorGral.deleteAll()
console.log(contenedorGral.getAll());