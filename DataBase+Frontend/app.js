import { addDataFromForm, updateDisplay } from "./addDataForm.js"
import { deleteDataFromForm } from "./deleteDataForm.js"
import { showAside } from "./showAside.js";
import { hideAside } from "./hideAside.js";
 import { yearEvent } from "./yearEvent.js";
  import { searchByManufacturer } from "./manufacturerEvent.js";
 import { searchByEmployee } from "./zamestnanecEvent.js";
 import { searchByVehicle } from "./searchVechicles.js";
 import { searchByService } from "./servisesEvent.js";
 import { addCestujuci } from "./addCustujuci.js";
 import { deleteCestujuci } from "./addCustujuci.js";
 import { addRezervacia } from "./addRezervacia.js";
 import { deleteRezervacia } from "./addRezervacia.js";
 class Cestujuci{
    constructor(array){
        this.array = array
    }

     async update(table,arrayOfDivs,backButton ) {
        let url = 'http://localhost:3000/data';
        let respond = await addRespond(url);
        this.array = respond.Cestujuci;
        console.log('aray:',arrayOfDivs)
        arrayOfDivs.forEach(element => {
            element.style.display = 'none'
        });
        table.innerHTML = ''; 
       
    
        let content = this.array;
        let tableHeader = `<tr>
                              <th>Cestujuci ID</th>
                              <th>Meno</th>
                              <th>Kontaktne Udaje</th>
                           </tr>`;
        table.innerHTML = tableHeader; 
    backButton.style.display = 'block'
        content.forEach((element) => {
            let row = `<tr>
                          <td>${element.CestujuciID}</td>
                          <td>${element.Meno}</td>
                          <td>${element.KontaktneUdaje}</td>
                       </tr>`;
            table.innerHTML += row; 
        });
        table.style.display = 'table'; 
     }
    
}


class Rezervacie{
    constructor(array){
        this.array = array
    }

     async update(table,arrayOfDivs,backButton ) {
        let url = 'http://localhost:3000/data';
        let respond = await addRespond(url);
        this.array = respond.Rezervacie;
        arrayOfDivs.forEach(element => {
            element.style.display = 'none'
        });
        table.innerHTML = ''; 

    
        let content = this.array;
        let tableHeader = `<tr>
                              <th>Rezervacia ID</th>
                              <th>Vozidlo ID</th>
                              <th>Cestujuci ID</th>
                              <th>Datum Cas Od</th>
                              <th>Datum Cas Do</th>
                           </tr>`;
        table.innerHTML = tableHeader; 
    backButton.style.display = 'block'
        content.forEach((element) => {
            let row = `<tr>
                          <td>${element.RezervaciaID}</td>
                          <td>${element.VozidloID}</td>
                          <td>${element.CestujuciID}</td>
                          <td>${element.DatumCasOd}</td>
                          <td>${element.DatumCasDo}</td>
                       </tr>`;
            table.innerHTML += row; 
        });
        table.style.display = 'table'; 
     }
    
}

class Vozidla{
    constructor(array){
        this.array = array
    }

     async update(table,arrayOfDivs,addVozidloButton,deleteVozidloButton,backButton ) {
        let url = 'http://localhost:3000/data';
        let respond = await addRespond(url);
        this.array = respond.Vozidla;
        arrayOfDivs.forEach(element => {
            element.style.display = 'none'
        });
        table.innerHTML = ''; 
        addVozidloButton.style.display = 'block'
        deleteVozidloButton.style.display = 'block'
    
        let content = this.array;
        let tableHeader = `<tr>
                              <th>Vozidlo ID</th>
                              <th>Typ</th>
                              <th>Vyrobca</th>
                              <th>Rok vyroby</th>
                              <th>Registracne cislo</th>
                              <th>Technicka spravnost</th>
                              <th>Jazdne vlastnosti</th>
                              <th>Aktualna poloha</th>
                           </tr>`;
        table.innerHTML = tableHeader; 
    backButton.style.display = 'block'
        content.forEach((element) => {
            let row = `<tr>
                          <td>${element.VozidloID}</td>
                          <td>${element.Typ}</td>
                          <td>${element.Vyrobca}</td>
                          <td>${element.RokVyroby}</td>
                          <td>${element.RegistracneCislo}</td>
                          <td>${element.TechnickaSpravnost}</td>
                          <td>${element.JazdneVlastnosti}</td>
                          <td>${element.AktualnaPoloha}</td>
                       </tr>`;
            table.innerHTML += row; 
        });
        table.style.display = 'table'; 
     }
    
}

class ServisneZaznamy{
    constructor(array){
        this.array = array
    }

    async update(arrayOfDivs, backButton, table){
        let url = 'http://localhost:3000/data';
        let respond = await addRespond(url);
        this.array = respond.ServisneZaznamy;
        arrayOfDivs.forEach(element => {
            element.style.display = 'none'
        });
        table.innerHTML = ''; 
        backButton.style.display = 'block'
        let content = this.array;
        let tableHeader = `<tr>
                              <th>Zaznam ID</th>
                              <th>Vozidlo ID</th>
                              <th>Servis ID </th>
                              <th>Datum Opravy</th>
                              <th>Naklady</th>
                           </tr>`;
        table.innerHTML = tableHeader; 
    
        content.forEach((element) => {
            let row = `<tr>
                          <td>${element.ZaznamID}</td>
                          <td>${element.VozidloID}</td>
                          <td>${element.ServisID}</td>
                          <td>${element.DatumOpravy}</td>
                          <td>${element.Naklady}</td>
                       </tr>`;
            table.innerHTML += row; 
        });
        table.style.display = 'table'; 
    }
}

class Servisy{
    
    constructor(array){
        this.array = array
    }

    async update(arrayOfDivs, table, backButton){
        let url = 'http://localhost:3000/data';
        let respond = await addRespond(url);
        this.array = respond.Servisy;
        arrayOfDivs.forEach(element => {
            element.style.display = 'none'
        });
        table.innerHTML = ''; 
        backButton.style.display = 'block'
        let content = this.array;
        let tableHeader = `<tr>
                              <th>Servis ID </th>
                              <th>Nazov Servisu</th>
                              <th>Adresa</th>
                           </tr>`;
        table.innerHTML = tableHeader; 
    
        content.forEach((element) => {
            let row = `<tr>
                          <td>${element.ServisID}</td>
                          <td>${element.NazovServisu}</td>
                          <td>${element.Adresa}</td>
                       </tr>`;
            table.innerHTML += row; 
        });
        table.style.display = 'table'; 
    }
}

class Zamestnanci{
    constructor(array){
        this.array = array
    }

    async update(arrayOfDivs, backButton, table){
        let url = 'http://localhost:3000/data';
        let respond = await addRespond(url);
        this.array = respond.Zamestnanci;
        arrayOfDivs.forEach(element => {
            element.style.display = 'none'
        });
        table.innerHTML = ''; 
        backButton.style.display = 'block'
        let content = this.array;
        let tableHeader = `<tr>
                              <th>Zamestnanec ID</th>
                              <th>Meno</th>
                              <th>Kontaktné Udaje</th>
                              <th>Schopnosti</th>
                              <th>Opravnenia</th>
                           </tr>`;
        table.innerHTML = tableHeader; 
    
        content.forEach((element) => {
            let row = `<tr>
                          <td>${element.ZamestnanecID}</td>
                          <td>${element.Meno}</td>
                          <td>${element.KontaktnéUdaje}</td>
                          <td>${element.Schopnosti}</td>
                          <td>${element.Opravnenia}</td>
                       </tr>`;
            table.innerHTML += row; 
        });
        table.style.display = 'table'; 
    }
}

class PriradenieVozidla{
    constructor(array){
        this.array = array
    }

    async update(arrayOfDivs, backButton, table){
        let url = 'http://localhost:3000/data';
        let respond = await addRespond(url);
        this.array = respond.PriradenieVozidla;
        arrayOfDivs.forEach(element => {
            element.style.display = 'none'
        });
        table.innerHTML = ''; 
        backButton.style.display = 'block'
        let content = this.array;
        let tableHeader = `<tr>
                              <th>Priradenie ID</th>
                              <th>Vozidlo ID</th>
                              <th>Zamestnanec ID</th>
                           </tr>`;
        table.innerHTML = tableHeader; 
    
        content.forEach((element) => {
            let row = `<tr>
                          <td>${element.PriradenieID}</td>
                          <td>${element.VozidloID}</td>
                          <td>${element.ZamestnanecID}</td>
                       </tr>`;
            table.innerHTML += row; 
        });
        table.style.display = 'table'; 
    }
}





document.addEventListener('DOMContentLoaded', async function(){
   let url = 'http://localhost:3000/data';
    let respond = await addRespond(url);
    let table = document.querySelector('table') 
    let backButton = document.querySelector('.backButton')
    let formAddVozidlo = document.querySelector('.addVozidlo')
    let formDeleteVozidlo = document.querySelector('.deleteVozidlo')
    let vozidlaDiv = document.createElement('div');
    let servisneZaznamyDiv = document.createElement('div');
    let servisyDiv = document.createElement('div');
    let zamestnanciDiv = document.createElement('div');
    let priradenieVozidlaDiv = document.createElement('div');
    let cestujuciDiv = document.createElement('div');
    let rezervacieDiv = document.createElement('div');
    let addVozidloButton = document.querySelector('.addVozidloButton')
    let deleteVozidloButton = document.querySelector('.deleteVozidloButton')
    let showButtonAside = document.querySelector('.show') 
    const aside = document.querySelector('aside')
    const addZamestnanecButton = document.getElementById('addZamestnanecButton')
    const deleteZamestnanecButton = document.getElementById('deleteZamestnanecButton')
    const addServisButton = document.getElementById('addServisButton')
    const deleteServisButton = document.getElementById('deleteServisButton')
    const submitZamestnanec = document.querySelector('.submitZamestnanec')
    const submitServis = document.querySelector('.submitServis')
    let addCestujuciButton = document.querySelector('.addCestujuciButton')
    let deleteCestujuciButton = document.querySelector('.deleteCestujuciButton')
    let addRezervaciaButton = document.querySelector('.addRezervaciaButton')
    let deleteRezervaciaButton = document.querySelector('.deleteRezervaciaButton')
    let addCestujuciForm = document.querySelector('.addCestujuciForm')
    let deleteCestujuciForm = document.querySelector('.deleteCestujuciForm')
    let addRezervaciaForm = document.querySelector('.addRezervaciaForm')
    let deleteRezervaciaForm = document.querySelector('.deleteRezervaciaForm')
    let addCestujuciB = document.querySelector('.addCestujuciB')
    let deleteCestujuciB = document.querySelector('.deleteCestujuciB')
    let addRezervaciaB = document.querySelector('.addRezervaciaB')
    let deleteRezervaciaB = document.querySelector('.deleteRezervaciaB')
    let bodyMain = document.querySelector('body')
    let viewReservationsButton = document.querySelector('.viewReservationsButton')
    viewReservationsButton.style.display = 'none'
    const addZamestnanecForm = document.querySelector('.addZamestnanec') 
    const addServisForm = document.querySelector('.addServis')
   

    const deleteZamestnanecForm = document.querySelector('.deleteZmestnanec') 
    const deleteServisForm = document.querySelector('.deleteServis')
   
    const deleteZmestnanecB = document.querySelector('.deleteZmestnanecB')
    const deleteServisB = document.querySelector('.deleteServisB')


    let idVyrobcaCount = document.querySelector('#vyrobcaCount')
    let idYearCount = document.querySelector('#yearCount')
    let idServisyCount = document.querySelector('#servisyCount')
    let idZamestnanecCount = document.querySelector('#zamestnanecCount')


    let buttonVyrobcaCount = document.querySelector('.vyrobcaCount')
    let buttonYearCount = document.querySelector('.yearCount')
    let buttonServisyCount = document.querySelector('.servisyCount')
    let buttonZamestnanecCount = document.querySelector('.zamestnanecCount')
    

    let vozidla = new Vozidla(respond.Vozidla);
    let servisneZaznamy = new ServisneZaznamy(respond.ServisneZaznamy)
    let servisy = new Servisy(respond.Servisy);
    let zamestnanci = new Zamestnanci(respond.Zamestnanci);
    let priradenieVozidla = new PriradenieVozidla(respond.PriradenieVozidla)
    let cestujuci = new Cestujuci(respond.Cestujuci);
    let rezervacie = new Rezervacie(respond.Rezervacie)


    



   

    let flexContainer = document.querySelector('.container')
    
   
 
   let arrayOfDivs = [vozidlaDiv,servisneZaznamyDiv, servisyDiv ,zamestnanciDiv, priradenieVozidlaDiv, cestujuciDiv, rezervacieDiv];

    let selectButton = document.querySelector('.select');
   
    addEventListeners();

    addDataFromForm();
   
    deleteDataFromForm();
    







    function addEventListeners(){
        showAside();
        hideAside();
        searchByVehicle();
        searchByManufacturer();
        yearEvent();
        searchByService();
       
        // manufacturerEvent();
        searchByEmployee();
        


        buttonVyrobcaCount.addEventListener('click', function(){
            idVyrobcaCount.style.display = 'block';
            idYearCount.style.display = 'none';
            idServisyCount.style.display = 'none';
            idZamestnanecCount.style.display = 'none';
            
        })
        buttonServisyCount.addEventListener('click', function(){
            idServisyCount.style.display = 'block';
            idYearCount.style.display = 'none';
            idZamestnanecCount.style.display = 'none';
            idVyrobcaCount.style.display = 'none';
            
        })

        buttonYearCount.addEventListener('click', function(){
            idYearCount.style.display = 'block';
            idZamestnanecCount.style.display = 'none';
            idServisyCount.style.display = 'none';
            idVyrobcaCount.style.display = 'none';
            
        })

        buttonZamestnanecCount.addEventListener('click', function(){
            idZamestnanecCount.style.display = 'block';
            idYearCount.style.display = 'none';
            idServisyCount.style.display = 'none';
            idVyrobcaCount.style.display = 'none';
        })



        addCestujuciB.addEventListener('click', function(e){
            e.preventDefault();
            addCestujuciForm.style.display = 'none'
            addCestujuci();
            addCestujuciForm.reset();
        })

        deleteCestujuciB.addEventListener('click', function(e){
           
            e.preventDefault();
            deleteCestujuciForm.style.display = 'none'
            deleteCestujuci();
            deleteCestujuciForm.reset();
        })

        addRezervaciaB.addEventListener('click', function(e){
            e.preventDefault();
            addRezervaciaForm.style.display = 'none'
            addRezervacia();
            addRezervaciaForm.reset()
        })

        deleteRezervaciaB.addEventListener('click', function(e){
           
            e.preventDefault();
            deleteRezervaciaForm.style.display = 'none'
            deleteRezervacia();
            deleteRezervaciaForm.reset();
        })

        deleteVozidloButton.addEventListener('click', function(){
            formDeleteVozidlo.style.display = 'block'
            table.style.display = 'none'
            aside.style.display = 'none'
            formAddVozidlo.style.display = 'none'
            addVozidloButton.style.display = 'none'
            deleteVozidloButton.style.display = 'none'
            showButtonAside.style.display = 'none'
        })
        

        document.querySelector('.viewReservationsButton').addEventListener('click', function() {
            fetchAllVehiclesWithReservations();
        });
        


        addVozidloButton.addEventListener('click', function(){
            formAddVozidlo.style.display = 'block'
            table.style.display = 'none'
            aside.style.display = 'none'
            formDeleteVozidlo.style.display = 'none'
            addVozidloButton.style.display = 'none'
            deleteVozidloButton.style.display = 'none'
            showButtonAside.style.display = 'none'
        })

        backButton.addEventListener('click', function(){
            table.style.display = 'none'
            arrayOfDivs.forEach(element => {
                element.style.display = 'block'
            });
            viewReservationsButton.style.display = 'none'
            backButton.style.display = 'none'
            formAddVozidlo.style.display = 'none'
            formDeleteVozidlo.style.display = 'none'
            addVozidloButton.style.display = 'none'
            deleteVozidloButton.style.display = 'none'
            showButtonAside.style.display = 'none'
            aside.style.display = 'none'
            addServisButton.style.display = 'none'
            deleteServisButton.style.display = 'none'
            addZamestnanecButton.style.display = 'none'
            deleteZamestnanecButton.style.display = 'none'
            addZamestnanecForm.style.display = 'none'
            deleteZamestnanecForm.style.display = 'none'
            addServisForm.style.display = 'none'
            deleteServisForm.style.display='none'
            addCestujuciButton.style.display = 'none'
            deleteCestujuciButton.style.display = 'none'
            addRezervaciaButton.style.display = 'none'
            deleteRezervaciaButton.style.display = 'none'
            addRezervaciaForm.style.display = 'none'
            deleteRezervaciaForm.style.display = 'none'
            addCestujuciForm.style.display = 'none'
            deleteCestujuciForm.style.display = 'none'
          

        })

        vozidlaDiv.addEventListener('click', function() {
           

            vozidla.update(table,arrayOfDivs,addVozidloButton,deleteVozidloButton,backButton )
             viewReservationsButton.style.display = 'block'
        
            showButtonAside.style.display = 'block'
            
        });


        servisneZaznamyDiv.addEventListener('click', function(){
           servisneZaznamy.update(arrayOfDivs, backButton, table)
        })

        


        servisyDiv.addEventListener('click', function(){
           servisy.update(arrayOfDivs, table, backButton)
           addServisButton.style.display = 'block'
           deleteServisButton.style.display = 'block'

          
        })




        zamestnanciDiv.addEventListener('click', function(){
           zamestnanci.update(arrayOfDivs, backButton, table)
           addZamestnanecButton.style.display = 'block'
           deleteZamestnanecButton.style.display = 'block'
        })
        cestujuciDiv.addEventListener('click', function(){
            cestujuci.update(table,arrayOfDivs,backButton )
            addCestujuciButton.style.display = 'block'
            deleteCestujuciButton.style.display = 'block'
            addCestujuciButton.addEventListener('click', function(){
                addCestujuciForm.style.display = 'block'
                table.style.display = 'none'
                addCestujuciButton.style.display = 'none'
                deleteCestujuciButton.style.display = 'none'
            })
            deleteCestujuciButton.addEventListener('click', function(){
                deleteCestujuciForm.style.display = 'block'
                table.style.display = 'none'
                addCestujuciButton.style.display = 'none'
                deleteCestujuciButton.style.display = 'none'
            })
            
         })
         rezervacieDiv.addEventListener('click', function(){
            rezervacie.update(table,arrayOfDivs,backButton )
            addRezervaciaButton.style.display = 'block'
            deleteRezervaciaButton.style.display = 'block'

            addRezervaciaButton.addEventListener('click', function(){
                addRezervaciaForm.style.display = 'block'
                table.style.display = 'none'
                addRezervaciaButton.style.display = 'none'
                deleteRezervaciaButton.style.display = 'none'
            })

            deleteRezervaciaButton.addEventListener('click', function(){
                deleteRezervaciaForm.style.display = 'block'
                table.style.display = 'none'
                addRezervaciaButton.style.display = 'none'
                deleteRezervaciaButton.style.display = 'none'
            })
         })



        priradenieVozidlaDiv.addEventListener('click', function(){
          priradenieVozidla.update(arrayOfDivs, backButton, table)
        })


        if(addZamestnanecButton){

            addZamestnanecButton.addEventListener('click', function(){
                addZamestnanecForm.style.display = 'block'
                table.style.display = 'none'
                addZamestnanecButton.style.display = 'none'
                deleteZamestnanecButton.style.display = 'none'

                submitZamestnanec.addEventListener('click', function(e){
                    e.preventDefault();
                    addZamestnanecForm.style.display = 'none'
                    submitZamestnanecF();
                })
            })
        }

        if(addServisButton){

            addServisButton.addEventListener('click', function(){
                addServisForm.style.display = 'block'
                table.style.display = 'none'
                addServisButton.style.display = 'none'
                deleteServisButton.style.display = 'none'

                submitServis.addEventListener('click', function(e){
                    e.preventDefault();
                    addServisForm.style.display = 'none'
                    submitServisF();
                })
            })
        }

        if(deleteZamestnanecButton){

            deleteZamestnanecButton.addEventListener('click', function(){
                deleteZamestnanecForm.style.display = 'block'
                table.style.display = 'none'
                addZamestnanecButton.style.display = 'none'
                deleteZamestnanecButton.style.display = 'none'

                deleteZmestnanecB.addEventListener('click', function(e){
                    e.preventDefault();
                    alert('dasd')
                    deleteZamestnanecForm.style.display = 'none'
                    submitZamestnanecD();
                })
            })
        }

        if(deleteServisButton){

            deleteServisButton.addEventListener('click', function(){
                deleteServisForm.style.display = 'block'
                table.style.display = 'none'
                addServisButton.style.display = 'none'
                deleteServisButton.style.display = 'none'

                deleteServisB.addEventListener('click', function(e){
                    e.preventDefault();
                    deleteServisForm.style.display = 'none'
                    submitServisD();
                })
            })
        }

        selectButton.addEventListener('click', function(){
            selectButton.style.display = 'none'
            vozidlaDiv.className = 'div1'
            servisneZaznamyDiv.className = 'div2'
            servisyDiv.className = 'div3'
            zamestnanciDiv.className = 'div4'
            priradenieVozidlaDiv.className = 'div5'
            cestujuciDiv.className = 'div6'
            rezervacieDiv.className = 'div7'
            bodyMain.style.background = `url('v1016-a-08.jpg')`
            viewReservationsButton.style.display = 'none'
            vozidlaDiv.textContent = 'Vozidla'
            servisneZaznamyDiv.textContent = 'Servisne Zaznamy'
            servisyDiv.textContent = 'Servisy'
            zamestnanciDiv.textContent = 'Zamestnanci'
            priradenieVozidlaDiv.textContent = 'Priradenie Vozidla'
            cestujuciDiv.textContent = 'Cestujuci'
            rezervacieDiv.textContent = 'Rezervacie'
    
    
            flexContainer.append(vozidlaDiv)
            flexContainer.append(servisneZaznamyDiv)
            flexContainer.append(servisyDiv)
            flexContainer.append(zamestnanciDiv)
            flexContainer.append(priradenieVozidlaDiv)
            flexContainer.append(cestujuciDiv)
            flexContainer.append(rezervacieDiv)
    
        })
    }



   
})
async function fetchAllVehiclesWithReservations() {
    try {
        const response = await fetch('http://localhost:3000/getAllVehiclesWithReservations');
        const vehiclesWithReservations = await response.json();
        if (vehiclesWithReservations.length > 0) {
            console.log(vehiclesWithReservations)
            updateVehicleReservationsDisplay(vehiclesWithReservations);
        } else {
            console.log('No vehicles or reservations found');
        }
    } catch (error) {
        console.error('Failed to fetch vehicles and reservations:', error);
    }
}

function updateVehicleReservationsDisplay(data) {
    const table = document.querySelector('table');
    let html = `<tr>
                    <th>Vozidlo ID</th>
                    <th>Typ</th>
                    <th>Vyrobca</th>
                    <th>Rok Vyroby</th>
                    <th>Registracne Cislo</th>
                    <th>Rezervacia ID</th>
                    <th>Datum Cas Od</th>
                    <th>Datum Cas Do</th>
                    <th>Cestujuci ID</th>
                </tr>`;

    data.forEach(item => {
        html += `<tr>
                     <td>${item.VozidloID}</td>
                     <td>${item.Typ}</td>
                     <td>${item.Vyrobca}</td>
                     <td>${item.RokVyroby}</td>
                     <td>${item.RegistracneCislo}</td>
                     <td>${item.RezervaciaID || 'N/A'}</td>
                     <td>${item.DatumCasOd || 'N/A'}</td>
                     <td>${item.DatumCasDo || 'N/A'}</td>
                     <td>${item.CestujuciID || 'N/A'}</td>
                 </tr>`;
    });

    table.innerHTML = html;
    document.body.appendChild(table);
}


async function addRespond(url) {
    try {
        let respond = await fetch(url);
        let resultRespond = await respond.json(); 

   
       console.log(resultRespond.Cestujuci)
       return resultRespond;
    } catch (error) {
        console.error('Error fetching the data:', error);
    }
}

function submitServisD() {
   
    let servisID = document.querySelector('#iddd').value; 

    const body = {
        servisID: parseInt(servisID) 
    };

    fetch('http://localhost:3000/deleteServis', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete service');
        }
        return response.json();
    })
    .then(() => {
        alert('Service deleted successfully');
        updateServisyTableD(); // Обновление таблицы сервисов
    })
    .catch(error => {
        // console.error('Error deleting service:', error);
        // alert('Error deleting service: ' + error.message);
    });
}
function updateServisyTableD() {
    let table = document.querySelector('table'); // Убедитесь, что это правильный селектор для вашей таблицы сервисов
    let backButton = document.querySelector('.backButton');
    let arrayOfDivs = [];

    // Создаем экземпляр класса для сервисов и вызываем метод обновления
    const servisy = new Servisy([]);
    servisy.update(arrayOfDivs, table, backButton);

    // Показываем таблицу и прячем форму удаления
    document.querySelector('.deleteServis').style.display = 'none';
    table.style.display = 'table';
    document.getElementById('addServisButton').style.display = 'block';
    document.getElementById('deleteServisButton').style.display = 'block';
}
function submitZamestnanecD() {
    // Получение ID сотрудника из формы
    let zamestnanecID = document.querySelector('#idd').value; // Убедитесь, что ID соответствует ID в вашем HTML

    const body = {
        zamestnanecID: parseInt(zamestnanecID) // Преобразование в число для безопасной передачи
    };

    fetch('http://localhost:3000/deleteZamestnanec', { // Убедитесь, что у вас правильный URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to delete employee');
        }
        return response.json();
    })
    .then(() => {
        alert('Employee deleted successfully');
        updateZamestnanciTableD(); // Обновление таблицы сотрудников
    })
    .catch(error => {
        // console.error('Error deleting employee:', error);
        // alert('Error deleting employee: ' + error.message);
    });
}

function submitServisF() {
    // Получение значений из формы
    let nazovServisu = document.querySelector('#p_NazovServisu').value;
    let adresa = document.querySelector('#p_Adresa').value;
    let vozidloID = document.querySelector('#p_VozidloID2').value;
    let datumOpravy = document.querySelector('#p_DatumOpravy').value;
    let naklady = document.querySelector('#p_Naklady').value;

    // Создаем объект для отправки на сервер
    const body = {
        nazovServisu: nazovServisu,
        adresa: adresa,
        vozidloID: vozidloID ? parseInt(vozidloID) : null, // Преобразование в число, если возможно
        datumOpravy: datumOpravy,
        naklady: parseFloat(naklady) // Преобразование строки в число
    };

    fetch('http://localhost:3000/addServis', { // Убедитесь, что у вас правильный URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(data => {
        alert('Service added/updated successfully');
        if (data) {
            alert('Service added/updated successfully');
            updateServisyTable(); 
        } else {
            throw new Error('Failed to add/update service');
        }
    })
    .catch(error => {
        // console.error('Error adding/updating service:', error);
        // alert('Error adding/updating service: ' + error.message);
    });
}

// Функция для обновления таблицы сервисов
function updateServisyTable() {
    let table = document.querySelector('table'); // Убедитесь, что это правильный селектор для вашей таблицы сервисов
    let backButton = document.querySelector('.backButton');
    let arrayOfDivs = [];

    // Создаем экземпляр класса для сервисов и вызываем метод обновления
    const servisy = new Servisy([]);
    servisy.update(arrayOfDivs, table, backButton);

    // Показываем таблицу и прячем форму добавления
    document.querySelector('.addServis').style.display = 'none';
    table.style.display = 'table';
    document.getElementById('addServisButton').style.display = 'block';
    document.getElementById('deleteServisButton').style.display = 'block';
}

function submitZamestnanecF() {
    // Получение значений из формы
    let menoInput = document.querySelector('#p_meno').value;
    let kont = document.querySelector('#p_KontaktneUdaje').value;
    let sch = document.querySelector('#p_Schopnosti').value;
    let opr = document.querySelector('#p_Opravnenia').value;
    let vId = document.querySelector('#p_VozidloID').value;

    const body = {
        meno: menoInput,
        kontaktnéUdaje: kont,
        schopnosti: sch,
        opravnenia: opr,
        vozidloID: vId ? parseInt(vId) : null // Преобразование в число или null, если пусто
    };

    fetch('http://localhost:3000/addZamestnanec', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(data => {
        if (data) {
            // После успешного добавления обновляем таблицу сотрудников
            updateZamestnanciTable();
        } else {
            throw new Error('Failed to add new employee');
        }
    })
    .catch(error => {
        // console.error('Error adding employee:', error);
        // alert('Error adding employee: ' + error.message);
    });
}
function updateZamestnanciTableD() {
    let table = document.querySelector('table'); // Убедитесь, что это правильный селектор для вашей таблицы сотрудников
    let backButton = document.querySelector('.backButton');
    let arrayOfDivs = [];

    // Создаем экземпляр класса для сотрудников и вызываем метод обновления
    const zamestnanci = new Zamestnanci([]);
    zamestnanci.update(arrayOfDivs, backButton, table);

    // Показываем таблицу и прячем форму удаления
    document.querySelector('.deleteZmestnanec').style.display = 'none';
    table.style.display = 'table';
    document.getElementById('addZamestnanecButton').style.display = 'block';
    document.getElementById('deleteZamestnanecButton').style.display = 'block';
}
function updateZamestnanciTable() {
    // Скрываем форму и показываем таблицу
    document.querySelector('.addZamestnanec').style.display = 'none';
    const table = document.querySelector('table'); // Убедитесь, что это правильный селектор для вашей таблицы сотрудников
    const backButton = document.querySelector('.backButton'); // Кнопка "Назад"
    let arrayOfDivs = []; // Массив divs, если нужно скрыть другие элементы

    // Создаем экземпляр класса для сотрудников и вызываем метод обновления
    const zamestnanci = new Zamestnanci([]);
    zamestnanci.update(arrayOfDivs, backButton, table);

    // Возвращаем видимость кнопок, если это необходимо
    document.querySelector('.addZamestnanecButton').style.display = 'block';
    document.querySelector('.deleteZamestnanecButton').style.display = 'block';
}

// Обновление таблицы с данными о сотрудниках
function updateTableWithData(data, table) {
    table.innerHTML = '';
    let tableHeader = `<tr>
                           <th>Zamestnanec ID</th>
                           <th>Meno</th>
                           <th>Kontaktné Udaje</th>
                           <th>Schopnosti</th>
                           <th>Opravnenia</th>
                       </tr>`;
    table.innerHTML = tableHeader;

    data.forEach((item) => {
        let row = `<tr>
                       <td>${item.ZamestnanecID}</td>
                       <td>${item.Meno}</td>
                       <td>${item.KontaktnéUdaje}</td>
                       <td>${item.Schopnosti}</td>
                       <td>${item.Opravnenia}</td>
                   </tr>`;
        table.innerHTML += row;
    });

    table.style.display = 'table';
}





// export {vozidlaUpdate}


