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
				myTile.id=index.toString()+i.toString();
				myTile.htmlElement = $("#"+index.toString()+i.toString()).html();
				if (i+index%2===0) {
					//even
					myTile.color = 'light';
				}
				else {
					myTile.color = 'dark';
				}
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
