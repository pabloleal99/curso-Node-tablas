//const { argv } = require("process");
const {crearArchivo} = require("./helpers/multiplicar");
const argv= require("./config/yargs");

//console.log(process.argv);
console.log(argv);
//console.log("base:yargs", argv.b);


//const base =2;

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo,"creado"))
    .catch(err => console.log(err));   