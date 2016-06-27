function tile() {
	this.color = 'light';
}

tile.prototype = {

};


function board() {
}

board.prototype = {
	addColors: function() {
		console.log("Look at me!");
	}
};



start();

function start() {
	var myBoard = new board();
	myBoard.createTiles();
}
