var MyFS = function(){
	// myFs.js

var fs = require('fs');

/*
module.exports.readFile = function(fileName){
	
	var content = fs.readFileSync(fileName).toString();

	return content;
};


module.exports.readFileAsync = function(fileName){
	
	fs.readFile(fileName, function(err, data){
		if (err) throw 'Error while reading the file';

		var content = data.toString();
		var numLines = content.split('\n').length;
		
		console.log('File', fileName, 'has', numLines, 'lines');
	});
	
};
*/

module.exports = {
	readFile: function(fileName){
	
		var content = fs.readFileSync(fileName).toString();

		return content;
	},
	countFileLinesAsync: function(fileName, callBack){
		
		// var res = 'temp'; // This is not a solution
	
		fs.readFile(fileName, function(err, data){
			if (err) {
				// throw 'Error while reading the file';
				callBack(err, undefined);
			}

			var content = data.toString();
			var numLines = content.split('\n').length;
			
			callBack(undefined, numLines);
			//console.log('File', fileName, 'has', numLines, 'lines');
			// res = numLines; // This is not a solution
			//return numLines;
		});
		
		// return res;  // This is not a solution
	}
};
}; 