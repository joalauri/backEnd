
const fs = require('fs').promises

//Creacion de la clase contenedor: 
class Contenedor {
  #contenido;
  #ruta
  //Declarando método constructor
  constructor(ruta) {
    this.#contenido = [];
    this.#ruta = ruta
  }
  //metodo: para guardar objetos. Correcto.
  async save(object) {
    this.#contenido.push(object);
    await fs.promises.writeFile(this.#ruta, JSON.stringify(this.#elementos))
  }
  //metodo: para encontrar por numero de id. Correcto
  async getById(n) {
     this.#contenido.forEach((element) => {
      if (element.id === n) {
        return this.#contenido[this.#contenido.indexOf(element)];
      }
    });
  }
  //metodo: para traer todos los datos almacenados. Correcto
 async getAll() {
    this.#elementos = JSON.parse(await fs.promises.readFile(this.#ruta, 'utf-8'))
    return this.#elementos
  }
  //metodo:para eliminar por Id 
  async deleteById(n) {
    this.#contenido.forEach((element) => {
        if(element.id === n){
           let i = this.#contenido.indexOf(element)
           if (i === 0 ){
            this.#contenido.splice(i,1)
           }
           this.#contenido.splice(i,i)
        }
        
    });
    await fs.promises.writeFile(this.#ruta, JSON.stringify(this.#elementos))
  }
  //metodo: para eliminar todo los objetos. Correcto
 async deleteAll() {
    while(this.#contenido.length>=1){ 
    this.#contenido.pop()
    }

    await fs.promises.writeFile(this.#ruta, JSON.stringify([]))
  }
}
//Creación de un objeto contenedor. 
const contenedorGral = new Contenedor();
contenedorGral.save({ title: "El numero Uno", price: 100, thumbnail:"www.imagen1.com" });
contenedorGral.save({ title: "El numero Dos", price: 150, thumbnail:"www.imagen2.com" });
contenedorGral.save({ title: "El numero Tres", price: 200, thumbnail:"www.imagen3.com" });
contenedorGral.save({ title: "El numero Uno", price: 100, thumbnail:"www.imagen1.com" });
contenedorGral.save({ title: "El numero Uno", price: 100, thumbnail:"www.imagen1.com" });
contenedorGral.save({ title: "El numero cuatro", price: 100, thumbnail:"www.imagen1.com" });


//Llamado a los métodos. Aquí podemos probar todos las combinaciones posibles. 

// contenedorGral.getById(2)
// contenedorGral.deleteById(2)
// contenedorGral.deleteById(1)
// console.log(contenedorGral.getAll());
// contenedorGral.deleteById(1)
// contenedorGral.deleteAll()
// console.log(contenedorGral.getAll());





































// async save(object) {
  // if (this.#contenido.length===0){
  //     let objectPlusId = {...object, id:1}
  // this.#contenido.push(objectPlusId);
  // }
  // else{
  //     let e = 1
  //     this.#contenido.forEach((element)=>{
  //         e = element.id
  //         if(e<element.id){
  //             e = element.id 
  //         }
  //     })
  //     let idIdFinal = e +1
  //     let objectPlusId = {...object, id:idIdFinal}
  //     this.#contenido.push(objectPlusId);
  // }
//   this.#contenido.push(objectPlusId);
//   await fs.promises.writeFile(this.#ruta, JSON.stringify(this.#elementos))
// }