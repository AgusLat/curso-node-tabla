//const fs = require('fs')

//el metodo writeFile se escribe de otra manera con CMJS: fs.writeFile()

//Se puede realizar la importacion utilizando los ES Modules escribiendo:

// import { writeFile } from 'node:fs'

// para que los ESModules funcionen hay que configurar el package.json escribiendo "type": "module", y al usarlo asi no tenemos que escribir el fs delante del metodo
import colors from 'colors'
import { writeFileSync } from "node:fs";



//ESTA ES LA FUNCION QUE CREA EL ARCHIVO

export const crearTabla = async (base = 5, listar, hasta) => {
 

  try {

    let salida  = "";
    let consola = "";

    console.clear();
    
    for (let i = 1; i <= hasta; i++) {
        salida += `${base} x ${i} = ${base * i}\n`;
        consola += `${base} x ${i} = ${base * i}\n`.brightGreen;
    }
    
    if(listar){
        console.log("================".brightCyan);
        console.log("  Tabla del:".cyan, base);
        console.log("================".brightCyan);
        console.log(consola)
    }

    //ACA ESTA EL METODO IMPORTADO
    writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;

  } catch (error) {
    throw error
  }
};
