const fs = require('fs');
const path = require('path');
const template = require('art-template');

function judgeCallbackObject(callbackObject) {
    const callbackProperty = ['type', 'group', 'name', 'features', 'version', 'ignore', 'deprecated', 'precautions', 'returnExample', 'returnValues', 'example'];
    callbackProperty.map(item => {
        if (!Object.prototype.hasOwnProperty.call(callbackObject, item)) {
            throw new Error(JSON.stringify(callbackObject) + '不含属性' + item);
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

function parseCallbackObject(callbackObject) {
    console.log('callbackParseStart');
    let parseRes = {
        type: '',
        group: '',
        name: "",
        features: "",
        version: "",
        deprecated: '',
        precautions: '',
        returnExample: "",
        returnValues: '',
        example: '',
    };
    delete callbackObject.ignore
    Object.keys(callbackObject).map(key => {
        // console.log(fillTemplate(key, apiObject[key], 'api'));
        Object.defineProperty(parseRes, key, {
            value: fillTemplate(key, callbackObject[key], callbackObject.type)
        });
    })

    console.log('callbackParseEnd');
    return parseRes;
}

function parse(docObject) {
    judgeCallbackObject(docObject)
    return parseCallbackObject(docObject);
}

module.exports = {
    parse: parse,
};