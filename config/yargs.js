const opts = {
    base: {
        demand: true,
        alias: 'b' //Opcional
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea Archivo con tabla de Multiplicar', opts)
    .help()
    .argv;

module.exports = {
    argv
}