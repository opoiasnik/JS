function searchByManufacturer() {
    const input = document.getElementById('vyrobcaCount');
    const table = document.querySelector('table');
    let containerTxt = document.querySelector('.containerTxt');
    document.querySelector('.vyrobcaCount2').addEventListener('click', function() {
        fetch('http://localhost:3000/getAllManufacturersWithCounts', { method: 'POST' })
        .then(response => response.json())
        .then(data => updateTableWithData(data, table))
        .catch(error => console.error('Error:', error));
    });

    input.addEventListener('input', function(event) {
        event.preventDefault();
        const manufacturer = input.value;

        fetch('http://localhost:3000/countVehiclesByManufacturer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ manufacturer })
        })
        .then(response => response.json())
        .then(data => {
            
            // Обновляем информацию о количестве результатов
            // containerTxt.textContent = `${data[0].count} results found. `;
            updateTableWithData(data, table);
        })
        .catch(error => console.error('Error:', error));
    });
}

function updateTableWithData(data, table) {
    // Обновляем заголовки таблицы для отображения марки и количества
    table.innerHTML = `
        <tr>
            <th>Manufacturer</th>
            <th>Count</th>
        </tr>`;

    // Добавляем данные в таблицу
    data.forEach((row) => {
        let newRow = `
            <tr>
                <td>${row.Vyrobca}</td>
                <td>${row.count}</td>
            </tr>`;
        table.innerHTML += newRow;
    });
}

export { searchByManufacturer };
