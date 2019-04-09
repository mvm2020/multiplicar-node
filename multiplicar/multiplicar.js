const fs = require('fs');
const { colors } = require('../config/colors');


let listarTabla = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`Base: ${base} y Límite: ${limite} AMBOS debebn ser numéricos`);
            return;
        }

        console.log(`==== TABLA DEL ${base} ==========`.silly);

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base * i} `.warn);
        }

        resolve(`Base ${base} - Limite ${limite}`);

    });

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`El valor ${base} y el valor ${limite} deben ser numéricos`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i} \n`);
        }

        fs.writeFile(`./tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}.txt`);
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}