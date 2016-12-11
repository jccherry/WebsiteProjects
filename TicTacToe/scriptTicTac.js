var current = "X";
var updateDisplay= function(a){
    var id= "#"+a;
    $(id).text(current);
};

var changeValue = function() {
    if(current==="X"){
        current="Y";
    } else {
        current="X";
    }
};
var resetBoard = function(){
    $("button.gameButton").text("-");
    current="X";
    $("#playerUp").text(current);
 };
 
var checkRow = function(cell, dir){
    var add = 1;
    if(dir === "vertical") {
        add = 3;
    } else if (dir ==="forwardSlash") {
        add = 2;
    } else if (dir ==="backSlash") {
        add = 4;
    }
    var second = cell + add;
    var third = second + add;
    var firstCellID = "#" + cell;
    var secondCellID = "#" + second;
    var thirdCellID = "#" + third;
    var firstCellVal = $(firstCellID).text();
    var secondCellVal = $(secondCellID).text();
    var thirdCellVal = $(thirdCellID).text();
    
    
    if (firstCellVal==="-") {
        return("no win");
    } else if (firstCellVal === secondCellVal) {
        if (secondCellVal === thirdCellVal){
            if ($("#playerUp").text()=== "X") {
                alert("Y wins!");
            } else {
                alert("X wins!");
            }
            resetBoard();
        } else {
            return("no win");
        }
    }
};

var checkBoard = function(){
    checkRow(0);
    checkRow(3);
    checkRow(6);
    checkRow(0, "vertical");
    checkRow(1, "vertical");
    checkRow(2, "vertical");
    checkRow(0, "backSlash");
    checkRow(2, "forwardSlash");
};

var playGame = function(cell){
    var id= "#"+cell;
    var content = $(id).text();
    if (content==="-") {
        updateDisplay(cell);
        changeValue();
        $("#playerUp").text(current);
    } else {
        return("dumbass this space is taken");
    }
    checkBoard();
};