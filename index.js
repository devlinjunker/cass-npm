
var antlr4 = require('antlr4/index');

exports.EcRemote = require("./dist/node.ec.base.js").EcRemote

exports.EcRepository = require("./dist/node.ebac.repository.js").EcRepository;

var EbacIdentity = require("./dist/node.ebac.identity.js");
exports.EcRemoteIdentityManager = EbacIdentity.EcRemoteIdentityManager;
exports.EcIdentityManager = EbacIdentity.EcIdentityManager;

var CASS = require("./dist/node.cass.competency.js");
exports.EcFramework = CASS.EcFramework;
exports.EcCompetency = CASS.EcCompetency;
exports.EcAlignment = CASS.EcAlignment;
exports.EcLevel = CASS.EcLevel
exports.EcAssertion = CASS.EcAssertion;

var EcCrypto = require("./dist/node.ec.crypto.js")
exports.EcPk = EcCrypto.EcPk;
exports.EcPpk = EcCrypto.EcPpk;


// eval(load.call(this,"lib/RollupListener.js")+"");
// eval(load.call(this,"lib/RollupLexer.js")+"");
// eval(load.call(this,"lib/RollupParser.js")+"");
// eval(load.call(this,"lib/cass.rollup.js")+"");

// global.EcRemote = EcRemote;
// global.EcRepository = EcRepository;
// global.EcRemoteIdentityManager = EcRemoteIdentityManager;
// global.EcIdentityManager = EcIdentityManager;
// global.EcFramework = EcFramework;
// global.EcCompetency = EcCompetency;
// global.EcAlignment = EcAlignment;
// global.EcLevel = EcLevel;
// global.EcPk = EcPk;
// global.EcPpk = EcPpk;
// global.EcAssertion = EcAssertion;
