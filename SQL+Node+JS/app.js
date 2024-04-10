import { addDataFromForm, updateDisplay } from "./addDataForm.js"
import { deleteDataFromForm } from "./deleteDataForm.js"
class Vozidla{
    constructor(array){
        this.array = array
    }

    // update: function name(params) {
        
    // }
    
}

class ServisneZaznamy{
    constructor(array){
        this.array = array
    }
}

class Servisy{
    constructor(array){
        this.array = array
    }
}

class Zamestnanci{
    constructor(array){
        this.array = array
    }
}

class PriradenieVozidla{
    constructor(array){
        this.array = array
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
    let addVozidloButton = document.querySelector('.addVozidloButton')
    let deleteVozidloButton = document.querySelector('.deleteVozidloButton')



    let vozidla = new Vozidla(respond.Vozidla);
    let servisneZaznamy = new ServisneZaznamy(respond.ServisneZaznamy)
    let servisy = new Servisy(respond.Servisy);
    let zamestnanci = new Zamestnanci(respond.Zamestnanci);
    let priradenieVozidla = new PriradenieVozidla(respond.PriradenieVozidla)


    



   

    let flexContainer = document.querySelector('.container')
    
   let body = document.querySelector('body')
 
   let arrayOfDivs = [vozidlaDiv,servisneZaznamyDiv, servisyDiv ,zamestnanciDiv, priradenieVozidlaDiv];

    let selectButton = document.querySelector('.select');
   
    addEventListeners();

    addDataFromForm();
   
    deleteDataFromForm();
    





    function addEventListeners(){
        deleteVozidloButton.addEventListener('click', function(){
            formDeleteVozidlo.style.display = 'block'
            table.style.display = 'none'
        })
        
        addVozidloButton.addEventListener('click', function(){
            formAddVozidlo.style.display = 'block'
            table.style.display = 'none'
        })

        backButton.addEventListener('click', function(){
            table.style.display = 'none'
            arrayOfDivs.forEach(element => {
                element.style.display = 'block'
            });
            backButton.style.display = 'none'
        })

        vozidlaDiv.addEventListener('click', function() {
            arrayOfDivs.forEach(element => {
                element.style.display = 'none'
            });
            table.innerHTML = ''; 
            addVozidloButton.style.display = 'block'
            deleteVozidloButton.style.display = 'block'
        
            let content = vozidla.array;
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
            
        });


        servisneZaznamyDiv.addEventListener('click', function(){
            arrayOfDivs.forEach(element => {
                element.style.display = 'none'
            });
            table.innerHTML = ''; 
            backButton.style.display = 'block'
            let content = servisneZaznamy.array;
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
        })

        


        servisyDiv.addEventListener('click', function(){
            arrayOfDivs.forEach(element => {
                element.style.display = 'none'
            });
            table.innerHTML = ''; 
            backButton.style.display = 'block'
            let content = servisy.array;
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
        })




        zamestnanciDiv.addEventListener('click', function(){
            arrayOfDivs.forEach(element => {
                element.style.display = 'none'
            });
            table.innerHTML = ''; 
            backButton.style.display = 'block'
            let content = zamestnanci.array;
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
        })



        priradenieVozidlaDiv.addEventListener('click', function(){
            arrayOfDivs.forEach(element => {
                element.style.display = 'none'
            });
            table.innerHTML = ''; 
            backButton.style.display = 'block'
            let content = priradenieVozidla.array;
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
        })

        selectButton.addEventListener('click', function(){
            
            vozidlaDiv.className = 'div1'
            servisneZaznamyDiv.className = 'div2'
            servisyDiv.className = 'div3'
            zamestnanciDiv.className = 'div4'
            priradenieVozidlaDiv.className = 'div5'
    
    
            vozidlaDiv.textContent = 'Vozidla'
            servisneZaznamyDiv.textContent = 'Servisne Zaznamy'
            servisyDiv.textContent = 'Servisy'
            zamestnanciDiv.textContent = 'Zamestnanci'
            priradenieVozidlaDiv.textContent = 'Priradenie Vozidla'
    
    
            flexContainer.append(vozidlaDiv)
            flexContainer.append(servisneZaznamyDiv)
            flexContainer.append(servisyDiv)
            flexContainer.append(zamestnanciDiv)
            flexContainer.append(priradenieVozidlaDiv)
    
        })
    }



   
})


async function addRespond(url) {
    try {
        let respond = await fetch(url);
        let resultRespond = await respond.json(); 

   
       
       return resultRespond;
    } catch (error) {
        console.error('Error fetching the data:', error);
    }
}




