'use strict';

function collectSameElements(collectionA, collectionB) {
	var collectionC = new Array();
	for(var i = 0; i < collectionA.length;i++){
		for(var j = 0; j < collectionB.length;j++){
			if(collectionA[i] == collectionB[j]){
				collectionC.push(collectionA[i]);				
			}
		}
		
	}
  return collectionC;
}
