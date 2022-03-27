const fs = require('fs')

class Contenedor {
    constructor(archivo){
        this.archivo = archivo

    }
  
                async save (obj,price,pick){

                        const objeto = {
                            Nombre: obj,
                            precio:price,
                            id: null,
                            foto: pick,
                        }
                    
                            try {
                            const productos = await fs.promises.readFile('productos.json', 'utf-8')
                            const productosObj = JSON.parse(productos)
                            objeto.id = productosObj.length + 1
                            productosObj.push(objeto)
                            //    objeto.id
                                
                            console.log(productosObj)

                                await fs.promises.writeFile('productos.json', JSON.stringify(productosObj))
                            } catch (error) {
                                const productos = []
                                objeto.id = 1;
                                console.log(error)
                                productos.push(objeto);
                                await fs.promises.writeFile('productos.json', JSON.stringify(productos))
                            }
                        }



                 async getById(numero){
                    try {
                        const productos = await fs.promises.readFile('productos.json', 'utf-8')
                        const productosObj = JSON.parse(productos)

                        // console.log(productosObj)

                       const productoFiltrado = productosObj.filter(productos => productos.id === numero )

                       console.log(productoFiltrado)
                        
                    } catch (error) {
                        console.log(error)
                    }

                 }


                 async getAll(){
                    const productos = await fs.promises.readFile('productos.json', 'utf-8')
                    const productosObj = JSON.parse(productos)

                    console.log(productosObj)


                 }


                 async deleteById(numero){
                    try {
                        const productos = await fs.promises.readFile('productos.json', 'utf-8')
                        const productosObj = JSON.parse(productos)

                        // console.log(productosObj)

                       const productoFiltrado = productosObj.filter(productos => productos.id !== numero )

                       console.log(productoFiltrado)

                       await fs.promises.writeFile('productos.json', JSON.stringify(productoFiltrado))



                        
                    } catch (error) {
                        console.log(error)
                    }

                 }

                 async deleteAll(){
                    const productos = []

                    await fs.promises.writeFile('productos.json', JSON.stringify(productos))


                 }


}


const contenedor1 = new Contenedor('productos.json')

contenedor1.save('remera', 400, 'foto remera')
contenedor1.save('gorro', 100, 'foto gorro')
contenedor1.getById(1)
contenedor1.getAll()
contenedor1.deleteById(1)
contenedor1.deleteAll()


