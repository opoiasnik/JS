function addDataFromForm() {
    const form = document.querySelector('.addVozidlo');
    let addVozidloButton = document.querySelector('.addVozidloButton')
    let deleteVozidloButton = document.querySelector('.deleteVozidloButton')
   

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        addVozidloButton.style.display = 'none'
        deleteVozidloButton.style.display = 'none'
        
      
        const typ = document.getElementById('typ').value;
        const vyrobca = document.getElementById('vyrobca').value;
        const rokVyroby = document.getElementById('rok').value;
        const registracneCislo = document.getElementById('reg').value;
        const technickaSpravnost = document.getElementById('tech').value;
        const jazdneVlastnosti = document.getElementById('vlastnosti').value;
        const aktualnaPoloha = document.getElementById('poloha').value;
        const zamestnanecID = document.getElementById('zamestnanec').value;
        const servisID = document.getElementById('servis').value;
        const datumOpravy = document.getElementById('date').value;
       
        const naklady = document.getElementById('naklady').value;

        
        const formDataObj = {
            typ, 
            vyrobca, 
            rokVyroby, 
            registracneCislo, 
            technickaSpravnost, 
            jazdneVlastnosti, 
            aktualnaPoloha, 
            zamestnanecID, 
            servisID, 
            datumOpravy, 
            naklady
        };

      
        fetch('http://localhost:3000/addVozidlo', {
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
            alert('Vozidlo added sucsesfully')
            console.log(data); 
            form.reset(); 
            form.style.display = 'none'
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
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

 export {addDataFromForm, updateDisplay}