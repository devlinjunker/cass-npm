var $ = require("jquery");
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
$.support.cors = true; // cross domain, Cross-origin resource sharing
$.ajaxSettings.xhr = function() {
  return new XMLHttpRequest();
};

var stjs = require("./node.stjs.js");

var ecLoader = require("./node.loader.js");
var load = ecLoader.load;

eval(load.call(this, "../lib/ec.base.js")+"");

exports.Triple = Triple;
exports.EcObject = EcObject;
exports.Callback5 = Callback5;
exports.EcArray = EcArray;
exports.EcLocalStorage = EcLocalStorage;
exports.Task = Task;
exports.Hypergraph = Hypergraph;
exports.EcDate = EcDate;
exports.EcRemote = EcRemote;
exports.EcAsyncHelper = EcAsyncHelper;
exports.Graph = Graph;
exports.EcDirectedGraph = EcDirectedGraph;