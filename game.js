function tile() {
	this.color = 'light';
	this.htmlElement = '';
	this.id = '';
	this.piecename = '.';
}

tile.prototype = {

};


function board() {
	this.gameArray = [[],[],[],[],[],[],[],[]];
}

board.prototype = {
	addColors: function() {
		var self = this;
		this.gameArray.forEach(function(value, index, array) {
			for (var i=0; i<8; i++) {
				$("#"+index.toString()+i.toString()).addClass(self.gameArray[index][i].color);
				self.gameArray[index][i].htmlElement = $("#"+index.toString()+i.toString()).html();
			}
		});
	},
	createTiles: function() {
		var self = this;
		this.gameArray.forEach(function(value, index, array) {
			for (var i=0; i<8; i++) {
				var myTile = new tile();

				//Set ID and HTML element
				myTile.id=index.toString()+i.toString();
				myTile.htmlElement = $("#"+index.toString()+i.toString()).html();


				//Set Color
				if ((i+index)%2===0) {
					myTile.color = 'light-tile';
				}
				else {
					myTile.color = 'dark-tile';
				}


				//Set piece name
				if (index === 0) {
					switch (i) {
						case 0:
							myTile.piecename="white-rook";
							break;
						case 1:
							myTile.piecename="white-knight";
							break;
						case 2:
							myTile.piecename="white-bishop";
							break;
						case 3:
							myTile.piecename="white-queen";
							break;
						case 4:
							myTile.piecename="white-king";
							break;
						case 5:
							myTile.piecename="white-bishop";
							break;
						case 6:
							myTile.piecename="white-knight";
							break;
						case 7:
							myTile.piecename="white-rook";
							break;
						default:
					}
				}
				if (index == 1) {
					myTile.piecename="white-pawn";
				}
				if (index == 6) {
					myTile.piecename="black-pawn";
				}
				if (index === 7) {
					switch (i) {
						case 0:
							myTile.piecename="black-rook";
							break;
						case 1:
							myTile.piecename="black-knight";
							break;
						case 2:
							myTile.piecename="black-bishop";
							break;
						case 3:
							myTile.piecename="black-queen";
							break;
						case 4:
							myTile.piecename="black-king";
							break;
						case 5:
							myTile.piecename="black-bishop";
							break;
						case 6:
							myTile.piecename="black-knight";
							break;
						case 7:
							myTile.piecename="black-rook";
							break;
						default:
					}
				}



				self.gameArray[index][i]=myTile;
			}
		});
	},
	setupClicks: function () {
		$('.00').click(function() {clicked('00');});
		$('.01').click(function() {clicked('01');});
		$('.02').click(function() {clicked('02');});
		$('.03').click(function() {clicked('03');});
		$('.04').click(function() {clicked('04');});
		$('.05').click(function() {clicked('05');});
		$('.06').click(function() {clicked('06');});
		$('.07').click(function() {clicked('07');});

		$('.10').click(function() {clicked('10');});
		$('.11').click(function() {clicked('11');});
		$('.12').click(function() {clicked('12');});
		$('.13').click(function() {clicked('13');});
		$('.14').click(function() {clicked('14');});
		$('.15').click(function() {clicked('15');});
		$('.16').click(function() {clicked('16');});
		$('.17').click(function() {clicked('17');});

		$('.20').click(function() {clicked('20');});
		$('.21').click(function() {clicked('21');});
		$('.22').click(function() {clicked('22');});
		$('.23').click(function() {clicked('23');});
		$('.24').click(function() {clicked('24');});
		$('.25').click(function() {clicked('25');});
		$('.26').click(function() {clicked('26');});
		$('.27').click(function() {clicked('27');});

		$('.30').click(function() {clicked('30');});
		$('.31').click(function() {clicked('31');});
		$('.32').click(function() {clicked('32');});
		$('.33').click(function() {clicked('33');});
		$('.34').click(function() {clicked('34');});
		$('.35').click(function() {clicked('35');});
		$('.36').click(function() {clicked('36');});
		$('.37').click(function() {clicked('37');});

		$('.40').click(function() {clicked('40');});
		$('.41').click(function() {clicked('41');});
		$('.42').click(function() {clicked('42');});
		$('.43').click(function() {clicked('43');});
		$('.44').click(function() {clicked('44');});
		$('.45').click(function() {clicked('45');});
		$('.46').click(function() {clicked('46');});
		$('.47').click(function() {clicked('47');});

		$('.50').click(function() {clicked('50');});
		$('.51').click(function() {clicked('51');});
		$('.52').click(function() {clicked('52');});
		$('.53').click(function() {clicked('53');});
		$('.54').click(function() {clicked('54');});
		$('.55').click(function() {clicked('55');});
		$('.56').click(function() {clicked('56');});
		$('.57').click(function() {clicked('57');});

		$('.60').click(function() {clicked('60');});
		$('.61').click(function() {clicked('61');});
		$('.62').click(function() {clicked('62');});
		$('.63').click(function() {clicked('63');});
		$('.64').click(function() {clicked('64');});
		$('.65').click(function() {clicked('65');});
		$('.66').click(function() {clicked('66');});
		$('.67').click(function() {clicked('67');});

		$('.70').click(function() {clicked('70');});
		$('.71').click(function() {clicked('71');});
		$('.72').click(function() {clicked('72');});
		$('.73').click(function() {clicked('73');});
		$('.74').click(function() {clicked('74');});
		$('.75').click(function() {clicked('75');});
		$('.76').click(function() {clicked('76');});
		$('.77').click(function() {clicked('77');});

	}
};



function game() {
	this.whosturn = 'black';
	this.firstcell = '';
	this.secondcell = '';
}

game.prototype = {

};





function clicked() {

}



$(document).ready(function () {
	start();
});

function start() {
	var myBoard = new board();
	myBoard.createTiles();
	myBoard.addColors();
	myBoard.setupClicks();

	var myGame = new game();
}
