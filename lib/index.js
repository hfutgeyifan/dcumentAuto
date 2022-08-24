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

function createMdLink(linkArray, filePath) {

}

function walkYaml() {
    const yamlWalker = walk.walk(process.cwd() + "/yaml");

    //遍历寻找文件，并读取
    yamlWalker.on("file", function (root, fileStats, next) {
        if (fileStats.name.endsWith('.yaml')) {
            let mkRoot = root.replace(/yaml/, 'output') + '/'
            mk.mkdirSync(mkRoot, function () {
                let docObject = yaml.load(
                    fs.readFileSync(root + '/' + fileStats.name, 'utf8')
                );
                createMd(docObject, mkRoot)
                next();
            })
        } else {
            next();
        }
    });

    //遍历结束
    yamlWalker.on("end", function () {
        console.log("yaml all done");
    });
}

function walkMd() {
    const mdWalker = walk.walk(process.cwd() + "/output");

    //遍历寻找md文件，并读取
    mdWalker.on("file", function (root, fileStats, next) {
        if (fileStats.name.endsWith('.md')) {
            const readRes = fs.readFileSync(root + "/" + fileStats.name, 'utf-8')
            let link = readRes.match(/\[\w+\]\(\)/g);
            console.log(link);
            next();
        } else {
            next();
        }
    });

    //遍历结束
    mdWalker.on("end", function () {
        console.log("walkMd all done");
    });
}

function createDoc(options) {
    try {
        // walkYaml()
        walkMd()
        console.log(options, 'options');
    } catch (e) {
        console.log(e);
        return false
    }
}

module.exports = {
    createDoc: createDoc,
};