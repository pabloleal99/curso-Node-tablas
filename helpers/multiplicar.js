const fs = require("fs");
/* const crearArchivo = (base =6)=>{
    return new Promise((resolve, reject)=>
    {
        let salida = '';

        for(let i =1; i<=10; i++){

            salida += `${base} x ${i} = ${base*i}\n`;
        }

        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`,salida);

        resolve(`tabla del ${base} texto creado`);
    })

    
} */
const crearArchivo = async(base =4, listar=false)=>{
   try
    {
        let salida = '';

        for(let i =1; i<=10; i++){
    
            salida += `${base} x ${i} = ${base*i}\n`;
        }
        if(listar){
            console.log(salida);
        }
    
        
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
    
        return `tabla del ${base} texto creado`;
    }catch(error){
        throw error;
    }
}

module.exports={
    crearArchivo
}