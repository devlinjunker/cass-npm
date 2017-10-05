#! /usr/local/bin/node

var readline = require("readline");
var fs = require("fs");
var os = require("os");

var CASS = require("../index.js");
var EcRepository = CASS.EcRepository;

var io = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var repo = new EcRepository();

if(!fs.existsSync(os.homedir() + "/.cass/server")){
  if(!fs.existsSync(os.homedir() + "/.cass")) fs.mkdirSync(os.homedir()+"/.cass");
  io.question("[No Server Set]\n Please enter the server you would like to connect to: ", function(resp){
    repo.selectedServer = resp;

    repo.autoDetectRepository();
    if(repo.autoDetectFound){
      fs.writeFileSync(os.homedir()+"/.cass/selectedServer",repo.selectedServer);
      io.close();
    }else{
      io.write("Error Finding CASS Server on that Domain: "+resp+"\n")

      io.close();
    }
  });
}
