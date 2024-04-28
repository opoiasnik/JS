function updateRezervacieTable(data, table) {
    table.innerHTML = `<tr>
        <th>Reservation ID</th>
        <th>Vehicle ID</th>
        <th>Passenger ID</th>
        <th>Start Time</th>
        <th>End Time</th>
    </tr>`;

    data.forEach((item) => {
        const newRow = `<tr>
            <td>${item.RezervaciaID}</td>
            <td>${item.VozidloID}</td>
            <td>${item.CestujuciID}</td>
            <td>${item.DatumCasOd}</td>
            <td>${item.DatumCasDo}</td>
        </tr>`;
        table.innerHTML += newRow;
    });
}
function addRezervacia() {
    const vozidloIDInput = document.getElementById('vozidloIdC');
    const cestujuciIDInput = document.getElementById('cestujuciIdC');
    const datumCasOdInput = document.getElementById('dateOdC');
    const datumCasDoInput = document.getElementById('dateDoC');
    const table = document.querySelector('table');

   
        const body = {
            vozidloID: parseInt(vozidloIDInput.value, 10),
            cestujuciID: parseInt(cestujuciIDInput.value, 10),
            datumCasOd: datumCasOdInput.value,
            datumCasDo: datumCasDoInput.value
        };

        fetch('http://localhost:3000/addRezervacia', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to add reservation');
            }
            return response.json();
        })
        .then(() => {
            alert('Reservation added successfully');
            fetch('http://localhost:3000/data')  // Assuming this endpoint fetches all Rezervacie
                .then(response => response.json())
                .then(data => updateRezervacieTable(data.Rezervacie, table))
                
        })
        .catch(error => {
       
        });
   
}

function deleteRezervacia() {
    const rezervaciaIDInput = document.getElementById('idRC');
    const table = document.querySelector('table');

   
        const body = {
            rezervaciaID: parseInt(rezervaciaIDInput.value, 10)
        };

        fetch('http://localhost:3000/deleteRezervacia', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to delete reservation');
            }
            return response.json();
        })
        .then(() => {
            alert('Reservation deleted successfully');
            fetch('http://localhost:3000/data')  // Assuming this endpoint fetches all Rezervacie
                .then(response => response.json())
                .then(data => updateRezervacieTable(data.Rezervacie, table))
               
        })
        .catch(error => {
            
        });
   
}
export { addRezervacia, deleteRezervacia }
