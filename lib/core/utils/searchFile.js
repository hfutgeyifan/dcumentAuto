const path = require("path");
const walk = require("walk");

/**
 * @param {遍历的根目录} start 
 * @param {查询的文件名} filename 
 * @param {回调函数} cb 
 */
module.exports = function (start, filename, cb) {
    let options = {
        listeners: {
            file: function (root, fileStats, next) {
                if (path.join(root, fileStats.name).indexOf(path.join(root, filename) + '.yaml') > -1) {
                    cb(null, { root: root, name: fileStats.name })
                } else {
                    next();
                }
            },
            errors: function (root, nodeStatsArray, next) {
                next();
            },
        },
    };
    walk.walkSync(start, options);
};
