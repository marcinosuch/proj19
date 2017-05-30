
function drawTree(k) {
	for ( var i = 0 ; i < k; i++ ) {
		var star='';
		for (var j = 0 ; j < i; j++ ){
			
			star +='*'
			/*if (k>=2){(star +='* ')
			}  else {(star +='*')
			}*/
		}
	
		console.log(star)
	}
}
drawTree(10)


