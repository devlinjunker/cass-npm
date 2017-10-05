var forge = require("node-forge");
var FormData = require('form-data');

var EcBase = require("./node.ec.base.js");
var EcAsyncHelper = EcBase.EcAsyncHelper;
var EcRemote = EcBase.EcRemote;

var EcCrypto = require("./node.ec.crypto.js");
var EcPk = EcCrypto.EcPk;
var EcRsaOaep = EcCrypto.EcRsaOaep;
var EcPpk = EcCrypto.EcPpk;
var EcAesCtr = EcCrypto.EcAesCtr;
var EcRsaOaepAsync = EcCrypto.EcRsaOaepAsync;

var GeneralSchema = require("./node.org.cassproject.schema.general.js");
var EcRemoteLinkedData = GeneralSchema.EcRemoteLinkedData;

var EbacSchema = require("./node.org.cassproject.schema.general.js");
var EbacCredential = EbacSchema.EbacCredential;
var EbacCredentialRequest = EbacSchema.EbacCredentialRequest;
var EbacCredentialCommit = EbacSchema.EbacCredentialCommit;
var EbacContact = EbacSchema.EbacContact;
var EbacSignature = EbacSchema.EbacSignature;
var EbacContactGrant = EbacSchema.EbacContactGrant;

var stjs = require("./node.stjs.js");

var ecLoader = require("./node.loader.js");
var load = ecLoader.load;

var localStorage = {};

eval(load.call(this, "../lib/ebac.identity.js")+"");

exports.EcContact = EcContact;
exports.EcIdentity = EcIdentity;
exports.EcIdentityManager = EcIdentityManager;
exports.OAuth2FileBasedRemoteIdentityManager = OAuth2FileBasedRemoteIdentityManager;
exports.EcContactGrant = EcContactGrant;
exports.EcRemoteIdentityManager = EcRemoteIdentityManager;
