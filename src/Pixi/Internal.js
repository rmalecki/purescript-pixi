exports.newPixi0 = function (objName){
	return function(){
		return new PIXI[objName]();
	};
}

exports.newPixi1Impl = function (objName, arg1){
	return function(){
  		return new PIXI[objName](arg1);
	};
}

exports.newPixi2Impl = function (objName, arg1, arg2){
  	return function(){
		return new PIXI[objName](arg1, arg2);
	};
}