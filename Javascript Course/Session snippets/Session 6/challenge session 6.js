
let inventario = []

function agregarItem(nombre, cantidad, precio){
    const item = {nombre, cantidad, precio};    
    inventario.push(item)    
}

//#region AddItems
agregarItem("Manzana", 10, 0.5);
agregarItem("Plátano", 5, 0.3);
agregarItem("Naranja", 8, 0.4);
agregarItem("Sandia", 6, 0.8);
//#endregion


function verificarInventario(){
    let header = "Inventario: \n    Fruta      Cantidad        Precio \n"
    for (const fruta of inventario) {
        header = header + '\t' + fruta.nombre + '\t\t' + fruta.cantidad +  '\t\t\t\t$'  + fruta.precio + '\n'                     
    }
    return console.log(header)
}

function eliminarItem(frutaNombre){  
    let contador = 0
    for (const fruta in inventario) {       
        if(inventario[fruta].nombre == frutaNombre){
            inventario.splice(fruta,1)   
            console.log(inventario)         
            contador += 1
        }         
     }
     
    // for (const fruta of inventario) {    
    //     if(frutaNombre === fruta.nombre)
    //     {              
    //       inventario.splice(inventario.indexOf(fruta),1)             
    //       console.log(inventario)
    //       contador++    
    //     }

        if(contador == 0){
            console.log("NO ITEM FOUND.")
        }        

         
} 

agregarItem("Durazno", 3, .4);
eliminarItem("")
verificarInventario()