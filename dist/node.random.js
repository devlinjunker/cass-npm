var ecLoader = require("./node.loader.js");
var load = ecLoader.load;

var window = null;
var document = {};

eval(load.call(this, "../lib/random.js")+"");

exports.generateUUID = generateUUID;
