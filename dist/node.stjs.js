var ecLoader = require("./node.loader.js");
var load = ecLoader.load;

eval(load.call(this, "../lib/stjs.js")+"");

module.exports = stjs;
