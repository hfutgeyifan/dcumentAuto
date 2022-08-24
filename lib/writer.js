const fs = require('fs');

function splicingDoc(parseRes) {
    let plicingRes = ""
    Object.keys(parseRes).map(key => {
        plicingRes += parseRes[key]
    })
    return plicingRes
}
function write(parseRes, path) {
    let plicingRes = splicingDoc(parseRes);
    try {
        fs.writeFileSync(path + parseRes.name.match(/\w+/g) + '.md', plicingRes);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    write: write
}