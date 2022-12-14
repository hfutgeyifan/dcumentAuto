const fs = require('fs');
const template = require('art-template');

function fillMdTemplate(valueName, value, type, language) {
    return template.render(
        fs.readFileSync(__dirname + `/core/template/flutter/md/${valueName}.md`, 'utf-8'),
        Object.assign({ [valueName]: value }, { type: type }, { language: language })
    );
}

function parseDocObject(docObject, language) {
    let parseRes = {};
    delete docObject.ignore
    Object.keys(docObject).map(key => {
        parseRes[key] = fillMdTemplate(key, docObject[key], docObject.type, language)
    })
    return parseRes;
}

function parse(docObject, language) {
    return parseDocObject(docObject, language);
}

function fillCodeTemplate(valueName, value, type, language) {
    //console.log(Object.assign({ [valueName]: value }, { type: type }, { language: language }));
    return template.render(
        fs.readFileSync(__dirname + `/core/template/flutter/code/${valueName}.md`, 'utf-8'),
        Object.assign({ [valueName]: value }, { type: type }, { language: language })
    );
}

function parseAnnotationObject(annotationObject, language) {
    let parseRes = {};
    delete annotationObject.ignore
    Object.keys(annotationObject).map(key => {
        parseRes[key] = fillCodeTemplate(key, annotationObject[key], annotationObject.type, language)
    })
    return parseRes;
}

function parseAnnotation(annotationObject, language) {
    return parseAnnotationObject(annotationObject, language)
}

module.exports = {
    parse: parse,
    parseAnnotation: parseAnnotation,
};