const argv = require("yargs")
                .options("b",{
                    alias:"base",
                    type:"number",
                    demandOption:true,
                    describe:"Es la base de la tabla de multiplicar"
                })
                .options("l",{
                    alias:"listar",
                    type:"boolean",
                    demandOption:true,
                    default:false,
                    describe:"muestra la tabla en consola"
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)){
                        throw "LA base tiene que ser un numero"
                    }
                    return true;
                })
                .argv;
module.exports =argv