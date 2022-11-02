//ESTA SECCION AYUDA A CREAR UNA "Command Line Interface (CLI)" USANDO YARGS PARA CONTROLAR LOS ARGUMENTOS
//Y COMO CONFIGURAR NUESTROS PROPIOS COMANDOS


import yargs from 'yargs'
import { hideBin } from 'yargs/helpers' //IMPORTACION DE YARGS


export const argv = yargs(hideBin(process.argv))
                .options({
                    'b': {            
                        alias: 'base',
                        demandOption: true,
                        type: 'number',
                        describe: 'Es la base de la tabla de multiplicar'
                    },
                    'l': {
                        alias: 'listar',
                        demandOption: false,
                        default: false,
                        type: 'boolean',
                        describe: 'Muestra la tabla en consola'
                    },
                    'h': {
                        alias: 'hasta',
                        demandOption: false,
                        default: 10,
                        type: 'number',
                        describe: 'Hasta que numero multiplicamos la base'
                    }
                })
                .check((argv, options) => { 
                    if ( isNaN(argv.b)) {
                      throw new Error("La base debe ser un numero")
                    } else {
                      return true // tell Yargs that the arguments passed the check
                    }
                  })
                .argv

                //el .option() crea un comando que nosotros podemos pedirle al usuario en nuestro CLI, dentro de el configuramos sus caracteristicas como el alias, si es requerido o no, un valor default etc..