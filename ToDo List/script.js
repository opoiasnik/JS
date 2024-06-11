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
    let taskContainer = document.querySelector('.taskContainer');

    addButton.addEventListener('click', function(){
        if (isDisplayBackground.style.display === 'none') {
            isDisplayBackground.style.display = 'block';
            isDisplayBackground.style.animation = 'appearance 1s ease-in-out';
        }
    });

    let submitButton = document.querySelector('.submitButton');
    submitButton.addEventListener('click', function(event){
        event.preventDefault();
        let nameValue = document.querySelector('#name').value;
        let descriptionValue = document.querySelector('#description').value;
        let dateValue = document.querySelector('#date').value;
        let obj = new AddPlan(nameValue, descriptionValue, dateValue, priority);
        array.push(obj);
        priority++;
        updateDOM();
        document.querySelector('.form').reset();
        isDisplayBackground.style.display = 'none';
    });

    function addEventListeners(){
        let upperImg = document.querySelectorAll('.upperImg');
        let downImg = document.querySelectorAll('.downImg');
        let deleteImg = document.querySelectorAll('.delete');
        let resetButton = document.querySelector('.rightHeader');

        resetButton.addEventListener('click', function(){
            location.reload();
        });

        upperImg.forEach(function(element){
            element.addEventListener('click', function(){
                let indexElement = element.getAttribute('data-id');
                if (indexElement - 1 >= 0) {
                    let buffer = array[indexElement - 1];
                    array[indexElement - 1] = array[indexElement];
                    array[indexElement] = buffer;
                }
                updateDOM();
            });
        });

        downImg.forEach(function(element){
            element.addEventListener('click', function(){
                let indexElement = parseInt(element.getAttribute('data-id'));
                if (indexElement + 1 < array.length) {
                    let buffer = array[indexElement];
                    array[indexElement] = array[indexElement + 1];
                    array[indexElement + 1] = buffer;
                    updateDOM();
                }
            });
        });

        deleteImg.forEach(element => {
            element.addEventListener('click', function(){
                let indexElement = parseInt(element.getAttribute('data-id'));
                array.splice(indexElement, 1);
                updateDOM();
            });
        });
    }

    function updateDOM() {
        taskContainer.innerHTML = '';

        array.forEach((element, index) => {
            let taskRow = document.createElement('div');
            taskRow.className = 'taskRow';
            taskRow.setAttribute('data-id', index);

            taskRow.innerHTML = `
                <div>${element.name}</div>
                <div>${element.description}</div>
                <div>${element.date}</div>
                <div>
                    <i class="fas fa-arrow-up upperImg" data-id="${index}"></i>
                    <i class="fas fa-arrow-down downImg" data-id="${index}"></i>
                    <i class="fas fa-trash delete" data-id="${index}"></i>
                </div>
            `;

            taskContainer.appendChild(taskRow);
        });

        addEventListeners();
    }
    
    addEventListeners();
});
