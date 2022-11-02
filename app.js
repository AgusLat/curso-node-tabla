import { argv } from "./config/yargs.js";
import colors from 'colors';
import { crearTabla } from "./helpers/multiplicar.js";


console.clear()


                

//const base = 3; ANTES USABAMOS ESTO DE ARGUMENTO PARA PASARLE A crearTabla()
//Ahora la vamos a manejar desde la consola y el argv


crearTabla( argv.b, argv.l, argv.h ) 
.then( nombreArchivo => console.log(nombreArchivo.brightRed, 'creado'.brightGreen))
.catch( err => console.log(err))


//ESTE COMANDO MUESTRA LOS ARGUMENTOS QUE PASEMOS EN LA CONSOLA
//ej: si escribo en la terminal node app --base=5 

//console.log(process.argv) ACTUALIZADO CON YARGS

//ES UN [] Y PODEMOS TOMARLO COMO UN OBJETO Y SELECCIONAR SUS VALORES MEDIANTE INDICES
//process.argv va a ser un [] donde su 3er argumento va a ser '--base=5'



console.log(argv) //CON YARGS TRANSFORMAMOS EL argv EN UN OBJETO QUE ENTIENDE LAS PROPIEDADES Y SUS VALORES
                  //Si ejecutamos: " node app --base 7 " el objeto argv creado por yargs tendria una
                  //propiedad " base: 7 ", y ahora podemos acceder a ella con argv.base  


//console.log(process.argv[2])         //muestra el valor en el 3er indice
//const [, , tercerArg] = process.argv // lo busco por desestructuracion
//console.log(tercerArg.split('='))    //SPLIT PARA AISLAR EL NUMERO, queda en el indice 1 del array.
