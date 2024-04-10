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

            res.status(200).json(data);
          });
        });
      });
    });
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



const PORT = 3000; // API Server Port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
