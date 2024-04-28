const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const dbConfig = {
  host: '147.232.47.244',
  user: 'Poiasnik',
  password: '408382838',
  database: 'Poiasnik'
};

const db = mysql.createConnection(dbConfig);

db.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the database.");
});

  app.get('/getAllVehiclesWithReservations', (req, res) => {
    const query = `
        SELECT V.VozidloID, V.Typ, V.Vyrobca, V.RokVyroby, V.RegistracneCislo, 
               R.RezervaciaID, R.DatumCasOd, R.DatumCasDo, R.CestujuciID
        FROM Vozidla V
        LEFT JOIN Rezervacie R ON V.VozidloID = R.VozidloID
        ORDER BY V.VozidloID, R.DatumCasOd;
    `;

    db.query(query, (error, results) => {
        if (error) {
            return res.status(500).send('Error on the server.');
        }
        if (results.length === 0) {
            return res.status(404).send('No vehicles found.');
        }
        res.status(200).json(results);
    });
});

  app.get('/data', (req, res) => {
    const data = {};
  
    db.query('SELECT * FROM Vozidla', (error, results) => {
      if (error) return res.status(500).send('Error on the server.');
      data.Vozidla = results;
  
      db.query('SELECT * FROM Servisy', (error, results) => {
        if (error) return res.status(500).send('Error on the server.');
        data.Servisy = results;
  
        db.query('SELECT * FROM Zamestnanci', (error, results) => {
          if (error) return res.status(500).send('Error on the server.');
          data.Zamestnanci = results;
  
          db.query('SELECT * FROM ServisneZaznamy', (error, results) => {
            if (error) return res.status(500).send('Error on the server.');
            data.ServisneZaznamy = results;
  
            db.query('SELECT * FROM PriradenieVozidla', (error, results) => {
              if (error) return res.status(500).send('Error on the server.');
              data.PriradenieVozidla = results;
  
              db.query('SELECT * FROM Cestujuci', (error, results) => {
                if (error) return res.status(500).send('Error on the server.');
                data.Cestujuci = results;
  
                db.query('SELECT * FROM Rezervacie', (error, results) => {
                  if (error) return res.status(500).send('Error on the server.');
                  data.Rezervacie = results;
  
                  res.status(200).json(data);
                });
              });
            });
          });
        });
      });
    });
  });
  
  app.post('/addCestujuci', (req, res) => {
    const { meno, kontaktneUdaje } = req.body;
  
    const query = 'CALL AddCestujuci(?, ?)';
  
    db.query(query, [meno, kontaktneUdaje], (error, results) => {
        if (error) {
            res.status(500).send('Error on the server: ' + error.message);
            return;
        }
        res.status(200).send('Cestujuci added successfully');
    });
  });
  app.post('/deleteCestujuci', (req, res) => {
    const { cestujuciID } = req.body;
  
    const query = 'CALL DeleteCestujuci(?)';
  
    db.query(query, [cestujuciID], (error, results) => {
        if (error) {
            res.status(500).send('Error on the server: ' + error.message);
            return;
        }
        res.status(200).send('Cestujuci deleted successfully');
    });
  });
  app.post('/addRezervacia', (req, res) => {
    const { vozidloID, cestujuciID, datumCasOd, datumCasDo } = req.body;
  
    const query = 'CALL AddRezervacia(?, ?, ?, ?)';
  
    db.query(query, [vozidloID, cestujuciID, datumCasOd, datumCasDo], (error, results) => {
        if (error) {
            res.status(500).send('Error on the server: ' + error.message);
            return;
        }
        res.status(200).send('Rezervacia added successfully');
    });
  });
  app.post('/deleteRezervacia', (req, res) => {
    const { rezervaciaID } = req.body;
  
    const query = 'CALL DeleteRezervacia(?)';
  
    db.query(query, [rezervaciaID], (error, results) => {
        if (error) {
            res.status(500).send('Error on the server: ' + error.message);
            return;
        }
        res.status(200).send('Rezervacia deleted successfully');
    });
  });
        

// Count and retrieve vehicles by manufacturer
// Count vehicles by manufacturer
app.post('/countVehiclesByManufacturer', (req, res) => {
  const { manufacturer } = req.body;

  const query = 'SELECT Vyrobca, COUNT(*) AS count FROM Vozidla WHERE Vyrobca = ? GROUP BY Vyrobca';

  db.query(query, [manufacturer], (error, results) => {
      if (error) {
          res.status(500).send('Error on the server.');
          return;
      }
      res.status(200).json(results);
  });
});

// Count vehicles by year
app.post('/countVehiclesByYear', (req, res) => {
  const { year } = req.body;

  const query = 'SELECT RokVyroby, COUNT(*) AS count FROM Vozidla WHERE RokVyroby = ? GROUP BY RokVyroby';

  db.query(query, [year], (error, results) => {
      if (error) {
          res.status(500).send('Error on the server.');
          return;
      }
      res.status(200).json(results);
  });
});

// Count vehicles by service
app.post('/countVehiclesByService', (req, res) => {
  const { serviceID } = req.body;

  const query = `
      SELECT S.NazovServisu, COUNT(*) AS count FROM Servisy S
      JOIN ServisneZaznamy SZ ON S.ServisID = SZ.ServisID
      WHERE S.ServisID = ?
      GROUP BY S.ServisID;
  `;

  db.query(query, [serviceID], (error, results) => {
      if (error) {
          res.status(500).send('Error on the server.');
          return;
      }
      res.status(200).json(results);
  });
});

// Count vehicles by employee
app.post('/countVehiclesByEmployee', (req, res) => {
  const { employeeID } = req.body;

  const query = `
      SELECT Z.Meno, COUNT(*) AS count FROM Zamestnanci Z
      JOIN PriradenieVozidla PV ON Z.ZamestnanecID = PV.ZamestnanecID
      WHERE Z.ZamestnanecID = ?
      GROUP BY Z.ZamestnanecID;
  `;

  db.query(query, [employeeID], (error, results) => {
      if (error) {
          res.status(500).send('Error on the server.');
          return;
      }
      res.status(200).json(results);
  });
});



app.post('/search', (req, res) => {
  const { year, manufacturer, employeeID } = req.body;

  let query = `
    SELECT V.*, Z.Meno, P.ZamestnanecID FROM Vozidla V
    JOIN PriradenieVozidla P ON V.VozidloID = P.VozidloID
    JOIN Zamestnanci Z ON P.ZamestnanecID = Z.ZamestnanecID
    WHERE 1=1
  `;

  const queryParams = [];

  if (year) {
    query += ` AND V.RokVyroby = ?`;
    queryParams.push(year);
  }

  if (manufacturer) {
    query += ` AND V.Vyrobca LIKE ?`;
    queryParams.push('%' + manufacturer + '%'); // Используем '%' для поиска совпадений в любой части строки
  }

  if (employeeID) {
    query += ` AND P.ZamestnanecID = ?`;
    queryParams.push(employeeID);
  }

  // Добавляем сортировку по VozidloID
  query += ` ORDER BY V.VozidloID`;

  db.query(query, queryParams, (error, results) => {
      if (error) {
          res.status(500).json({ error: 'Error on the server.' });
          return;
      }
      if (results.length === 0) {
          res.status(404).json({ error: 'No matching vehicles found.' });
      } else {
          res.status(200).json(results);
      }
  });
});

// Получение количества автомобилей по каждому производителю
app.post('/getAllManufacturersWithCounts', (req, res) => {
  const query = 'SELECT Vyrobca, COUNT(*) AS count FROM Vozidla GROUP BY Vyrobca';
  db.query(query, (error, results) => {
      if (error) return res.status(500).send('Error on the server.');
      res.status(200).json(results);
  });
});

// Получение количества автомобилей по каждому году выпуска
app.post('/getAllYearsWithCounts', (req, res) => {
  const query = 'SELECT RokVyroby, COUNT(*) AS count FROM Vozidla GROUP BY RokVyroby';
  db.query(query, (error, results) => {
      if (error) return res.status(500).send('Error on the server.');
      res.status(200).json(results);
  });
});
app.post('/addZamestnanec', (req, res) => {
  const { meno, kontaktnéUdaje, schopnosti, opravnenia, vozidloID } = req.body;

  const query = 'CALL AddZamestnanec(?,?,?,?,?)';

  db.query(query, [meno, kontaktnéUdaje, schopnosti, opravnenia, vozidloID], (error, results) => {
      if (error) {
          res.status(500).send('Error on the server: ' + error.message);
          return;
      }
      res.status(200).send('Zamestnanec added successfully');
  });
});

app.post('/addServis', (req, res) => {
  const { nazovServisu, adresa, vozidloID, datumOpravy, naklady } = req.body;

  const query = 'CALL AddServis(?,?,?,?,?)';

  db.query(query, [nazovServisu, adresa, vozidloID, datumOpravy, naklady], (error, results) => {
      if (error) {
          res.status(500).send('Error on the server: ' + error.message);
          return;
      }
      res.status(200).send('Servis added successfully');
  });
});

app.post('/deleteZamestnanec', (req, res) => {
  const { zamestnanecID } = req.body; // Получаем ID сотрудника из тела запроса

  const query = 'CALL DeleteZamestnanec(?)'; // Используем хранимую процедуру для удаления

  db.query(query, [zamestnanecID], (error, results) => {
      if (error) {
          res.status(500).send('Error on the server: ' + error.message);
          return;
      }
      res.status(200).send('Zamestnanec deleted successfully');
  });
});
app.post('/deleteServis', (req, res) => {
  const { servisID } = req.body; // Получаем ID сервиса из тела запроса

  const query = 'CALL DeleteServis(?)'; // Используем хранимую процедуру для удаления

  db.query(query, [servisID], (error, results) => {
      if (error) {
          res.status(500).send('Error on the server: ' + error.message);
          return;
      }
      res.status(200).send('Servis deleted successfully');
  });
});


// Получение количества автомобилей по каждому сервису
app.post('/getAllServicesWithCounts', (req, res) => {
  const query = `
      SELECT S.NazovServisu, COUNT(*) AS count FROM Servisy S
      JOIN ServisneZaznamy SZ ON S.ServisID = SZ.ServisID
      GROUP BY S.ServisID;
  `;
  db.query(query, (error, results) => {
      if (error) return res.status(500).send('Error on the server.');
      res.status(200).json(results);
  });
});

// Получение количества автомобилей по каждому работнику
app.post('/getAllEmployeesWithCounts', (req, res) => {
  const query = `
      SELECT Z.Meno, COUNT(*) AS count FROM Zamestnanci Z
      JOIN PriradenieVozidla PV ON Z.ZamestnanecID = PV.ZamestnanecID
      GROUP BY Z.ZamestnanecID;
  `;
  db.query(query, (error, results) => {
      if (error) return res.status(500).send('Error on the server.');
      res.status(200).json(results);
  });
});













app.post('/addVozidlo', (req, res) => {
  const { typ, vyrobca, rokVyroby, registracneCislo, technickaSpravnost, jazdneVlastnosti, aktualnaPoloha, zamestnanecID, servisID, datumOpravy, naklady } = req.body;

  const query = 'CALL InsertIntoVozidla(?,?,?,?,?,?,?,?,?,?,?)';
  
  db.query(query, [typ, vyrobca, rokVyroby, registracneCislo, technickaSpravnost, jazdneVlastnosti, aktualnaPoloha, zamestnanecID, servisID, datumOpravy, naklady], (error, results) => {
      if (error) {
          res.status(500).send('Error on the server.');
          return;
      }
      res.status(200).send('Vozidlo added successfully');
  });
});


app.post('/deleteVozidlo', (req, res) => {
  const { vID } = req.body; 

  const query = 'CALL DeleteFromVozidla(?)';
  
  db.query(query, [vID], (error, results) => {
      if (error) {
          res.status(500).send('Error on the server.');
          return;
      }
      res.status(200).send('Vozidlo deleted successfully');
  });
});



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
