const {Pool} = require('pg');

const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    password: 'example',
    database: 'postgres',
    port: 3000
});

module.exports = pool;