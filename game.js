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
				myTile.id=index.toString()+i.toString();
				myTile.htmlElement = $("#"+index.toString()+i.toString());
				if ((i+index)%2===0) {
					//even
					myTile.color = 'light-tile';
				}
				else {
					myTile.color = 'dark-tile';
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
