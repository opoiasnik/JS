function updateTableWithDataYear(data, table) {
    table.innerHTML = `
        <tr>
            <th>Year of Manufacture</th>
            <th>Count</th>
        </tr>`;

    data.forEach((row) => {
        let newRow = `
            <tr>
                <td>${row.RokVyroby}</td>
                <td>${row.count}</td>
            </tr>`;
        table.innerHTML += newRow;
    });
}

function yearEvent() {
    const input = document.getElementById('yearCount');
    const table = document.querySelector('table');
    let containerTxt = document.querySelector('.containerTxt')
    document.querySelector('.yearCount2').addEventListener('click', function() {
        fetch('http://localhost:3000/getAllYearsWithCounts', { method: 'POST' })
        .then(response => response.json())
        .then(data => updateTableWithDataYear(data, table))
        .catch(error => console.error('Error:', error));
    });

    input.addEventListener('input', function(event) {
        event.preventDefault();
        const year = input.value;

        fetch('http://localhost:3000/countVehiclesByYear', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ year })
        })
        .then(response => response.json())
        .then(data => {
            // Вывод количества найденных результатов
            // containerTxt.textContent = `${data[0].count} results found. `;
            updateTableWithDataYear(data, table);
        })
        .catch(error => console.error('Error:', error));
    });
}

export { yearEvent }
