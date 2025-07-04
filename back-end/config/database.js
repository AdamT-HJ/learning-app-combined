const mysql = require('mysql2/promise')

const dbPool = mysql.createPool({
    host:process.env.DB_HOST || 'localhost', //database host
    user: process.env.DB_USER || 'root', // this needs to be changed for production for security
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    port: process.env.DB_PORT //default port anyway, put including for future reference 
     // debug: true,           // Uncomment for detailed debugging output (useful for troubleshooting)
    // charset: 'utf8mb4'
});

// Connection test
dbPool.getConnection()
    .then(connection => {
        console.log('Successfully Connected to the Database pool!');
        connection.release();
    })
    .catch(err=>{
        console.error('Error connecting to Database pool:', err.message)
        process.exit(1);
    })

module.exports = dbPool;