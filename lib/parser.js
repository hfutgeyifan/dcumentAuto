const fs = require('fs');
const template = require('art-template');

function fillMdTemplate(valueName, value, type) {
    return template.render(
        fs.readFileSync(__dirname + `/core/template/flutter/md/${valueName}.md`, 'utf-8'),
        Object.assign({ [valueName]: value }, { type: type })
    );
}

function parseDocObject(docObject) {
    let parseRes = {};
    delete docObject.ignore
    Object.keys(docObject).map(key => {
        parseRes[key] = fillMdTemplate(key, docObject[key], docObject.type)
    })
    return parseRes;
}

function parse(docObject) {
    return parseDocObject(docObject);
}

function fillCodeTemplate(valueName, value, type) {
    return template.render(
        fs.readFileSync(__dirname + `/core/template/flutter/code/${valueName}.md`, 'utf-8'),
        Object.assign({ [valueName]: value }, { type: type })
    );
}

function parseAnnotationObject(annotationObject) {
    let parseRes = {};
    delete annotationObject.ignore
    Object.keys(annotationObject).map(key => {
        parseRes[key] = fillCodeTemplate(key, annotationObject[key], annotationObject.type)
    })
    return parseRes;
}

function parseAnnotation(annotationObject) {
    return parseAnnotationObject(annotationObject)
}

module.exports = {
    parse: parse,
    parseAnnotation: parseAnnotation,
};