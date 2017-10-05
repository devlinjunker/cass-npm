var fs = require('fs');

function load(lib){
	if (fs.existsSync(lib))
	{
		return fs.readFileSync(lib);
	}else if(fs.existsSync(__dirname+"/"+lib)){
    return fs.readFileSync(__dirname+"/"+lib);
  }else{
		throw new Error("Error loading file: "+lib);
	}

}

exports.load = load;
