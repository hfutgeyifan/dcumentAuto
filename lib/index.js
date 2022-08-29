const parser = require('./parser.js');
const writer = require('./writer.js')
const path = require('path');
const mk = require('./core/utils/mk.js')
const fs = require('fs');
const yaml = require('js-yaml');
var walk = require('walk');
const searchFile = require("./core/utils/searchFile.js");
const options = require('../lib/options.js');

const mdLanguages = options.mdLanguages || ['en', 'zh']
const codeLanguages = options.codeLanguages || ['en', 'zh']

function createMd(docObject, path, language) {
    // 解析文档属性对象
    const parseRes = parser.parse(docObject, language);
    // 写入md文件
    writer.write(parseRes, path);
}

function fillTemplate(filePath, templateArray, readRes) {
    if (templateArray)
        for (let i = 0; i < templateArray.length; i++) {
            /<(\w+)>/.exec(templateArray[i])
            let templateName = RegExp.$1
            const annotationRes = {}
            let splicingRes = ''


            searchFile((options.outPath || process.cwd()) + "/yaml", templateName, (err, file) => {
                if (err) {
                    //console.log("文件 未找到");
                } else {
                    //console.log("文件已找到:", file)
                    let annotationObject = yaml.load(
                        fs.readFileSync(file.root + '/' + file.name, 'utf8')
                    );
                    if (annotationObject.attributes) {
                        for (let j = 0; j < annotationObject.attributes.length; j++) {
                            //console.log(templateName);
                            let attributeSplicingRes = ''
                            for (let k = 0; k < codeLanguages.length; k++) {
                                searchFile((options.outPath || process.cwd()) + "/yaml" + `/${codeLanguages[k]}`, templateName + '.yaml', (err, file) => {
                                    let languageAnnotationObject = yaml.load(
                                        fs.readFileSync(file.root + '/' + file.name, 'utf8')
                                    );
                                    let attributeObject = { attribute: languageAnnotationObject.attributes[j], type: languageAnnotationObject.type }
                                    const attributeAnnotationParseRes = parser.parseAnnotation(attributeObject, codeLanguages[k])
                                    delete attributeAnnotationParseRes.type

                                    attributeSplicingRes += (k == 0 ? "" : '\n  ///\n  ') + `/// ${codeLanguages[k]}:` + writer.splicing(attributeAnnotationParseRes)
                                })
                            }
                            readRes = readRes.replace(`/// attributeTemplate<${templateName},${annotationObject.attributes[j].name}>`, attributeSplicingRes)
                        }
                    }
                }
            })
            for (let j = 0; j < codeLanguages.length; j++) {
                searchFile((options.outPath || process.cwd()) + "/yaml" + `/${codeLanguages[j]}`, templateName, (err, file) => {
                    if (err) {
                        //console.log("文件 未找到");
                    } else {
                        //console.log("文件已找到:", file)
                        let annotationObject = yaml.load(
                            fs.readFileSync(file.root + '/' + file.name, 'utf8')
                        );
                        const annotationParseRes = parser.parseAnnotation(annotationObject, codeLanguages[j])
                        Object.keys(annotationParseRes).map(key => {
                            annotationRes[key] = '' + annotationParseRes[key]
                        })
                    }
                })
                splicingRes += (j == 0 ? "" : '\n///\n') + `/// ${codeLanguages[j]}:\n` + writer.splicing(annotationRes)
            }
            readRes = readRes.replace(templateArray[i], splicingRes)
        }
    //return
    fs.writeFileSync(filePath, readRes)
}

function createMdLink(filePathRoot, filePath, linkArray, readRes, language) {
    console.log((options.outPath || process.cwd()) + "/output" + `/${language}`)
    for (let i = 0; i < linkArray.length; i++) {
        let linkName = /\w+/.exec(linkArray[i])[0]
        searchFile((options.outPath || process.cwd()) + "/output" + `/${language}`, linkName, (err, file) => {
            if (err) {
                console.log("文件 未找到");
            } else {
                console.log("文件已找到:", file)
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
            let templateArray = readRes.match(/\/\/\/ Template<\w+>/g);
            if (templateArray) {
                fillTemplate(root + "/" + fileStats.name, templateArray, readRes)
            }
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
    for (let i = 0; i < mdLanguages.length; i++) {
        const mdWalker = walk.walk((options.outPath || process.cwd()) + "/output" + `/${mdLanguages[i]}`);

        //遍历寻找md文件，并读取
        mdWalker.on("file", function (root, fileStats, next) {
            if (fileStats.name.endsWith('.md')) {
                const readRes = fs.readFileSync(root + "/" + fileStats.name, 'utf-8')
                let linkArray = readRes.match(/\[\w+\]\(\)/g);
                if (linkArray) {
                    createMdLink(root, root + "/" + fileStats.name, linkArray, readRes, mdLanguages[i])
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
}

function walkYaml() {
    for (let i = 0; i < mdLanguages.length; i++) {
        const yamlWalker = walk.walk((options.srcPath || process.cwd()) + "/yaml" + `/${mdLanguages[i]}`);
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
                    createMd(docObject, mkRoot, mdLanguages[i])
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
}

function createDoc() {
    try {
        walkYaml()
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