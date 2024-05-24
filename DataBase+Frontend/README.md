

# Project Documentation

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Class Descriptions](#class-descriptions)
- [Contributing](#contributing)
- [License](#license)

## Introduction
The project is a web application that allows users to manage data related to vehicles, employees, reservations, and more. It is designed to be an interactive and user-friendly interface for viewing, adding, and deleting records.

## Features
- Add, delete, and view records for vehicles, employees, passengers, and reservations.
- Display detailed tables with data fetched from a server.
- Interactive UI with buttons to switch between different forms and views.
- Fetch and display data from a server using asynchronous JavaScript (Fetch API).

## Installation
To get a local copy up and running, follow these steps:

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/your-repository.git
    ```

2. **Navigate to the project directory:**
    ```bash
    cd your-repository
    ```

3. **Open the `index.html` file in your preferred browser:**
    ```bash
    open index.html
    ```

## Usage
1. **Add a Vehicle, Employee, Passenger, or Reservation:**
   - Click the relevant "Add" button.
   - Fill in the required fields in the form.
   - Click "Submit" to add the record.

2. **Delete a Vehicle, Employee, Passenger, or Reservation:**
   - Click the relevant "Delete" button.
   - Fill in the required fields in the form.
   - Click "Submit" to delete the record.

3. **View Records:**
   - Click on any category (Vehicles, Employees, etc.) to view the records.
   - Use the back button to return to the main view.

## File Structure
```
your-repository/
├── index.html
├── styles.css
├── script.js
├── addDataForm.js
├── deleteDataForm.js
├── showAside.js
├── hideAside.js
├── yearEvent.js
├── manufacturerEvent.js
├── zamestnanecEvent.js
├── searchVehicles.js
├── servicesEvent.js
├── addCustujuci.js
├── addRezervacia.js
├── README.md
```

- `index.html`: The main HTML file containing the structure of the web page.
- `styles.css`: The CSS file for styling the web page.
- `script.js`: The JavaScript file for adding interactivity to the web page.
- `addDataForm.js`: JavaScript file for adding data from forms.
- `deleteDataForm.js`: JavaScript file for deleting data from forms.
- `showAside.js`: JavaScript file for showing the aside menu.
- `hideAside.js`: JavaScript file for hiding the aside menu.
- `yearEvent.js`: JavaScript file for handling year-related events.
- `manufacturerEvent.js`: JavaScript file for handling manufacturer-related events.
- `zamestnanecEvent.js`: JavaScript file for handling employee-related events.
- `searchVehicles.js`: JavaScript file for handling vehicle search events.
- `servicesEvent.js`: JavaScript file for handling service-related events.
- `addCustujuci.js`: JavaScript file for adding and deleting passengers.
- `addRezervacia.js`: JavaScript file for adding and deleting reservations.
- `README.md`: The documentation file you are currently reading.

## Class Descriptions

### `Cestujuci`
Handles the operations related to passengers.

#### Methods:
- `update(table, arrayOfDivs, backButton)`: Fetches and updates the passenger data in the table.

### `Rezervacie`
Handles the operations related to reservations.

#### Methods:
- `update(table, arrayOfDivs, backButton)`: Fetches and updates the reservation data in the table.

### `Vozidla`
Handles the operations related to vehicles.

#### Methods:
- `update(table, arrayOfDivs, addVozidloButton, deleteVozidloButton, backButton)`: Fetches and updates the vehicle data in the table.

### `ServisneZaznamy`
Handles the operations related to service records.

#### Methods:
- `update(arrayOfDivs, backButton, table)`: Fetches and updates the service record data in the table.

### `Servisy`
Handles the operations related to services.

#### Methods:
- `update(arrayOfDivs, table, backButton)`: Fetches and updates the service data in the table.

### `Zamestnanci`
Handles the operations related to employees.

#### Methods:
- `update(arrayOfDivs, backButton, table)`: Fetches and updates the employee data in the table.

### `PriradenieVozidla`
Handles the operations related to vehicle assignments.

#### Methods:
- `update(arrayOfDivs, backButton, table)`: Fetches and updates the vehicle assignment data in the table.

## Contributing
Contributions are welcome! Here are some ways you can contribute:

1. **Report a Bug:**
   - Open an issue describing the bug.

2. **Suggest a Feature:**
   - Open an issue describing the feature you would like to add.

3. **Create a Pull Request:**
   - Fork the repository.
   - Create a new branch (`git checkout -b feature/YourFeature`).
   - Commit your changes (`git commit -m 'Add some feature'`).
   - Push to the branch (`git push origin feature/YourFeature`).
   - Open a pull request.

![image](https://github.com/opoiasnik/JS/assets/122808904/16891b19-c0cb-4840-be96-940421963a97)
![image](https://github.com/opoiasnik/JS/assets/122808904/27726c06-3a20-44b4-ac5c-0cd190429907)
![image](https://github.com/opoiasnik/JS/assets/122808904/ccb9875a-4162-4f2d-81f2-93902a2232b0)
![image](https://github.com/opoiasnik/JS/assets/122808904/a759340a-7ad1-49c2-94fd-8c4e015ceaa4)
![image](https://github.com/opoiasnik/JS/assets/122808904/5b01ebb3-c5b2-4d0b-8065-16a174f1f352)



