var getFirstCapicuaUsingString = function(min, max){
	var count = min;
	while(min<=max){
		var strNum = Number.parseInt(min.toStrint().split("").reverse()).join("");
		if(strNum == count){
			return strNum;
		}
		count++;
		return 0;
	}
}