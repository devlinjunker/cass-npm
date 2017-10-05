var EcBase = require("./node.ec.base.js");
var EcObject = EcBase.EcObject;
var EcArray = EcBase.EcArray;

var stjs = require("./node.stjs.js");

var ecLoader = require("./node.loader.js");
var load = ecLoader.load;

eval(load.call(this, "../lib/org.json-ld.js")+"");

exports.EcLinkedData = EcLinkedData;
