const express = require('express');
const bodyParser = require('body-parser');

const pool = require('../connect');

const patientRouter = express.Router();

patientRouter.use(bodyParser.json());

patientRouter.route('/')
.get(async (req,res,next) =>{
    try {
        const {rows} = await pool.query('SELECT * FROM patient')
        res.send(rows);
    }
    catch (error) {
        console.log(error);
    }
})
.post(async (req,res,next) =>{
    try {
        const { nombre, cedula, edad } = req.body;
        await pool.query(
            `INSERT INTO patient (nome, documento, idade) VALUES('${nome}','${documento}','${idade}')`
        );
        res.send('INDERIDO');
    }
    catch (error) {
        console.log(error);
    }
})
.put(async (req,res,next) =>{
    try {
        const { nome, documento } = req.body;
        await pool.query(`UPDATE patient SET nome = '${nome}' WHERE documento = '${cedula}'`)
        res.send('ATUALIZADO');
    }
    catch (error) {
        console.log(error);
    }
})
.delete(async (req,res,next) =>{
    try {
        const { documento } = req.body;
        await pool.query(`DELETE FROM patient WHERE documento = '${documento}'`);
    }
    catch (error) {
        console.log(error);
    }
});

module.exports = patientRouter;