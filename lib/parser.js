const fs = require('fs');
const template = require('art-template');



function fillTemplate(valueName, value, type) {
    console.log(type);

    return template.render(
        fs.readFileSync(__dirname + `/core/template/flutter/common/${valueName}.md`, 'utf-8'),
        Object.assign({ [valueName]: value }, { type: type })
    );
}

function parseDocObject(docObject) {
    console.log('apiParseStart');
    let parseRes = {};
    delete docObject.ignore
    Object.keys(docObject).map(key => {
        console.log(fillTemplate(key, docObject[key], docObject.type));
        parseRes[key] = fillTemplate(key, docObject[key], docObject.type)
    })
    console.log('apiParseEnd');
    console.log(parseRes);
    return parseRes;
}

function parse(docObject) {
    return parseDocObject(docObject);
}

module.exports = {
    parse: parse,
};