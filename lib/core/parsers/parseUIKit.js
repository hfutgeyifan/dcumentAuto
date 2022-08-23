const fs = require('fs');
const path = require('path');
const template = require('art-template');

function judgeUIKitObject(UIKitObject) {
    const apiProperty = ['type', 'group', 'name', 'features', 'version', 'ignore', 'deprecated', 'precautions', 'params', 'example'];
    apiProperty.map(item => {
        if (!Object.prototype.hasOwnProperty.call(UIKitObject, item)) {
            throw new Error(JSON.stringify(UIKitObject) + '不含属性' + item);
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

function parseUIKitObject(UIKitObject) {
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
        example: '',
    };

    delete UIKitObject.ignore
    Object.keys(UIKitObject).map(key => {
        // console.log(fillTemplate(key, apiObject[key], 'api'));
        Object.defineProperty(parseRes, key, {
            value: fillTemplate(key, UIKitObject[key], UIKitObject.type)
        });
    })

    console.log('apiParseEnd');
    return parseRes;
}

function parse(docObject) {
    judgeUIKitObject(docObject)
    return parseUIKitObject(docObject);
}

module.exports = {
    parse: parse,
};