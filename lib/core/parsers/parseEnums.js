const fs = require('fs');
const path = require('path');
const template = require('art-template');

function judgeEnumObject(enumObject) {
    const apiProperty = ['type', 'group', 'name', 'features', 'version', 'ignore', 'deprecated', 'precautions', 'attributes'];
    apiProperty.map(item => {
        if (!Object.prototype.hasOwnProperty.call(enumObject, item)) {
            throw new Error(JSON.stringify(enumObject) + '不含属性' + item);
        }
    })
    console.log('judgeSuccess');
}

function fillTemplate(valueName, value, type) {
    console.log(Object.assign({ [valueName]: value }, { type: type }));
    return template.render(
        fs.readFileSync(path.resolve(__dirname, '..') + `/template/flutter/common/${valueName}.md`, 'utf-8'),
        Object.assign({ [valueName]: value }, { type: type })
    );
}

function parseEnumObject(enumObject) {
    console.log('enumParseStart');
    let parseRes = {
        type: '',
        group: '',
        name: "",
        features: "",
        version: "",
        deprecated: '',
        precautions: '',
        attributes: ''
    };
    delete enumObject.ignore
    Object.keys(enumObject).map(key => {
        // console.log(fillTemplate(key, apiObject[key], 'api'));
        Object.defineProperty(parseRes, key, {
            value: fillTemplate(key, enumObject[key], enumObject.type)
        });
    })
    console.log('enumParseStart');
    return parseRes;
}

function parse(docObject) {
    judgeEnumObject(docObject)
    return parseEnumObject(docObject);
}

module.exports = {
    parse: parse,
};