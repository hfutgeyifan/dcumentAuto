const program = require('commander');
const apidoc = require('../lib/index.js');

program.version('1.0.0', '-v, --version')
    .command('init <name>')
    .action(() => {
        console.log('start');
    });

if (apidoc.createDoc({}) === false) {
    console.error('[error] apidoc encountered an error during documentation generation!');
    process.exit(1);
}



