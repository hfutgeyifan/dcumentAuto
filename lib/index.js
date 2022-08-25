const parser = require('./parser.js');
const writer = require('./writer.js')
const path = require('path');
const mk = require('./core/utils/mk.js')
const fs = require('fs');
const yaml = require('js-yaml');
var walk = require('walk');
const searchFile = require("./core/utils/searchFile.js");
const options = require('../lib/options.js');

function createMd(docObject, path) {
    // 解析文档属性对象
    const parseRes = parser.parse(docObject);
    // 写入md文件
    writer.write(parseRes, path);
}

function fillApiTemplate(filePath, templateArray, readRes) {
    console.log(templateArray);
    for (let i = 0; i < templateArray.length; i++) {
        /<(\w+)>/.exec(templateArray[i])
        let templateName = RegExp.$1
        searchFile((options.outPath || process.cwd()) + "/yaml", templateName, (err, file) => {
            if (err) {
                console.log("文件 未找到");
            } else {
                console.log("文件已找到:", file)
                let annotationObject = yaml.load(
                    fs.readFileSync(file.root + '/' + file.name, 'utf8')
                );
                const annotationParseRes = parser.parseAnnotation(annotationObject)
                const splicingRes = writer.splicing(annotationParseRes)
                console.log(splicingRes);
                console.log(templateArray[i]);
                readRes = readRes.replace(templateArray[i], splicingRes)
            }
        })
    }
    fs.writeFileSync(filePath, readRes)
}

function createMdLink(filePathRoot, filePath, linkArray, readRes) {
    for (let i = 0; i < linkArray.length; i++) {
        let linkName = /\w+/.exec(linkArray[i])[0]
        searchFile((options.outPath || process.cwd()) + "/output", linkName, (err, file) => {
            if (err) {
                // console.log("文件 未找到");
            } else {
                // console.log("文件已找到:", file)
                readRes = readRes.replace(linkArray[i], linkArray[i].replace('()', '(' + path.relative(filePathRoot, file.root + `/${file.name}`) + ')'))
            }
        })
    }
    fs.writeFileSync(filePath, readRes)
}

function walkCode() {
    const codeWalker = walk.walk((options.codePath || process.cwd()) + "/code");

    codeWalker.on("file", function (root, fileStats, next) {
        if (fileStats.name.endsWith('.dart')) {
            const readRes = fs.readFileSync(root + "/" + fileStats.name, 'utf-8')
            let apiTemplateArray = readRes.match(/\/\/\/ apiTemplate<\w+>/g);
            if (apiTemplateArray) {
                fillApiTemplate(root + "/" + fileStats.name, apiTemplateArray, readRes)
            }
            let classTemplateArray = readRes
            next();
        } else {
            next();
        }
    });

    //遍历结束
    codeWalker.on("end", function () {
        console.log("templateWalker all done");
    });
}

function walkMd() {
    // console.log(process.cwd() + "/output");
    const mdWalker = walk.walk((options.outPath || process.cwd()) + "/output");

    //遍历寻找md文件，并读取
    mdWalker.on("file", function (root, fileStats, next) {
        if (fileStats.name.endsWith('.md')) {
            const readRes = fs.readFileSync(root + "/" + fileStats.name, 'utf-8')
            let linkArray = readRes.match(/\[\w+\]\(\)/g);
            if (linkArray) {
                createMdLink(root, root + "/" + fileStats.name, linkArray, readRes)
            }
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

function walkYaml() {
    const yamlWalker = walk.walk((options.srcPath || process.cwd()) + "/yaml");
    //遍历寻找文件，并读取
    yamlWalker.on("file", function (root, fileStats, next) {
        if (fileStats.name.endsWith('.yaml')) {
            console.log(root);
            console.log(fileStats);
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
        walkMd()
    });
}

function createDoc() {
    try {
        //walkYaml()
        walkCode()
        console.log(options, 'options');
    } catch (e) {
        console.log(e);
        return false
    }
}

module.exports = {
    createDoc: createDoc,
};