function deleteDataFromForm() {
    const form = document.querySelector('.deleteVozidlo');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(form);
        const formDataObj = {
            vID: formData.get('id') 
        };

        fetch('http://localhost:3000/deleteVozidlo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formDataObj)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(data => {
            console.log(data);
            form.reset();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
        let res =  updateDisplay();
        
        return res
    });
}

async function updateDisplay() {
    let url = 'http://localhost:3000/data';
    try {
        let response = await fetch(url);
        let result = await response.json(); 
        console.log(result);
        return result;
    } catch (error) {
        console.log('Error fetching', error);
    }
}


export { deleteDataFromForm , updateDisplay};
