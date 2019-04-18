window.onload = function () {
    const bloks = document.querySelectorAll('.box');
    const mainBlock = document.querySelector('.main-block');
    const oneButton = document.querySelector('.one');
    const twoButton = document.querySelector('.two');
    let twoUseraOrOne = 1;
    const buttonReplay = document.querySelector('.button');
    const HOne = document.querySelector('h1');
    let winner = '';
    let lastXChoise;
    let iteration = true; // if true -> X goes. if false -> O goes
    oneButton.addEventListener('click', function(){
        twoUseraOrOne = 1;
        replay();
    })
    twoButton.addEventListener('click', function(){
        twoUseraOrOne = 2;
        replay();
    })
    mainBlock.addEventListener('click', function (e) {
        if (e.target.className === 'box'){
            if(twoUseraOrOne == 2){
                if(e.target.innerHTML === ''){
                    if(iteration){
                        e.target.innerHTML = 'X';
                        e.target.style.color = 'tomato';
                        checkWinner();
                        iteration = !iteration;
                    }
                    else{
                        e.target.innerHTML = 'O';
                        e.target.style.color = 'green';
                        checkWinner();
                        iteration = !iteration;
                    }
                }
                else{
                    alert('это поле занято!');
                }
            }
            if(twoUseraOrOne == 1) {
                if (e.target.innerHTML === '') {
                    if (iteration) {
                        e.target.innerHTML = 'X';
                        e.target.style.color = 'tomato';
                        checkWinner();
                        console.log(checkWinner());
                        iteration = !iteration;
                        lastXChoise = parseInt(e.target.id);
                        setTimeout(roboGame, 70)
                    }
                }
            }
        }
    })
    function roboGame(){
        if(winner === ''){

            if(bloks[4].innerHTML === ''){
                bloks[4].innerHTML = 'O';
            }
            else if(bloks[0].innerHTML == 'O' && bloks[1].innerHTML == 'O' && bloks[2].innerHTML == ''){
                bloks[2].innerHTML = 'O';
            }else if(bloks[1].innerHTML == 'O' && bloks[2].innerHTML == 'O' && bloks[0].innerHTML == ''){
                bloks[0].innerHTML = 'O';
            }else if(bloks[3].innerHTML == 'O' && bloks[4].innerHTML == 'O' && bloks[5].innerHTML == ''){
                bloks[5].innerHTML = 'O';
            }else if(bloks[4].innerHTML == 'O' && bloks[5].innerHTML == 'O' && bloks[3].innerHTML == ''){
                bloks[3].innerHTML = 'O';
            }else if(bloks[6].innerHTML == 'O' && bloks[7].innerHTML == 'O' && bloks[8].innerHTML == ''){
                bloks[8].innerHTML = 'O';
            }else if(bloks[7].innerHTML == 'O' && bloks[8].innerHTML == 'O' && bloks[6].innerHTML == ''){
                bloks[6].innerHTML = 'O';
            }else if(bloks[0].innerHTML == 'O' && bloks[3].innerHTML == 'O' && bloks[6].innerHTML == ''){
                bloks[6].innerHTML = 'O';
            }else if(bloks[3].innerHTML == 'O' && bloks[6].innerHTML == 'O' && bloks[0].innerHTML == ''){
                bloks[0].innerHTML = 'O';
            }else if(bloks[1].innerHTML == 'O' && bloks[4].innerHTML == 'O' && bloks[7].innerHTML == ''){
                bloks[7].innerHTML = 'O';
            }else if(bloks[4].innerHTML == 'O' && bloks[7].innerHTML == 'O' && bloks[1].innerHTML == ''){
                bloks[1].innerHTML = 'O';
            }else if(bloks[2].innerHTML == 'O' && bloks[5].innerHTML == 'O' && bloks[8].innerHTML == ''){
                bloks[8].innerHTML = 'O';
            }else if(bloks[5].innerHTML == 'O' && bloks[8].innerHTML == 'O' && bloks[2].innerHTML == ''){
                bloks[2].innerHTML = 'O';
            }else if(bloks[0].innerHTML == 'O' && bloks[4].innerHTML == 'O' && bloks[8].innerHTML == ''){
                bloks[8].innerHTML = 'O';
            }else if(bloks[4].innerHTML == 'O' && bloks[8].innerHTML == 'O' && bloks[0].innerHTML == ''){
                bloks[0].innerHTML = 'O'
            }else if(bloks[2].innerHTML == 'O' && bloks[4].innerHTML == 'O' && bloks[6].innerHTML == ''){
                bloks[6].innerHTML = 'O';
            }else if(bloks[4].innerHTML == 'O' && bloks[6].innerHTML == 'O' && bloks[2].innerHTML == ''){
                bloks[2].innerHTML = 'O';
            }else if(bloks[0].innerHTML == 'O' && bloks[6].innerHTML == 'O' && bloks[3].innerHTML == ''){
                bloks[3].innerHTML = 'O';
            }else if(bloks[0].innerHTML == 'O' && bloks[2].innerHTML == 'O' && bloks[1].innerHTML == ''){
                bloks[1].innerHTML = 'O'
            }else if(bloks[2].innerHTML == 'O' && bloks[8].innerHTML == 'O' && bloks[5].innerHTML == ''){
                bloks[5].innerHTML = 'O';
            }else if(bloks[6].innerHTML == 'O' && bloks[8].innerHTML == 'O' && bloks[7].innerHTML == ''){
                bloks[7].innerHTML = 'O';
            }else {
                if(bloks[0].innerHTML == 'X' && bloks[1].innerHTML == 'X' && bloks[2].innerHTML == ''){
                    bloks[2].innerHTML = 'O';
                }else if(bloks[1].innerHTML == 'X' && bloks[2].innerHTML == 'X' && bloks[0].innerHTML == ''){
                    bloks[0].innerHTML = 'O';
                }else if(bloks[3].innerHTML == 'X' && bloks[4].innerHTML == 'X' && bloks[5].innerHTML == ''){
                    bloks[5].innerHTML = 'O';
                }else if(bloks[4].innerHTML == 'X' && bloks[5].innerHTML == 'X' && bloks[3].innerHTML == ''){
                    bloks[3].innerHTML = 'O';
                }else if(bloks[6].innerHTML == 'X' && bloks[7].innerHTML == 'X' && bloks[8].innerHTML == ''){
                    bloks[8].innerHTML = 'O';
                }else if(bloks[7].innerHTML == 'X' && bloks[8].innerHTML == 'X' && bloks[6].innerHTML == ''){
                    bloks[6].innerHTML = 'O';
                }else if(bloks[0].innerHTML == 'X' && bloks[3].innerHTML == 'X' && bloks[6].innerHTML == ''){
                    bloks[6].innerHTML = 'O';
                }else if(bloks[3].innerHTML == 'X' && bloks[6].innerHTML == 'X' && bloks[0].innerHTML == ''){
                    bloks[0].innerHTML = 'O';
                }else if(bloks[1].innerHTML == 'X' && bloks[4].innerHTML == 'X' && bloks[7].innerHTML == ''){
                    bloks[7].innerHTML = 'O';
                }else if(bloks[4].innerHTML == 'X' && bloks[7].innerHTML == 'X' && bloks[1].innerHTML == ''){
                    bloks[1].innerHTML = 'O';
                }else if(bloks[2].innerHTML == 'X' && bloks[5].innerHTML == 'X' && bloks[8].innerHTML == ''){
                    bloks[8].innerHTML = 'O';
                }else if(bloks[5].innerHTML == 'X' && bloks[8].innerHTML == 'X' && bloks[2].innerHTML == ''){
                    bloks[2].innerHTML = 'O';
                }else if(bloks[0].innerHTML == 'X' && bloks[4].innerHTML == 'X' && bloks[8].innerHTML == ''){
                    bloks[8].innerHTML = 'O';
                }else if(bloks[4].innerHTML == 'X' && bloks[8].innerHTML == 'X' && bloks[0].innerHTML == ''){
                    bloks[0].innerHTML = 'O'
                }else if(bloks[2].innerHTML == 'X' && bloks[4].innerHTML == 'X' && bloks[6].innerHTML == ''){
                    bloks[6].innerHTML = 'O';
                }else if(bloks[4].innerHTML == 'X' && bloks[6].innerHTML == 'X' && bloks[2].innerHTML == ''){
                    bloks[2].innerHTML = 'O';
                }else if(bloks[0].innerHTML == 'X' && bloks[6].innerHTML == 'X' && bloks[3].innerHTML == ''){
                    bloks[3].innerHTML = 'O';
                }else if(bloks[0].innerHTML == 'X' && bloks[2].innerHTML == 'X' && bloks[1].innerHTML == ''){
                    bloks[1].innerHTML = 'O'
                }else if(bloks[2].innerHTML == 'X' && bloks[8].innerHTML == 'X' && bloks[5].innerHTML == ''){
                    bloks[5].innerHTML = 'O';
                }else if(bloks[6].innerHTML == 'X' && bloks[8].innerHTML == 'X' && bloks[7].innerHTML == ''){
                    bloks[7].innerHTML = 'O';
                }else if(bloks[2].innerHTML == 'X' && bloks[6].innerHTML == 'X' && bloks[1].innerHTML == ''){
                    bloks[1].innerHTML = 'O';
                }else if(bloks[0].innerHTML == 'X' && bloks[8].innerHTML == 'X' && bloks[7].innerHTML == ''){
                    bloks[7].innerHTML = 'O';
                }else if(bloks[2].innerHTML == 'X' && bloks[7].innerHTML == 'X' && bloks[8].innerHTML == ''){
                    bloks[8].innerHTML = 'O';
                }else if(bloks[0].innerHTML == 'X' && bloks[7].innerHTML == 'X' && bloks[6].innerHTML == ''){
                    bloks[6].innerHTML = 'O';
                }else if(bloks[0].innerHTML == 'X' && bloks[5].innerHTML == 'X' && bloks[2].innerHTML == ''){
                    bloks[2].innerHTML = 'O';
                }else if(bloks[6].innerHTML == 'X' && bloks[5].innerHTML == 'X' && bloks[8].innerHTML == ''){
                    bloks[8].innerHTML = 'O';
                }else if(bloks[8].innerHTML == 'X' && bloks[1].innerHTML == 'X' && bloks[2].innerHTML == ''){
                    bloks[2].innerHTML = 'O';
                }else if(bloks[6].innerHTML == 'X' && bloks[1].innerHTML == 'X' && bloks[0].innerHTML == ''){
                    bloks[0].innerHTML = 'O';
                }else if(bloks[8].innerHTML == 'X' && bloks[3].innerHTML == 'X' && bloks[6].innerHTML == ''){
                    bloks[6].innerHTML = 'O';
                }else if(bloks[2].innerHTML == 'X' && bloks[3].innerHTML == 'X' && bloks[0].innerHTML == ''){
                    bloks[0].innerHTML = 'O';
                }else if(bloks[5].innerHTML == 'X' && bloks[7].innerHTML == 'X' && bloks[8].innerHTML == ''){
                    bloks[8].innerHTML = 'O';
                }else {
                    AIchoise();
                }
            }
        }
        /*
        	012
          	345
          	678
         */
        bloks.forEach((item) => {
            if(item.innerHTML === 'O'){
                item.style.color = 'green';
            }
        })
        iteration = !iteration;
        //alert('open');
        checkWinner();
    }
    function AIchoise(){
        let diagonal = [0,2,8,6];
        let horisontal = [1,3,5,7];
        let flag = false;
        console.log(lastXChoise)
        diagonal.forEach((item, index) => {
            if(item === lastXChoise){
                if(index <= 1 && bloks[diagonal[index+2]].innerHTML === ''){
                    bloks[diagonal[index+2]].innerHTML = 'O';
                    flag = !flag;
                }
                if(index >= 2 && bloks[diagonal[index-2]].innerHTML === ''){
                    bloks[diagonal[index-2]].innerHTML = 'O';
                    flag = !flag;
                }
            }
        })
        diagonal.forEach((item) => {
            if(!flag){
                if(bloks[item].innerHTML === ''){
                    bloks[item].innerHTML = 'O';
                    flag = !flag;
                }
            }
        })
        horisontal.forEach((item) => {
            if(!flag){
                if(bloks[item].innerHTML === ''){
                    bloks[item].innerHTML = 'O';
                    flag = !flag;
                }
            }
        })

    }

    //012
    //345
    //678
    buttonReplay.addEventListener('click', replay);
    function replay() {
        bloks.forEach((item) => {
            item.innerHTML = '';
        })
        HOne.innerHTML = 'X and O';
        winner = '';
        iteration = true;
    }
    function checkWinner() {
        const arr = ['X','O'];
        arr.forEach((item) => {
            if(bloks[0].innerHTML == item && bloks[1].innerHTML == item && bloks[2].innerHTML == item){
                HOne.innerHTML = item + ' - Winner!';
                winner = item;
            }if(bloks[3].innerHTML == item && bloks[4].innerHTML == item && bloks[5].innerHTML == item){
                HOne.innerHTML = item + ' - Winner!';
                winner = item;
            }if(bloks[6].innerHTML == item && bloks[7].innerHTML == item && bloks[8].innerHTML == item){
                HOne.innerHTML = item + ' - Winner!';
                winner = item;
            }if(bloks[0].innerHTML == item && bloks[3].innerHTML == item && bloks[6].innerHTML == item){
                HOne.innerHTML = item + ' - Winner!';
                winner = item;
            }if(bloks[1].innerHTML == item && bloks[4].innerHTML == item && bloks[7].innerHTML == item){
                HOne.innerHTML = item + ' - Winner!';
                winner = item;
            }if(bloks[2].innerHTML == item && bloks[5].innerHTML == item && bloks[8].innerHTML == item){
                HOne.innerHTML = item + ' - Winner!';
                winner = item;
            }if(bloks[0].innerHTML == item && bloks[4].innerHTML == item && bloks[8].innerHTML == item){
                HOne.innerHTML = item + ' - Winner!';
                winner = item;
            }if(bloks[2].innerHTML == item && bloks[4].innerHTML == item && bloks[6].innerHTML == item){
                HOne.innerHTML = item + ' - Winner!';
                winner = item;
            }
        })
    }
}