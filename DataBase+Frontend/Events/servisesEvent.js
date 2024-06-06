function updateTableWithServiceData(data, table) {
    // Очищаем таблицу и создаем заголовки для новых данных
    table.innerHTML = `<tr>
        <th>Service Name</th>
        <th>Cars Count</th>
    </tr>`;

    // Заполняем таблицу данными
    data.forEach((item) => {
        const newRow = `<tr>
            <td>${item.NazovServisu}</td>
            <td>${item.count}</td>
        </tr>`;
        table.innerHTML += newRow;
    });
}
function searchByService() {
    const input = document.getElementById('servisyCount');
    const table = document.querySelector('table');
    document.querySelector('.servisyCount2').addEventListener('click', function() {
        fetch('http://localhost:3000/getAllServicesWithCounts', { method: 'POST' })
        .then(response => response.json())
        .then(data => updateTableWithServiceData(data, table))
        .catch(error => console.error('Error:', error));
    });

    input.addEventListener('input', function() {
        const serviceID = this.value;
        if (serviceID) {
            fetch('http://localhost:3000/countVehiclesByService', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ serviceID })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.length === 0 || Object.keys(data).length === 0) { 
                    table.innerHTML = '<tr><td colspan="2">No vehicles found for the provided service ID.</td></tr>'; 
                } else {
                    updateTableWithServiceData(data, table); 
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    });
}
export {searchByService}