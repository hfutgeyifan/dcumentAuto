const fs = require('fs');
const path = require('path');
const template = require('art-template');

function judgeApiObject(apiObject) {
    const apiProperty = ['type', 'group', 'name', 'features', 'version', 'ignore', 'deprecated', 'precautions', 'params', 'returnExample', 'returnValues', 'example'];
    apiProperty.map(item => {
        if (!Object.prototype.hasOwnProperty.call(apiObject, item)) {
            throw new Error(JSON.stringify(apiObject) + '不含属性' + item);
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

function parseApiObject(apiObject) {
    console.log('apiParseStart');
    let parseRes = {
        type: '',
        group: '',
        name: "",
        features: "",
        version: "",
        deprecated: '',
        precautions: '',
        params: '',
        returnExample: "",
        returnValues: '',
        example: '',
    };
    delete apiObject.ignore
    Object.keys(apiObject).map(key => {
        // console.log(fillTemplate(key, apiObject[key], 'api'));
        Object.defineProperty(parseRes, key, {
            value: fillTemplate(key, apiObject[key], apiObject.type)
        });
    })
    console.log('apiParseEnd');
    // console.log(parseRes);
    return parseRes;
}

function parse(docObject) {
    judgeApiObject(docObject)
    return parseApiObject(docObject);
}

module.exports = {
    parse: parse,
};