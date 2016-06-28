function tile() {
	this.color = 'light';
	this.htmlElement = '';
	this.id = '';
}

tile.prototype = {

};


function board() {
	this.gameArray = [[],[],[],[],[],[],[],[]];
}

board.prototype = {
	addColors: function() {
		console.log("Look at me!");
	},
	createTiles: function() {
		var self = this;
		this.gameArray.forEach(function(value, index, array) {
			console.log(self);
			for (var i=0; i<8; i++) {
				var myTile = new tile();
				self.gameArray[index][i]=myTile;
			}
		});
	}
};



start();

function start() {
	var myBoard = new board();
	myBoard.createTiles();
}
