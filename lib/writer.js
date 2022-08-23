const fs = require('fs');
const path = require('path');

function replaceString(parseRes, templateRes) {
    Object.keys(parseRes).map(item => {
        templateRes = templateRes.replaceAll(`/${item}/`, parseRes[item]);
    })
    return templateRes;
}

function write(parseRes, templateRes) {
    const replaceRes = replaceString(parseRes, templateRes);
    try {
        fs.writeFileSync(path.resolve(__dirname, '..') + '/output/' + parseRes.name + '.md', replaceRes);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    write: write
}