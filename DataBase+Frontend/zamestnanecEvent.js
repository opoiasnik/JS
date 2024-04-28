function updateTableWithData(data, table) {
    // Очищаем таблицу и создаем заголовки для новых данных
    table.innerHTML = `<tr>
        <th>Employee Name</th>
        <th>Cars Count</th>
    </tr>`;

    // Заполняем таблицу данными
    data.forEach((item) => {
        const newRow = `<tr>
            <td>${item.Meno}</td>
            <td>${item.count}</td>
        </tr>`;
        table.innerHTML += newRow;
    });
}



function searchByEmployee() {
    const input = document.getElementById('zamestnanecCount');
    const table = document.querySelector('table');
    document.querySelector('.zamestnanecCount2').addEventListener('click', function() {
        fetch('http://localhost:3000/getAllEmployeesWithCounts', { method: 'POST' })
        .then(response => response.json())
        .then(data => updateTableWithData(data, table))
        .catch(error => console.error('Error:', error));
    });

    input.addEventListener('input', function() {
        const employeeID = this.value;
        if (employeeID) {
            fetch('http://localhost:3000/countVehiclesByEmployee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ employeeID })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data.length === 0 || Object.keys(data).length === 0) { 
                    table.innerHTML = '<tr><td colspan="2">No vehicles found for the provided employee ID.</td></tr>'; 
                } else {
                    updateTableWithData(data, table); 
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        }
    });
}




 export {searchByEmployee}