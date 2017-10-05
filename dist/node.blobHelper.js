var forge = require("node-forge");
var ecLoader = require("./node.loader.js");
var load = ecLoader.load;

eval(load.call(this, "../lib/blobHelper.js")+"");

exports.base64ToBlob = base64ToBlob;
exports.stringToFile = stringToFile;
exports.ecKeys = ecKeys;
exports.ab2str = ab2str;
exports.str2ab = str2ab;
exports.ecLog = ecLog;
