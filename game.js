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
    var opponnentsName=document.querySelector('.display-2 .header-box__opponents');
    var plOneName=document.querySelector('.game-resultation__pl-1>span:first-child');
    var plOneResult=document.querySelector('.game-resultation__pl-1>span:last-child');
    var resultPlX=0;
    var playerTwoName=document.querySelector('.game-resultation__pl-2>span:first-child');
    var plTwoResult=document.querySelector('.game-resultation__pl-2>span:last-child');
    var resultPlO=0;

    function singleGame() {
        opponnentsName.setAttribute('data-opponents', 'Pl vs Droid');
        field.addEventListener('click', singleCellClick);
        resultSinglePlayer();
    }

   /* function playerDroidCellClick() {
        function droidClick() {
            var mass = [];
            function randomIndex(min, max) {
                var rand = min - 0.5 + Math.random() * (max - min + 1);
                rand = Math.round(rand);
                return rand;
            }
            var a=randomIndex(0, mass.length);

            for (var i = 0; i < cells.length; i++) {
                if (!cells[i].classList.contains('tttoe__cells--x')
                    &&!cells[i].classList.contains('tttoe__cells--o')){
                    mass.push(i);
                }
            }

            if ( !getWinner() ) {
                cells[mass[a]].classList.add('tttoe__cells--o');
                getWinner();


            } else {
                console.log(cells);

            }
        }

        field.addEventListener('click', function singleCellClick(e) {
                if (!e.target.classList.contains('tttoe__cells')
                    || e.target.classList.contains('tttoe__cells--x')
                    || e.target.classList.contains('tttoe__cells--o')
                ) {
                    return;
                }

                if (getWinner()) {
                    return;
                }

                e.target.classList.add(nextMove);

            });
        if (singleCellClick)
        setTimeout(droidClick, 400);
    }*/


    function singleCellClick(e) {
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
        setTimeout(droidClick, 500);



        var winner=getWinner();

        if (winner) {



            if (winner === 'tttoe__cells--x') {
                resultPlX+=1;
                plOneResult.innerHTML=resultPlX;
                setTimeout(clearField, 1500);
            }
            if (winner==='tttoe__cells--o') {
                resultPlO+=1;
                plTwoResult.innerHTML=resultPlO;
                setTimeout(clearField, 1500);
            }
            if (winner===-1) {
                setTimeout(clearField, 1500);
            }

        }
    }

    function droidClick() {
        var mass = [];
        function randomIndex(min, max) {
            var rand = min - 0.5 + Math.random() * (max - min + 1);
            rand = Math.round(rand);
            return rand;
        }
        var a=randomIndex(0, mass.length);

        for (var i = 0; i < cells.length; i++) {
            if (!cells[i].classList.contains('tttoe__cells--x')
                &&!cells[i].classList.contains('tttoe__cells--o')){
                mass.push(i);
            }
        }

        if ( cells[mass[a]].classList.contains('tttoe__cells--o')
            ||cells[mass[a]].classList.contains('tttoe__cells--x') ) {
                return;
        }

        if (getWinner()) {
            return
        }

        cells[mass[a]].classList.add('tttoe__cells--o');


        var winner=getWinner();

        if (winner) {

            if (winner === 'tttoe__cells--x') {
                resultPlX+=1;
                plOneResult.innerHTML=resultPlX;
                setTimeout(clearField, 1500);
            }
            if (winner==='tttoe__cells--o') {
                resultPlO+=1;
                plTwoResult.innerHTML=resultPlO;
                setTimeout(clearField, 1500);
            }
            if (winner===-1) {
                setTimeout(clearField, 1500);
            }

        }


    }

    function resultSinglePlayer(){
        plOneName.innerHTML='Pl - ';
        plOneName.style.marginRight='0.1rem';
        plOneResult.innerHTML=resultPlX;
        playerTwoName.innerHTML='Droid - ';
        playerTwoName.style.marginRight='0.1rem';
        plTwoResult.innerHTML=resultPlO;
    }

    function multiGame() {
        opponnentsName.setAttribute('data-opponents', 'Pl X vs Pl O');
        resultMultiplayer();
        field.addEventListener('click', multiCellClick);
    }

    function multiCellClick(e) {
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

        if (winner) {console.log(winner);
            if (winner === 'tttoe__cells--x') {
                resultPlX+=1;
                plOneResult.innerHTML=resultPlX;
                setTimeout(clearField, 2000);
            }
            if (winner==='tttoe__cells--o') {
                resultPlO+=1;
                plTwoResult.innerHTML=resultPlO;
                setTimeout(clearField, 2000);
            }
            if (winner===-1) {
                setTimeout(clearField, 2000);
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

    function clearField() {
        for (var i=0; i<cells.length; i++) {
            cells[i].classList.remove('tttoe__cells--x');
            cells[i].classList.remove('tttoe__cells--o');
        }
    }

    function clearGame() {
        resultPlO=0;
        resultPlX=0;
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
            console.log(cells[1][1]);
        }

        for(i=0; i<3; i++) {
            if ((cells[0][i] === cells[1][i]) && (cells[1][i] === cells[2][i])) {
                return cells[0][i];
            }
            if ((cells[i][0] === cells[i][1]) && (cells[i][1] === cells[i][2])) {
                return cells[i][0];
            }
        }
        if ( (cells[0][0] === 'tttoe__cells--x' || cells[0][0] === 'tttoe__cells--o' )
            && (cells[0][1] === 'tttoe__cells--x' || cells[0][1] === 'tttoe__cells--o' )
            && (cells[0][2] === 'tttoe__cells--x' || cells[0][2] === 'tttoe__cells--o' )
            && (cells[1][0] === 'tttoe__cells--x' || cells[1][0] === 'tttoe__cells--o' )
            && (cells[1][1] === 'tttoe__cells--x' || cells[1][1] === 'tttoe__cells--o' )
            && (cells[1][2] === 'tttoe__cells--x' || cells[1][2] === 'tttoe__cells--o' )
            && (cells[2][0] === 'tttoe__cells--x' || cells[2][0] === 'tttoe__cells--o' )
            && (cells[2][1] === 'tttoe__cells--x' || cells[2][1] === 'tttoe__cells--o' )
            && (cells[2][2] === 'tttoe__cells--x' || cells[2][2] === 'tttoe__cells--o' )
        ) {
            return -1;
        }
    }


    buttonSingleGame.addEventListener('click', function StartSingleGame() {
        homePage.style.display='none';
        gamePage.style.display='block';
        singleGame();
    });

    buttonMultiGame.addEventListener('click', function StartMultiGame() {
        homePage.style.display='none';
        gamePage.style.display='block';
        multiGame();
    });

    toHomePage.addEventListener('click', function goToHomePage() {
        homePage.style.display='block';
        gamePage.style.display='none';
        field.removeEventListener('click', singleCellClick);
        field.removeEventListener('click', multiCellClick);
        clearField();
        clearGame();
    });
});

