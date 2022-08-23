const parser = require('./core/parsers/index.js');
const reader = require('./reader.js')
const writer = require('./writer.js')
const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');
const template = require('art-template');

console.log(template.render(`{{data}}`, { data: 1 }));

let uikitObject = {}

try {
    var doc = yaml.load(
        fs.readFileSync(path.resolve(__dirname, '..') + '/yaml/uikit/TIMUIKitConversation.yaml', 'utf8')
    );
    uikitObject = doc;
    console.log(doc);
} catch (e) {
    console.log(e);
}


function createMd(docObject) {
    //解析文档属性对象
    const parseRes = parser.parseObject(docObject);
    //读取对应文档属性的md模板
    const templateRes = reader.readTemplate(docObject);
    //写入md文件
    writer.write(parseRes, templateRes);
}

function createDoc(options) {
    try {
        console.log(options, 'options');
        // createMd(ApiObject);
        // createMd(ClassObject);
        // createMd(EnumObject);
        // createMd(CallbakcObject);
        createMd(uikitObject);
    } catch (e) {
        console.log(e);
        return false
    }
}

module.exports = {
    createDoc: createDoc,
};