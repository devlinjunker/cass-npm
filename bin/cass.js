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

var serverConfigFile = os.homedir()+"/.cass/selectedServer";

io.write("Welcome to the CASS CLI \n\n");

if(!fs.existsSync(os.homedir() + "/.cass/selectedServer")){
  if(!fs.existsSync(os.homedir() + "/.cass")) fs.mkdirSync(os.homedir()+"/.cass");
  io.question("[No Server Set]\n Please enter the server you would like to connect to: ", function(resp){
    repo.selectedServer = resp;

    repo.autoDetectRepositoryAsync(function(){
      if(repo.autoDetectFound){
        fs.writeFileSync(serverConfigFile,repo.selectedServer);
        io.close();
      }
    }, function(resp){
      io.write("Error Finding CASS Server on that Domain: "+resp+"\n")

      io.close();
    });

  });
}else{
  var server = fs.readFile(serverConfigFile, "utf8", function(err, server){
    repo.selectedServer = server;

    repo.autoDetectRepositoryAsync(function(){
      if(repo.autoDetectFound){
        io.question("Connected to: "+repo.selectedServer+"\n\n"+
          "What would you like to do?\n"+
          "1) View Frameworks\n", function(resp){
            if(resp.trim() == "1"){
              CASS.EcFramework.search("*", repo, function(){

              }, function(){

              })
            }
          });
      }
    }, function(resp){
      io.write("Error Finding CASS Server on that Domain: "+resp+"\n")

      io.close();
    });
  });

}
