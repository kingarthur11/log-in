const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'arthur',
    database: 'booktest'
});

db.connect((err) => {
    if(!err)
    {
        console.log('connection done')
    }
    else
    {
        console.log('not yet connected')
    }
});

module.exports = db;