const fs = require('fs');

function readTemplate(docObject) {
    let data = '';
    console.log('readStart');
    switch (docObject.type) {
        case 'api':
            if (docObject.group === 'UIKit') {
                data = fs.readFileSync(__dirname + '/core/template/flutter/uikit.md', 'utf-8');
                break;
            } else {
                data = fs.readFileSync(__dirname + '/core/template/flutter/api.md', 'utf-8');
                break;
            }
        case 'class':
            data = fs.readFileSync(__dirname + '/core/template/flutter/class.md', 'utf-8');
            break;
        case 'enum':
            data = fs.readFileSync(__dirname + '/core/template/flutter/enum.md', 'utf-8');
            break;
        case 'callback':
            data = fs.readFileSync(__dirname + '/core/template/flutter/callback.md', 'utf-8');
            break;
    }
    console.log('readEnd');
    return data;
}

module.exports = {
    readTemplate: readTemplate
}