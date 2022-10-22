const  fs  = require("fs")

class ContenedorArchivos{
    #elementos
    #ruta

constructor(ruta){
    this.#ruta = ruta
    this.#elementos = []
}
async guardar(elemento){
    this.#elementos.push(elemento)
    await fs.promises.writeFile(this.#ruta, JSON.stringify(this.#elementos))
}
async recuperarTodo(){
    this.#elementos = JSON.parse(await fs.promises.readFile(this.#ruta, 'utf-8'))
    return this.#elementos
}

}

async function test(){
    const rutaArchivo = './elementos.txt'
    await fs.promises.writeFile(rutaArchivo,'[]')
    const nuevoContenedor = new ContenedorArchivos(rutaArchivo)
    await nuevoContenedor.guardar({
        id:1,
        nombre:"bla"
    })
    await nuevoContenedor.guardar({
        id:2,
        nombre:"blabla"
    })
    await nuevoContenedor.guardar({
        id:3,
        nombre:"blablabla"
    })
    console.log(await nuevoContenedor.recuperarTodo())
    let objeto = [{id:3, nombre:"blablabla"},{id:3, nombre:"blablabla"}]
    console.log(objeto[0].id)
}
test()