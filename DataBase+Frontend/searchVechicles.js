function updateTableWithData(data, table) {
    console.log( data);
    let tableHTML = `<tr>
        <th>Vozidlo ID</th>
        <th>Typ</th>
        <th>Vyrobca</th>
        <th>Rok vyroby</th>
        <th>Registracne cislo</th>
        <th>Technicka spravnost</th>
        <th>Jazdne vlastnosti</th>
        <th>Aktualna poloha</th>
        <th>Zamestnanec ID</th>
    </tr>`;

   
    if(Array.isArray(data)){

        data.forEach(row => {
            tableHTML += `<tr>
                <td>${row.VozidloID}</td>
                <td>${row.Typ}</td>
                <td>${row.Vyrobca}</td>
                <td>${row.RokVyroby}</td>
                <td>${row.RegistracneCislo}</td>
                <td>${row.TechnickaSpravnost}</td>
                <td>${row.JazdneVlastnosti}</td>
                <td>${row.AktualnaPoloha}</td>
                <td>${row.ZamestnanecID}</td>
            </tr>`;
        });
    }

    
    table.innerHTML = tableHTML;
}

function searchByVehicle() {
    const inputs = document.querySelectorAll('#year, #manufacturer, #zamestnanecID');
    inputs.forEach(input => input.addEventListener('input', function(event) {
        event.preventDefault();
      
        const year = document.getElementById('year').value;
        const manufacturer = document.getElementById('manufacturer').value;
        const employeeID = document.getElementById('zamestnanecID').value;
        const table = document.querySelector('table');
      
        const body = {
          year: year,
          manufacturer: manufacturer,
          employeeID: employeeID ? parseInt(employeeID) : null
        };

        fetch('http://localhost:3000/search', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        })
        .then(response => {
            if (!response.ok) { 
                table.innerHTML = '<tr><td>Nothing was found</td></tr>'; 
            } else {
                
                return response.json()
            }
        })
        .then(data => {
            if (!data) { 
                table.innerHTML = '<tr><td>Nothing was found</td></tr>'; 
            } else {
                updateTableWithData(data, table); 
            }
        })
      
    }));
}

export { searchByVehicle };
