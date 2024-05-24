document.addEventListener('DOMContentLoaded', (event) => {
    let counter = 1;
    let authorValue, titleValue, pagesValue;

    let bookButton = document.querySelector('.addBook');
    let form = document.querySelector('.form');
    let table = document.querySelector('.table tbody');
    let submitButton = document.querySelector('.submit');
    let cancelButton = document.querySelector('.cancel');

    bookButton.addEventListener('click', function(event) {
        form.style.display = 'block';
        if (form.style.display === 'block') {
            let author = document.querySelector('#author');
            let title = document.querySelector('#title');
            let pages = document.querySelector('#pages');
            submitButton.addEventListener('click', function(event) {
                event.preventDefault();

                authorValue = author.value;
                titleValue = title.value;
                pagesValue = pages.value;

                let addRow = document.createElement('tr');
                table.appendChild(addRow);

                let addNumber = document.createElement('td');
                addNumber.innerText = `${++counter}`;
                addRow.appendChild(addNumber);

                let addColumnAuthor = document.createElement('td');
                addColumnAuthor.textContent = authorValue;
                addRow.appendChild(addColumnAuthor);

                let addColumnTitle = document.createElement('td');
                addColumnTitle.textContent = titleValue;
                addRow.appendChild(addColumnTitle);

                let addColumnPages = document.createElement('td');
                addColumnPages.textContent = pagesValue;
                addRow.appendChild(addColumnPages);

                let addCheckboxButton = document.createElement('td');
                let CheckboxButton = document.createElement('input');
                CheckboxButton.setAttribute('type', 'checkbox');
                CheckboxButton.setAttribute('class', 'checkbox');
                addCheckboxButton.appendChild(CheckboxButton);
                addRow.appendChild(addCheckboxButton);

                form.reset();
                form.style.display = 'none';
            });
            cancelButton.addEventListener('click', function(event) {
                event.preventDefault();
                form.style.display = 'none';
            });
        }
    });
});
