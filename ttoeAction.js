/**
 * Created by user on 17.08.2016.
 */
console.log('Я начал выполняться!');
window.addEventListener('load', function(){
    var field=document.querySelector('.tttoe__field');
    var cells=document.querySelectorAll('.tttoe__cells');
    var playButton=document.querySelector('.tttoe__button_play');
    var stopButton=document.querySelector('.tttoe__button_stop');
    //var winMessage;
    //var winnerMessageWindow=document.querySelector('.winnerMessage')
    var nextMove='tttoe__cells_x';

    function getWinner(){
        var cellsMass=document.querySelectorAll('.tttoe__cells');
        var cells=[[0,1,2], [3,4,5], [6,7,8]];
        var i;
        for(i=0; i<3; i++){
            for(var j=0; j<3; j++) {
              var el=cellsMass[i*3+j];
                if (el.classList.contains('tttoe__cells_x')) {
                    cells[i][j]='tttoe__cells_x';
                }
                if (el.classList.contains('tttoe__cells_o')) {
                    cells[i][j]='tttoe__cells_o'
                }
            }
        }
        if ( (cells[0][0]===cells[1][1]) && (cells[1][1]===cells[2][2])
            || (cells[2][0]===cells[1][1]) && (cells[1][1]===cells[0][2]) ){
            return cells[1][1];
        }

        for(i=0; i<3; i++) {
            if ((cells[0][i] === cells[1][i]) && (cells[1][i] === cells[2][i])) {
                return cells[0][i];
            }
            if ((cells[i][0] === cells[i][1]) && (cells[i][1] === cells[i][2])) {
                return cells[i][0];
            }
        }
    }

    function winnerMessage(gameResult){
        var winMessage=document.createElement('div');
        winMessage.className='winnerMessage';
        winMessage.innerHTML=gameResult;
        document.body.insertBefore(winMessage, document.body.firstChild);

    }

    function dropWinnerMessage(){
        document.body.removeChild(document.body.firstChild);
    }



    playButton.addEventListener('click', function newGame(){
        for(var i=0; i<cells.length; i++){
            cells[i].classList.remove('tttoe__cells_background');
            cells[i].classList.remove('tttoe__cells_x');
            cells[i].classList.remove('tttoe__cells_o');
        }

        if(winnerMessage){
            dropWinnerMessage();}

        nextMove='tttoe__cells_x';
    });

    stopButton.addEventListener('click', function clearGame(){
        for(var i=0; i<cells.length; i++){
            cells[i].classList.remove('tttoe__cells_x');
            cells[i].classList.remove('tttoe__cells_o');
            cells[i].classList.add('tttoe__cells_background');
        }
        if(winnerMessage)
        dropWinnerMessage();
    });

    field.addEventListener('click', function handleCellClick(e) {
        if(!e.target.classList.contains('tttoe__cells')
            || e.target.classList.contains('tttoe__cells_background')
            || e.target.classList.contains('tttoe__cells_x')
            || e.target.classList.contains('tttoe__cells_o')
        ){
                return;
        }

        if(getWinner()) {
            return;
        }

        e.target.classList.add(nextMove);
        if(nextMove==='tttoe__cells_x')
            nextMove='tttoe__cells_o';
        else {
            nextMove='tttoe__cells_x'
        }

        var winner=getWinner();
        if (winner) {
            if (winner === 'tttoe__cells_x') {
                winnerMessage('Winner X');

            }
            if (winner==='tttoe__cells_o') {
               winnerMessage('Winner O');
            }

        }

    });

/* var a=document.querySelector('.tttoe > .tttoe__top-sidebar');
console.log(a);*/
});