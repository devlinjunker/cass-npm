var forge = require("node-forge");
var FormData = require("form-data");
var URL = require("url").Url;

var window = undefined;
var document = undefined;

var EcBase = require("./node.ec.base.js");
var Task = EcBase.Task;
var EcAsyncHelper = EcBase.EcAsyncHelper;
var EcRemote = EcBase.EcRemote;

var EcCrypto = require("./node.ec.crypto.js");
var EcPk = EcCrypto.EcPk;
var EcRsaOaep = EcCrypto.EcRsaOaep;
var EcAesCtr = EcCrypto.EcAesCtr;
var EcRsaOaepAsync = EcCrypto.EcRsaOaepAsync;
var EcAesCtrAsync = EcCrypto.EcAesCtrAsync;

var JSONLD = require("./node.org.json-ld.js");
var EcLinkedData = JSONLD.EcLinkedData;

var GeneralSchema = require("./node.org.cassproject.schema.general.js");
var General = GeneralSchema.General;
var EcRemoteLinkedData = GeneralSchema.EcRemoteLinkedData;

var EbacSchema = require("./node.org.cassproject.schema.general.js");
var EbacEncryptedSecret = EbacSchema.EbacEncryptedSecret;
var EbacEncryptedValue = EbacSchema.EbacEncryptedValue;

var EbacIdentity = require("./node.ebac.identity.js");
var EcIdentityManager = EbacIdentity.EcIdentityManager;

var stjs = require("./node.stjs.js");

var ecLoader = require("./node.loader.js");
var load = ecLoader.load;

eval(load.call(this, "../lib/ebac.repository.js") + "");

exports.EcEncryptedValue = EcEncryptedValue;
exports.GeneralFile = GeneralFile;
exports.EcRepository = EcRepository;
exports.EcFile = EcFile;
