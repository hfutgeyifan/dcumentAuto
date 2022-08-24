const parser = require('./parser.js');
const writer = require('./writer.js')
const path = require('path');
const mk = require('./core/utils/mk.js')
const fs = require('fs');
const yaml = require('js-yaml');
var walk = require('walk');

function createMd(docObject, path) {
    // 解析文档属性对象
    const parseRes = parser.parse(docObject);
    // 写入md文件
    writer.write(parseRes, path);
}

const walker = walk.walk(path.resolve(__dirname, '..') + "/yaml");

//遍历寻找文件，并读取
walker.on("file", function (root, fileStats, next) {
    console.log(fileStats);
    console.log(root);
    let mkRoot = root.replace(/yaml/, 'output')
    mk.mkdirSync(mkRoot, function () {
        console.log('创建成功')
    })

    let docObject = yaml.load(
        fs.readFileSync(root + '/' + fileStats.name, 'utf8')
    );
    createMd(docObject, root)
    next();
});

//遍历结束
walker.on("end", function () {
    console.log("all done");
});

// try {
//     var doc = yaml.load(
//         fs.readFileSync(path.resolve(__dirname, '..') + '/yaml/enum/MessagePriority.yaml', 'utf8')
//     );
//     uikitObject = doc;
//     console.log(doc, '111111');
// } catch (e) {
//     console.log(e);
// }

function createDoc(options) {
    try {
        console.log(options, 'options');
        // createMd(ApiObject);
        // createMd(ClassObject);
        // createMd(EnumObject);
        // createMd(CallbakcObject);
        // createMd(uikitObject);
    } catch (e) {
        console.log(e);
        return false
    }
}

module.exports = {
    createDoc: createDoc,
};