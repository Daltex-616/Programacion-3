var createBoard = function()
{
	rango = ["A","B","C","D","E","F","G","H"];
	fila = [1,2,3,4,5,6,7,8];
  	var count = 0;

	  for(var i = 0; i < rango.length; i++)
	  {
	    for (var j = 0; j < fila.length; j++)
	      {
	        if(count%8 == 0)
	        {
	          $("#tablero").append(`<div id="${rango[rango.length - (i +1)]+fila[j]}"class="tile" style="clear:left"></div>`);

	        }else{
	          $("#tablero").append(`<div id=${rango[rango.length - (i +1)]+fila[j]} class="tile"></div>`);
	          }
	        $(".tile").eq(count).attr("data-gridpos",((rango[rango.length - (i +1)]+fila[j])));
            
	        
	        if(((i%2 == 0) && (j%2 != 0)) || ((i%2 != 0) && (j%2 == 0)))
	        {
	          $(".tile").eq(count).addClass("black",);
              
	        }
	        else
	        {
	          $(".tile").eq(count).addClass("white");
	        }
            switch (rango[rango.length - (i +1)]+fila[j]) {
				case 'H1':
						$('#H1').append('<p class="blancas">♖</p>')
					break;
				case 'H2':
						$('#H2').append('<p class="blancas">♘</p>')
					break;
				case 'H3':
					$('#H3').append('<p class="blancas">♗</p>')
					break;
				case 'H4':
					$('#H4').append('<p class="blancas">♔</p>')
					break;
				case 'H5':
					$('#H5').append('<p class="blancas">♕</p>')
					break;
				case 'H6':
					$('#H6').append('<p class="blancas">♗</p>')
					break;
				case 'H7':
						$('#H7').append('<p class="blancas">♘</p>')
					break;
				case 'H8':
					$('#H8').append('<p class="blancas">♖</p>')
					break;
					// AAAA
				case 'A1':
					$('#A1').append('<p class="negritas">♖</p>')
					break;
				case 'A2':
					$('#A2').append('<p class="negritas">♘</p>')
					break;
				case 'A3':
					$('#A3').append('<p class="negritas">♗</p>')
					break;
				case 'A4':
					$('#A4').append('<p class="negritas">♔</p>')
					break;
				case 'A5':
					$('#A5').append('<p class="negritas">♕</p>')
					break;
				case 'A6':
					$('#A6').append('<p class="negritas">♗</p>')
					break;
				case 'A7':
					$('#A7').append('<p class="negritas">♘</p>')
					break;
				case 'A8':
					$('#A8').append('<p class="negritas">♖</p>')
					break;			
				default:
					break;
			}

			switch (rango[rango.length - (i +1)]+fila[j]) {
				case 'G1':
						$('#G1').append('<p class="blancas">ඞ</p>')
					break;
				case 'G2':
						$('#G2').append('<p class="blancas">ඞ</p>')
					break;
				case 'G3':
					$('#G3').append('<p class="blancas">ඞ</p>')
					break;
				case 'G4':
					$('#G4').append('<p class="blancas">ඞ</p>')
					break;
				case 'G5':
					$('#G5').append('<p class="blancas">ඞ</p>')
					break;
				case 'G6':
					$('#G6').append('<p class="blancas">ඞ</p>')
					break;
				case 'G7':
						$('#G7').append('<p class="blancas">ඞ</p>')
					break;
				case 'G8':
					$('#G8').append('<p class="blancas">ඞ</p>')
					break;	
				case 'B1':
					$('#B1').append('<p class="negritas">ඞ</p>')
					break;
				case 'B2':
					$('#B2').append('<p class="negritas">ඞ</p>')
					break;
				case 'B3':
					$('#B3').append('<p class="negritas">ඞ</p>')
					break;
				case 'B4':
					$('#B4').append('<p class="negritas">ඞ</p>')
					break;
				case 'B5':
					$('#B5').append('<p class="negritas">ඞ</p>')
					break;
				case 'B6':
					$('#B6').append('<p class="negritas">ඞ</p>')
					break;
				case 'B7':
						$('#B7').append('<p class="negritas">ඞ</p>')
					break;
				case 'B8':
					$('#B8').append('<p class="negritas">ඞ</p>')
					break;		
				default:
					break;
			}
	        count++;

	    }
	  }
  
  
}

jQuery(document).ready(function($) {
	createBoard();
	console.log("Created Chessboard");
	tiles = $(".tile");
	
});