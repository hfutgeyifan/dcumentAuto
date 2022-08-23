const fs = require('fs');
const path = require('path');
const template = require('art-template');

function judgeClassObject(classObject) {
    const apiProperty = ['type', 'group', 'name', 'features', 'version', 'ignore', 'deprecated', 'precautions', 'attributes'];
    apiProperty.map(item => {
        if (!Object.prototype.hasOwnProperty.call(classObject, item)) {
            throw new Error(JSON.stringify(classObject) + '不含属性' + item);
        }
    })
    console.log('judgeSuccess');
}

function fillTemplate(valueName, value, type) {
    return template.render(
        fs.readFileSync(path.resolve(__dirname, '..') + `/template/flutter/common/${valueName}.md`, 'utf-8'),
        Object.assign({ [valueName]: value }, { type: type })
    );
}

function parseClassObject(classObject) {
    console.log('classParseStart');
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
    delete classObject.ignore
    Object.keys(classObject).map(key => {
        // console.log(fillTemplate(key, apiObject[key], 'api'));
        Object.defineProperty(parseRes, key, {
            value: fillTemplate(key, classObject[key], classObject.type)
        });
    })
    console.log('classParseStart');
    return parseRes;
}

function parse(docObject) {
    judgeClassObject(docObject)
    return parseClassObject(docObject);
}

module.exports = {
    parse: parse,
};