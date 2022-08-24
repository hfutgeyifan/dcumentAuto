const fs = require('fs');
const template = require('art-template');

function fillTemplate(valueName, value, type) {
    return template.render(
        fs.readFileSync(__dirname + `/core/template/flutter/common/${valueName}.md`, 'utf-8'),
        Object.assign({ [valueName]: value }, { type: type })
    );
}

function parseDocObject(docObject) {
    let parseRes = {};
    delete docObject.ignore
    Object.keys(docObject).map(key => {
        parseRes[key] = fillTemplate(key, docObject[key], docObject.type)
    })
    return parseRes;
}

function parse(docObject) {
    return parseDocObject(docObject);
}

module.exports = {
    parse: parse,
};