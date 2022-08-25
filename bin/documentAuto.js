const doc = require('../lib/index.js');
const option = require('../lib/options.js');

if (doc.createDoc(option) === false) {
    console.error('[error] apidoc encountered an error during documentation generation!');
    process.exit(1);
}



