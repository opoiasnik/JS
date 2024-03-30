

document.addEventListener('DOMContentLoaded', function(){

    let priority = 0;
    class AddPlan{
        constructor(name, description, date, priority){
            this.name = name;
            this.description = description;
            this.date = date;
            this.priority = priority;
        }
    }


    let array = [];
    let addButton = document.querySelector('.addButton');
    let isDisplayBackground = document.querySelector('.formBackground');
    let headerMain = document.querySelector('.headerMain');



    addButton.addEventListener('click', function(){
        
        
        if ( isDisplayBackground.style.display === 'none') {
            
            isDisplayBackground.style.display = 'block';
            isDisplayBackground.style.animation = 'appearance 1s ease-in-out'
        }
        
    })

    let submitButton = document.querySelector('.submitButton');
    submitButton.addEventListener('click', function(event){
        event.preventDefault();
        
            let nameValue = document.querySelector('#name').value;
            let descriptionValue = document.querySelector('#description').value;
            let dateValue = document.querySelector('#date').value;
            let obj = new AddPlan(nameValue, descriptionValue, dateValue, priority);
            array.push(obj);
             let index = array.length - 1;

            
            updateDOM();
             document.querySelector('.form').reset();
             priority++;

            
            isDisplayBackground.style.display = 'none'; 

    })





    function addEventListeners(){
        let upperImg = document.querySelectorAll('.upperImg')
        let downImg = document.querySelectorAll('.downImg')
        let deleteImg = document.querySelectorAll('.delete');
        let resetButton = document.querySelector('.rightHeader');

        resetButton.addEventListener('click', function(){
            location.reload();
        })
    
        upperImg.forEach( function(element){
                element.addEventListener('click', function(){
                    let indexElement = element.getAttribute('data-id');
    
                    if(indexElement-1 >=0){

                        let buffer = array[indexElement-1];
                        array[indexElement-1] = array[indexElement];
                        array[indexElement] = buffer;
                    }
                    
                   writeNew();
                })
        })
    
        downImg.forEach(function(element){
            element.addEventListener('click', function(){
                let indexElement = parseInt(element.getAttribute('data-id'));
        
                if(indexElement + 1 < array.length){
                    let buffer = array[indexElement];
                    array[indexElement] = array[indexElement + 1];
                    array[indexElement + 1] = buffer;
        
                    writeNew(); 
                }
            })
        })


        deleteImg.forEach(element => {
            element.addEventListener('click', function(){
                let indexElement = parseInt(element.getAttribute('data-id'));
                let itemToDelete = document.querySelector(`.mainList[data-id="${indexElement}"]`);
                
                // Удаляем элемент из DOM
                if (itemToDelete) {
                    itemToDelete.remove();
                }
        
                // Удаляем объект из массива
                if (indexElement > -1 && indexElement < array.length) {
                    array.splice(indexElement, 1);
                }
        
                // Обновляем DOM после удаления
               
                 updateDOM();
            })
        });
        
        
        
    }

    function updateDOM() {
        
        while (headerMain.children.length > 1) {
            headerMain.removeChild(headerMain.lastChild);
        }
    
        array.forEach((element, index) => {
            let existingList = document.createElement('ul');
            existingList.className = 'mainList';
            existingList.setAttribute('data-id', index);
    
            let newListItem1 = document.createElement('li');
            newListItem1.textContent = element.name;
            existingList.appendChild(newListItem1);
    
            let newListItem2 = document.createElement('li');
            newListItem2.textContent = element.description;
            existingList.appendChild(newListItem2);
    
            let newListItem3 = document.createElement('li');
            newListItem3.textContent = element.date;
            existingList.appendChild(newListItem3);
    
            let newListItem5 = document.createElement('img');
            newListItem5.className = 'upperImg';
            newListItem5.setAttribute('data-id', index);
            newListItem5.src = 'up-arrow.png';
            existingList.appendChild(newListItem5);
    
            let newListItem6 = document.createElement('img');
            newListItem6.className = 'downImg';
            newListItem6.setAttribute('data-id', index);
            newListItem6.src = 'down-arrow.png';
            existingList.appendChild(newListItem6);
    
            let newListItem7 = document.createElement('img');
            newListItem7.className = 'delete';
            newListItem7.setAttribute('data-id', index);
            newListItem7.src = 'delete.png';
            existingList.appendChild(newListItem7);
    
            headerMain.appendChild(existingList);
        });
    
        addEventListeners();
    }
    
    
    


function writeNew(){
  let listLi = headerMain.querySelectorAll('li');
  listLi.forEach((element, index) => {
    if(index>3){

        element.remove();
    }
    
  })
let listImg = headerMain.querySelectorAll('img');
listImg.forEach((element, index) => {
    element.remove();
})

  array.forEach((element, index) => {
    let existingList = document.querySelector(`ul[data-id="${index}"]`)
    let newListItem1 = document.createElement('li');
            newListItem1.textContent = element.name;
            existingList.appendChild(newListItem1);
    
            let newListItem2 = document.createElement('li');
            newListItem2.textContent = element.description;
            existingList.appendChild(newListItem2);
    
            let newListItem3 = document.createElement('li');
            newListItem3.textContent = element.date;
            existingList.appendChild(newListItem3);
    
            // let newListItem4 = document.createElement('li');
            // newListItem4.textContent = element.priority;
            // existingList.appendChild(newListItem4);
    
        
            let newListItem5 = document.createElement('img');
            newListItem5.className = 'upperImg';
            newListItem5.setAttribute('data-id', index);
            newListItem5.src = 'up-arrow.png';
            existingList.appendChild(newListItem5);
    
            let newListItem6 = document.createElement('img');
            newListItem6.className = 'downImg';
            newListItem6.setAttribute('data-id', index);
            newListItem6.src = 'down-arrow.png';
            existingList.appendChild(newListItem6);


            let newListItem7 = document.createElement('img');
            newListItem7.className = 'delete';
            newListItem7.setAttribute('data-id', index);
            newListItem7.src = 'delete.png';
            existingList.appendChild(newListItem7);
  })
  addEventListeners();


  
}
    
addEventListeners();


})
