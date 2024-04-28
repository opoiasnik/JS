function updateCestujuciTable(data, table) {
    table.innerHTML = `<tr>
        <th>Passenger ID</th>
        <th>Name</th>
        <th>Contact Info</th>
    </tr>`;

    data.forEach((item) => {
        const newRow = `<tr>
            <td>${item.CestujuciID}</td>
            <td>${item.Meno}</td>
            <td>${item.KontaktneUdaje}</td>
        </tr>`;
        table.innerHTML += newRow;
    });
}
function addCestujuci() {
    const menoInput = document.getElementById('menoC');
    const kontaktneUdajeInput = document.getElementById('contactC');
    const table = document.querySelector('table');

    
        const body = {
            meno: menoInput.value,
            kontaktneUdaje: kontaktneUdajeInput.value,
        };


        fetch('http://localhost:3000/addCestujuci', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add passenger');
            }
            return response.json();
        })
        .then(() => {
            alert('Passenger added successfully');
            fetch('http://localhost:3000/data')  // Assuming this endpoint fetches all Cestujuci
                .then(response => response.json())
                .then(data => updateCestujuciTable(data.Cestujuci, table))
                
        })
        .catch(error => {
           
        });
   
}

function deleteCestujuci() {
    const cestujuciIDInput = document.getElementById('idC');
    const table = document.querySelector('table');

   
        const body = {
            cestujuciID: parseInt(cestujuciIDInput.value, 10)
        };

        fetch('http://localhost:3000/deleteCestujuci', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete passenger');
            }
            return response.json();
        })
        .then(() => {
            alert('Passenger deleted successfully');
            fetch('http://localhost:3000/data')  // Assuming this endpoint fetches all Cestujuci
                .then(response => response.json())
                .then(data => updateCestujuciTable(data.Cestujuci, table))
               
        })
        .catch(error => {
           
        });
    
}
export { addCestujuci, deleteCestujuci }
