const { argv } = require('./config/yargs');
const { colors } = require('./config/colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(`Listado creado: ${ archivo}`.custom))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:` + `${ archivo}`.info))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido'.error);
}