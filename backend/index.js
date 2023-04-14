import express, { json } from 'express'
import cors from 'cors'
import { createConnection } from 'mysql'
const app = express()

const db = createConnection({
    host: "localhost",
    user: "root",
    password: "teste123",
    database: "Clinicas_medicas",
})

app.use(express.json())
app.use(cors())

app.get('/clinicas', (req, res) => {
    
    let sql = "SELECT * FROM Clinica";

    db.query(sql, (error, result) => {
        if (error) return res.json(error);
        
        return res.status(200).json(result);
    })
})

app.get('/clinicas/ordena', (req, res) => {
    
    let sql = "SELECT * FROM Clinica ORDER BY NomeCli";

    db.query(sql, (error, result) => {
        if (error) return res.json(error);
        
        return res.status(200).json(result);
    })
})

app.get('/medicos', (req, res) => {
    
    let sql = "SELECT * FROM Medico";

    db.query(sql, (error, result) => {
        if (error) return res.json(error);
        
        return res.status(200).json(result);
    })
})

app.get('/medicos/ordena', (req, res) => {
    
    let sql = "SELECT * FROM Medico ORDER BY  NomeMed";

    db.query(sql, (error, result) => {
        if (error) return res.json(error);
        
        return res.status(200).json(result);
    })
})

app.get('/medicos/feminino', (req, res) => {
    
    let sql = "SELECT * FROM Medico WHERE Genero = 'F'";

    db.query(sql, (error, result) => {
        if (error) return res.json(error);
        
        return res.status(200).json(result);
    })
})

app.get('/medicos/masculino', (req, res) => {
    
    let sql = "SELECT * FROM Medico WHERE Genero = 'M'";

    db.query(sql, (error, result) => {
        if (error) return res.json(error);
        
        return res.status(200).json(result);
    })
})

app.get('/clinicaMedico', (req, res) => {
    
    let sql = "SELECT * FROM ClinicaMedico";

    db.query(sql, (error, result) => {
        if (error) return res.json(error);
        
        return res.status(200).json(result);
    })
})

app.get('/clinicaMedico/maior/quarenta', (req, res) => {
    
    let sql = "SELECT * FROM ClinicaMedico WHERE CargaHorariaSemanal >= '40'";

    db.query(sql, (error, result) => {
        if (error) return res.json(error);
        
        return res.status(200).json(result);
    })
})

app.get('/clinicaMedico/menor/quarenta', (req, res) => {
    
    let sql = "SELECT * FROM ClinicaMedico WHERE CargaHorariaSemanal < '40'";

    db.query(sql, (error, result) => {
        if (error) return res.json(error);
        
        return res.status(200).json(result);
    })
})

app.get('/clinicaMedico/mais/ano', (req, res) => {
    
    let sql = "SELECT * FROM ClinicaMedico WHERE DataIngresso <= DATE_SUB(NOW(), INTERVAL 1 YEAR);";

    db.query(sql, (error, result) => {
        if (error) return res.json(error);
        
        return res.status(200).json(result);
    })
})

app.get('/clinicaMedico/menos/ano', (req, res) => {
    
    let sql = "SELECT * FROM ClinicaMedico WHERE DataIngresso > DATE_SUB(NOW(), INTERVAL 1 YEAR);";

    db.query(sql, (error, result) => {
        if (error) return res.json(error);
        
        return res.status(200).json(result);
    })
})

app.post('/clinicas', (req, res) => {

    let sql = "INSERT INTO Clinica(`CodCli`, `NomeCli`, `Endereco`, `Telefone`, `Email`) VALUES (?)";

    const values = [
        req.body.CodCli,
        req.body.NomeCli,
        req.body.Endereco,
        req.body.Telefone,
        req.body.Email,
    ];

    db.query(sql, [values], (error) => {
        if(error) return res.json(error);

        return res.status(200).json("Clínica criada com sucesso!");
    })
})

app.post('/medicos', (req, res) => {

    let sql = "INSERT INTO Medico(`CodMed`, `NomeMed`, `Genero`, `Telefone`, `Email`) VALUES (?)";

    const values = [
        req.body.CodMed,
        req.body.NomeMed,
        req.body.Genero,
        req.body.Telefone,
        req.body.Email,
    ];

    db.query(sql, [values], (error) => {
        if(error) return res.json(error);

        return res.status(200).json("Médico criado com sucesso!");
    })
})

app.post('/clinicaMedico', (req, res) => {

    let sql = "INSERT INTO ClinicaMedico(`CodCli`, `CodMed`, `DataIngresso`, `CargaHorariaSemanal`) VALUES (?)";

    const values = [
        req.body.CodCli,
        req.body.CodMed,
        req.body.DataIngresso,
        req.body.CargaHorariaSemanal,
    ];

    db.query(sql, [values], (error) => {
        if(error) return res.json(error);

        return res.status(200).json("Clínica Médico criado com sucesso!");
    })
})

app.put('/clinicas/:CodCli', (req, res) => {

    let sql = "UPDATE Clinica SET `CodCli` = ?, `NomeCli` = ?, `Endereco` = ?, `Telefone` = ?, `Email` = ? WHERE `CodCli` = ?";

    const values = [
        req.body.CodCli,
        req.body.NomeCli,
        req.body.Endereco,
        req.body.Telefone,
        req.body.Email,
    ];

    db.query(sql, [...values, req.params.CodCli], (error) => {
        if(error) return res.json(error);

        return res.status(200).json("Clínica atualizada com sucesso!");
    })

})

app.put('/medicos/:CodMed', (req, res) => {

    let sql = "UPDATE Medico SET `CodMed` = ?, `NomeMed` = ?, `Genero` = ?, `Telefone` = ?, `Email` = ? WHERE `CodMed` = ?";

    const values = [
        req.body.CodMed,
        req.body.NomeMed,
        req.body.Genero,
        req.body.Telefone,
        req.body.Email,
    ];

    db.query(sql, [...values, req.params.CodMed], (error) => {
        if(error) return res.json(error);

        return res.status(200).json("Médico atualizado com sucesso!");
    })

})

app.put('/clinicaMedico/:CodCli/:CodMed', (req, res) => {

    let sql = "UPDATE ClinicaMedico SET `CodCli` = ?, `CodMed` = ?, `DataIngresso` = ?, `CargaHorariaSemanal` = ? WHERE `CodCli` = ? and `CodMed` = ?";

    const values = [
        req.body.CodCli,
        req.body.CodMed,
        req.body.DataIngresso,
        req.body.CargaHorariaSemanal,
    ];

    db.query(sql, [...values, req.params.CodCli, req.params.CodMed], (error) => {
        if(error) return res.json(error);

        return res.status(200).json("Clínica Médico atualizada com sucesso!");
    })

})

app.delete('/clinicas/:CodCli', (req, res) => {


    let sql = "DELETE FROM Clinica WHERE `CodCli` = ?";

    db.query(sql, [req.params.CodCli], (error) => {
        if (error) return res.json(error);

        return res.status(200).json("Clínica deletada com sucesso!");
    })

})

app.delete('/medicos/:CodMed', (req, res) => {


    let sql = "DELETE FROM Medico WHERE `CodMed` = ?";

    db.query(sql, [req.params.CodMed], (error) => {
        if (error) return res.json(error);

        return res.status(200).json("Médico deletada com sucesso!");
    })

})

app.delete('/clinicaMedico/:CodCli/:CodMed', (req, res) => {


    let sql = "DELETE FROM ClinicaMedico WHERE `CodCli` = ? and `CodMed` = ?";

    db.query(sql, [req.params.CodCli, req.params.CodMed], (error) => {
        if (error) return res.json(error);

        return res.status(200).json("Clínica Médico deletada com sucesso!");
    })

})

app.listen(8800)