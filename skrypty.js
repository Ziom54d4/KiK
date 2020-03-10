console.log("Działa!");

var round = 0;
var p1 = "fa" + " fa-circle-o";
var p2 = "fa" + " fa-times";

var board = [
    [{ clicked: false, whatClicked:'N' }, { clicked: false, whatClicked: 'N' }, { clicked: false, whatClicked: 'N'  }],
    [{ clicked: false, whatClicked: 'N' }, { clicked: false, whatClicked: 'N' }, { clicked: false, whatClicked: 'N' }],
    [{ clicked: false, whatClicked: 'N' }, { clicked: false, whatClicked: 'N' }, { clicked: false, whatClicked: 'N' }]
];

var elementy = document.getElementsByClassName("komorka");
for(i=0; i<elementy.length; i++)
{
    elementy[i].addEventListener("click", funkcja);
    
    function funkcja()
    {
        var clickedRowNr = event.target.getAttribute("data-row");
        var clickedColNr = event.target.getAttribute("data-column");
        if (board[clickedRowNr][clickedColNr].clicked)
            return;
        board[clickedRowNr][clickedColNr].clicked = true;
        if (round % 2 === 0 && !endGame()) {
            event.target.className = p1;
            board[clickedRowNr][clickedColNr].whatClicked = 'O';
        }
        else if (round % 2 !== 0 && !endGame()) {
            event.target.className = p2;
            board[clickedRowNr][clickedColNr].whatClicked = 'X';
        }
        endGame();
        round++;
    };
}

function endGame(){
    // W poziomie
    for(i=0; i<=2; i++) {
        if (board[i][0].whatClicked == "O" && board[i][1].whatClicked == "O" && board[i][2].whatClicked == "O") {
            document.getElementById("wynik").innerHTML = "Wygrało kółko! " + "<a href='javascript:location.reload()'>Jeszcze raz?</a>";
            return true;
        }

        else if (board[i][0].whatClicked == "X" && board[i][1].whatClicked == "X" && board[i][2].whatClicked == "X") {
            document.getElementById("wynik").innerHTML = "Wygrał krzyżyk! " + "<a href='javascript:location.reload()'>Jeszcze raz?</a>";
            return true;
        }
    }
    // W pionie
    for (i = 0; i <= 2; i++) {
        if (board[0][i].whatClicked == "O" && board[1][i].whatClicked == "O" && board[2][i].whatClicked == "O") {
            document.getElementById("wynik").innerHTML = "Wygrało kółko! " + "<a href='javascript:location.reload()'>Jeszcze raz?</a>";
            return true;
        }

        else if (board[0][i].whatClicked == "X" && board[1][i].whatClicked == "X" && board[2][i].whatClicked == "X") {
            document.getElementById("wynik").innerHTML = "Wygrał krzyżyk! " + "<a href='javascript:location.reload()'>Jeszcze raz?</a>";
            return true;
        }
    }
    // Na ukos (Kółko)
    if (board[0][0].whatClicked == "O" && board[1][1].whatClicked == "O" && board[2][2].whatClicked == "O") {
        document.getElementById("wynik").innerHTML = "Wygrało kółko! " + "<a href='javascript:location.reload()'>Jeszcze raz?</a>";
        return true;
    }

    else if (board[0][2].whatClicked == "O" && board[1][1].whatClicked == "O" && board[2][0].whatClicked == "O") {
        document.getElementById("wynik").innerHTML = "Wygrało kółko! " + "<a href='javascript:location.reload()'>Jeszcze raz?</a>";
        return  true;
    }
    // Na ukos (Krzyżyk)
    if (board[0][0].whatClicked == "X" && board[1][1].whatClicked == "X" && board[2][2].whatClicked == "X") {
        document.getElementById("wynik").innerHTML = "Wygrał krzyżyk! " + "<a href='javascript:location.reload()'>Jeszcze raz?</a>";
        return true;
    }

    else if (board[0][2].whatClicked == "X" && board[1][1].whatClicked == "X" && board[2][0].whatClicked == "X") {
        document.getElementById("wynik").innerHTML = "Wygrał krzyżyk! " + "<a href='javascript:location.reload()'>Jeszcze raz?</a>";
        return true;
    }
    
    for(i=0; i<=8; i++)
    {
        elementy[i].onclick() = function() {
            document.getElementById("wynik").innerHTML = "Remis! " + "<a href='javascript:location.reload()'>Jeszcze raz?</a>";
        }
    }
}
