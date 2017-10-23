var fs = require('fs');
//var $ = require("jquery");

function load(lib){
	if(fs.existsSync){
		if (fs.existsSync(lib))
		{
			return fs.readFileSync(lib);
		}else if(fs.existsSync(__dirname+"/"+lib)){
			return fs.readFileSync(__dirname+"/"+lib);
		}else{
			throw new Error("Error loading file: "+lib);
		}
	}else if($.ajax != undefined){

	}


}

exports.load = load;
