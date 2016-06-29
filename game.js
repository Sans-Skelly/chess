//ADTs
function tile() {
	this.color = "light";
	this.htmlElement = "";
	this.id = "";
	this.piecename = ".";
	this.piececolor = ".";
	this.piecetype = ".";
	this.nummoves = 0;
}
tile.prototype = {};
function board() {
	this.gameArray = [[],[],[],[],[],[],[],[]];
}
board.prototype = {
	addColors: function() {
		var self = this;
		this.gameArray.forEach(function(value, index, array) {
			for (var i = 0; i<8; i++) {
				$("#"+index.toString()+i.toString()).addClass(self.gameArray[index][i].color);
				self.gameArray[index][i].htmlElement = $("#"+index.toString()+i.toString()).html();
			}
		});
	},
	createTiles: function() {
		var self = this;
		this.gameArray.forEach(function(value, index, array) {
			for (var i = 0; i<8; i++) {
				var myTile = new tile();

				//Set ID and HTML element
				myTile.id = index.toString()+i.toString();
				myTile.htmlElement = $("#"+index.toString()+i.toString()).html();


				//Set Color
				if ((i+index)%2 === 0) {
					myTile.color = "light-tile";
				}
				else {
					myTile.color = "dark-tile";
				}


				//Set piece name
				if (index === 0) {
					switch (i) {
						case 0:
							myTile.piecename = "white-rook";
							myTile.piecetype = "rook";
							break;
						case 1:
							myTile.piecename = "white-knight";
							myTile.piecetype = "knight";
							break;
						case 2:
							myTile.piecename = "white-bishop";
							myTile.piecetype = "bishop";
							break;
						case 3:
							myTile.piecename = "white-queen";
							myTile.piecetype = "queen";
							break;
						case 4:
							myTile.piecename = "white-king";
							myTile.piecetype = "king";
							break;
						case 5:
							myTile.piecename = "white-bishop";
							myTile.piecetype = "bishop";
							break;
						case 6:
							myTile.piecename = "white-knight";
							myTile.piecetype = "knight";
							break;
						case 7:
							myTile.piecename = "white-rook";
							myTile.piecetype = "rook";
							break;
						default:
					}
					myTile.piececolor = "white";
				}
				if (index == 1) {
					myTile.piecename = "white-pawn";
					myTile.piececolor = "white";
					myTile.piecetype = "pawn";
				}
				if (index == 6) {
					myTile.piecename = "black-pawn";
					myTile.piececolor = "black";
					myTile.piecetype = "pawn";
				}
				if (index == 7) {
					switch (i) {
						case 0:
							myTile.piecename = "black-rook";
							myTile.piecetype = "rook";
							break;
						case 1:
							myTile.piecename = "black-knight";
							myTile.piecetype = "knight";
							break;
						case 2:
							myTile.piecename = "black-bishop";
							myTile.piecetype = "bishop";
							break;
						case 3:
							myTile.piecename = "black-queen";
							myTile.piecetype = "queen";
							break;
						case 4:
							myTile.piecename = "black-king";
							myTile.piecetype = "king";
							break;
						case 5:
							myTile.piecename = "black-bishop";
							myTile.piecetype = "bishop";
							break;
						case 6:
							myTile.piecename = "black-knight";
							myTile.piecetype = "knight";
							break;
						case 7:
							myTile.piecename = "black-rook";
							myTile.piecetype = "rook";
							break;
						default:
					}
					myTile.piececolor = "black";
				}
				self.gameArray[index][i] = myTile;
			}
		});
	},
	setupClicks: function () {
		$("#00").click(function() {clicked("00");});
		$("#01").click(function() {clicked("01");});
		$("#02").click(function() {clicked("02");});
		$("#03").click(function() {clicked("03");});
		$("#04").click(function() {clicked("04");});
		$("#05").click(function() {clicked("05");});
		$("#06").click(function() {clicked("06");});
		$("#07").click(function() {clicked("07");});

		$("#10").click(function() {clicked("10");});
		$("#11").click(function() {clicked("11");});
		$("#12").click(function() {clicked("12");});
		$("#13").click(function() {clicked("13");});
		$("#14").click(function() {clicked("14");});
		$("#15").click(function() {clicked("15");});
		$("#16").click(function() {clicked("16");});
		$("#17").click(function() {clicked("17");});

		$("#20").click(function() {clicked("20");});
		$("#21").click(function() {clicked("21");});
		$("#22").click(function() {clicked("22");});
		$("#23").click(function() {clicked("23");});
		$("#24").click(function() {clicked("24");});
		$("#25").click(function() {clicked("25");});
		$("#26").click(function() {clicked("26");});
		$("#27").click(function() {clicked("27");});

		$("#30").click(function() {clicked("30");});
		$("#31").click(function() {clicked("31");});
		$("#32").click(function() {clicked("32");});
		$("#33").click(function() {clicked("33");});
		$("#34").click(function() {clicked("34");});
		$("#35").click(function() {clicked("35");});
		$("#36").click(function() {clicked("36");});
		$("#37").click(function() {clicked("37");});

		$("#40").click(function() {clicked("40");});
		$("#41").click(function() {clicked("41");});
		$("#42").click(function() {clicked("42");});
		$("#43").click(function() {clicked("43");});
		$("#44").click(function() {clicked("44");});
		$("#45").click(function() {clicked("45");});
		$("#46").click(function() {clicked("46");});
		$("#47").click(function() {clicked("47");});

		$("#50").click(function() {clicked("50");});
		$("#51").click(function() {clicked("51");});
		$("#52").click(function() {clicked("52");});
		$("#53").click(function() {clicked("53");});
		$("#54").click(function() {clicked("54");});
		$("#55").click(function() {clicked("55");});
		$("#56").click(function() {clicked("56");});
		$("#57").click(function() {clicked("57");});

		$("#60").click(function() {clicked("60");});
		$("#61").click(function() {clicked("61");});
		$("#62").click(function() {clicked("62");});
		$("#63").click(function() {clicked("63");});
		$("#64").click(function() {clicked("64");});
		$("#65").click(function() {clicked("65");});
		$("#66").click(function() {clicked("66");});
		$("#67").click(function() {clicked("67");});

		$("#70").click(function() {clicked("70");});
		$("#71").click(function() {clicked("71");});
		$("#72").click(function() {clicked("72");});
		$("#73").click(function() {clicked("73");});
		$("#74").click(function() {clicked("74");});
		$("#75").click(function() {clicked("75");});
		$("#76").click(function() {clicked("76");});
		$("#77").click(function() {clicked("77");});

	}
};
function game() {
	this.whosturn = "black";
	this.firstcell = "";
	this.secondcell = "";
}
game.prototype = {
	switchTurns: function () {
		if (this.whosturn == "black") {
			this.whosturn = "white";
			$("#turntext").text("White turn");
		}
		else if (this.whosturn == "white") {
			this.whosturn = "black";
			$("#turntext").text("Black turn");
		}

	}
};

//Functions
function clicked(id) {
	var idString = id.toString();
	var whosTurn = myGame.whosturn;

	var currentcell = myBoard.gameArray[idString[0]][idString[1]];


	if (myGame.firstcell === "") {
		// first click
		if (currentcell.piececolor == whosTurn) {
			myGame.firstcell = id;
			$("#"+id).addClass("selected");
			console.log(myGame.firstcell);
		}
		else if (currentcell.piececolor != "."){
			alert("That isn't your piece");
		}
		else {
			alert("Selected your piece you wish to move first");
		}

	}
	else {
		//second click
		var cell1 = myBoard.gameArray[myGame.firstcell.toString()[0]][myGame.firstcell.toString()[1]];
		if (myGame.firstcell == id) {
			//first move = second move
			alert("Can't move piece to same location");
		}
		else {
			if (cell1.piececolor == currentcell.piececolor) {
				alert("Can't have two pieces on one space");
			}
			else if (isValidMove(myGame.firstcell, id)) {
				//second move
				cell1.nummoves++;
				myGame.secondcell = id;
				movePiece();
			}
			else {
				alert("That is not a valid move");
			}
		}
	}
}
function movePiece() {
	var cell1 = myBoard.gameArray[myGame.firstcell.toString()[0]][myGame.firstcell.toString()[1]];
	var cell2 = myBoard.gameArray[myGame.secondcell.toString()[0]][myGame.secondcell.toString()[1]];


	//Remove piece in new cell (take piece)
	$("#"+myGame.secondcell).removeClass(cell2.piecename);
	cell2.piecename = ".";
	cell2.piececolor = ".";
	cell2.piecetype = ".";
	cell2.nummoves = 0;


	//Set old cell piece to new cell piece
	$("#"+myGame.secondcell).addClass(cell1.piecename);
	cell2.piecename = cell1.piecename;
	cell2.piececolor = cell1.piececolor;
	cell2.piecetype = cell1.piecetype;
	cell2.nummoves = cell1.nummoves;

	//Remove old cell piece
	$("#"+myGame.firstcell).removeClass(cell1.piecename);
	$("#"+myGame.firstcell).removeClass("selected");
	cell1.piecename = ".";
	cell1.piececolor = ".";
	cell1.piecetype = ".";
	cell1.nummoves = 0;

	//Reset cells so new turn can take place
	myGame.firstcell = "";
	myGame.secondcell = "";

	//Switch turns
	myGame.switchTurns();
}
function isValidMove(fromID, toID) {
	var fromIDText = fromID.toString();
	var fromIDX = parseInt(fromIDText[1]);
	var fromIDY = parseInt(fromIDText[0]);

	var toIDText = toID.toString();
	var toIDX = parseInt(toIDText[1]);
	var toIDY = parseInt(toIDText[0]);

	var XDifferece = Math.abs(fromIDX-toIDX);
	var YDifferece = Math.abs(fromIDY-toIDY);

	var cell1 = myBoard.gameArray[fromIDText[0]][fromIDText[1]];
	var cell2 = myBoard.gameArray[toIDText[0]][toIDText[1]];


	if (cell1.piecetype == "pawn") {

	}
	// return true;
}

//On Load
$(document).ready(function () {
	start();
});
function start() {
	myBoard = new board();
	myBoard.createTiles();
	myBoard.addColors();
	myBoard.setupClicks();

	myGame = new game();
}
