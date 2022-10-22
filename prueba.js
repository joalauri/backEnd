const fs = require('fs')

async function main(){
   // const contenido = fs.readFileSync('./prueba.js', 'utf-8')
const objeto = [{id:1, name:'yo'},{id:2, name:'tu'},{id:3, name:'el'},{id:4, name:'nosotros'}]
const objetoJSON = JSON.stringify(objeto)
fs.writeFileSync('./archivoJson.txt',objetoJSON)
let respuestaSinParse = ""
//A partir de acá ASYNC
try {
    const promesaJson = await fs.promises.readFile('./archivoJson.txt', 'utf-8')
    console.log(promesaJson)
    respuestaSinParse = promesaJson
} catch (error) {
    console.log("error")
}
 
//rmSync('.prueba.txt') esta ruta se calcula a partir de la ruta donde se ejecuta node, no donde está el código.!!!

}
main()