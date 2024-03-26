document.addEventListener('DOMContentLoaded', (event) => {
    let isGameStopped = false;
   let xScore = document.querySelector('.xScore');
   let oScore = document.querySelector('.oScore');
    let xScoreCounter = 0;
    let oScoreCounter = 0;
   xScore.textContent =    `X score : ${xScoreCounter}`
   oScore.textContent =    `O score : ${oScoreCounter}` 

    let playerX = true, player0 = false;
    let array = []
    array.length = 8;
    let clickDivArray = document.querySelectorAll('.clickable');
    
    clickDivArray.forEach(function(element){

        element.addEventListener('click', function(){
            
            if(isGameStopped){
                alert('Press restart!');
                return;
            }
            let index = element.getAttribute('data-index');
            if(element.textContent.trim() == ''){

                if(playerX){
                    array[index] = 'X';
                    element.textContent = 'X';
                    playerX = false;
                    player0 = true;
                }else if(player0){
                    array[index] = 'O';
                    element.textContent = 'O';
                    player0 = false;
                    playerX = true;
                }
            }
            checkWinner();
        });
    });
    
   

    let restartButton = document.querySelector('.restart');
   restartButton.addEventListener('click', function(event){
    isGameStopped = false;
        clickDivArray.forEach(function(element){
            element.textContent = ''
            element.style.animation = 'none'
        })
        xScore.style.animation = 'none'
        oScore.style.animation = 'none'
   })


   let endButton = document.querySelector('.end');

   endButton.addEventListener('click', function(){
    location.reload();
   })

    function checkWinner() {
        let positions = [
            document.querySelector('.contentFirst'),
            document.querySelector('.contentSecond'),
            document.querySelector('.contentThird'),
            document.querySelector('.contentFourth'),
            document.querySelector('.contentFifth'),
            document.querySelector('.contentSix'),
            document.querySelector('.contentSeven'),
            document.querySelector('.contentEight'),
            document.querySelector('.contentNine')
        ];
    
        const winningCombinations = [
            [0, 1, 2], 
            [3, 4, 5], 
            [6, 7, 8], 
            [0, 3, 6], 
            [1, 4, 7], 
            [2, 5, 8], 
            [0, 4, 8], 
            [2, 4, 6]  
        ];
    
        for (let combo of winningCombinations) {
            if (positions[combo[0]].textContent === 'X' && positions[combo[1]].textContent === 'X' && positions[combo[2]].textContent === 'X') {
                positions[combo[0]].style.animation = 'blick_red 3s infinite'; 
                positions[combo[1]].style.animation = 'blick_red 3s infinite';
                positions[combo[2]].style.animation = 'blick_red 3s infinite';

                xScoreCounter++;
                xScore.textContent = `X score : ${xScoreCounter}`
                xScore.style.animation = 'addPoint_red 3s '
               
                isGameStopped = true;
                
                return; 
            } else if (positions[combo[0]].textContent === 'O' && positions[combo[1]].textContent === 'O' && positions[combo[2]].textContent === 'O') {
                positions[combo[0]].style.animation = 'blick_green 3s infinite'; 
                positions[combo[1]].style.animation = 'blick_green 3s infinite';
                positions[combo[2]].style.animation = 'blick_green 3s infinite';

                oScoreCounter++;
                oScore.textContent = `O score : ${oScoreCounter}`
                oScore.style.animation = 'addPoint_green 3s '
                isGameStopped = true;
                return; 
            }
    
           
        }
    }
    
});
