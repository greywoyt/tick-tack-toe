/**
 * Created by greywoyt on 001 01.09.16.
 */
window.addEventListener( 'load', function () {
    var homePage=document.querySelector('.display-1');
    var gamePage=document.querySelector('.display-2');
    var buttonSingleGame=document.querySelector('.game-variant__single');
    var buttonMultiGame=document.querySelector('.game-variant__multi');
    var toHomePage=document.querySelector('.header-box__menu');
    var field=document.querySelector('.display-2 .tttoe__field');
    var cells=document.querySelectorAll('.display-2 .tttoe__cells');
    var nextMove='tttoe__cells--x';
    var plOneName=document.querySelector('.game-resultation__pl-1>span:first-child');
    var plOneResult=document.querySelector('.game-resultation__pl-1>span:last-child');
    var resultPlX=0;
    var playerTwoName=document.querySelector('.game-resultation__pl-2>span:first-child');
    var plTwoResult=document.querySelector('.game-resultation__pl-2>span:last-child');
    var resultPlO=0;

    function multiGame() {
        resultMultiplayer();
        field.addEventListener('click', function handleCellClick(e) {
            if(!e.target.classList.contains('tttoe__cells')
                || e.target.classList.contains('tttoe__cells--x')
                || e.target.classList.contains('tttoe__cells--o')
            ){
                return;
            }

            if(getWinner()) {
                return;
            }

            e.target.classList.add(nextMove);
            if(nextMove==='tttoe__cells--x')
                nextMove='tttoe__cells--o';
            else {
                nextMove='tttoe__cells--x'
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
    }    
    
    function getWinner() {
        var cellsMass=document.querySelectorAll('.display-2 .tttoe__cells');
        var cells=[[0,1,2], [3,4,5], [6,7,8]];
        var i;
        for(i=0; i<3; i++){
            for(var j=0; j<3; j++) {
                var el=cellsMass[i*3+j];
                if ( el.classList.contains('tttoe__cells--x') ) {
                    cells[i][j]='tttoe__cells--x';
                }
                if ( el.classList.contains('tttoe__cells--o') ) {
                    cells[i][j]='tttoe__cells--o'
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

    function resultMultiplayer() {
        plOneName.innerHTML='Pl X - ';
        plOneName.style.marginRight='0.1rem';
        plOneResult.innerHTML=resultPlX;
        playerTwoName.innerHTML='Pl O - ';
        playerTwoName.style.marginRight='0.1rem';
        plTwoResult.innerHTML=resultPlO;
    }

    buttonSingleGame.addEventListener('click', function StartSingleGame() {
        homePage.style.display='none';
        gamePage.style.display='block';
    });

    buttonMultiGame.addEventListener('click', function StartMultiGame() {
        homePage.style.display='none';
        gamePage.style.display='block';
        multiGame();
    });

    toHomePage.addEventListener('click', function goToHomePage() {
        homePage.style.display='block';
        gamePage.style.display='none';
    });
});


/*
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

 if(document.body.firstChild.className=='winnerMessage'){
 dropWinnerMessage();
 }

 nextMove='tttoe__cells_x';
 });

 stopButton.addEventListener('click', function clearGame(){
 for(var i=0; i<cells.length; i++){
 cells[i].classList.remove('tttoe__cells_x');
 cells[i].classList.remove('tttoe__cells_o');
 cells[i].classList.add('tttoe__cells_background');
 }
 if(document.body.firstChild.className=='winnerMessage'){
 dropWinnerMessage();
 }
 });
 */

/*
 var homePage=document.querySelector('.display-1');
 var gamePage=document.querySelector('.display-2');
 var singleGame=document.querySelector('.game-variant__single');
 var multiGame=document.querySelector('.game-variant__multi');
 var toHomePage=document.querySelector('.header-box__menu');

 var field=document.querySelector('.display2 .tttoe__field');
 var cells=document.querySelectorAll('.display2 .tttoe__cells');
 var nextMove='tttoe__cells--x';

 function getWinner() {
 var cellsMass=document.querySelectorAll('.display2 .tttoe__cells');
 var cells=[[0,1,2], [3,4,5], [6,7,8]];
 var i;
 for ( i=0; i<3; i++) {
 for ( var j=0; j<3; j++ ) {
 var el=cellsMass[i*3+j];
 if ( el.classList.contains('tttoe__cells--x') ) {
 cells[i][j]='tttoe__cells--x';
 }
 if ( el.classList.contains('tttoe__cells--o') ) {
 cells[i][j]='tttoe__cells--o'
 }
 }
 }
 if ( (cells[0][0]===cells[1][1]) && (cells[1][1]===cells[2][2])
 || (cells[2][0]===cells[1][1]) && (cells[1][1]===cells[0][2]) ){
 return cells[1][1];
 }

 for ( i=0; i<3; i++ ) {
 if ( (cells[0][i] === cells[1][i]) && (cells[1][i] === cells[2][i]) ) {
 return cells[0][i];
 }
 if ( (cells[i][0] === cells[i][1]) && (cells[i][1] === cells[i][2]) ) {
 return cells[i][0];
 }
 }
 }



 singleGame.addEventListener('click', function StartSingleGame() {
 homePage.style.display='none';
 gamePage.style.display='block';
 });

 field.addEventListener('click', function handleCellClick(e) {
 if(!e.target.classList.contains('tttoe__cells')
 || e.target.classList.contains('tttoe__cells--x')
 || e.target.classList.contains('tttoe__cells--o')
 ){
 return;
 }

 if(getWinner()) {
 return;
 }

 e.target.classList.add(nextMove);
 if(nextMove==='tttoe__cells--x')
 nextMove='tttoe__cells--o';
 else {
 nextMove='tttoe__cells--x'
 }

 var winner=getWinner();
 if (winner) {
 if (winner === 'tttoe__cells--x') {
 winnerMessage('Winner X');

 }
 if (winner==='tttoe__cells_o') {
 winnerMessage('Winner O');
 }

 }

 });


 multiGame.addEventListener('click', function StartMultiGame() {
 homePage.style.display='none';
 gamePage.style.display='block';
 });

 toHomePage.addEventListener('click', function goToHomePage() {
 homePage.style.display='block';
 gamePage.style.display='none';
 });


 */