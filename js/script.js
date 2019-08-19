(function(){
	'use strict';

	// if (false) {

		function ucFirst(str) {

			var firstLetter = str.charAt(0).toUpperCase();

			console.log(firstLetter);

			var remaindOfWord = str.slice(1);

			console.log(remaindOfWord);

			var wholeWord = firstLetter + remaindOfWord;

			alert(wholeWord);

			// str.slice(1);
			
		}

		ucFirst('');
	// }

	// if (false) {

		function min(a,b) {
			if (a < b) {
				return a;
			} else {
				return b;
			}

		}

		alert( min(1, 1) );
	// }


	// if (false) {
		nextPrime:
		  for (var i = 2; i <= 10; i++) {

		    for (var j = 2; j < i; j++) {
		      if (i % j == 0) continue nextPrime;
		    }

		    console.log( i ); 
		  }
	// }
	

	// if (false) {


		function bigNum(num) {

			var enterNumber;

			do {
			  enterNumber = prompt("Введите число больше 100?", 0);
			} while (enterNumber <= num && enterNumber != null);

			
		}
	    
	    bigNum(10);
	// }
	

})();