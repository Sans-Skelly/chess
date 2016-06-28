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
				console.log(self.gameArray[index][i]);
				console.log(self.gameArray[index][i].color);
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
	}
};


$(document).ready(function () {
	start();
});

function start() {
	var myBoard = new board();
	myBoard.createTiles();
	myBoard.addColors();
}
