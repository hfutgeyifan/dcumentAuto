const apiParser = require('./parseApi.js');
const classParser = require('./parseClass.js');
const enumParser = require('./parseEnums.js');
const callbackParser = require('./parseCallback.js');
const UIKitParser = require('./parseUIKit.js');

function parseObject(docObject) {
    let parseRes = null;
    switch (docObject.type) {
        case 'api':
            if (docObject.group === 'UIKit') {
                parseRes = UIKitParser.parse(docObject);
                break;
            } else {
                parseRes = apiParser.parse(docObject);
                break;
            }
        case 'class':
            parseRes = classParser.parse(docObject);
            break;
        case 'enum':
            parseRes = enumParser.parse(docObject);
            break;
        case 'callback':
            parseRes = callbackParser.parse(docObject);
            break;
    }
    return parseRes;
}

module.exports = {
    parseObject: parseObject
}