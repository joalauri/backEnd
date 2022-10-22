
const fs = require('fs')

//Creacion de la clase contenedor: 
class Contenedor {
  #contenido;
  #ruta
  #getingID
  //Declarando método constructor
  constructor(ruta) {
    this.#contenido = [];
    this.#ruta = ruta
    this.#getingID = null
  }
  //metodo: para guardar objetos. Correcto.
  async save(object) {
    this.#contenido.push(object);
    await fs.promises.writeFile(this.#ruta, JSON.stringify(this.#contenido))
  }
  //metodo: para encontrar por numero de id. Correcto
  async getById(n) {
    this.#contenido.forEach((element) => {
      if (element.id === n) {
      this.#getingID = element
      } 
    })
    return this.#getingID
    //segunda opción no se cuál es mas conveniente.
    // const idFind = await this.#contenido.find(o => o.id === n)
    // return idFind
  }
  //metodo: para traer todos los datos almacenados. Correcto
 async getAll() {
  this.#contenido = JSON.parse(await fs.promises.readFile(this.#ruta, 'utf-8'))
    return this.#contenido
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
    await fs.promises.writeFile(this.#ruta, JSON.stringify(this.#contenido))
  }
  //metodo: para eliminar todo los objetos. Correcto
 async deleteAll() {
    while(this.#contenido.length>=1){ 
    this.#contenido.pop()
    }
    await fs.promises.writeFile(this.#ruta, JSON.stringify(this.#contenido))
  }
}
async function test(){
  const rutaArchivo = './elementos.txt'
  await fs.promises.writeFile(rutaArchivo,'[]')
  const nuevoContenedor = new Contenedor(rutaArchivo)
  await nuevoContenedor.save({
    id:1, title: "El numero Uno", price: 100, thumbnail:"www.imagen1.com" 
  })
  await nuevoContenedor.save({
   id: 2,  title: "El numero Dos", price: 150, thumbnail:"www.imagen2.com" 
  })
  await nuevoContenedor.save({
    id: 3, title: "El numero Tres", price: 200, thumbnail:"www.imagen3.com"
  })
  await nuevoContenedor.save({
    id: 4, title: "El numero Cuatro", price: 200, thumbnail:"www.imagen4.com"
  })
          //LUGAR PARA PROBAR LOS MÉTODOS
  // console.log(await nuevoContenedor.getAll())//funcionaOK
  console.log(await nuevoContenedor.getById(5))//FuncionaOk
  // console.log(await nuevoContenedor.deleteById(2))//funcionaOK
  //  console.log(await nuevoContenedor.getAll())//funcionaOK
  // console.log(await nuevoContenedor.deleteAll())//funcionaOK

}
test()








// contenedorGral.save;
// contenedorGral.save({ });
// contenedorGral.save({ });
// contenedorGral.save({ title: "El numero Uno", price: 100, thumbnail:"www.imagen1.com" });
// contenedorGral.save({ title: "El numero Uno", price: 100, thumbnail:"www.imagen1.com" });

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