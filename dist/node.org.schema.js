var EcBase = require("./node.ec.base.js");
var EcObject = EcBase.EcObject;
var EcRemote = EcBase.EcRemote;

var GeneralSchema = require("./node.org.cassproject.schema.general.js");
var EcRemoteLinkedData = GeneralSchema.EcRemoteLinkedData;

var stjs = require("./node.stjs.js");

var ecLoader = require("./node.loader.js");
var load = ecLoader.load;

eval(load.call(this, "../lib/org.schema.js")+"");

exports.Thing = Thing;
exports.Intangible = Intangible;
exports.CreativeWork = CreativeWork;
exports.AlignmentObject = AlignmentObject;
