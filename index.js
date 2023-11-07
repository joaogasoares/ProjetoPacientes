const express = require ('express');

const patientRouter = require('./routers/patientRouter');

const app = express.json();

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use('/patients', patientRouter)


// Sincroniza com a database
app.listen(3000, () =>
    console.log('Aplicação de exemplo pro projeto Otto na porta 3000!')
);